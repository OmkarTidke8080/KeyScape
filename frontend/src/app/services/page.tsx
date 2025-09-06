"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  MapPin,
  Briefcase,
  Users,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Property Sales",
    description:
      "Buy and sell residential and commercial properties with expert guidance and transparency.",
    icon: <Home className="w-10 h-10 text-amber-600" />,
  },
  {
    id: 2,
    title: "Real Estate Consulting",
    description:
      "Personalized property investment consulting to help you make informed decisions.",
    icon: <Briefcase className="w-10 h-10 text-amber-600" />,
  },
  {
    id: 3,
    title: "Property Management",
    description:
      "Complete management solutions for your properties, including rental support and maintenance.",
    icon: <Building2 className="w-10 h-10 text-amber-600" />,
  },
  {
    id: 4,
    title: "Legal Assistance",
    description:
      "Hassle-free legal documentation, registration, and compliance for your property.",
    icon: <ClipboardCheck className="w-10 h-10 text-amber-600" />,
  },
  {
    id: 5,
    title: "Location Guidance",
    description:
      "Explore prime locations in Pune, PCMC, and Mumbai with our expert local knowledge.",
    icon: <MapPin className="w-10 h-10 text-amber-600" />,
  },
  {
    id: 6,
    title: "Customer Support",
    description:
      "Dedicated support team to assist you at every step of your property journey.",
    icon: <Users className="w-10 h-10 text-amber-600" />,
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We provide end-to-end real estate solutions to make your property
          journey smooth and stress-free.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-left border border-gray-100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
