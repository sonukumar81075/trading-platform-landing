import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getLegalData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy explaining how Lytechx collects, uses, and protects your data while you use our platform.",
};

export default async function PrivacyPolicyPage() {
  const { privacy } = await getLegalData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={privacy.title}
            description={privacy.description}
            align="center"
          />
          <LegalDocumentSections sections={privacy.sections} />
        </div>
      </Container>
    </main>
  );
}
