"use client";

import { usePathname } from "next/navigation";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { Footer } from "@/components/sections/Footer";

export function FooterShell({ footer }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <AppDownloadSection data={footer.cta} />}
      <Footer data={footer} />
    </>
  );
}

