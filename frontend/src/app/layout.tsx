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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head> */}
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <ProductProvider>
            <CartProvider>{children}</CartProvider>
          </ProductProvider>

          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
