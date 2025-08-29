"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Evergreen Villa",
    image: "/images/properties/prop1.jpg",
    location: "Pune, Maharashtra",
    area: "2400",
    bhk: "3 BHK",
    price: "₹1.2 Cr - ₹1.5 Cr",
  },
  {
    id: 2,
    title: "Luxury Apartments",
    image: "/images/properties/prop2.jpg",
    location: "Mumbai, Maharashtra",
    area: "1500",
    bhk: "2 BHK",
    price: "₹90 Lakh - ₹1.2 Cr",
  },
  {
    id: 3,
    title: "Sunny Heights",
    image: "/images/properties/prop3.jpg",
    location: "Navi Mumbai",
    area: "1300",
    bhk: "2 BHK",
    price: "₹80 Lakh - ₹1 Cr",
  },
  {
    id: 4,
    title: "Green Residency",
    image: "/images/properties/prop4.jpg",
    location: "Pune, Maharashtra",
    area: "2200",
    bhk: "3 BHK",
    price: "₹1.1 Cr - ₹1.4 Cr",
  },
  {
    id: 5,
    title: "Urban Heights",
    image: "/images/properties/prop5.jpg",
    location: "Thane, Maharashtra",
    area: "1100",
    bhk: "2 BHK",
    price: "₹75 Lakh - ₹95 Lakh",
  },
  {
    id: 6,
    title: "Lakeview Villas",
    image: "/images/properties/prop6.jpg",
    location: "Pune, Maharashtra",
    area: "2500",
    bhk: "3 BHK",
    price: "₹1.3 Cr - ₹1.6 Cr",
  },
  // {
  //   id: 7,
  //   title: "Skyline Apartments",
  //   image: "/images/properties/apartment4.jpg",
  //   location: "Mumbai, Maharashtra",
  //   area: "1400",
  //   bhk: "2 BHK",
  //   price: "₹85 Lakh - ₹1.1 Cr",
  // },
  // {
  //   id: 8,
  //   title: "Hillside Residency",
  //   image: "/images/properties/villa4.jpg",
  //   location: "Lonavala",
  //   area: "2700",
  //   bhk: "3 BHK",
  //   price: "₹1.4 Cr - ₹1.7 Cr",
  // },
  // Add more projects dynamically
];

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visible).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 mb-1">{project.location}</p>
              <p className="text-gray-600 mb-1">
                {project.area} sq.ft | {project.bhk}
              </p>
              <p className="text-green-600 font-semibold">{project.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
