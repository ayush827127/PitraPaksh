# **Gaya Pind Daan & Puja Services Platform Requirements Documentation** 

_Phase 1: Gaya, Bihar | Focus on Pind Daan, Shraddh, and related rituals_ 

Project goal 

Build a trusted, mobile-first pilgrimage service platform for devotees visiting Gaya for Pind Daan, Shraddh Karma, Tarpan, Asthi Visarjan, priest booking, guidance, and future multi-city expansion. 

## **1. Business Context** 

The platform should start with a strong local identity in Gaya and later expand to other pilgrimage cities and states. The first release should prioritize trust, easy booking, date awareness, and service clarity for pilgrims arriving from India and abroad. 

## **2. Research Summary from Competitors** 

- Sri Mandir shows that trust, multi-language support, panchang/calendar tools, and a polished mobile experience are important. 

- Diyabati demonstrates that a simple package-based checkout, transparent pricing, and a fast booking CTA can work well. 

- Pitradev shows the value of package tiers, location-specific ritual pages, and strong explanations of sacred sites in Gaya. 

The best opportunity is to combine Sri Mandir’s trust-building experience, Diyabati’s package clarity, and Pitradev’s local Gaya focus into one platform built for conversion. 

## **3. Phase 1 Scope** 

Phase 1 should only cover Gaya and nearby ritual services. The goal is to launch quickly, build trust, and prove demand before expanding. 

- Target location: Gaya, Bihar. 

- Primary services: Pind Daan, Shraddh Karma, Tarpan, Asthi Visarjan, Pandit booking, online consultation, accommodation, transport, and guide support. 

- Primary audiences: local families, out-of-state pilgrims, and NRI / overseas families. 

- Primary channels: website, WhatsApp, call, and payment gateway. 

## **4. Recommended Sitemap** 

|**4. Recommended Sitemap**||
|---|---|
|Page|Purpose|
|Home|Hero section, trust message, top services, quick<br>booking,testimonials,calendar highlight.|
|About Us|Story, mission, team, local expertise, why Gaya is<br>sacred.|
|Services|All services listed with price, duration, inclusions, and<br>bookingbuttons.|
|Service Detail Pages|Onepageper service for SEO and conversion.|
|Calendar / Panchang|Tithi, Pitru Paksha dates, Amavasya, and auspicious<br>days.|
|Blog|SEO content, guides, FAQs, ritual education, travel<br>tips.|
|Gallery|Temple, ghat, ritual, team, and customer<br>images/videos.|
|Contact|Form, phone,WhatsApp,map,office hours.|
|FAQ|Pricing, process, timing, items needed, refund and<br>support.|
|Auth Pages|Login,register,OTP verification,bookinghistory.|
|Checkout|Cart,add-ons,date selection, payment,confirmation.|
|Admin Panel|Bookings, services, blog posts, gallery, testimonials,<br>users,reports.|



## **5. Core Functional Requirements** 

- Users must be able to browse services without login. 

- Users must be able to choose one service or multiple services. 

- Each service should have its own detail page with description, duration, inclusions, price, and booking CTA. 

- Calendar must support date selection based on rituals and tithi. 

- Booking flow should support guest checkout and registered users. 

- Payment should support Paytm first, with the option to add UPI/cards later. 

- Users should receive booking confirmation by email and WhatsApp. 

- Admin should manage services, prices, bookings, content, galleries, and enquiries without coding. 

## **6. Service Catalog for Phase 1** 

- Complete Pind Daan Ritual 

- Family Pind Daan 

- Individual Shraddh Karma 

- Tarpan Ritual 

- Asthi Visarjan 

- Pandit / Purohit Booking 

- Online Consultation 

- Puja Samagri Guidance 

- Hotel / Accommodation Support 

- Transportation Support 

- Local Guide Assistance 

- NRI / Overseas Pilgrim Support 

Each service page should include: overview, who it is for, required documents or details, step-by-step process, what is included, what is not included, estimated duration, starting price, related FAQs, and a booking button. 

## **7. Booking Flow** 

- Step 1: User opens a service page. 

- Step 2: User selects a date from the calendar. 

- Step 3: User enters name, mobile number, city/country, gotra, number of members, and special notes. 

- Step 4: User chooses add-ons such as transport, hotel, or guide. 

- Step 5: User pays a token amount or full amount. 

- Step 6: Booking confirmation is shown on screen and sent by WhatsApp/email. 

- Step 7: Admin reviews the booking and assigns a pandit or support staff. 

## **8. Admin Panel Requirements** 

- Dashboard with total bookings, pending bookings, completed bookings, and revenue summary. 

- Service manager for title, description, price, package inclusions, and images. 

- Booking manager with status updates and assignment notes. 

- Content manager for blog posts, FAQs, testimonials, banners, and gallery uploads. 

- User manager with booking history and support notes. 

- Calendar manager for blocked dates, festival dates, and special availability. 

- Export to CSV / Excel. 

- Role-based access for admin, operator, and content editor. 

## **9. SEO and Content Strategy** 

- Create SEO landing pages for Gaya Pind Daan, Pind Daan in Gaya, Shraddh in Gaya, Vishnupad Temple rituals, Falgu River rituals, and Pitru Paksha booking. 

- Publish blog posts explaining ritual significance, preparation tips, dates, travel guidance, and common questions. 

- Add internal links between blogs, service pages, and calendar pages. 

- Use schema markup for LocalBusiness, FAQ, and Service pages. 

- Keep all pages bilingual in Hindi and English at minimum. 

## **10. Suggested Brand Name Options** 

- PitraSeva 

- ShraddhSetu 

- MokshaPath 

- PitraMitra 

- DharmaSetu 

- GayaMoksha 

- SacredGaya 

- GayaPindDaan 

- PunyaPath 

- MokshaYatra 

- PitraYatra 

- GayaShraddh 

- PindSeva 

- DharmaDaan 

- PitraSaarthi 

Best three for brand scalability: PitraSeva, ShraddhSetu, and MokshaPath. 

Best three for local SEO: GayaPindDaan, GayaShraddh, and SacredGaya. 

## **11. Color Palette Recommendations** 

|Theme|Color Codes|Use|Feel|
|---|---|---|---|
|Spiritual Premium|Saffron #D97706,<br>Maroon #7F1D1D, Gold<br>#FBBF24, Cream<br>#FFF7ED|Best all-round option|Temple-like, premium,<br>trustworthy|
|Modern Spiritual|Orange #EA580C, Beige<br>#FAF3E0, Gold #C9A227,<br>Slate #1E293B|Good for modern UI|Warm and clean|
|Luxury Devotional|Navy #0F172A, Gold<br>#D4AF37,Ivory#FFFBEB|High-end brand direction|Elegant and calm|



## **12. Typography Recommendations** 

- Headings: Poppins, DM Sans, or Manrope. 

- Body: Inter, Source Sans 3, or Lato. 

- Hindi UI: Noto Sans Devanagari or Mukta. 

- Avoid decorative fonts for body text; use them only for logos or small accents. 

## **13. UI and Trust Requirements** 

- Use clear booking buttons on every service page. 

- Show temple, ghat, and pandit photographs only after verification. 

- Display testimonials, ratings, and service counts. 

- Include a floating WhatsApp button and click-to-call button. 

- Make the layout mobile-first and easy for older users. 

- Use readable spacing, strong contrast, and minimal clutter. 

## **14. Technical Stack Recommendation** 

- Frontend: Next.js with React and Javascript. 

- Styling: Tailwind CSS. 

- Database: Mongodb. 

- Authentication: NextAuth, Clerk, or custom social media login. 

- Payments: Paytm first, with Razorpay or Cashfree as a future option. 

- Media: Cloudinary or a similar image/video store. 

- Hosting: Vercel or another fast CDN-backed platform. 

## **15. Expansion Plan** 

After the first month or after the first stable launch, the same structure can be reused for other cities and states. The core model should be designed as a repeatable ritual-booking template, so adding Varanasi, Prayagraj, Haridwar, or other pilgrimage cities will be easier later. 

## **16. Final Recommendation** 

Build the first version as a local, trusted, high-conversion website for Gaya. Focus on ritual clarity, calendarbased booking, transparent prices, bilingual content, strong WhatsApp support, and a simple admin panel. That combination will make the platform feel more reliable than a normal brochure website. 

