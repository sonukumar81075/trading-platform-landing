import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  external = false,
}) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-sm hover:from-blue-700 hover:to-violet-700"
      : variant === "secondary"
      ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
      : "bg-transparent text-slate-700 hover:bg-slate-900/5";

  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
}