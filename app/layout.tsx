import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Beauty In Stem — Korean Skincare & Skin Fitness",
  description: "Korean skincare formulas engineered for ultimate skin fitness. Advanced PDRN cellular science developed in collaboration with Korean skin scientists.",
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
      <body className={`${jakarta.variable} min-h-full font-sans antialiased text-[#1c1a19] bg-[#fbfaf9]`}>
        {children}
      </body>
    </html>
  );
}
