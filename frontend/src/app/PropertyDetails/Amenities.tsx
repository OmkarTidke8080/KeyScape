"use client";

import React from "react";
import {
  Dumbbell,
  Waves,
  Trees,
  Building2,
  Bike,
  UtensilsCrossed,
  Coffee,
  HeartPulse,
  Wine,
  Music,
  BookOpen,
  Users,
  ShoppingBag,
  Car,
  Baby,
} from "lucide-react";

// Define the type for a single amenity item.
interface Amenity {
  name: string;
  icon: React.ReactNode;
}

// Define the props for the Amenities component.
interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  if (!amenities || amenities.length === 0) {
    return null; // Don't render if there are no amenities.
  }

  return (
    <section className="relative overflow-hidden bg-black/90 py-16">
      {/* Parallax Background Effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/PropertyDetails/overview.jpg')",
          backgroundAttachment: "fixed",
          zIndex: 0,
          opacity: 0.15,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 uppercase tracking-wide">
          Amenities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white p-4 group"
            >
              <div className="text-5xl mb-3 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-yellow-400">
                {amenity.icon}
              </div>
              <span className="text-sm sm:text-base font-medium uppercase tracking-wider group-hover:text-yellow-400 transition-colors duration-300">
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Sample 15 Amenities
const sampleAmenities: Amenity[] = [
  { name: "Swimming Pool", icon: <Waves size={48} /> },
  { name: "Gymnasium", icon: <Dumbbell size={48} /> },
  { name: "Clubhouse", icon: <Building2 size={48} /> },
  { name: "Garden & Landscape", icon: <Trees size={48} /> },
  { name: "Jogging Track", icon: <Bike size={48} /> },
  { name: "Restaurant", icon: <UtensilsCrossed size={48} /> },
  { name: "Café Lounge", icon: <Coffee size={48} /> },
  { name: "Spa & Wellness", icon: <HeartPulse size={48} /> },
  { name: "Wine Lounge", icon: <Wine size={48} /> },
  { name: "Amphitheatre", icon: <Music size={48} /> },
  { name: "Library", icon: <BookOpen size={48} /> },
  { name: "Banquet Hall", icon: <Users size={48} /> },
  { name: "Shopping Arcade", icon: <ShoppingBag size={48} /> },
  { name: "Covered Parking", icon: <Car size={48} /> },
  { name: "Kids’ Play Area", icon: <Baby size={48} /> },
];

export default function AmenitiesSectionWrapper() {
  return <Amenities amenities={sampleAmenities} />;
}
