"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate backend / API call here
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", location: "", project: "" });
  };

  return (
    <div
      id="contact-form"
      className="w-full flex justify-center items-center px-4 py-10 bg-white"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Have questions about properties or services? Fill out the form and our
          team will reach you.
        </p>

        <div className="grid gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />

          {/* Location Preference */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          >
            <option value="">Select Location Preference</option>
            <option value="pune">Pune</option>
            <option value="pcmc">PCMC</option>
            <option value="mumbai">Mumbai</option>
            <option value="thane">Thane</option>
            <option value="navi-mumbai">Navi Mumbai</option>
          </select>

          {/* Project Name */}
          <input
            type="text"
            name="project"
            placeholder="Project Name (if any)"
            value={formData.project}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition shadow-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
