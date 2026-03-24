// Sub-component mirroring the Screenshot Cards
function SupportHubCard({ icon, title, description, actionLabel, actionHref }) {
    return (
      <div className="flex flex-col h-full items-center text-center p-10 bg-white border border-slate-100 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-1">
  
        <div className="w-16 h-16 flex items-center justify-center bg-slate-50 text-slate-400 text-2xl rounded-2xl mb-8 border border-slate-100">
          {icon}
        </div>
  
        <h3 className="text-xl font-bold text-[#0f172a] mb-4">
          {title}
        </h3>
  
        <p className="text-slate-700 font-sans leading-relaxed mb-6 px-4">
          {description}
        </p>
  
        {/* 🔥 Important: mt-auto */}
        <a
          href={actionHref}
          className="mt-auto w-full py-4 bg-[#1e293b] text-white rounded-2xl font-bold tracking-tight hover:bg-[#0f172a] transition-colors shadow-lg shadow-slate-200"
        >
          {actionLabel}
        </a>
      </div>
    );
  }
  export default SupportHubCard;