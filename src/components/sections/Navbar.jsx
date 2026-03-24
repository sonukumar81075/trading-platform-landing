"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";


export function Navbar({ brand, links }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = links.slice(0, 2);
  const rightLinks = links.slice(2, 4);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed md:top-6 top-0 z-50 w-full md:px-4 px-0 font-lexend"
          >
            <div
              className={[
                "w-full md:w-auto mx-auto md:max-w-fit md:rounded-full border border-[var(--brand-stroke)] bg-white/85 px-6 py-3 transition-all duration-300 backdrop-blur-md",
                scrolled
                  ? "shadow-xl shadow-[rgba(31,115,183,0.12)] ring-1 ring-[var(--brand-stroke)]"
                  : "md:shadow-sm shadow-none"
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-8 md:gap-12 px-2">

                {/* Desktop Left Links */}
                <nav className="hidden items-center gap-6 md:flex">
                  {leftLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-full px-4 py-2 text-[15px] font-[700] text-[var(--heading)] transition-colors hover:bg-red-50/50 hover:text-red-900"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                {/* Logo */}
                <Link
                  href="/"
                  // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="cursor-pointer flex items-center"
                >
                  <Image
                    src="/images/logo-e1590145859117.png"   // 👉 apna logo path
                    alt="Lytechx Logo"
                    width={120}              // 👉 adjust size
                    height={40}
                    priority
                    className="object-contain"
                  />
                </Link>

                {/* Desktop Right Links */}
                <nav className="hidden items-center gap-6 md:flex">
                  {rightLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-full px-4 py-2 text-[15px] font-[700] text-[var(--heading)] transition-colors hover:bg-red-50/50 hover:text-red-900"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-[var(--heading)] text-white"
                  aria-label="Open menu"
                >
                  <Icon name="menu" className="h-5 w-5" />
                </button>

              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] w-screen h-screen bg-white font-lexend flex flex-col items-center pt-28"
          >

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 text-slate-900"
            >
              <IoMdClose className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="absolute left-6 top-6 border-b-4 border-[var(--brand)] text-3xl font-black text-slate-900"
            >
              {brand}
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-8 text-lg font-semibold text-slate-700">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-slate-900"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}