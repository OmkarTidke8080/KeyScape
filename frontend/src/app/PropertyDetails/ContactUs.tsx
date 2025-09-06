"use client";

import React from "react";
import { MapPin, Phone, Mail, User, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number is required")
    .regex(/^[0-9]+$/, "Phone must be numbers only"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function LocationContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully! 🎉");
    reset();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 🌍 Location Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <MapPin className="text-yellow-500 " />
              Our Location
            </h2>
            <p className="text-gray-500 font-semibold mt-2">
              Visit us at our project site for a personal walkthrough.
            </p>
          </div>
          <div className="h-100 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.954285695398!2d73.7566!3d18.6015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92b123456!2sPune!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-b-2xl"
            ></iframe>
          </div>
        </div>

        {/* 📩 Contact Form Card */}
        <div className="bg-white w-full rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-6">We’d love to hear from you!</p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div>
              <div className="relative">
                <User
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name")}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-gray-800"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-gray-800"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone")}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-gray-800"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  {...register("message")}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-gray-800"
                ></textarea>
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
