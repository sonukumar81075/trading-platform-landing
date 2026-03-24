"use client";

import Link from "next/link";
import { LineChart, BellRing } from "lucide-react";

// ✅ DATA ARRAY
const actions = [
    {
        label: "START TRADING",
        href: "/packages?type=Car",
        icon: <LineChart size={20} />,
        textColor: "text-white",
        bg: "btn-gradient",
    },
    {
        label: "GET SIGNALS",
        href: "#lead-form",
        icon: <BellRing size={20} />,
        textColor: "text-[var(--brand)]",
        bg: "bg-white ring-1 ring-[var(--brand)]/25",
        hover: "hover:text-[var(--accent)] hover:ring-[var(--accent)]/40",
    },
];

export default function MobileStickyBar() {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md md:hidden">
            <div className="flex items-center justify-around px-2 py-3 rounded-full bg-[#f8fafc] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100">

                {actions.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        target={item.target || "_self"}
                        className={`flex flex-col items-center justify-center gap-1.5 px-4 py-2 rounded-2xl transition-all active:scale-95
            ${item.bg || ""} ${item.hover || ""}`}
                    >
                        {item.icon}
                        <span className={`text-[9px] font-extrabold tracking-wider ${item.textColor}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}

            </div>
        </div>
    );
}