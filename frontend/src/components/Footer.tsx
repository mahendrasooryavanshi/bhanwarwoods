import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Newsletter Signup - horizontal */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Stay Updated
          </h2>
          <form className="flex gap-2 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border border-gray-600 bg-gray-700 text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-64 transition"
            />
            <button className="px-5 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-500 shadow-sm transition transform hover:-translate-y-0.5">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 items-start">
          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium justify-center md:justify-start">
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
            <a href="/shop" className="hover:text-white transition">
              Shop
            </a>
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex gap-4 text-xl">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition transform hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>

            {/* Support Info vertical */}
            <div className="flex flex-col gap-2 text-gray-400 mt-2 text-sm md:text-base">
              <span className="font-semibold text-white">Support Info</span>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" />
                <span>+91 7742686595</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-green-500" />
                <span>support@bhanwarwoods.com</span>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-green-500 mt-1" />
                <span>
                  Indrapuri Laxmi Plaza, Bhawarkua,
                  <br />
                  near Physics Walla Building,
                  <br />
                  Indore, MP 452001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-400 text-xs md:text-sm mt-6">
          ©{new Date().getFullYear()} Bhanwarwoods.com — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
