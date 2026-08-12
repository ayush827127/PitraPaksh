import { NextResponse } from 'next/server'
import connectDB from '../../../../lib/db/connect'

export async function GET() {
  const envPresence = {
    MONGODB_URI: !!process.env.MONGODB_URI,
    AUTH_SECRET: !!process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL || null,
    GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: !!process.env.GOOGLE_CLIENT_SECRET,
    RAZORPAY_KEY_ID: !!process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: !!process.env.RAZORPAY_KEY_SECRET,
    NEXT_PUBLIC_RAZORPAY_KEY_ID: !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    ADMIN_SESSION_SECRET: !!process.env.ADMIN_SESSION_SECRET,
    RAZORPAY_WEBHOOK_SECRET: !!process.env.RAZORPAY_WEBHOOK_SECRET,
    EMAIL_USER: !!process.env.EMAIL_USER,
    APP_PASSWORD: !!process.env.APP_PASSWORD,
    ADMIN_NOTIFY_EMAIL: !!process.env.ADMIN_NOTIFY_EMAIL,
  }

  let mongoStatus = 'not attempted'
  try {
    await connectDB()
    mongoStatus = 'connected'
  } catch (error) {
    mongoStatus = `failed: ${error.message}`
  }

  return NextResponse.json({ envPresence, mongoStatus, nodeEnv: process.env.NODE_ENV })
}
