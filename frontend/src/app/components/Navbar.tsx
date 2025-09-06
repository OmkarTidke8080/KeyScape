"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(pathname === "/"); // home shows by default

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        // Homepage → show always, change style on scroll
        setIsScrolled(window.scrollY > 50);
        setShowNavbar(true);
      } else {
        // Other pages → hide at top, show only after scroll
        if (window.scrollY > 50) {
          setShowNavbar(true);
          setIsScrolled(true);
        } else {
          setShowNavbar(false); // fully hide
          setIsScrolled(false);
        }
      }
    };

    // Run once on mount so it checks initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b-4 transform ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <span className={isScrolled ? "text-slate-900" : "text-white"}>
            Key
          </span>
          <span className="text-amber-500">Scape</span>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center space-x-8 font-medium ${
            isScrolled ? "text-slate-800" : "text-white"
          }`}
        >
          {["About", "Properties", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-amber-500">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="#contact-form"
            className={`px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
              isScrolled
                ? " text-white bg-orange-600 hover:bg-orange-700"
                : "bg-orange-400 hover:bg-orange-700 text-slate-900 "
            }`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
            isScrolled
              ? "text-slate-900 hover:bg-slate-200"
              : "text-white hover:bg-white/10"
          }`}
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
