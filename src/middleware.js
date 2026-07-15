import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL('/', req.nextUrl.origin))
  }
})

export const config = {
  matcher: ['/account/:path*'],
}
