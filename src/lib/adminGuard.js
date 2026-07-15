import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from './adminAuth'

export async function isAdminAuthenticated() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value
  return verifyAdminSessionToken(token)
}

export async function requireAdminApi() {
  const authed = await isAdminAuthenticated()
  if (!authed) {
    return NextResponse.json({ success: false, message: 'Admin authentication required' }, { status: 401 })
  }
  return null
}
