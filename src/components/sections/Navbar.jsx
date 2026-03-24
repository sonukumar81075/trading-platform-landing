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
            className="fixed top-3 z-50 w-full px-2 sm:px-3 md:top-6 md:px-4 font-lexend"
          >
            <div
              className={[
                "relative w-full mx-auto max-w-[390px] md:max-w-fit md:w-auto rounded-[26px] md:rounded-full sm:border border-[var(--brand-stroke)] bg-white/90 px-3 md:px-6 py-3 transition-all duration-300 backdrop-blur-md overflow-visible",
                scrolled
                  ? "shadow-xl shadow-[rgba(31,115,183,0.12)] ring-1 ring-[var(--brand-stroke)]"
                  : "shadow-sm"
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-3 md:gap-12 px-1 md:px-2">

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
                    width={115}
                    height={36}
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
                  onClick={() => setOpen((v) => !v)}
                  className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white text-[var(--accent)] shadow-sm"
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? <IoMdClose className="h-5 w-5" /> : <Icon name="menu" className="h-5 w-5" />}
                </button>

              </div>

              {/* Mobile Dropdown Menu */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden absolute left-0 right-0 top-[calc(100%+10px)] rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  >
                    <nav className="flex flex-col gap-3 text-[16px] font-[700] text-slate-700">
                      {links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="transition hover:text-[var(--accent)]"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}