// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import StickyActions from "../../components/StickyActions";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Home,
//   BedDouble,
//   Bath,
//   Calendar,
// } from "lucide-react";

// const images = [
//   "/images/properties/prop1.jpg",
//   "/images/PropertyDetails/Hall.jpg",
//   "/images/PropertyDetails/bedroom.jpg",
//   "/images/PropertyDetails/kitchen.jpg",
//   "/images/PropertyDetails/bathroom.jpg",
//   "/images/PropertyDetails/balcony.jpg",
// ];

// export default function PropertyDetails() {
//   const [activeImage, setActiveImage] = useState(images[0]);

//   return (
//     <div className="bg-gray-50 min-h-screen pt-20">
//       {/* Split Layout */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* LEFT: Image Gallery */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-4"
//         >
//           <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <Image
//               src={activeImage}
//               alt="Property"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="flex gap-4 overflow-x-auto">
//             {images.map((img) => (
//               <div
//                 key={img}
//                 className={`relative w-28 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition ${
//                   activeImage === img
//                     ? "border-yellow-500 scale-105"
//                     : "border-transparent"
//                 }`}
//                 onClick={() => setActiveImage(img)}
//               >
//                 <Image src={img} alt="thumb" fill className="object-cover" />
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT: Property Info */}
//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col justify-center space-y-6"
//         >
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//               K Pune by Rohan Builders
//             </h1>
//             <p className="flex items-center text-gray-600 mt-2">
//               <MapPin className="w-5 h-5 mr-2 text-yellow-500" /> Bhugaon, Pune
//             </p>
//             <p className="mt-4 text-2xl font-semibold text-yellow-600">
//               Starting from ₹0.87 Cr
//             </p>
//           </div>

//           {/* Quick Facts */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             <div className="bg-white rounded-xl p-4 shadow-md text-center">
//               <Home className="mx-auto w-6 h-6 text-yellow-500" />
//               <p className="font-bold mt-1">1128 Sq.Ft.</p>
//               <p className="text-gray-500 text-xs">Carpet Area</p>
//             </div>
//             <div className="bg-white rounded-xl p-4 shadow-md text-center">
//               <BedDouble className="mx-auto w-6 h-6 text-yellow-500" />
//               <p className="font-bold mt-1">2, 3 BHK</p>
//               <p className="text-gray-500 text-xs">Typology</p>
//             </div>
//             <div className="bg-white rounded-xl p-4 shadow-md text-center">
//               <Bath className="mx-auto w-6 h-6 text-yellow-500" />
//               <p className="font-bold mt-1">2 Baths</p>
//               <p className="text-gray-500 text-xs">Bathrooms</p>
//             </div>
//             <div className="bg-white rounded-xl p-4 shadow-md text-center">
//               <Calendar className="mx-auto w-6 h-6 text-yellow-500" />
//               <p className="font-bold mt-1">Sep 2027</p>
//               <p className="text-gray-500 text-xs">Possession</p>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <a
//               href="tel:+919876543210"
//               className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition shadow"
//             >
//               <Phone className="w-5 h-5" /> Call Now
//             </a>
//             <a
//               href="mailto:info@realestate.com"
//               className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition shadow"
//             >
//               <Mail className="w-5 h-5" /> Email Us
//             </a>
//           </div>
//         </motion.div>
//       </div>
//       {/* ✅ Configurations Section */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
//         >
//           Available Configurations 🏠
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               type: "1 BHK",
//               area: "750 Sq.Ft.",
//               price: "₹55 Lakhs",
//             },
//             {
//               type: "2 BHK",
//               area: "1128 Sq.Ft.",
//               price: "₹87 Lakhs",
//             },
//             {
//               type: "3 BHK",
//               area: "1450 Sq.Ft.",
//               price: "₹1.25 Cr",
//             },
//           ].map((config, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
//             >
//               <h3 className="text-xl font-bold text-gray-900">{config.type}</h3>
//               <p className="text-gray-600 mt-2">{config.area}</p>
//               <p className="text-yellow-600 font-semibold text-lg mt-3">
//                 {config.price}
//               </p>
//               <button className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition">
//                 Book Now
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Key Highlights Section */}
//       <section className="bg-gray-50 py-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
//         >
//           Key Highlights ✨
//         </motion.h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
//           {[
//             { text: "10 mins from Apollo Hospital", icon: "🏥" },
//             { text: "20 mins from Ryan International School", icon: "🎓" },
//             { text: "15 mins from Hinjewadi IT Park", icon: "💻" },
//             { text: "5 mins from Shopping Mall & Multiplex", icon: "🛍️" },
//             { text: "Surrounded by Green Hills", icon: "🌳" },
//             { text: "Easy Connectivity to Mumbai Highway", icon: "🛣️" },
//           ].map((highlight, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center"
//             >
//               <p className="text-3xl">{highlight.icon}</p>
//               <p className="mt-3 font-semibold text-gray-800">
//                 {highlight.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Benefits Section */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
//         >
//           Why Choose This Home? 🏡
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Prime Location",
//               desc: "Located in Bhugaon, Pune’s fastest-growing hub with great connectivity and green surroundings.",
//               icon: "📍",
//             },
//             {
//               title: "Luxury Lifestyle",
//               desc: "World-class amenities including gym, pool, clubhouse, and landscaped gardens.",
//               icon: "✨",
//             },
//             {
//               title: "Smart Investment",
//               desc: "12% appreciation in last 5 years + rental yield up to 6% makes it a future-proof choice.",
//               icon: "📈",
//             },
//             {
//               title: "Trusted Builder",
//               desc: "Developed by Rohan Builders, known for premium projects and timely delivery.",
//               icon: "🏗️",
//             },
//             {
//               title: "Family Friendly",
//               desc: "Safe gated community with kids play area, 24x7 security, and peaceful environment.",
//               icon: "👨‍👩‍👧‍👦",
//             },
//             {
//               title: "Easy Financing",
//               desc: "Get flexible home loan options from top banks with attractive interest rates.",
//               icon: "💳",
//             },
//           ].map((benefit, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
//             >
//               <p className="text-4xl">{benefit.icon}</p>
//               <h3 className="mt-4 font-bold text-lg text-gray-900">
//                 {benefit.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{benefit.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call To Action */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//             Don’t Miss Out on Your Dream Home!
//           </h3>
//           <button className="px-8 py-4 bg-yellow-500 text-black font-semibold text-lg rounded-xl shadow hover:bg-yellow-400 transition">
//             Book Your Appointment Now
//           </button>
//         </motion.div>
//       </section>
//       <StickyActions />
//     </div>
//   );
// }

import HeroSection from "@/app/PropertyDetails/HeroSection";
import { projects } from "../../lib/data/projects";
import Amenities from "@/app/PropertyDetails/Amenities";
import OverviewSection from "@/app/PropertyDetails/OverviewSection";
// import KeyHighlights from "@/app/PropertyDetails/KeyHighlights";
import PropertyImageSlider from "@/app/PropertyDetails/PropertyGallery";
import LocationContactSection from "@/app/PropertyDetails/ContactUs";
import FloorPlansSection from "@/app/PropertyDetails/FloorPlans";

type Props = {
  params: { id: string };
};

// import overview from '../../../../public/images/PropertyDetails/overview.jpg'

export default function PropertyDetails({ params }: Props) {
  const property = projects.find((p) => p.id.toString() === params.id);

  if (!property) {
    return (
      <div className="p-10 text-center text-red-500">Property not found</div>
    );
  }

  return (
    <div>
      {" "}
      {/* ✅ pushes content below navbar */}
      <HeroSection
        image={property.image}
        name={property.title}
        location={property.location}
        types={property.typology}
      />
      <OverviewSection
        bhkOptions={[
          { type: "1 BHK", area: "650 Sq.ft", price: "₹45 Lacs Onwards" },
          { type: "2 BHK", area: "950 Sq.ft", price: "₹80 Lacs Onwards" },
          { type: "3 BHK", area: "1250 Sq.ft", price: "₹1.2 Cr Onwards" },
        ]}
        possession="Dec 2030"
      />
      {/* The Amenities section */}
      <Amenities />
      {/* <KeyHighlights projectId={1} /> */}
      <PropertyImageSlider projectId={property.id} />
      <FloorPlansSection />
      <LocationContactSection />
    </div>
  );
}
