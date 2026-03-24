"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import LeadModal from "./LeadModal";

const trainings = [
    {
        id: "stocks",
        title: "MT4/MT5 Copy Trading",
        description: "Mirror professional trades automatically in your own account with reliable execution.",
        image: "/images/copy-trading-service.svg",
        features: ["Live trade copying", "Risk controls", "Multi-account support"],
        linkText: "START TRADING",
        drivingType: "Car",
        // New Design Tokens 
    },
    {
        id: "forex",
        title: "Custom Indicator Development",
        description: "We code custom indicators for MT4/MT5 based on your strategy and signal conditions.",
        image: "/images/indicator-development-service.svg",
        features: ["Custom logic coding", "Alert-enabled indicators", "Optimized chart performance"],
        linkText: "GET SIGNALS",
        drivingType: "Bike",
        // New Design Tokens 
    },
    {
        id: "crypto",
        title: "EA Development and Rental",
        description: "Automate your strategy with custom EAs or rent profitable bots for immediate use.",
        image: "/images/ea-rental-service.svg",
        features: ["Auto trading EAs", "Rental-ready bots", "Stable live deployment"],
        linkText: "JOIN NOW",
        drivingType: "License",
    },
];

const ProfessionalTraining = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section id="services" className="md:pt-32 pt-20   bg-gradient-to-b from-white to-[var(--brand-muted)] font-lexend overflow-hidden  ">
            <Container>
                <SectionHeading
                    title="Forex IT Services for Traders"
                    description="Developer-built systems for copy trading, automation, and execution efficiency."
                />

                {/* DESKTOP GRID */}
                <div className="hidden lg:grid gap-8 pt-16 lg:grid-cols-3">
                    {trainings.map((item) => (
                        <Card item={item} key={item.id} setIsModalOpen={setIsModalOpen} />
                    ))}
                </div>

                {/* MOBILE SLIDER */}
                <div className="lg:hidden pt-12  relative px-4">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".next-btn",
                            prevEl: ".prev-btn",
                        }}
                    >
                        {trainings.map((item) => (
                            <SwiperSlide key={item.id} className="pb-12">
                                <Card item={item} setIsModalOpen={setIsModalOpen} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* CUSTOM NAVIGATION */}
                    <div className="flex justify-center gap-6 mt-2">
                        <button className="prev-btn w-12 h-12 rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-slate-200 flex items-center justify-center">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="next-btn w-12 h-12 rounded-full bg-slate-900 text-white transition-all hover:bg-slate-800 flex items-center justify-center">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>


                <LeadModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    data={data}
                />
            </Container>
        </section>
    );
};

// CLEANER, MODERN CARD COMPONENT
const Card = ({ item, setIsModalOpen }) => {
    return (
        <article
            className={`group relative flex h-full flex-col rounded-[2.5rem] 
            bg-gradient-to-b from-[var(--brand-light)]/25 to-[var(--accent)]/10 
            border border-slate-100 p-8 md:p-10 shadow-sm 
            transition-all duration-500 hover:shadow-xl hover:-translate-y-3 overflow-hidden`}
        >

            {/* Decorative Blur Background */}
            <div
                className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px] opacity-20 ${item.glowColor || ""}`}
            ></div>

            {/* IMAGE */}
            <div className="relative w-full h-36 mb-8 overflow-visible">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="mb-4 sm:text-2xl text-xl font-extrabold text-slate-900 leading-tight">
                    {item.title}
                </h3>

                <p className="mb-6 text-[15px] text-slate-600 leading-relaxed font-medium">
                    {item.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full ${item.bgColor || "bg-slate-200"
                                    } border border-white shadow-sm`}
                            >
                                <CheckCircle2
                                    className={`h-4 w-4 ${item.accentColor || "text-slate-700"
                                        }`}
                                />
                            </div>
                            <span className="text-[12px] font-bold sm:text-[14px] text-slate-700 tracking-tight">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* BUTTON */}
                <div className="mt-auto">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center mt-6 md:mt-0 cursor-pointer w-full rounded-2xl btn-gradient btn-gradient-glow py-4.5 text-[13px] font-black text-white transition-all hover:brightness-110 shadow-lg uppercase tracking-[0.15em]"
                    >
                        {item.linkText}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProfessionalTraining;