"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 via-amber-50 to-yellow-100 text-center overflow-hidden">
      {/* Floating leaves */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-green-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🍃
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-20 text-6xl text-yellow-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        🌿
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-green-700 drop-shadow-lg mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-2xl font-medium text-amber-700 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Looks like you wandered off the trail 🌲
        <br />
        The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Decorative gradient ring */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-green-300 to-amber-200 opacity-20 blur-3xl animate-pulse" />
    </div>
  );
}
