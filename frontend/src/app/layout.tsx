import "./globals.css";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
export const metadata = {
  title: "Bhanwarwoods.com",
  description: "Modern furniture eCommerce",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <ProductProvider>{children}</ProductProvider>
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
