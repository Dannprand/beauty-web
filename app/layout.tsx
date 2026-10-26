import type { Metadata } from "next";
import { Afacad, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Primary Font: Afacad (Used across the entire application)
const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
  display: "swap",
});

// Secondary Accent Font: Cormorant Garamond (Used strictly for editorial highlight text)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEAUTY IN STEM — Korean Cellular Skincare & Skin Fitness",
  description: "Formulated as a Skin Fitness Tool. Engineered in Seoul with bio-identical ceramides and multi-molecular hydration science to fortify cutaneous barrier resilience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${afacad.variable} ${cormorant.variable} min-h-full font-sans antialiased text-[#1c1a19] bg-[#fbfaf9]`}>
        {children}
      </body>
    </html>
  );
}
