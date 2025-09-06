"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

// ✅ Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long"),
  location: z.string().min(1, "Select a location"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
      toast.success("✅ Thank you! We’ll contact you shortly.");
      reset();
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white w-1/2 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
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
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                outline-none transition text-gray-800"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                outline-none transition text-gray-800"
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
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                outline-none transition text-gray-800"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Location Dropdown */}
          <div>
            <select
              {...register("location")}
              className="w-full p-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-yellow-500 transition text-gray-800"
            >
              <option value="">Select Location Preference</option>
              <option value="pune">Pune</option>
              <option value="pcmc">PCMC</option>
              <option value="mumbai">Mumbai</option>
              <option value="thane">Thane</option>
              <option value="navi-mumbai">Navi Mumbai</option>
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
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
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                outline-none transition text-gray-800"
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
            disabled={isSubmitting}
            className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg 
            shadow-md hover:bg-yellow-700 hover:shadow-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

// <select
//   name="location"
//   value={formData.location}
//   onChange={handleChange}
//   className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
//   required
// >
//   <option value="">Select Location Preference</option>
//   <option value="pune">Pune</option>
//   <option value="pcmc">PCMC</option>
//   <option value="mumbai">Mumbai</option>
//   <option value="thane">Thane</option>
//   <option value="navi-mumbai">Navi Mumbai</option>
// </select>;
