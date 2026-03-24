"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const getVariantClasses = (index) => {

  const variants = [
    { text: "text-blue-900", border: "border-[#CBD5E1]", bg: "bg-[#0c4a6e]" },
    { text: "text-blue-900", border: "border-[#CBD5E1]", bg: "bg-[#0c4a6e]" },
    { text: "text-blue-900", border: "border-[#CBD5E1]", bg: "bg-[#0c4a6e]" },
  ];
  return variants[index % variants.length];
};

export function TestimonialsCarousel({ testimonials }) {
  return (
    <div className="sm:py-12 py-3   font-sans">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoHeight={false} // Ensure Swiper doesn't change height per slide
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // "items-stretch" forces all slides to the same height
        className="pb-16 px-4 max-w-7xl mx-auto !flex items-stretch"
      >
        {testimonials.map((item, i) => {
          const variant = getVariantClasses(i);
          return (
            // h-full here ensures the slide fills the swiper-wrapper height
            <SwiperSlide key={i} className="pt-12 pb-8 !h-auto">
              <div className="relative h-full flex flex-col">
                {/* Floating Avatar Pin */}
                <div className="absolute -top-12 right-10 z-10">
                  <div className={`relative w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gray-100 ${variant.text} border border-blue-900`}>
                    <svg viewBox="0 0 24 24" fill="#0c4a6e" className="w-12 h-12">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 btn-gradient btn-gradient-glow`} />
                  </div>
                </div>

                {/* Main Card - flex-1 makes this grow to fill the container */}
                <div className={`bg-white rounded-[2rem] p-8 pt-10 shadow-sm border-b-[12px] border-r-[12px] ${variant.border} relative overflow-hidden flex-1 flex flex-col transition-all duration-300 hover:shadow-xl`}>

                  {/* Header: Quote Icon & Name */}
                  <div className="flex gap-4 items-start mb-4">
                    <div className="text-gray-300 shrink-0">
                      <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V21H5.017Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-xl font-black heading-primary leading-tight`}>
                        {item.name}
                      </h3>

                    </div>
                  </div>

                  {/* Testimonial Text - flex-grow ensures this takes up space so footer is pushed down */}
                  <div className="mb-4 flex-grow">
                    <p className="text-gray-600 text-[15px] leading-relaxed italic">
                      {item.quote}
                    </p>
                  </div>

                  {/* Footer: Rating - This will now always stay at the bottom */}
                  <div className="flex items-center  justify-between gap-3 mt-auto">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-yellow-500 text-xl">★</span>
                      ))}
                    </div>
                    <span className="bg-gray-100 w-6 h-6 flex items-center justify-center border border-[#0c4a6e] rounded-full text-[#0c4a6e] text-sm font-bold">
                      {item.rating || "4.5"}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}