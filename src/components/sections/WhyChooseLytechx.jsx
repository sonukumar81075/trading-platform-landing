"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import {
  UserCheck,
  BookOpen,
  Smartphone,
  Calendar,
  RefreshCcw,
  BadgeCheck,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  { title: "Expert Trading Mentors", description: "Learn from market professionals with practical experience.", icon: UserCheck, color: "from-blue-500 to-cyan-400", bg: "bg-blue-50/50" },
  { title: "Structured Strategy Learning", description: "Progress through a data-driven trading curriculum.", icon: BookOpen, color: "from-indigo-500 to-purple-400", bg: "bg-indigo-50/50" },
  { title: "Signals in One App", description: "Manage watchlists, alerts, and trade ideas from one app.", icon: Smartphone, color: "from-purple-500 to-pink-400", bg: "bg-purple-50/50" },
  { title: "Flexible Session Timing", description: "Join sessions that fit your daily routine.", icon: Calendar, color: "from-rose-500 to-orange-400", bg: "bg-rose-50/50" },
  { title: "Portfolio Tracking", description: "Review performance and optimize your execution with ease.", icon: RefreshCcw, color: "from-amber-500 to-yellow-400", bg: "bg-amber-50/50" },
  { title: "Risk Management Guidance", description: "Master position sizing and drawdown control with confidence.", icon: BadgeCheck, color: "from-emerald-500 to-teal-400", bg: "bg-emerald-50/50" },
];

export function WhyChooseLytechx() {
  return (
    <section className="md:pt-32 pt-20  bg-gradient-to-b from-[var(--brand-muted)] to-white font-lexend overflow-hidden">
      <Container>
        <div className="mb-20">
          <SectionHeading
            title="Why Choose Lytechx?"
            description="Premium trading education simplified for your success."
          />
        </div>
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-14 choose-swiper"
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <FeatureCard feature={feature} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </Container>

      <style jsx global>{`
        .choose-swiper .swiper-pagination-bullet-active {
          background: #0f172a !important;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ feature, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-white rounded-[4rem_1rem_4rem_1rem] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 flex flex-col items-start overflow-hidden">
        <div className="relative mb-8">
          <div className={`absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-r ${feature.color}`} />
          <div className={`relative w-16 h-16 rounded-2xl ${feature.bg} border border-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg]`}>
            <feature.icon className="size-8 text-slate-800" strokeWidth={1.5} />
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
              Step 0{idx + 1}
            </span>
            <div className="h-px w-8 bg-slate-100 group-hover:w-12 transition-all duration-500" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-none">{feature.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-[220px]">{feature.description}</p>
        </div>
        <span className="absolute -bottom-10 -right-4 text-[10rem] font-black text-slate-50 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none select-none">
          {idx + 1}
        </span>
      </div>
    </motion.div>
  );
}
