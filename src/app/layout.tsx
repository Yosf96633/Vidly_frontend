import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// 1. Import the fonts from Google
import { Space_Grotesk, Outfit } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/providers"; 
import { GlobalFeedback } from "../components/feedback/global-feedback";

// 2. Configure Space Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", // This defines the CSS variable name
  display: "swap",
});

// 3. Configure Outfit
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit", // This defines the CSS variable name
  display: "swap",
});

// SEO Metadata Configuration
export const metadata: Metadata = {
  // Basic Metadata
  metadataBase: new URL('https://getvidly.com'),
  title: {
    default: 'Vidly - AI-Powered YouTube Intelligence for Creators',
    template: '%s | Vidly' // This allows page-specific titles like "Features | Vidly"
  },
  description: 'Discover viral topics, analyze competitor comments, and validate video ideas with AI-powered YouTube intelligence. The unfair advantage for creators who refuse to guess.',
  keywords: [
    'YouTube analytics',
    'YouTube growth tool',
    'video content ideas',
    'YouTube SEO',
    'comment analysis',
    'viral video finder',
    'YouTube competitor analysis',
    'content creator tools',
    'YouTube AI assistant',
    'video idea generator',
    'YouTube trend analysis',
    'creator intelligence',
  ],
  authors: [{ name: 'Vidly Team' }],
  creator: 'Vidly',
  publisher: 'Vidly',
  
  // Canonical URL - Prevents duplicate content issues
  alternates: {
    canonical: 'https://getvidly.com',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getvidly.com',
    siteName: 'Vidly',
    title: 'Vidly - AI-Powered YouTube Intelligence for Creators',
    description: 'Your audience is telling you exactly what they want to watch next. Use AI to extract questions, demands, and hidden viral opportunities from the noise.',
    images: [
      {
        url: '/assets/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Vidly Dashboard - YouTube Analytics and Intelligence',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Vidly - AI-Powered YouTube Intelligence',
    description: 'Discover viral topics, analyze comments, and grow your YouTube channel 10x faster with creator-grade intelligence.',
    images: ['/assets/dashboard.png'],
    creator: '@Vidly', // Replace with your actual Twitter handle if you have one
  },

  // Robot Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification Tags (Add these when you have them)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   bing: 'your-bing-verification-code',
  // },

  // Additional Meta Tags
  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vidly",
    "alternateName": "Vidly",
    "url": "https://getvidly.com",
    "logo": "https://getvidly.com/favicon.ico",
    "description": "AI-powered YouTube intelligence platform for content creators",
    "foundingDate": "2025",
    "sameAs": [
      // Add your social media profiles here when available
      // "https://twitter.com/Vidly",
      // "https://linkedin.com/company/Vidly",
      // "https://youtube.com/@Vidly"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "vidly.officials@gmail.com",
      "url": "https://getvidly.com"
    }
  };

  // JSON-LD Structured Data for WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vidly",
    "url": "https://getvidly.com",
    "description": "AI-Powered YouTube Intelligence for Creators",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://getvidly.com/dashboard/viral-search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Global JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body
        // 4. Inject the font variables into the body className
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-white dark:bg-black selection:bg-[#B02E2B] selection:text-white font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <GlobalFeedback />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}