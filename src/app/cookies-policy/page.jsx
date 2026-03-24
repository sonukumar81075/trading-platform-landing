import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalDocumentSections } from "@/components/ui/LegalDocumentSections";
import { getCookiesPolicyData } from "@/lib/data";
import { typo } from "@/lib/typography";

export const metadata = {
  title: "Cookies Policy",
  description:
    "This Cookies Policy explains how we use cookies and similar technologies to enhance your experience on our website.",
};

export default async function CookiesPolicyPage() {
  const { cookies } = await getCookiesPolicyData();

  return (
    <main className={typo.pageLegal}>
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title={cookies.title}
            description={cookies.description}
            align="center"
          />
          <LegalDocumentSections sections={cookies.sections} />
        </div>
      </Container>
    </main>
  );
}
