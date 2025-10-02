import "./globals.css";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bhanwarwoods.com",
  description: "Modern furniture eCommerce",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar appears on top for all pages */}
        <NavBar />

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
