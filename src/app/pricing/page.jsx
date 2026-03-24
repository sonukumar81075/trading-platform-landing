import { getLicensePricingData } from "@/lib/data";
import { PricingSection } from "@/components/sections/PricingSection";

export default async function PricingPage() {
  const { pricing } = await getLicensePricingData();

  return (
    <main className="min-h-screen pt-24 md:pt-28 pb-16">
      <PricingSection data={pricing} />
    </main>
  );
}