"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-white hover:scale-105 transition-transform"
        >
          <span className="text-white">Key</span>
          <span className="text-amber-400">Scape</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-white">
          {["About", "Properties", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-amber-400">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="#contact-form"
            className="px-5 py-2 rounded-xl bg-amber-400 text-slate-900 font-semibold shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-300">
          {/* Add Menu Icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
