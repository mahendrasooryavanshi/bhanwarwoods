"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collection", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Products", href: "/products" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo + Site Name */}
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg  overflow-hidden transition-transform hover:scale-150">
          <img
            src="/images/logo/logo1.jpg"
            alt="Logo"
            className="object-contain w-12 h-12 sm:w-20 sm:h-20 scale-170"
          />
        </div>

        <span className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider transform transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl whitespace-nowrap ml-2.5">
          Bhanwarwoods
        </span>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 flex-wrap justify-end items-center gap-6 font-medium text-gray-700 dark:text-gray-200 text-base sm:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-black dark:hover:text-white transition ${
                pathname === link.href
                  ? "text-black dark:text-white font-bold"
                  : ""
              } whitespace-nowrap`}
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
            className="focus:outline-none text-gray-700 dark:text-gray-200 text-2xl"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 space-y-3 text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-black dark:hover:text-white transition text-lg whitespace-nowrap ${
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
    </nav>
  );
}
