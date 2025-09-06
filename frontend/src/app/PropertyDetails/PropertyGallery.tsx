"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  id: number;
  name: string;
  images: {
    hero: string;
    gallery: string[];
  };
}

const PropertyImageSlider: React.FC<{ projectId: number }> = ({
  projectId,
}) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/projects.json") // ✅ ensure this file is inside /public/data
      .then((res) => res.json())
      .then((data: Project[]) => {
        const project = data.find((p) => p.id === projectId);
        if (project) {
          setImages(project.images.gallery);
        }
      })
      .catch((err) => console.error("Failed to fetch project images:", err));
  }, [projectId]);

  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-800">
          Property Gallery
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className=" relative"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white  shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* ✅ Navigation Buttons */}
          <div className="swiper-button-prev !text-gray-800 !w-12 !h-12  !rounded-full !shadow-md hover:!bg-gray-100"></div>
          <div className="swiper-button-next !text-gray-800 !w-12 !h-12  !rounded-full !shadow-md hover:!bg-gray-100"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default PropertyImageSlider;
