"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

import { useInView, motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

// Helper component for the counting logic
function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/,/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats({ stats }) {
  // We use the first 3 to match the screenshot exactly
  const displayStats = stats.slice(0, 3);

  return (
    <section id="stats" className="md:pt-32 pt-20  bg-[#FFFFFF] font-lexend">
      <Container className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="md:pb-16 pb-12">
          <SectionHeading
            title="Forex Technology Performance"
            description="Production-grade MT4/MT5 infrastructure, algorithmic execution, and trader-focused automation systems."
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Unique UI Card */}
              <div className="relative z-10 h-full sm:p-10 p-0 px-8 py-2 bg-white sm:rounded-[2.5rem] rounded-2xl border sm:border-slate-100 border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500   group-hover:-translate-y-2">

                {/* Top Corner Icon/Accent */}
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-2xl btn-gradient btn-gradient-glow flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <dt className="md:text-[40px] lg:text-[50px] text-[30px] font-lexend font-[700] text-[#333333] md:leading-[45px] lg:leading-[67px] leading-[36px] mb-2">
                    <Counter value={stat.value} />
                  </dt>
                  <dd className="text-slate-500 font-semibold uppercase tracking-widest text-xs sm:mb-6 mb-2">
                    {stat.label}
                  </dd>
                </div>

                {/* Bottom Interactive Bar */}
                <div className="w-12 h-1.5 bg-red-900/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-900 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>

                {/* Subtle Geometric Pattern Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden rounded-[2.5rem]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(#066fa9 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-[#066fa9] blur-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


