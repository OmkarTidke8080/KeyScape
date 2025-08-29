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
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-700">
            Evergreen Living
          </h2>
          <p className="mt-3 text-sm leading-6">
            Your trusted real estate partner in finding dream homes and
            profitable investments with transparency and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="/properties" className="hover:text-green-600">
                Properties
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-600">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-600" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-600" />{" "}
              info@evergreenliving.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" /> Pune, Maharashtra,
              India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-green-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-green-600">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Evergreen Living. All rights reserved.
      </div>
    </footer>
  );
}
