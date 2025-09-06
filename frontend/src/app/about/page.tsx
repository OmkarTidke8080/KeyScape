"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          About Us
        </h1>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Evergreen Living, we believe in creating homes that inspire
            comfort, trust, and a sense of belonging. With years of experience
            in the real estate market, our mission is to help families and
            investors find their perfect property with transparency and
            integrity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From residential apartments to luxury flats, we bring you the best
            choices across Pune, PCMC, Mumbai, and beyond.
          </p>
        </div>
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about/building.jpg"
            alt="Our Company"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality properties that meet the evolving needs of
              families and investors while ensuring transparency, trust, and
              long-term value.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a trusted real estate brand in India, offering
              modern living spaces that redefine urban lifestyles.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Team Member */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/team/member1.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Rajesh Sharma
            </h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/team/member2.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Neha Verma</h3>
            <p className="text-gray-500">Head of Sales</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/images/team/member3.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Aman Gupta</h3>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}
