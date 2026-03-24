import { motion } from "framer-motion";

export function WhyChooseCard({ feature, idx }) {
    // Mapping colors to Tailwind classes
    const colorMap = {
      blue: "bg-blue-50 text-blue-600 ring-blue-100",
      indigo: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      purple: "bg-purple-50 text-purple-600 ring-purple-100",
      rose: "bg-rose-50 text-rose-600 ring-rose-100",
      amber: "bg-amber-50 text-amber-600 ring-amber-100",
      emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative overflow-hidden flex flex-col p-8 rounded-[2rem] bg-white border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all h-full"
      >
        {/* Decorative Gradient Background (visible on hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br from-slate-900 to-transparent pointer-events-none" />
  
        {/* ICON */}
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ring-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 mb-6 ${colorMap[feature.color]}`}>
          <feature.icon strokeWidth={2} className="size-7" />
        </div>
  
        {/* TEXT CONTENT */}
        <div className="relative z-10 text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-900 transition-colors">
            {feature.title}
          </h3>
          <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
            {feature.description}
          </p>
        </div>
  
        {/* BACKGROUND DECORATION (The 01, 02 text) */}
        <span className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity text-8xl font-black text-slate-900 pointer-events-none select-none">
          {idx + 1}
        </span>
        
        {/* ARROW ICON - Shows on hover */}
        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          Learn More <div className="h-px w-4 bg-slate-300"/>
        </div>
      </motion.div>
    );
  }