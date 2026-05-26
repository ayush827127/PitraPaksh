import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import connectDB from './lib/db/connect'
import User from './lib/models/User'

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      credentials: {
        email:    {},
        password: {},
      },
      async authorize(credentials) {
        try {
          await connectDB()
          const user = await User.findOne({ email: credentials.email.toLowerCase().trim() }).select('+password')
          if (!user) return null
          const isMatch = await bcrypt.compare(credentials.password, user.password)
          if (!isMatch) return null
          return {
            id:    user._id.toString(),
            name:  user.name,
            email: user.email,
            role:  user.role,
          }
        } catch {
          return null
        }
      },
    }),
  ],

  session: { strategy: 'jwt' },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        try {
          await connectDB()
          const existing = await User.findOne({ email: user.email })
          if (!existing) {
            const randomPassword = crypto.randomBytes(32).toString('hex')
            const hashedPassword = await bcrypt.hash(randomPassword, 12)
            await User.create({
              name:       user.name,
              email:      user.email,
              password:   hashedPassword,
              isVerified: true,
              role:       'user',
            })
          }
          return true
        } catch (err) {
          console.error('[auth] Google signIn error:', err)
          return false
        }
      }
      return true
    },

    async jwt({ token, user, account }) {
      if (user && account) {
        token.id       = user.id
        token.role     = user.role ?? 'user'
        token.provider = account.provider
      }
      return token
    },

    async session({ session, token }) {
      session.user.id       = token.id
      session.user.role     = token.role
      session.user.provider = token.provider
      return session
    },
  },
})
