// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function NavBar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Products", href: "/products" },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 bg-white dark:bg-gray-900 transition-shadow ${
//         scrolled ? "shadow-md" : ""
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
//         {/* Logo + Site Name */}
//         {/* <Link
//           href="/"
//           rel="preload"
//           as="image"
//           className="flex items-center gap-3 flex-shrink-0"
//         > */}
//         <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg  overflow-hidden transition-transform hover:scale-150">
//           <img
//             src="/images/logo/logo1.jpg"
//             alt="Logo"
//             className="object-contain w-12 h-12 sm:w-20 sm:h-20 scale-180"
//           />
//         </div>

//         <span className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider transform transition-all duration-300 hover:scale-105 hover:drop-shadow-2xl whitespace-nowrap ml-2.5">
//           Bhanwarwoods
//         </span>
//         {/* </Link> */}
//         {/* Desktop Menu */}
//         <div className="hidden md:flex flex-1 flex-wrap justify-end items-center gap-6 font-medium text-gray-700 dark:text-gray-200 text-base sm:text-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`hover:text-black dark:hover:text-white transition ${
//                 pathname === link.href
//                   ? "text-black dark:text-white font-bold"
//                   : ""
//               } whitespace-nowrap`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         {/* Spacer for alignment */}
//         <div className="hidden md:block w-10" />
//         {/* Mobile Hamburger */}
//         <div className="md:hidden ml-auto">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="focus:outline-none text-gray-700 dark:text-gray-200 text-2xl"
//           >
//             {menuOpen ? "✖️" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-screen py-4" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col px-4 space-y-3 text-gray-700 dark:text-gray-200">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className={`hover:text-black dark:hover:text-white transition text-lg whitespace-nowrap ${
//                 pathname === link.href
//                   ? "text-black dark:text-white font-bold"
//                   : ""
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

//****************************************************************************** */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
// Import an icon library – for example react‑icons
import { FaShoppingCart } from "react-icons/fa"; // install react‑icons if not already
// (npm install react-icons) :contentReference[oaicite:0]{index=0}

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Read cart items from localStorage and update count
    try {
      const cartJson = localStorage.getItem("cart") || "[]";
      const cart = JSON.parse(cartJson);
      const count = cart.reduce(
        (sum: number, item: any) => sum + (item.quantity || 1),
        0
      );
      setCartCount(count);
    } catch (e) {
      console.error("Error reading cart from localStorage", e);
      setCartCount(0);
    }
    // Add event listener for storage changes if you want dynamic update across tabs
    const handleStorage = () => {
      try {
        const cartJson = localStorage.getItem("cart") || "[]";
        const cart = JSON.parse(cartJson);
        const count = cart.reduce(
          (sum: number, item: any) => sum + (item.quantity || 1),
          0
        );
        setCartCount(count);
      } catch {
        setCartCount(0);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
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
        <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
              src="/images/logo/logo1.jpg"
              alt="Logo"
              className="object-contain w-full h-full"
            />
          </div>

          <span className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider transform transition-all duration-300 hover:scale-105 ml-2 whitespace-nowrap">
            Bhanwarwoods
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 font-medium text-gray-700 dark:text-gray-200 text-base sm:text-sm">
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

        {/* Cart icon + badge */}
        <div className="relative ml-auto mr-4 md:mr-0">
          <Link
            href="/cart"
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
          >
            <FaShoppingCart className="w-6 h-6 sm:w-7 sm:h-7" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Spacer for alignment on md */}
        <div className="hidden md:block w-10" />

        {/* Mobile Hamburger */}
        <div className="md:hidden">
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
