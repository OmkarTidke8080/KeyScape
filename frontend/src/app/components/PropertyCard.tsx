"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Home,
  BedDouble,
  Bath,
  Building2,
  Calendar,
  TrendingUp,
  Users,
} from "lucide-react";

const images = [
  "/images/properties/prop1.jpg",
  "/images/properties/prop1_interior.jpg",
  "/images/properties/prop1_balcony.jpg",
  "/images/properties/prop1_amenities.jpg",
];

export default function PropertyDetails() {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={activeImage}
          alt="Property Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            K Pune by Rohan Builders
          </h1>
          <p className="flex items-center mt-2 text-lg">
            <MapPin className="w-5 h-5 mr-2" /> Bhugaon, Pune
          </p>
          <p className="mt-2 text-2xl font-semibold">Starting from ₹0.87 Cr</p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition">
            Contact Now
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex overflow-x-auto gap-4 p-4 bg-white shadow-md">
        {images.map((img) => (
          <div
            key={img}
            className={`relative w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
              activeImage === img ? "border-yellow-500" : "border-transparent"
            }`}
            onClick={() => setActiveImage(img)}
          >
            <Image src={img} alt="thumb" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Quick Facts */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <Home className="mx-auto w-8 h-8 text-yellow-500" />
          <p className="font-bold mt-2">1128 Sq.Ft.</p>
          <p className="text-gray-500 text-sm">Carpet Area</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <BedDouble className="mx-auto w-8 h-8 text-yellow-500" />
          <p className="font-bold mt-2">2, 3 BHK</p>
          <p className="text-gray-500 text-sm">Typology</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <Bath className="mx-auto w-8 h-8 text-yellow-500" />
          <p className="font-bold mt-2">2 Baths</p>
          <p className="text-gray-500 text-sm">Bathrooms</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <Calendar className="mx-auto w-8 h-8 text-yellow-500" />
          <p className="font-bold mt-2">Sep 2027</p>
          <p className="text-gray-500 text-sm">Possession</p>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          A Home Where Memories Are Made
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Experience the joy of family living in a home designed to nurture
          love, laughter, and togetherness.
        </p>
      </section>

      {/* Amenities */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: "🏊", label: "Swimming Pool" },
            { icon: "🏋️", label: "Gym & Fitness" },
            { icon: "🌳", label: "Green Parks" },
            { icon: "🎉", label: "Clubhouse" },
            { icon: "👶", label: "Kids Play Area" },
            { icon: "🛡️", label: "24x7 Security" },
          ].map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg text-center transition"
            >
              <p className="text-3xl">{a.icon}</p>
              <p className="mt-2 font-semibold">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Investment Value
        </h3>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Bhugaon has witnessed a{" "}
          <span className="font-bold text-yellow-400">12% appreciation</span> in
          the last 5 years. Secure your investment with rental yields up to{" "}
          <span className="font-bold text-yellow-400">6% annually</span>.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-yellow-400 transition">
          Book a Site Visit
        </button>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h3>
        <p className="text-gray-600 mb-6">
          Call us now to schedule a site visit or get more details.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-500"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="mailto:info@realestate.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500"
          >
            <Mail className="w-5 h-5" /> Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
