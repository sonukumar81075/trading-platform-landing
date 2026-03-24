import { getLandingData } from "@/lib/data";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import LeadSection from "@/components/sections/LeadSection";
import ProfessionalTraining from "@/components/sections/ProfessionalTraining";
import { WhyChooseLytechx } from "@/components/sections/WhyChooseLytechx";

export default async function Home() {
  const { hero, stats, services, steps, testimonials, faq, leadModal } =
    await getLandingData();

  return (
    <main className="min-h-screen">
      <Hero data={hero} />
      <WhyChooseLytechx />
      <ProfessionalTraining data={leadModal} />
      <HowItWorks steps={steps} />
      <Stats stats={stats} />
      <Testimonials testimonials={testimonials} />
      <LeadSection data={leadModal} />
      <FAQ items={faq} />
    </main>
  );
}

