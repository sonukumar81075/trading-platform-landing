import Link from "next/link";

export function AppBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="/packages?type=Car"
        className="inline-flex items-center justify-center rounded-xl btn-gradient px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        Start Trading
      </Link>
      <Link
        href="#lead-form"
        className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-[var(--brand)] ring-2 ring-[var(--brand)]/25 shadow-sm transition-all duration-300 hover:text-[var(--accent)] hover:ring-[var(--accent)]/35 hover:-translate-y-0.5 active:scale-[0.98]"
      >
        Get Signals
      </Link>
    </div>
  );
}

