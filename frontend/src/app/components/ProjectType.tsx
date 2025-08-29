"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const projectTypes = [
  {
    title: "Villa Plots",
    image: "/images/PropCategories/villa.jpg",
    link: "/properties/villa-plots",
  },
  {
    title: "New Launch",
    image: "/images/PropCategories/new-launch.jpg",
    link: "/properties/new-launch",
  },
  {
    title: "Upcoming Launches",
    image: "/images/PropCategories/upcoming.jpg",
    link: "/properties/upcoming-launches",
  },
  {
    title: "Under Construction",
    image: "/images/PropCategories/under-construction.jpg",
    link: "/properties/under-construction",
  },
];

export default function ProjectTypes() {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 ">
      <h2
        className={`text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900 ${poppins.className}`}
      >
        Project Types
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projectTypes.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={() => router.push(project.link)}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-full h-64 sm:h-56 md:h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay Gradient + Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center px-4 pb-4">
              <h3
                className={`text-white text-xl md:text-2xl font-semibold text-center ${poppins.className}`}
              >
                {project.title}
              </h3>
            </div>

            {/* Optional subtle hover effect on overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
