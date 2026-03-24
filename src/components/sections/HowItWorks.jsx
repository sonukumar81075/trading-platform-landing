// "use client";

// import { Container } from "@/components/ui/Container";
// import { SectionHeading } from "@/components/ui/SectionHeading";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export function HowItWorks({ steps }) {
//   // Ensure we are handling exactly 4 steps
//   const displaySteps = steps.slice(0, 4);

//   return (
//     <section id="how-it-works" className="md:pt-32 pt-16 bg-[#FFFFFF] font-lexend">
//       <Container>
//         <SectionHeading
//           eyebrow="How it works"
//           title="Learn Driving in 4 Easy Steps"
//           description="Lytechx makes forex automation simple with copy trading, indicators, and EAs."
//         />

//         {/* Grid adjusted to 4 columns on large screens, 2 on medium */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
//           {displaySteps.map((s, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="group relative"
//             >
//               <div className="relative h-full bg-white rounded-[2.5rem] border border-slate-100 p-7 pt-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] flex flex-col">

//                 {/* Background Large Number - Matched to Screenshot */}
//                 <span className="absolute top-6 right-8 text-7xl font-black text-slate-50/80 group-hover:text-blue-50/50 transition-colors duration-500 select-none">
//                   0{idx + 1}
//                 </span>

//                 {/* Text Content */}
//                 <div className="relative z-10 mb-8 min-h-[140px]">
//                   <h3 className="text-[22px] font-[700] text-[#1c1c1c] mb-3 leading-[30px]">
//                     {s.title}
//                   </h3>
//                   <p className="text-[15px] leading-[26px] text-slate-500 font-medium">
//                     {s.description}
//                   </p>
//                 </div>

//                 {/* Bottom Image Container (The Light Blue "Bucket") */}
//                 <div className="relative mt-auto pt-6 rounded-[2rem] bg-gradient-to-b from-[#f0f7ff] to-[#ffffff] border border-blue-50 overflow-hidden">
//                   <div className="relative w-full aspect-[4/5] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
//                     <Image
//                       src={s.image}
//                       alt={s.title}
//                       fill
//                       className="object-contain object-top drop-shadow-xl"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                     />
//                   </div>
//                 </div>

//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export function HowItWorks({ steps }) {
  const displaySteps = steps.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works" className=" md:pt-32 pt-20  bg-gradient-to-b from-[var(--brand-muted)] to-white font-lexend overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="The Process"
          title="Trade with Confidence in 4 Steps"
          description="A structured path designed to take you from beginner to confident trader seamlessly."
        />

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-4 pt-20 pb-12">
          {displaySteps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`relative group ${idx % 2 !== 0 ? "lg:mt-16" : ""}`}
            >
              {/* NUMBER */}
              <div className="absolute -top-5 left-10 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 border border-red-900 text-red-900 font-bold shadow">
                {idx + 1}
              </div>

              {/* CARD */}
              <div className="relative h-full rounded-[2rem] bg-white p-6 shadow">

                <div className="pt-6 mb-6">
                  <h3 className="text-[20px] font-bold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-slate-500">
                    {s.description}
                  </p>
                </div>

                <div className="relative mt-auto aspect-[1/1.2] rounded-2xl bg-gradient-to-b from-[#eef4ff] to-[#f8fbff] flex items-end justify-center">
                  <div className="relative w-[85%] h-[90%]">
                    <Image src={s.image} alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden pt-12">

          {/* 🔵 TOP NUMBER TABS */}
          <div className="flex justify-center gap-4 mb-8">
            {displaySteps.map((_, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 flex items-center justify-center rounded-full border font-bold transition-all
                  ${activeIndex === idx
                    ? "btn-gradient btn-gradient-glow text-white scale-110 shadow-lg"
                    : "bg-white text-red-900 border-red-900"
                  }`}
              >
                {idx + 1}
              </div>
            ))}
          </div>

          {/* 🔵 SLIDER */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
          >
            {displaySteps.map((s, idx) => (
              <SwiperSlide key={idx}>
                <div className="px-2">
                  <div className="relative rounded-[2rem] bg-white p-6 shadow">

                    <div className="pt-2 mb-6">
                      <h3 className="text-[20px] font-bold mb-2">
                        {s.title}
                      </h3>
                      <p className="text-[14px] text-slate-500">
                        {s.description}
                      </p>
                    </div>

                    <div className="relative mt-auto aspect-[1/1.2] rounded-2xl bg-gradient-to-b from-[#eef4ff] to-[#f8fbff] flex items-end justify-center">
                      <div className="relative sm:w-[85%] sm:h-[90%] w-[90%] h-[90%]">
                        <Image src={s.image} alt="" fill className="object-contain" />
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </Container>
    </section>
  );
}