"use client";

import React, { useState } from "react";
import LeadModal from "./LeadModal";
import { SectionHeading } from "../ui/SectionHeading";
import { Container } from "../ui/Container";

const LeadSection = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="lead-form" className=" md:pt-32 pt-20  bg-gradient-to-b from-[var(--brand-muted)] to-white font-lexend">
            <Container>
                <SectionHeading
                    // eyebrow="Get Started"
                    title="Build Your Forex System with Us"
                    description="Share your requirement and our development team will contact you for copy trading, indicators, EA development, or EA rental."
                />

                <div className=" shadow-md   flex flex-col items-center justify-center rounded-2xl   py-12 ">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer  px-12 md:py-4 rounded-full py-3 text-[16px] px-4 md:px-12 font-bold text-white  btn-gradient btn-gradient-glow transition-all hover:brightness-105 active:scale-95"
                    >
                        Join Now
                    </button>

                    <LeadModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        data={data}
                    />
                </div>
            </Container>
        </section>
    );
};

export default LeadSection;