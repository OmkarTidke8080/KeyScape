import { Phone, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Call */}
      <a
        href="tel:+919876543210"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 text-black shadow-lg hover:bg-yellow-400 transition"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Schedule Visit */}
      <Link
        href="#schedule-visit"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition"
      >
        <Calendar className="w-6 h-6" />
      </Link>
    </div>
  );
}
