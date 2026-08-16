export const brand = {
  name: 'PitraPaksh',
  tagline: 'Gaya Puja Services',
  description: 'Trusted ancestral ritual booking, compassionate guidance, and premium pilgrimage support in Gaya.',
  location: 'Vishnupad Temple Road, Gaya, Bihar 823001',
  phone: '+91 91997 70868',
  email: 'radhaenterprisesbr@gmail.com',
  whatsapp: 'https://wa.me/919199770868',
  // No API key needed — Google's classic query-based embed, safe for production use.
  mapEmbedUrl: 'https://www.google.com/maps?q=Vishnupad+Temple+Road,+Gaya,+Bihar+823001&output=embed',
  mapDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Vishnupad+Temple+Road,+Gaya,+Bihar+823001',
}

export const homeStats = [
  { value: '2,400+', label: 'rituals guided', accent: 'bg-saffron/10 text-saffron' },
  { value: '96%', label: 'repeat pilgrimage clients', accent: 'bg-maroon/10 text-maroon' },
  { value: '18', label: 'verified pandits on board', accent: 'bg-gold/10 text-ink' },
  { value: '24/7', label: 'assistance and booking support', accent: 'bg-cream text-maroon' },
]

export const services = [
  {
    slug: 'pind-daan',
    title: 'Pind Daan',
    eyebrow: 'Core ancestral ritual',
    category: 'Temple Rituals',
    summary: 'Perform the sacred Pind Daan at the Falgu River and Vishnupad Temple with guided rituals, priest coordination, and premium support.',
    description: 'A deeply personal rite for ancestral peace, this package includes priest coordination, sacred offering guidance, transport and temple assistance, and a respectful commemorative briefing for the whole family.',
    price: '₹12,500',
    duration: '4 - 6 hours',
    startingPoint: 'Gaya city / hotel pickup available',
    image: '/pinddaan1.jpeg',
    gallery: [
      '/pinddaan1.jpeg',
      '/pinddaan2.jpeg',
      '/pinddaan3.jpeg',
      '/pinddaan4.jpeg',
      '/pinddaan5.jpeg',
    ],
    color: 'from-saffron/90 to-maroon',
    features: [
      'Priest-led ritual and sankalpam',
      'Temple access coordination',
      'Family support and sacred guidance',
      'Printed itinerary and confirmation',
    ],
    idealFor: ['Families performing ancestral rites', 'NRI visitors planning a sacred pilgrimage'],
    process: [
      'Choose your preferred date and temple support window',
      'Share family details, gotra, and travel preferences',
      'Receive priest allocation and complete checklist',
      'Attend the ceremony with guided coordination on-site',
    ],
    inclusions: [
      'Pandit coordination',
      'Ritual materials and offerings',
      'Temple logistics support',
      'Booking confirmation and support',
    ],
  },
  {
    slug: 'shraddh-karma',
    title: 'Shraddh Karma',
    eyebrow: 'Family ceremony support',
    category: 'Family Rituals',
    summary: 'Comfort-led Shraddh Karma planning for trusted family observance with curated pandits, calming logistics, and expert guidance.',
    description: 'Ideal for pilgrims seeking a structured ceremonial experience, this service blends spiritual authenticity with elite hospitality, organized schedules, and careful family coordination.',
    price: '₹15,000',
    duration: '5 - 7 hours',
    startingPoint: 'Gaya / optional pickup from nearby stay',
    image: '/karma3.jpeg',
    gallery: [
      '/karma1.jpeg',
      '/karma3.jpeg',
      '/karma2.jpeg',
      '/pinddaan4.jpeg',
      '/pinddaan5.jpeg',
      // '/shraddh-timing-and-calendar-planning.png',
    ],
    color: 'from-maroon to-saffron',
    features: [
      'Custom ritual flow for family groups',
      'Expert pandit matching',
      'Travel and site coordination',
      'Guided pre-ceremony consultation',
    ],
    idealFor: ['Families planning shraddh at sacred sites', 'Senior pilgrims needing guided support'],
    process: [
      'Share ritual preferences and group size',
      'Select a convenient sacred timing window',
      'Get a confirmed pandit and flow plan',
      'Attend the ceremony with local host support',
    ],
    inclusions: [
      'Priest booking',
      'Ceremony planning',
      'Documentation support',
      'On-ground coordination',
    ],
  },
  {
    slug: 'tarpan',
    title: 'Tarpan',
    eyebrow: 'Water offering ritual',
    category: 'Holy Offerings',
    summary: 'Plan precise Tarpan rituals with thoughtful calendar insights, simple bookings, and compassionate guidance.',
    description: 'A suitable option for focused spiritual offerings during sacred windows, with helpful date planning, curated ritual support, and seamless booking assistance.',
    price: '₹8,500',
    duration: '2 - 4 hours',
    startingPoint: 'Gaya and surrounding sacred zones',
    image: '/tarpan.jpg',
    gallery: [
      '/tarpan.jpg',
      '/falgu-river-ritual-view.png',
      '/sacred-offering-setup.png',
      '/shraddh-timing-and-calendar-planning.png',
      '/what-to-expect-at-vishnupad-temple.png',
    ],
    color: 'from-gold to-saffron',
    features: [
      'Sacred timing consultation',
      'Expert ritual setup',
      'Local support during the ceremony',
      'Flexible scheduling options',
    ],
    idealFor: ['Pilgrims seeking guided water offerings', 'Large families coordinating multiple rites'],
    process: [
      'Choose the ritual date within the sacred window',
      'Receive timing guidance and ritual checklist',
      'Confirm the booking with priest support',
      'Complete the ceremony with local assistance',
    ],
    inclusions: [
      'Pandit assistance',
      'Offerings coordination',
      'Date planning support',
      'Guided confirmation',
    ],
  },
  {
    slug: 'asthi-visarjan',
    title: 'Asthi Visarjan',
    eyebrow: 'Final rites assistance',
    category: 'Final Rites',
    summary: 'Sensitive, respectful Asthi Visarjan coordination with logistics support, sacred flow, and dedicated attention.',
    description: 'For families seeking dignity and clarity during final rites, this package brings structured support, sacred oversight, and calm logistics for the complete process.',
    price: '₹18,000',
    duration: '6 - 8 hours',
    startingPoint: 'Gaya and river access points',
    image: '/asthi1.jpg',
    gallery: [
      '/asthi1.jpg',
      '/asthi2.jpg',
      '/asthi3.jpg',
      '/asthi4.jpg',
      '/asthi5.jpg',
    ],
    color: 'from-maroon to-gold',
    features: [
      'Compassion-led support',
      'Respectful site coordination',
      'Documentation and assistance',
      'Dedicated host guidance',
    ],
    idealFor: ['Families managing ash immersion rituals', 'Escort teams coordinating final rites'],
    process: [
      'Share rites, travel, and support needs',
      'Confirm sacred timing and logistics',
      'Coordinate transport and site access',
      'Complete the final immersion with guided dignity',
    ],
    inclusions: [
      'Temple and river coordination',
      'Pandit arrangement',
      'Travel support',
      'Careful ceremony guidance',
    ],
  },
  {
    slug: 'pandit-booking',
    title: 'Pandit Booking',
    eyebrow: 'Expert priest matching',
    category: 'Guide & Priest',
    summary: 'Book an experienced pandit for rituals, consultation, and spiritual guidance with verified credentials and flexible scheduling.',
    description: 'Choose from vetted pandits with deep ritual knowledge, clear communication, and flexible booking options for temple, home, or online support.',
    price: '₹4,500',
    duration: '1 - 3 hours',
    startingPoint: 'Online or in-person',
    image: '/pandit-booking.jpg',
    gallery: [
      '/pandit-booking.jpg',
      '/pandit-consultation-briefing.png',
      '/how-to-prepare-for-pind-daan.png',
      '/family-guidance-moment.png',
      '/temple-ceremony-preparation.png',
    ],
    color: 'from-saffron to-cream',
    features: [
      'Verified pandit profiles',
      'Custom scheduling',
      'Online consultation option',
      'Price-sensitive packages',
    ],
    idealFor: ['Families needing trusted priest support', 'Pilgrims organizing private rituals'],
    process: [
      'Select a pandit based on ritual style and availability',
      'Share requirements and timing',
      'Confirm booking and support details',
      'Receive expert-led ritual support',
    ],
    inclusions: [
      'Pandit booking confirmation',
      'Consultation support',
      'Ritual materials guidance',
      'Flexible rescheduling assistance',
    ],
  },
  {
    slug: 'online-consultation',
    title: 'Online Consultation',
    eyebrow: 'Remote spiritual guidance',
    category: 'Virtual Support',
    summary: 'Connect online with priests and spiritual guides for ritual planning, calendar guidance, and supportive counsel from anywhere.',
    description: 'Designed for international families and remote pilgrims, this package offers secure planning support, sacred calendar insights, and direct guidance from experienced priests.',
    price: '₹2,200',
    duration: '30 - 60 mins',
    startingPoint: 'Video or phone call',
    image: '/online-consultation.png',
    gallery: [
      '/online-consultation.png',
      '/remote-consultation-flow.png',
      '/pandit-consultation-briefing.png',
      '/shraddh-timing-and-calendar-planning.png',
      '/family-guidance-moment.png',
    ],
    color: 'from-gold to-maroon',
    features: [
      'Personalized consultation',
      'Date and ritual planning',
      'Remote family support',
      'Pre-booking guidance',
    ],
    idealFor: ['NRI families', 'Remote pilgrims planning ceremonial travel'],
    process: [
      'Book a consultation slot',
      'Share ritual concerns and preferences',
      'Get tailored support and itinerary advice',
      'Prepare for your pilgrimage with clarity',
    ],
    inclusions: [
      'Video consultation',
      'Calendar insights',
      'Ritual recommendations',
      'Follow-up notes',
    ],
  },
]

export const featuredServices = services.slice(0, 3)

export const testimonials = [
  {
    name: 'Aarav & Priya Sharma',
    location: 'Delhi, India',
    quote: 'Every detail was organized with calm professionalism. Our family felt supported from the first call to the final ritual.',
    rating: 5,
  },
  {
    name: 'Nikhil Menon',
    location: 'Singapore',
    quote: 'The online consultation was insightful and the temple coordination made a complex plan feel simple and respectful.',
    rating: 5,
  },
  {
    name: 'Sana & Rajeev Iyer',
    location: 'Bengaluru, India',
    quote: 'The guide support gave us confidence during a deeply emotional spiritual journey. The service felt premium and thoughtful.',
    rating: 5,
  },
]

export const galleryItems = [
  { title: 'Falgu River ritual view', image: '/falgu-river-ritual-view.png', category: 'Ritual View' },
  { title: 'Temple ceremony preparation', image: '/temple-ceremony-preparation.png', category: 'Temple Support' },
  { title: 'Pandit consultation briefing', image: '/pandit-consultation-briefing.png', category: 'Priest Guidance' },
  { title: 'Sacred offering setup', image: '/sacred-offering-setup.png', category: 'Ceremony Setup' },
  { title: 'Family guidance moment', image: '/family-guidance-moment.png', category: 'Family Ritual' },
  { title: 'Remote consultation flow', image: '/remote-consultation-flow.png', category: 'Virtual Support' },
]

export const faqCategories = [
  {
    category: 'Booking & Scheduling',
    items: [
      {
        question: 'How do I book a ritual service?',
        answer: 'Log in, select a service, choose your preferred date, and share your name and mobile number. Once payment is confirmed, your booking appears under "My Orders" and our team reaches out to coordinate priest and temple logistics.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least a few days ahead, especially during Pitru Paksha and other high-demand sacred windows, so we can confirm your preferred priest and temple time slot. Check the Calendar / Panchang page for upcoming planning windows.',
      },
      {
        question: 'Can I request a specific pandit?',
        answer: 'Yes. Our Pandit Booking service lets you share your requirements and ritual style preferences, and we match you with one of our verified pandits based on availability.',
      },
      {
        question: 'Can I change my preferred date after booking?',
        answer: 'Yes — contact us by phone or WhatsApp with your Order ID (visible on the "My Orders" page) as early as possible, and we’ll help you move to a new available date, subject to priest and temple availability.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    items: [
      {
        question: 'What services do you offer?',
        answer: 'Pind Daan, Shraddh Karma, Tarpan, Asthi Visarjan, Pandit Booking, and Online Consultation — each with its own inclusions, duration, and pricing on the Services page.',
      },
      {
        question: "What's the difference between Pind Daan, Shraddh Karma, and Tarpan?",
        answer: 'Pind Daan is the core ancestral rite performed at the Falgu River and Vishnupad Temple. Shraddh Karma is a broader family ceremony for ancestral observance. Tarpan is a focused water-offering ritual, often done during specific sacred windows. Each service page has a full description, process, and inclusions list.',
      },
      {
        question: "Can't travel to Gaya? Is remote support available?",
        answer: 'Yes — our Online Consultation service connects you with a priest by video or phone call for ritual planning, calendar guidance, and remote support, ideal for NRI families and pilgrims planning travel later.',
      },
      {
        question: 'Can I combine multiple services, like Pind Daan and Asthi Visarjan, in one visit?',
        answer: 'Yes, many families combine services during a single trip. Book each service separately or contact our team directly to coordinate a combined multi-day itinerary.',
      },
      {
        question: 'Are the listed prices final?',
        answer: 'Listed prices reflect our standard packages. If your family has a larger group or custom requirements, we’ll confirm any adjustments with you before you pay — nothing changes after payment without your agreement.',
      },
    ],
  },
  {
    category: 'Payments & Security',
    items: [
      {
        question: 'What payment methods can I use?',
        answer: 'All major cards, UPI, netbanking, and wallets, powered securely by Razorpay.',
      },
      {
        question: 'Is it safe to pay online here?',
        answer: 'Yes. Payments are processed directly by Razorpay, a PCI-DSS compliant payment gateway. We never see or store your card, UPI, or bank account details on our servers.',
      },
      {
        question: 'Will I get a receipt for my payment?',
        answer: 'Your payment and booking details are recorded under "My Orders" in your account immediately after a successful payment. If you need a formal receipt for your records, contact our support team with your Order ID.',
      },
      {
        question: 'My payment was deducted but the booking didn’t confirm — what do I do?',
        answer: 'Please don’t attempt the payment again. Contact us immediately with your payment reference number, and we’ll verify it against Razorpay’s records and resolve it promptly.',
      },
    ],
  },
  {
    category: 'Travel & On-Ground Logistics',
    items: [
      {
        question: 'Do you provide hotel pickup?',
        answer: 'Several services include optional hotel pickup within Gaya city — check the "starting point" detail on each service page. Let us know your stay location when booking so we can coordinate.',
      },
      {
        question: 'What should I bring to the ceremony?',
        answer: 'After booking, our team shares a checklist tailored to your ritual, which typically covers family/gotra details to prepare in advance and any items the priest requests. Comfortable, modest attire suitable for temple visits is recommended.',
      },
      {
        question: 'How long does a ritual take?',
        answer: 'It varies by service — from 30–60 minutes for an online consultation up to 6–8 hours for Asthi Visarjan. Exact durations are listed on each service page.',
      },
      {
        question: 'Is accommodation included in the package?',
        answer: 'Accommodation isn’t included by default, but our team can help coordinate nearby stays and local transport as part of your planning — just mention it when you book or reach out beforehand.',
      },
    ],
  },
  {
    category: 'Cancellations & Rescheduling',
    items: [
      {
        question: 'Can I cancel a booking?',
        answer: 'Yes — contact us by phone or WhatsApp with your Order ID as soon as your plans change, and our team will guide you through cancellation.',
      },
      {
        question: 'Can I reschedule instead of cancelling?',
        answer: 'In most cases, yes. We’ll do our best to move your booking to a new date, subject to priest and temple availability at that time.',
      },
      {
        question: 'What if I need to change plans at the last minute?',
        answer: 'Reach out to us right away — the earlier you let us know, the more options we have. Our team handles last-minute changes case by case, so talk to us before assuming anything is fixed.',
      },
    ],
  },
  {
    category: 'Account & Support',
    items: [
      {
        question: 'Do I need an account to book a service?',
        answer: 'Yes — sign up with email or Google login so we can confirm your booking and let you track it under "My Orders" anytime.',
      },
      {
        question: 'How do I check my booking status?',
        answer: 'Go to "My Orders" from your account menu — each booking shows a clear status: pending, paid, or failed.',
      },
      {
        question: 'Are your pandits verified?',
        answer: 'Yes — every pandit on our platform is vetted for credentials and ritual expertise before being onboarded, so you can book with confidence.',
      },
      {
        question: 'How can I reach your support team?',
        answer: 'Call or WhatsApp us anytime using the floating buttons on any page, use the contact form, or email us directly. We typically respond within 30 minutes during service hours.',
      },
      {
        question: 'Can families living outside India use this service?',
        answer: 'Absolutely. We regularly support NRI families through online consultations and remote booking coordination before they travel to Gaya.',
      },
    ],
  },
]

// Flat list — kept for anywhere a simple, ungrouped FAQ array is needed.
export const faqItems = faqCategories.flatMap((group) => group.items)

export const ritualCalendar = [
  { day: 'May 28', label: 'Pind Daan focus', note: 'High-demand sacred day', mood: 'bg-maroon text-white' },
  { day: 'Jun 02', label: 'Shraddh support window', note: 'Ideal for family visits', mood: 'bg-saffron text-white' },
  { day: 'Jun 11', label: 'Tarpan consultation slot', note: 'Best for early planning', mood: 'bg-gold text-ink' },
  { day: 'Jun 16', label: 'Pandit booking day', note: 'Premium priest availability', mood: 'bg-cream text-maroon border border-gold/30' },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}

// The traditional story behind why Gaya is considered uniquely significant for
// Pind Daan — presented as belief/tradition, not asserted as historical fact.
export const gayaStory = [
  {
    title: 'The legend of Gayasura',
    text: 'According to Hindu tradition, Gaya takes its name from the asura Gayasura, whose body was so pure after penance that anyone touching it attained moksha. To restrain this power responsibly, Lord Vishnu is believed to have placed his foot upon Gayasura and pressed him into the earth — the imprint of that footstep is what pilgrims venerate today at Vishnupad Temple. Vishnu is said to have blessed the site so that any ancestral rite performed here would carry lasting spiritual merit.',
  },
  {
    title: 'Rama, Sita, and the banks of the Falgu',
    text: 'The Ramayana describes Lord Rama travelling to Gaya with Sita and Lakshmana to perform Pind Daan for his father, King Dashrath. As the story is told, the men were delayed, and Sita — determined not to let the sacred moment pass — offered the pind daan herself using the sand of the Falgu River, with the river, a banyan tree, and a cow as her witnesses. This is one of the reasons Gaya\'s rituals are held to be complete and binding, even when performed by a single family member.',
  },
  {
    title: 'Why Gaya is considered unique',
    text: 'Ancestral rites (Shraddh) are traditionally performed at many sacred sites across India, often on a recurring basis. Gaya is regarded differently: tradition holds that a Pind Daan performed here, at the Falgu River and Vishnupad Temple, offers lasting peace to the ancestors\' souls without needing to be repeated elsewhere — which is why the town is often referred to with reverence as "Gayaji" by pilgrims.',
  },
]

// Framed as traditional belief within Hindu dharma — not a medical, legal, or
// financial claim of any kind.
export const pindDaanBenefits = [
  {
    title: 'Moksha for ancestors',
    description: 'Traditionally believed to help free departed souls from the cycle of rebirth and guide them toward lasting peace.',
  },
  {
    title: 'Relief from Pitru Dosha',
    description: 'In Vedic astrology, unresolved ancestral debt (Pitru Dosha) is associated with recurring obstacles in health, career, or family life. Pind Daan is the traditional remedy.',
  },
  {
    title: 'Fulfilling Pitru Rin',
    description: 'Hindu dharma describes a lifelong debt owed to one\'s ancestors (Pitru Rin). Performing this rite is considered a son or descendant\'s way of honoring that duty.',
  },
  {
    title: 'Family harmony and blessings',
    description: 'Many families report a sense of closure and renewed harmony after completing the rite — traditionally seen as a blessing carried forward by peaceful ancestors.',
  },
  {
    title: 'A one-time, lasting rite',
    description: 'Unlike Shraddh performed at other sacred sites, tradition holds that Pind Daan at Gaya need not be repeated in future years.',
  },
  {
    title: 'Emotional and spiritual closure',
    description: 'For many families, the ceremony offers a meaningful, structured way to grieve, honor a loved one\'s memory, and move forward together.',
  },
]

// Practical, stable geography — kept free of time-sensitive details like flight
// schedules or fares, which our concierge team confirms directly with families.
export const travelToGaya = [
  {
    mode: 'By Air',
    title: 'Gaya Airport (GAY)',
    description: 'Gaya has its own airport, about 7 km from the city centre and Vishnupad Temple. It runs domestic flights year-round and additional seasonal international flights (serving Buddhist pilgrims visiting nearby Bodh Gaya) during peak pilgrimage months.',
    tip: 'If direct flights to Gaya are limited for your dates, Patna\'s Jay Prakash Narayan International Airport is the nearest major alternative, roughly 100 km / 2–2.5 hours away by road.',
  },
  {
    mode: 'By Train',
    title: 'Gaya Junction',
    description: 'Gaya Junction is a major railway station on the Delhi–Kolkata Grand Chord line, with direct trains from Delhi, Kolkata, Patna, Varanasi, Mumbai, and most major cities — making rail one of the most convenient ways to reach Gaya.',
    tip: 'The station is close to the city centre, a short taxi or auto-rickshaw ride from Vishnupad Temple.',
  },
  {
    mode: 'By Road',
    title: 'National Highway 83',
    description: 'Gaya is well connected by road via NH83, roughly 100 km (2–2.5 hours) from Patna. Regular buses and taxis run between Gaya, Patna, and Bodh Gaya.',
    tip: 'Bodh Gaya is only about 13 km away, so many families combine both destinations in one trip.',
  },
]
