export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-12 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Subscribe to our newsletter for latest products and offers.
          </p>
          <form className="mt-4 flex justify-center flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full sm:w-auto"
            />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>

        {/* Links & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-300">
          {/* Links */}
          <div className="flex gap-6 mb-4 sm:mb-0">
            <a
              href="/about"
              className="hover:text-black dark:hover:text-white transition"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-black dark:hover:text-white transition"
            >
              Contact
            </a>
            <a
              href="/shop"
              className="hover:text-black dark:hover:text-white transition"
            >
              Shop
            </a>
            <a
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-600 transition">
              🐦
            </a>{" "}
            {/* Twitter */}
            <a href="#" className="hover:text-blue-700 transition">
              📘
            </a>{" "}
            {/* Facebook */}
            <a href="#" className="hover:text-pink-500 transition">
              📸
            </a>{" "}
            {/* Instagram */}
            <a href="#" className="hover:text-red-600 transition">
              🎥
            </a>{" "}
            {/* YouTube */}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          ©{new Date().getFullYear()} Bhanwarwoods.com All rights reserved.
        </div>
      </div>
    </footer>
  );
}
