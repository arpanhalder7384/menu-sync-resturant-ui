import type { Metadata } from "next";
import { Outfit, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/translations";
import { CartProvider } from "@/lib/cart";

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fontHind = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "MenuSync | Digital Menu, Food Discovery & WhatsApp Ordering System",
  description:
    "MenuSync is a smart digital restaurant menu. Scan a table QR code, browse menus in English or Bengali, spin the decision wheel to pick dishes, and place orders directly on WhatsApp.",
  keywords: [
    "MenuSync",
    "Digital Menu",
    "QR Code Menu",
    "Restaurant Menu App",
    "WhatsApp Ordering",
    "Food Spinner",
    "Bilingual Menu",
    "West Bengal Restaurants",
    "Bengali Menu",
  ],
  authors: [{ name: "MenuSync Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontOutfit.variable} ${fontHind.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-stone-100 text-stone-900">
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
