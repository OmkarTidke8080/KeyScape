"use client";

import { motion } from "framer-motion";
import { Lora } from "next/font/google";
import Link from "next/link";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Floating Gradient Circles */}
      <div className="absolute bottom-10 right-10 w-96 h-96  bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-white  uppercase tracking-widest text-4xl md:text-6xl font-semibold leading-tight mb-6 drop-shadow-lg ${lora.className}`}
        >
          <span className="text-amber-400 ">Your Key</span> to Smarter Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-200 text-lg font-semibold uppercase tracking-widest  md:text-xl max-w-3xl mb-8"
        >
          Helping you find the perfect home where comfort, lifestyle, and
          investment meet together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#properties"
            className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold shadow-lg hover:bg-amber-700 hover:scale-105 transition-all duration-300"
          >
            Explore Properties
          </Link>
          <Link
            href="#contact-form"
            className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>

      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
    </section>
  );
}
