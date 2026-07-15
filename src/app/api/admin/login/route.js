import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {
  verifyAdminCredentials,
  createAdminSessionToken,
  ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_MAX_AGE,
} from '../../../../lib/adminAuth'

export async function POST(request) {
  const { username, password } = await request.json()

  if (!verifyAdminCredentials(username, password)) {
    return NextResponse.json({ success: false, message: 'Invalid admin credentials' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE_NAME, createAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: ADMIN_COOKIE_MAX_AGE,
    path: '/',
  })

  return NextResponse.json({ success: true })
}
