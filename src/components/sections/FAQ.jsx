import { FiHelpCircle } from "react-icons/fi";
import { Container } from "../ui/Container";
import { FaqAccordion } from "./FaqAccordion";
import { SectionHeading } from "../ui/SectionHeading";

export function FAQ({ items }) {
  return (
    <section id="faq" className=" md:pt-32 pt-20  bg-gradient-to-b from-white to-[var(--brand-muted)] font-lexend overflow-hidden">
      <Container>

        <SectionHeading
          eyebrow="FAQ’s"
          title="Frequently Asked Questions"
          description="Answers to common questions about our trading platform and services."
        />
        <div className="mt-14 max-w-4xl mx-auto">
          <FaqAccordion items={items} />
        </div>

      </Container>
    </section>
  );
}