"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  image: string;
  name: string;
  location: string;
  types: string;
}

export default function HeroSection({
  image,
  name,
  location,
  types,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image src={image} alt={name} fill className="object-cover" priority />
        {/* Subtle gradient only at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end ">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/2 bg-black/10 mb-20  backdrop-blur-sm text-white flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-12 py-6"
        >
          {/* Left side: Project name + location */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              {name}
            </h1>
            <p className="text-sm md:text-base text-gray-300 mt-1">
              {location}
            </p>
          </div>

          {/* Right side: Typology + CTA */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <p className="text-sm md:text-lg font-medium">{types}</p>

            {/* CTA Button */}
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white font-semibold text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300"
            >
              KNOW MORE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
