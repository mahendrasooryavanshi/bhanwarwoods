"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ✅ Wrapper div, full width, no slider */}
      <section className="space-y-16 w-full">
        {/* ✅ Hero Section */}
        <motion.section
          className="relative py-20 sm:py-24 bg-gray-100 shadow-lg w-full border-y border-gray-300"
          initial={{ opacity: 0, y: -50 }} // ✅ Upar se niche aayega
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="relative text-center px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-wide break-words text-balance">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Bhanwarwoods
              </span>
            </h2>
            <p className="mt-2 text-gray-700 sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We bring you modern, sustainable, and stylish furniture designed
              to fit your lifestyle.
            </p>
            <Link href="/products">
              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </Link>

            {/* ✅ Decorative shapes */}
            <div className="absolute top-4 left-4 w-28 h-28 bg-gray-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-36 h-36 bg-gray-200 rounded-full opacity-20"></div>
          </div>
        </motion.section>

        {/* ✅ About Us Section */}
        <motion.section
          className="py-16 bg-gray-50 dark:bg-gray-900 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              {/* At FurnitureStore, we are passionate about creating spaces that
              inspire comfort, elegance, and modern living. Our curated
              collection blends timeless craftsmanship with contemporary
              aesthetics — ensuring every piece adds style and functionality to
              your home. */}
              Introducing our exquisite wooden products - A fusion of elegance
              and functionality that transforms everyday moments into
              extraordinary experiences. Crafted from the finest,
              sustainably-sourced hardwood, each product boasts a unique grain
              pattern that tells its own story, making every piece a
              one-of-a-kind treasure.
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              The smooth, polished surface is not only a testament to the skill
              and dedication of our artisans but also a practical feature that
              ensures easy cleaning and durability.Experience the blend of
              beauty and practicality with our Handcrafted Wooden Trays and
              Boards – where tradition meets modern elegance.
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From our online store to your doorstep, we’re committed to making
              your shopping experience seamless and enjoyable. Discover a world
              where luxury meets affordability, and let us help you turn your
              house into a home.
            </p>
          </div>
        </motion.section>

        {/* ✅ Mission Section */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 px-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            At FurnitureStore, we aim to transform homes with modern,
            sustainable, and durable furniture that blends comfort with style.
            Our passion is creating pieces that make your living spaces feel
            extraordinary.
          </p>
        </motion.div>

        {/* ✅ Why Choose Us */}
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              icon: "🪵",
              title: "Custom Wooden Furniture",
              desc: "Made-to-order furniture crafted to your exact size, style, and needs.",
            },
            {
              icon: "🪑",
              title: "Premium Craftsmanship",
              desc: "Expert artisans using high-quality, durable wood materials.",
            },
            {
              icon: "🎨",
              title: "Design Personalization",
              desc: "Choose wood type, finish, color, and texture that fits your space.",
            },
            {
              icon: "🌱",
              title: "Sustainable & Eco-Friendly",
              desc: "Responsibly sourced wood with environmentally conscious processes.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="space-y-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ CTA Section */}
        <motion.div
          className="text-center mt-12 px-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Ready to transform your space?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 mb-6">
            Explore our wide range of modern furniture crafted just for you.
          </p>
          <Link href="/products">
            <button className="mt-6 px-10 py-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300">
              Shop Now
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
