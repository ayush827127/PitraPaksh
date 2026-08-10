import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingContactButtons from "../components/layout/FloatingContactButtons";
import Providers from "../components/auth/Providers";
import { brand } from "../lib/data/siteData";


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PitraPaksh | Gaya Puja Services",
  description: "Trusted ancestral ritual planning, premium pilgrimage support, and curated Gaya puja services.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  description: brand.description,
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vishnupad Temple Road",
    addressLocality: "Gaya",
    addressRegion: "Bihar",
    postalCode: "823001",
    addressCountry: "IN",
  },
  areaServed: "Gaya, Bihar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContactButtons />
        </Providers>
      </body>
    </html>
  );
}
