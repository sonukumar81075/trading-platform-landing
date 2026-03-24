"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

export function Hero({ data }) {
  return (
    <section className="section-surface relative overflow-x-clip pb-16 pt-24 font-lexend sm:pt-32 md:pb-20 md:pt-28 lg:pb-28 lg:pt-28 xl:pb-40 xl:pt-36">

      {/* Background */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[min(55vw,720px)] bg-gradient-to-b from-[var(--brand-light)]/25 to-[var(--accent)]/10 lg:block"
        style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />
      {/* Trading Background Animation */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute right-8 top-16 h-[70%] w-[52%] opacity-35">
          <svg
            viewBox="0 0 900 520"
            className="h-full w-full animate-chart-drift"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <linearGradient id="tickerGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.2" />
                <stop offset="60%" stopColor="var(--brand)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <polyline
              points="20,470 100,420 180,438 260,355 340,380 420,310 500,332 580,250 660,275 740,210 820,236"
              stroke="url(#tickerGlow)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-ticker-path"
            />
            <polyline
              points="40,500 120,475 200,490 280,430 360,452 440,398 520,420 600,360 680,382 760,340 860,360"
              stroke="var(--brand)"
              strokeOpacity="0.35"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute right-[7%] top-[20%] flex gap-5 opacity-45">
          {["h-16", "h-24", "h-14", "h-28", "h-20", "h-12"].map((h, i) => (
            <div
              key={i}
              className={`relative ${h} w-2 rounded-full bg-[var(--brand)]/60 animate-candle-float`}
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              <span className="absolute -left-2 top-1/2 h-4 w-6 -translate-y-1/2 rounded-sm bg-white/55" />
            </div>
          ))}
        </div>
      </div>

      <Container className="relative z-10 w-full max-w-[min(100%,1440px)] px-4 md:px-6 lg:px-8 xl:px-10">

        <div className="mx-auto grid min-w-0 max-w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* LEFT CONTENT - IMPROVED BALANCE & CONTENT */}
          <div className="order-1 flex min-w-0 max-w-full flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left pt-10">

            {/* 🔵 New Trust Badge */}
            <Reveal delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider ring-1 ring-inset ring-blue-700/10">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                </span>

                <span className="text-shimmer">
                  World-Class MT4/MT5 Solutions
                </span>

              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.15}>
              <h1 className="hidden text-balance text-center font-[800] leading-[1.1] text-slate-900 md:block md:pt-0 md:text-5xl lg:text-left xl:text-6xl">
                The Smarter Way to{" "}
                <span className="bg-gradient-to-r from-[#2F6B9A] via-[#3B82F6] to-[#D64541] bg-clip-text pr-2 text-transparent">
                  Automate Forex
                </span>
                with MT4/MT5 Tech.
              </h1>

              {/* ✅ MOBILE DESIGN */}
              <div className="flex flex-col items-start md:hidden">

                <h1 className="flex flex-wrap justify-center text-[40px] font-black leading-[1.2] tracking-tight sm:text-4xl">
                  <span className="mr-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text italic text-transparent">
                    Smart
                  </span>
                  <span className="mr-2 text-slate-900">Forex</span>
                  <span className="relative text-slate-900">
                    App
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-blue-600"></span>
                  </span>
                </h1>
                <div className="relative mt-6 flex w-full items-end justify-end">
                  <span className="absolute h-6 w-6 animate-ping rounded-full bg-blue-400 opacity-30"></span>
                  <span className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-700 shadow-md"></span>
                </div>
              </div>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 hidden max-w-xl text-center text-lg font-medium leading-relaxed text-slate-500 md:block lg:mx-0 lg:text-left">
                {data.subtitle || "Elevate your trading with developer-built copy trading, custom indicators, and automated EA rental solutions designed for high-performance traders."}
              </p>
              <p className="mx-auto mt-4 max-w-md text-center text-[17px] font-medium leading-relaxed text-blue-900 md:hidden">
                Developer-built copy trading, indicator tools, and EAs for MT4/MT5 traders.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.3}>
              <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-4 lg:justify-start">
                <Link
                  href="#services"
                  className="btn-gradient inline-flex items-center justify-center rounded-full sm:px-8 px-6 py-4 sm:text-sm text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Start Trading
                </Link>
                <Link
                  href="#lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-white sm:px-8 px-6 py-4 sm:text-sm text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--brand)] shadow-sm ring-2 ring-[var(--brand)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:ring-[var(--accent)]/40 active:scale-[0.98]"
                >
                  Get Signals
                </Link>
              </div>
            </Reveal>

            {/* 📊 New Trust Indicators / Stats Section */}
            <Reveal delay={0.4} className="hidden md:block">
              <div className="mt-12 grid w-full grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-3 lg:max-w-xl">
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">5k+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Traders</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Monitoring</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE - KEPT UNCHANGED */}
          <div className="order-2 mt-0 flex min-w-0 w-full max-w-full justify-center sm:mt-10 lg:col-span-5 lg:mt-0 lg:justify-end">
            <div className="relative w-full max-w-[min(100%,340px)] pt-0 sm:max-w-[300px] md:max-w-[320px] md:pt-10">
              <Reveal delay={0.2} className="relative z-20 block">
                <div className="relative mx-auto w-full max-w-[350px] transition-transform duration-700 hover:rotate-0 sm:max-w-[300px] lg:mx-0 lg:max-w-[300px] lg:rotate-3 xl:max-w-[320px] xl:rotate-6">
                  <div className="mt-10 block lg:hidden">
                    <Image
                       src={"/images/Trading-PNG-Photo.png"}
                      alt="trading app"
                      width={800}
                      height={800}
                      className="h-auto w-full max-w-[100%] transition duration-300 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="hidden lg:block">
                    <div className="overflow-hidden rounded-[2.5rem]   bg-white shadow-[0_40px_80px_-24px_rgba(0,0,0,0.28)] sm:rounded-[3rem]  ">
                      <Image
                        src={"/images/Trading-PNG-Photo.png"}
                        alt={data.heroImage.alt}
                        width={800}
                        height={800}
                        className="h-[500px] w-full max-w-[500px] transition duration-300 hover:scale-[1.03]"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -left-2 top-[18%] z-30 hidden animate-bounce-slow xl:block 2xl:-left-8">
                    <div className="max-w-[200px] rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5 2xl:max-w-none 2xl:p-4">
                      <div className="flex items-center gap-2 2xl:gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-600 2xl:h-10 2xl:w-10">
                          ✓
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase text-slate-400 2xl:text-xs">
                            Trade Status
                          </p>
                          <p className="text-xs font-bold text-slate-900 2xl:text-sm">
                            EA Running Profitably
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-2 bottom-[28%] z-30 hidden animate-bounce-slower xl:block 2xl:-right-6">
                    <div className="max-w-[180px] rounded-2xl bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] p-3 text-white shadow-xl 2xl:max-w-none 2xl:p-4">
                      <p className="text-[10px] font-medium opacity-90 2xl:text-xs">
                        Next Execution
                      </p>
                      <p className="text-sm font-bold italic 2xl:text-lg">
                        Today @ 4:30 PM
                      </p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-2/3 animate-pulse rounded-full bg-[var(--accent)]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -z-10">
                  <div className="absolute h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 animate-ping-slow rounded-full border border-[var(--accent)]/20 sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px]" />
                  <div className="absolute h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-[var(--brand)]/20 sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]" />
                  <div className="absolute h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-dashed border-[var(--brand-light)]/30 sm:h-[480px] sm:w-[480px] md:h-[650px] md:w-[650px]" />
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}