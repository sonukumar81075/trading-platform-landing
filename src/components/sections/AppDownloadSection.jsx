import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function AppDownloadSection({ data }) {
  if (!data) return null;

  return (
    <section className="mt-20  pt-14 font-lexend lg:px-0 md:pt-24 md:pb-4 bg-gradient-to-b from-[var(--brand-muted)] to-white">
      <Container className="text-center ">
        <div className="relative flex w-full justify-center   ">
          <Image
            src="/images/Trading-PNG-Photo.png"
            alt="trading app"
            width={550}
            height={540}
            className="h-auto w-full max-w-[550px] transition duration-300 hover:scale-[1.03]"
          />

          {/* Bottom Shadow Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-b from-transparent to-white opacity-100" />
        </div>
        <div className="mt-6 max-w-4xl mx-auto pb-16">
          <SectionHeading
            // eyebrow="Get Started"
            title="Skip searching for random trading tips."
            description="Start trading with production-ready MT4/MT5 systems today."
          />
        </div>
      </Container>
    </section>
  );
}

