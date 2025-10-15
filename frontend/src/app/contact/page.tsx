"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    await new Promise((r) => setTimeout(r, 800)); // simulate API
    setStatus("✅ Message sent! We'll get back to you soon.");
  }

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#fff" }}
    >
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-200 to-yellow-300 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-amber-200 to-green-300 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

      <div
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Have questions or feedback? Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6 transition-all hover:shadow-2xl"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-50 dark:text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 peer placeholder-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2.5 text-gray-500 dark:text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-green-500 peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-50 dark:text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 peer placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2.5 text-gray-500 dark:text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-green-500 peer-focus:text-sm"
              >
                Your Email
              </label>
            </div>
            {/* Mobile Number */}
            <div className="relative">
              <label
                htmlFor="mobile"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Your Mobile Number
              </label>
              <div className="flex items-center">
                <span className="px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-50 dark:text-gray-900 rounded-l-xl">
                  +91
                </span>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="9876543210"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-2 border-t border-b border-r border-gray-300 dark:border-gray-700 dark:bg-gray-50 dark:text-gray-900 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onInput={(e) => {
                    // Remove non-digit characters
                    const input = e.target as HTMLInputElement;
                    input.value = input.value.replace(/\D/g, "");
                  }}
                />
              </div>
              <p
                className="mt-1 text-sm text-red-600 dark:text-red-500"
                id="mobile-error"
              >
                {/* Validation message will appear here if needed */}
              </p>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-50 dark:text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 peer placeholder-transparent resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2.5 text-gray-500 dark:text-gray-600 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-green-500 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-500 via-green-400 to-green-300 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status && <p className="text-green-600 text-sm">{status}</p>}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                📞 Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                +91 98765 43210
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                ✉️ Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                info@bhanwarwoods.com
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                📍 Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Indrapuri Laxmi Plaza, Bhawarkua, near Physics Walla Building,
                Indore, MP 452001
              </p>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.120481175163!2d75.83521107524457!3d22.720678484999236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e6ef45ef123b%3A0xc8b422c8fa4b5c7!2sLaxmi%20Plaza%2C%20Bhawarkua%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1696250000000!5m2!1sen!2sin"
                className="w-full h-48 rounded-xl"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
