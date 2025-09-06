"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const locations = [
  {
    name: "Kharadi, Pune",
    properties: 1,
  },
  {
    name: "Bavdhan, Pune",
    properties: 1,
  },
  {
    name: "Balewadi, Pune",
    properties: 1,
  },
  {
    name: "Punawale, Pune",
    properties: 2,
  },
  {
    name: "Tathawade, Pune",
    properties: 2,
  },
  {
    name: "Hinjawadi, Pune",
    properties: 5,
  },
  {
    name: "Baner, Pune",
    properties: 3,
  },
  { name: "Chinchwad, PCMC", properties: 4 },
  { name: "Pimpri, PCMC", properties: 3 },
  { name: "Nigdi, PCMC", properties: 2 },
  { name: "Aundh, Pune", properties: 2 },
  { name: "Wakad, Pune", properties: 3 },
  { name: "Magarpatta, Pune", properties: 2 },
  { name: "Viman Nagar, Pune", properties: 3 },
];

const TopLocalities = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 10 locations initially
  const displayedLocations = showAll ? locations : locations.slice(0, 10);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
          Top Localities
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-10 leading-tight">
          Find homes in the most sought-after
          <br />
          neighborhoods of Pune.
        </h2>

        <p className="text-xl font-medium text-slate-700 mb-6">
          Popular Locations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          {displayedLocations.map((location) => (
            <Link
              key={location.name}
              href={`/locations/${location.name
                .toLowerCase()
                .replace(/,?\s/g, "-")}`}
              className="relative group rounded-xl p-4 md:p-6 text-white text-center flex flex-col items-center justify-center bg-slate-900 hover:bg-slate-800 transition-colors duration-300"
            >
              <Image
                src="/images/buildLogo.png"
                alt="Build Logo"
                width={40}
                height={40}
                className="absolute top-2 right-2"
              />

              <h3 className="text-lg md:text-xl font-semibold mb-1 mt-16">
                {location.name}
              </h3>
              <p className="text-sm text-gray-400">
                {location.properties} Property
                {location.properties > 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {locations.length > 10 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopLocalities;
