"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
          <p className="mb-6 text-gray-100">
            Have questions about our properties or services? Reach out to us
            anytime!
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <MapPin size={20} /> Pune, Maharashtra, India
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <Mail size={20} /> contact@evergreenliving.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-yellow-700 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-yellow-700 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-yellow-700 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
