// Indian mobile numbers: exactly 10 digits, first digit 6-9.
export const MOBILE_REGEX = /^[6-9]\d{9}$/

export function isValidMobile(value) {
  return typeof value === 'string' && MOBILE_REGEX.test(value.trim())
}

// Strips anything that isn't a digit and caps length at 10 — use in onChange
// handlers so users physically cannot type letters/symbols into a mobile field.
export function sanitizeMobileInput(value) {
  return value.replace(/\D/g, '').slice(0, 10)
}
