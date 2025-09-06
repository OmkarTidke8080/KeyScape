"use client";

import { motion } from "framer-motion";
import { Building2, Clock } from "lucide-react";

interface OverviewProps {
  bhkOptions: { type: string; area: string; price: string }[];
  possession: string;
}

export default function OverviewSection({
  bhkOptions,
  possession,
}: OverviewProps) {
  return (
    <section className="relative bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-gray-800"
        >
          Project Overview
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bhkOptions.map((bhk, index) => (
            <motion.div
              key={bhk.type}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <Building2 className="mx-auto w-10 h-10 text-yellow-500 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                {bhk.type}
              </h3>
              <p className="text-gray-500 mt-1">{bhk.area}</p>
              <p className="text-yellow-600 font-bold mt-2">{bhk.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
