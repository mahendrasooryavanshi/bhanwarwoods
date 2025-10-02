"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Collection", href: "/collection" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src="https://bhanwarwoods.com/wp-content/uploads/2025/09/cropped-COMPANY-LOGO.jpg"
              alt="Logo"
              className="object-contain w-10 h-10"
            />
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-green-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm tracking-wide">
            Bhanwarwoods
          </span>
        </Link>

        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-black dark:hover:text-white transition ${
                pathname === link.href
                  ? "text-black dark:text-white font-bold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Spacer for alignment */}
        <div className="hidden md:block w-10" />

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center px-4 py-4 space-y-3 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-black dark:hover:text-white transition ${
                  pathname === link.href
                    ? "text-black dark:text-white font-bold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
