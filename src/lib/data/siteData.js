export const brand = {
  name: 'PitraPaksh',
  tagline: 'Gaya Puja Services',
  description: 'Trusted ancestral ritual booking, compassionate guidance, and premium pilgrimage support in Gaya.',
  location: 'Vishnupad Temple Road, Gaya, Bihar 823001',
  phone: '+91 91997 70868',
  email: 'vishnukumarnpsp@gmail.com',
  whatsapp: 'https://wa.me/919199770868',
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

export const faqItems = [
  {
    question: 'How do I book a ritual service?',
    answer: 'Select a service, choose a preferred date, and share your family details. Our team confirms priest availability and sends the complete itinerary.',
  },
  {
    question: 'Can I book online consultation from outside India?',
    answer: 'Yes. Remote consultations are available for pilgrims living abroad and for families planning travel before arrival.',
  },
  {
    question: 'Do you offer temple and transport coordination?',
    answer: 'Yes, local site coordination, temple logistics, and local transport support can be arranged as add-ons and custom support.',
  },
  {
    question: 'What payment options are available?',
    answer: 'We offer secure online booking with transparent pricing and support for later adjustments based on the selected ritual package.',
  },
]

export const ritualCalendar = [
  { day: 'May 28', label: 'Pind Daan focus', note: 'High-demand sacred day', mood: 'bg-maroon text-white' },
  { day: 'Jun 02', label: 'Shraddh support window', note: 'Ideal for family visits', mood: 'bg-saffron text-white' },
  { day: 'Jun 11', label: 'Tarpan consultation slot', note: 'Best for early planning', mood: 'bg-gold text-ink' },
  { day: 'Jun 16', label: 'Pandit booking day', note: 'Premium priest availability', mood: 'bg-cream text-maroon border border-gold/30' },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
