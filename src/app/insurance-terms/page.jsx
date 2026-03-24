import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getInsuranceTermsData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Insurance Terms & Conditions",
  description:
    "Insurance terms and conditions explaining coverage, exclusions, and claim rules for Lytechx services.",
};

export default async function InsuranceTermsPage() {
  const { insuranceTerms } = await getInsuranceTermsData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={insuranceTerms.title}
            description={insuranceTerms.description}
            align="center"
          />
          <LegalDocumentSections sections={insuranceTerms.sections} />
        </div>
      </Container>
    </main>
  );
}
