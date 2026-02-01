import type { Metadata } from "next";
import { Inter, Barlow, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { RadioPlayerProvider } from "@/contexts/RadioPlayerContext";
import RadioPlayer from "@/components/RadioPlayer";
import PWAInstallBanner from "@/components/PWAInstallBanner";
import InstallAppToast from "@/components/InstallAppToast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sintregua.es'),
  title: "Sin Tregua Radio | Est.2006",
  description:
    "Vive con nosotros la pasión, las aventuras y desventuras del decano del fútbol valenciano: el Levante UD. Noticias, análisis, podcast y radio en directo.",
  keywords: [
    "Levante UD",
    "Sin Tregua",
    "fútbol",
    "Valencia",
    "La Liga",
    "granotas",
    "noticias deportivas",
  ],
  authors: [{ name: "Sin Tregua Radio", url: "https://sintregua.es" }],
  creator: "Sin Tregua Radio",
  publisher: "AYATS 2022 SLU",
  applicationName: "Sin Tregua Radio",

  openGraph: {
    title: "Sin Tregua Radio | Est.2006",
    description:
      "Vive con nosotros la pasión del Levante UD. Noticias, análisis y radio en directo.",
    url: "https://sintregua.es",
    siteName: "Sin Tregua Radio",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sin Tregua Radio | Est.2006",
    description:
      "Vive con nosotros la pasión del Levante UD. Noticias, análisis y radio en directo.",
    site: "@SinTreguaRadio",
    creator: "@SinTreguaRadio",
  },

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

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${barlow.variable} ${playfair.variable}`}
    >
      <head>
        {/* Meta tags PWA */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#004D98" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* iOS Specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Sin Tregua" />

        {/* Format detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased bg-neutral-cream text-neutral-dark">
        <RadioPlayerProvider>
          {children}
          <RadioPlayer />
          <PWAInstallBanner />
          <InstallAppToast />
        </RadioPlayerProvider>
        <Analytics />
      </body>
    </html>
  );
}
