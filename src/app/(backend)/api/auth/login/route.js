import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import connectDB from '../../../db/connect'
import User from '../../../models/User'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // ── Validate required fields ──────────────────────────
    if (!email || !password) {
      return Response.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    await connectDB()

    // ── Find user and explicitly include password field ───
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password')

    if (!user) {
      return Response.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // ── Compare password ──────────────────────────────────
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return Response.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // ── Set session cookie ────────────────────────────────
    const cookieStore = await cookies()
    cookieStore.set('session_uid', user._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    // ── Return safe user object (no password) ─────────────
    return Response.json(
      {
        success: true,
        message: 'Logged in successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[login] Unexpected error:', error)
    return Response.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
