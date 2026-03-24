import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Footer({ data }) {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0b1f45] via-[#071633] to-[#020b1b] font-lexend">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      {/* <FooterCarAnimation /> */}

      <Container className="relative z-10 pb-14 pt-10 md:pb-16 md:pt-14">
        {/* Card style columns like reference */}
        <div className="grid  sm:gap-5 gap-2 pb-8 grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {data.columns.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm sm:p-6"
            >
              <h3 className="text-[24px] font-semibold text-white sm:text-[26px]">{col.title}</h3>
              <div className="mb-5 mt-2 h-[2px] w-24 rounded-full bg-gradient-to-r from-[var(--brand-light)] to-transparent" />

              <ul className="space-y-2.5">
                {col.links.map((l) => {
                  const isMailto = l.href.startsWith("mailto:");
                  const className = isMailto
                    ? "text-[15px] font-[500] text-[var(--brand-light)] underline decoration-dotted underline-offset-4 transition-colors hover:text-white"
                    : "text-[15px] font-[500] text-slate-200/90 transition-colors hover:text-[var(--brand-light)]";

                  return (
                    <li key={l.label}>
                      <Link href={l.href} className={className}>
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Full-width divider */}
        {/* <div className="relative left-1/2 h-px w-screen -translate-x-1/2 bg-white/10" /> */}

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 pb-8 pt-6 md:flex-row md:gap-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer flex items-center"
            >
              <Image
                src="/images/logo-e1590145859117.png"
                alt="Lytechx logo"
                width={108}
                height={36}
                className="h-10 w-auto object-contain md:h-11"
              />
            </Link>
          </div>

          <div className="text-center text-[13px] font-[500] text-slate-400 md:text-[14px]">{data.legal}</div>

          <div className="flex sm:max-w-[260px] max-w-full flex-wrap justify-center gap-2.5 sm:max-w-none md:justify-end mb-12 sm:mb-0">
            {/* {data.social.map((s) => {
              const isMailto = s.href.startsWith("mailto:");
              const className =
                "grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--brand-light)] hover:bg-[var(--brand)] hover:text-white md:h-9 md:w-9";

              return isMailto ? (
                <a key={s.label} href={s.href} className={className} aria-label={s.label}>
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ) : (
                <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={className}>
                  <Icon name={s.icon} className="h-4 w-4" />
                </Link>
              );
            })} */}
          </div>
        </div>
      </Container>

      {/* Watermark visual at bottom like reference */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 z-0 hidden -translate-x-1/2 opacity-[0.05] md:block">
        <Image
          src="/images/logo-e1590145859117.png"
          alt=""
          width={1200}
          height={400}
          className="h-auto w-[900px] md:w-[1050px] lg:w-[1250px] blur-[2px]"
          style={{
            transform: "perspective(1000px) rotateX(65deg) rotateZ(-10deg)",
          }}
        />
      </div>
    </footer>
  );
}