import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getLegalData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Lytechx services, platform tools, and trading systems.",
};

export default async function TermsAndConditionsPage() {
  const { terms } = await getLegalData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={terms.title}
            description={terms.description}
            align="center"
          />
          <LegalDocumentSections sections={terms.sections} />
        </div>
      </Container>
    </main>
  );
}
