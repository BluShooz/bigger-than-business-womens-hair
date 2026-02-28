import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { womensHairSchema, womensFAQSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Women's Hair Stylist in Pflugerville | Bigger Than Business",
  description: "Discover the best women's hair services in Pflugerville, TX. Expert haircuts, silk press, blowouts, and natural hair care. Book your appointment today at Bigger Than Business.",
  keywords: "women's hair stylist Pflugerville, women's haircut Pflugerville, hair salon Pflugerville TX, silk press Pflugerville, blowout Pflugerville, professional hair stylist Pflugerville, natural hair care Pflugerville",
  openGraph: {
    title: "Women's Hair Stylist in Pflugerville | Bigger Than Business",
    description: "Premium women's hair services in Pflugerville, TX. From silk press to natural hair care, experience personalized styling in a welcoming atmosphere.",
    type: "website",
    locale: "en_US",
    url: "https://bigger-than-business-womens-hair.vercel.app",
    siteName: "Bigger Than Business - Women's Hair Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHairSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(womensFAQSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
