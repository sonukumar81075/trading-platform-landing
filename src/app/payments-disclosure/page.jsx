import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getPaymentsDisclosureData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Payments Disclosure",
  description:
    "This Payments Disclosure explains how we handle payments and refunds for our services.",
};

export default async function PaymentsDisclosurePage() {
  const { paymentsDisclosure } = await getPaymentsDisclosureData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={paymentsDisclosure.title}
            description={paymentsDisclosure.description}
            align="center"
          />
          <LegalDocumentSections sections={paymentsDisclosure.sections} />
        </div>
      </Container>
    </main>
  );
}
