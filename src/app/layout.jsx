import { Inter, Lexend, Urbanist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Navbar } from "@/components/sections/Navbar";
import { FooterShell } from "@/components/sections/FooterShell";
import { getLandingData } from "@/lib/data";
import MobileStickyBar from "@/components/ui/MobileStickyBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("http://localhost:4200"),

  title: {
    default: "Lytechx – Forex IT Services for MT4/MT5",
    template: "%s · Lytechx Forex Tech",
  },

  description:
    "Lytechx is a forex technology company providing MT4/MT5 copy trading systems, indicator development, EA development, and EA rental solutions.",

  keywords: [
    "forex IT services",
    "mt4 copy trading",
    "mt5 copy trading",
    "custom indicator development",
    "expert advisor development",
    "trading signals",
    "EA rental service",
    "forex automation systems"
  ],

  applicationName: "Lytechx",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  openGraph: {
    type: "website",
    url: "http://localhost:4200",
    title: "Lytechx – Forex IT Services for MT4/MT5",
    description:
      "Build and scale your forex operations with copy trading systems, custom indicators, EAs, and rental bots from Lytechx.",
    siteName: "Lytechx Forex Tech",
    images: [
      {
        url: "http://localhost:4200/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "Lytechx Forex Tech – MT4/MT5 Copy Trading and EA Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lytechx – Forex IT Services",
    description:
      "Get MT4/MT5 copy trading, custom indicators, EA development, and EA rental services from Lytechx.",
    images: ["http://localhost:4200/images/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default async function RootLayout({ children }) {
  const { hero, footer } = await getLandingData();

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${lexend.variable} ${urbanist.variable} min-h-screen antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-[var(--brand-muted)]">
          <Navbar brand={hero.brand} links={hero.nav} />
          <main className="flex-1 bg-white">
            {children}
          </main>
          <FooterShell footer={footer} />
          <ScrollToTop />
          {/* <MobileStickyBar /> */}
        </div>
      </body>
    </html>
  );
}