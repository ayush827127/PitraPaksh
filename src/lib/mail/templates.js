import { brand } from '../data/siteData'

function layout(heading, bodyHtml) {
  return `
  <div style="background:#f7f1e6;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e8dcc0;">
      <div style="background:linear-gradient(135deg,#7a1f2b,#d97b2f);padding:24px 28px;">
        <p style="margin:0;color:#f7f1e6;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;">${brand.name}</p>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;">${heading}</h1>
      </div>
      <div style="padding:28px;color:#2a2118;font-size:14px;line-height:1.7;">
        ${bodyHtml}
      </div>
      <div style="padding:20px 28px;background:#f7f1e6;border-top:1px solid #e8dcc0;font-size:12px;color:#6b5f4d;">
        <p style="margin:0;">${brand.name} · ${brand.tagline}</p>
        <p style="margin:4px 0 0;">${brand.location}</p>
        <p style="margin:4px 0 0;">${brand.phone} · ${brand.email}</p>
      </div>
    </div>
  </div>`
}

function button(href, label) {
  return `<a href="${href}" style="display:inline-block;margin-top:16px;padding:10px 22px;background:#7a1f2b;color:#ffffff;text-decoration:none;border-radius:999px;font-size:13px;font-weight:600;">${label}</a>`
}

const siteUrl = process.env.AUTH_URL || 'http://localhost:3000'

// ---- Account ----

export function welcomeEmail({ name }) {
  return {
    subject: `Welcome to ${brand.name}, ${name}`,
    html: layout(
      'Welcome aboard',
      `<p>Namaste ${name},</p>
       <p>Your ${brand.name} account has been created successfully. You can now book sacred rituals, track your bookings, and receive guided support for your pilgrimage.</p>
       ${button(`${siteUrl}/services`, 'Browse services')}`
    ),
  }
}

export function loginAlertEmail({ name }) {
  const when = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
  return {
    subject: `New sign-in to your ${brand.name} account`,
    html: layout(
      'New sign-in detected',
      `<p>Hi ${name},</p>
       <p>Your ${brand.name} account was just signed in to on ${when} (IST).</p>
       <p>If this was you, no action is needed. If you don't recognize this activity, please contact us immediately at ${brand.email}.</p>`
    ),
  }
}

// ---- Contact form ----

export function contactUserConfirmationEmail({ name }) {
  return {
    subject: `We've received your message — ${brand.name}`,
    html: layout(
      'Message received',
      `<p>Namaste ${name},</p>
       <p>Thank you for reaching out to ${brand.name}. Our team has received your message and will get back to you shortly.</p>
       <p>For urgent queries, call us at ${brand.phone}.</p>`
    ),
  }
}

export function contactAdminAlertEmail({ name, email, mobile, serviceInterest, message }) {
  return {
    subject: `New contact form submission from ${name}`,
    html: layout(
      'New contact query',
      `<p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Mobile:</strong> ${mobile}</p>
       ${serviceInterest ? `<p><strong>Service interest:</strong> ${serviceInterest}</p>` : ''}
       <p><strong>Message:</strong></p>
       <p style="white-space:pre-wrap;background:#f7f1e6;padding:12px 16px;border-radius:12px;">${message}</p>
       ${button(`${siteUrl}/admin/queries`, 'Open admin panel')}`
    ),
  }
}

// ---- Orders / bookings ----

const ORDER_STATUS_COPY = {
  pending: {
    subject: 'Booking received — payment pending',
    heading: 'Booking received',
    message: 'We\'ve received your booking request. Please complete the payment to confirm your slot.',
  },
  paid: {
    subject: 'Payment confirmed — booking secured',
    heading: 'Payment confirmed',
    message: 'Your payment was successful and your ritual booking is now secured. Our team will reach out with further details.',
  },
  confirmed: {
    subject: 'Your booking has been confirmed',
    heading: 'Booking confirmed',
    message: 'Our team has reviewed and confirmed your ritual booking. We look forward to serving you.',
  },
  fulfilled: {
    subject: 'Your ritual has been completed',
    heading: 'Ritual completed',
    message: 'Thank you for trusting us with your sacred ritual. We hope the experience brought your family peace and blessings.',
  },
  rejected: {
    subject: 'Update on your booking',
    heading: 'Booking could not be accepted',
    message: 'We\'re sorry — we\'re unable to accept this booking at the moment. Please contact us so we can help you with alternate arrangements or a refund.',
  },
  failed: {
    subject: 'Payment unsuccessful',
    heading: 'Payment unsuccessful',
    message: 'Your payment did not go through and the booking was not completed. Please try again, or contact us if the amount was deducted.',
  },
  cancelled: {
    subject: 'Booking cancelled',
    heading: 'Booking cancelled',
    message: 'This booking has been cancelled. If you didn\'t request this or have questions, please reach out to us.',
  },
}

function orderDetailsBlock({ serviceTitle, preferredDate, amount, currency }) {
  const dateLabel = preferredDate
    ? new Date(preferredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : null
  return `
    <div style="margin-top:16px;padding:14px 18px;background:#f7f1e6;border-radius:12px;">
      <p style="margin:0;"><strong>Service:</strong> ${serviceTitle}</p>
      ${dateLabel ? `<p style="margin:6px 0 0;"><strong>Preferred date:</strong> ${dateLabel}</p>` : ''}
      ${amount ? `<p style="margin:6px 0 0;"><strong>Amount:</strong> ${currency || 'INR'} ${amount}</p>` : ''}
    </div>`
}

export function orderStatusEmail({ name, status, serviceTitle, preferredDate, amount, currency }) {
  const copy = ORDER_STATUS_COPY[status] ?? ORDER_STATUS_COPY.pending
  return {
    subject: copy.subject,
    html: layout(
      copy.heading,
      `<p>Namaste ${name},</p>
       <p>${copy.message}</p>
       ${orderDetailsBlock({ serviceTitle, preferredDate, amount, currency })}`
    ),
  }
}

export function orderAdminAlertEmail({ name, email, mobile, serviceTitle, preferredDate, amount, currency, status }) {
  const copy = ORDER_STATUS_COPY[status] ?? ORDER_STATUS_COPY.pending
  return {
    subject: `[Order ${status}] ${serviceTitle} — ${name}`,
    html: layout(
      `Order ${status}`,
      `<p><strong>Customer:</strong> ${name} (${email})</p>
       <p><strong>Mobile:</strong> ${mobile}</p>
       <p><strong>Status:</strong> ${status} — ${copy.heading}</p>
       ${orderDetailsBlock({ serviceTitle, preferredDate, amount, currency })}
       ${button(`${siteUrl}/admin/payments`, 'Open admin panel')}`
    ),
  }
}
