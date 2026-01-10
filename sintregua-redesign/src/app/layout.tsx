import type { Metadata } from "next";
import { Inter, Barlow, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Sin Tregua Radio | Noticias del Levante UD",
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
  authors: [{ name: "Sin Tregua Radio" }],
  openGraph: {
    title: "Sin Tregua Radio | Noticias del Levante UD",
    description:
      "Vive con nosotros la pasión del Levante UD. Noticias, análisis y radio en directo.",
    url: "https://sintregua.es",
    siteName: "Sin Tregua Radio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sin Tregua Radio | Noticias del Levante UD",
    description:
      "Vive con nosotros la pasión del Levante UD. Noticias, análisis y radio en directo.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="font-body antialiased bg-neutral-cream text-neutral-dark">
        {children}
      </body>
    </html>
  );
}
