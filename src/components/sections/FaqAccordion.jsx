"use client";

import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaqItem } from "../ui/FaqItem";

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 👉 Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 👉 Mobile: limit to 4, Desktop: show all
  const visibleItems =
    isMobile && !showAll ? items.slice(0, 4) : items;

  // Split into 2 columns
  const leftItems = visibleItems.filter((_, i) => i % 2 === 0);
  const rightItems = visibleItems.filter((_, i) => i % 2 !== 0);

  return (
    <div className="max-w-5xl mx-auto">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-3 sm:space-y-6">
          {leftItems.map((item, idx) => {
            const actualIndex = idx * 2;
            return (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === actualIndex}
                onClick={() => toggle(actualIndex)}
              />
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-3 sm:space-y-6">
          {rightItems.map((item, idx) => {
            const actualIndex = idx * 2 + 1;
            return (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === actualIndex}
                onClick={() => toggle(actualIndex)}
              />
            );
          })}
        </div>
      </div>

      {/* ✅ MOBILE BUTTON (SHOW MORE / LESS) */}
      {isMobile && items.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              setShowAll(!showAll);

              // 👉 Optional smooth scroll when collapsing
              if (showAll) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="px-6 py-2.5 rounded-full   text-blue-900 border border-blue-900  font-semibold hover:bg-[#2D5BFF] transition"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

