import bcrypt from 'bcryptjs'
import connectDB from '../../../db/connect'
import User from '../../../models/User'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, password, phone } = body

    // ── Validate required fields ──────────────────────────
    if (!name || !email || !password) {
      return Response.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // ── Validate email format ─────────────────────────────
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // ── Validate password strength ────────────────────────
    if (password.length < 8) {
      return Response.json(
        { success: false, message: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    await connectDB()

    // ── Check for duplicate email ─────────────────────────
    const existingUser = await User.findOne({ email: email.toLowerCase().trim() })
    if (existingUser) {
      return Response.json(
        { success: false, message: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // ── Hash password ─────────────────────────────────────
    const hashedPassword = await bcrypt.hash(password, 12)

    // ── Create user ───────────────────────────────────────
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      phone: phone?.trim() || null,
    })

    // ── Return safe user object (no password) ─────────────
    return Response.json(
      {
        success: true,
        message: 'Account created successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          createdAt: user.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    // Mongoose duplicate key error
    if (error.code === 11000) {
      return Response.json(
        { success: false, message: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return Response.json(
        { success: false, message: messages[0] },
        { status: 400 }
      )
    }

    console.error('[register] Unexpected error:', error)
    return Response.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
