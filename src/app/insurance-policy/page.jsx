import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getInsurancePolicyData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Insurance Policy & Claim Procedure",
  description:
    "Insurance policy information and claim process for services provided through Lytechx systems.",
};

export default async function InsurancePolicyPage() {
  const { insurance } = await getInsurancePolicyData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={insurance.title}
            description={insurance.description}
            align="center"
          />
          <LegalDocumentSections sections={insurance.sections} />
        </div>
      </Container>
    </main>
  );
}
