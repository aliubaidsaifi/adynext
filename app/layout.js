import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorFollower from "@/components/layout/CursorFollower";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://adynext.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adynext — Building Brands That Grow",
    template: "%s | Adynext",
  },
  description:
    "Adynext is a premium digital agency crafting websites, brands, and AI-powered growth systems for ambitious companies. Website development, UI/UX design, SEO, digital marketing, AI automation, and branding.",
  keywords: [
    "digital agency",
    "website development",
    "UI/UX design",
    "SEO agency",
    "digital marketing",
    "AI automation",
    "branding agency",
    "performance optimization",
    "mobile app development",
  ],
  authors: [{ name: "Adynext" }],
  creator: "Adynext",
  publisher: "Adynext",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icons/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Adynext",
    title: "Adynext — Building Brands That Grow",
    description:
      "A premium digital agency crafting websites, brands, and AI-powered growth systems for ambitious companies.",
    images: [
      {
        images: ["/images/og-image.webp"],
        width: 1200,
        height: 630,
        alt: "Adynext — Building Brands That Grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adynext — Building Brands That Grow",
    description:
      "A premium digital agency crafting websites, brands, and AI-powered growth systems for ambitious companies.",
    images: ["/images/og-image.svg"],
    creator: "@adynext",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adynext",
  description:
    "Premium digital agency offering website development, UI/UX design, SEO, digital marketing, AI automation, branding, performance optimization and mobile app development.",
  url: siteUrl,
  logo: `${siteUrl}/icons/icon-512.svg`,
  sameAs: [
    "https://linkedin.com",
    "https://instagram.com",
    "https://x.com",
    "https://dribbble.com",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-body antialiased">
        <Loader />
        <SmoothScroll>
          <CursorFollower />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
