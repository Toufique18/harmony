import type { Metadata } from "next";
import { 
  Cormorant_Garamond, 
  Playfair_Display, 
  Montserrat 
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

// Playfair Display - Dramatic serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

// Montserrat - Clean sans-serif for UI elements
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Harmony | Home",
    template: "%s | Harmony"
  },
  description: "Discover where your Brand, Culture, and Operations are out of sync.",
  icons: {
    icon: "/harmony-logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
