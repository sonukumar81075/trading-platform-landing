import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getCancellationRefundPolicyData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "This Cancellation & Refund Policy explains how we handle cancellations and refunds for our services.",
};

export default async function CancellationRefundPolicyPage() {
  const { cancellationRefundPolicy } = await getCancellationRefundPolicyData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={cancellationRefundPolicy.title}
            description={cancellationRefundPolicy.description}
            align="center"
          />
          <LegalDocumentSections sections={cancellationRefundPolicy.sections} />
        </div>
      </Container>
    </main>
  );
}
