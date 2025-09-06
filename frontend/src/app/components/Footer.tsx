"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 mb-2">
            <span className="text-white"> Key</span>
            Scape
          </h2>
          <p className="mt-3 text-sm md:text-base leading-6 text-gray-200">
            Your trusted real estate partner in finding dream homes and
            profitable investments with transparency and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            {["Home", "Properties", "Services", "About Us", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
              <Phone size={16} className="text-amber-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
              <Mail size={16} className="text-amber-400" /> info@keyscape.com
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
              <MapPin size={16} className="text-amber-400" /> Pune, Maharashtra,
              India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-amber-400 transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm md:text-base text-gray-300">
        © {new Date().getFullYear()} KeyScape. All rights reserved.
      </div>
    </footer>
  );
}
