"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Services({ services }) {
  // We duplicate the array to ensure the scroll is seamless
  const tickerItems = [...services, ...services];

  return (
    <section id="services" className="md:pt-32 pt-10 bg-[#FFFFFF] font-lexend overflow-hidden ">

<SectionHeading
  eyebrow="Lytechx Forex Technology"
  title="Start Your Automation Journey"
  description="Copy trading systems, indicator development, and EA solutions for serious traders."
/>

      {/* --- Infinite Scrolling Track --- */}
      <div className="relative flex overflow-hidden pt-20">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30, // Adjust speed here (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {tickerItems.map((s, idx) => (
            <div
              key={`${s.title}-${idx}`}
              className="group flex w-[240px] shrink-0 cursor-pointer flex-col items-center sm:w-[280px] md:w-[320px] lg:w-[350px]"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.04]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 280px, 320px"
                />
              </div>

              {/* Centered Label */}
              <h3 className="text-[20px] font-bold text-[#1c1c1c] transition-colors group-hover:text-slate-900 group-hover:underline group-hover:decoration-[var(--brand)] group-hover:decoration-2">
                {s.title}
              </h3>
            </div>
          ))}
        </motion.div>

        {/* Optional Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>


    </section>
  );
}