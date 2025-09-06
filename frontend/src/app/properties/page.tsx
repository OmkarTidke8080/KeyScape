"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Import JSON file
import projects from "../../../public/data/projects.json";

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(6);

  const loadMore = () => setVisible((prev) => prev + 6);

  return (
    <section
      id="properties"
      className="bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-slate-900 via-gray-700 to-slate-900 bg-clip-text text-transparent"
        >
          Discover Our Exclusive Projects in Pune
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.slice(0, visible).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-[380px]">
                <Image
                  src={project.images.hero}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 w-full text-white">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="text-sm text-gray-200">{project.location}</p>

                <p className="mt-2 text-yellow-400 font-semibold">
                  {project.typology}
                </p>

                {/* ✅ Show lowest starting price dynamically */}
                {project.configurations?.[0]?.price && (
                  <p className="text-sm mt-1">
                    Starting at {project.configurations[0].price}
                  </p>
                )}

                <Link href={`/properties/${project.id}`}>
                  <button className="mt-4 w-full bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visible < projects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
