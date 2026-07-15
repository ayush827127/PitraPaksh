import crypto from 'crypto'

const ADMIN_USERNAME = 'ADMIN'
const ADMIN_PASSWORD = 'Admin@2026'

export const ADMIN_COOKIE_NAME = 'admin_session'
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 8 // 8 hours

function timingSafeStringEqual(a, b) {
  const bufA = Buffer.from(String(a ?? ''))
  const bufB = Buffer.from(String(b ?? ''))
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

function sign(payload) {
  return crypto.createHmac('sha256', process.env.ADMIN_SESSION_SECRET).update(payload).digest('hex')
}

export function verifyAdminCredentials(username, password) {
  return timingSafeStringEqual(username, ADMIN_USERNAME) && timingSafeStringEqual(password, ADMIN_PASSWORD)
}

export function createAdminSessionToken() {
  const expiresAt = Date.now() + ADMIN_COOKIE_MAX_AGE * 1000
  const payload = `admin.${expiresAt}`
  return `${payload}.${sign(payload)}`
}

export function verifyAdminSessionToken(token) {
  if (!token) return false

  const parts = token.split('.')
  if (parts.length !== 3) return false

  const [role, expiresAtRaw, signature] = parts
  const payload = `${role}.${expiresAtRaw}`

  if (!timingSafeStringEqual(signature, sign(payload))) return false

  const expiresAt = Number(expiresAtRaw)
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false

  return role === 'admin'
}
