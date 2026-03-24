import { typo } from "@/lib/typography";

const PRIVACY_CONTACT_TITLES = new Set([
  "9. Contact Us",
  "20. Contact Information",
]);

function PrivacyContactBlock({ intro }) {
  return (
    <>
      {intro ? (
        <p className={`mb-6 ${typo.legalBody}`}>{intro}</p>
      ) : null}
      <div className="flex flex-col items-start gap-2">
        <div className={typo.legalMetaLabel}>
          Email:{" "}
          <a href="mailto:support@lytechx.com" className={typo.legalMetaLink}>
            support@lytechx.com
          </a>
        </div>
        <div className={typo.legalMetaLabel}>
          Website:{" "}
          <a
            href="https://lytechx.com"
            target="_blank"
            rel="noopener noreferrer"
            className={typo.legalMetaLink}
          >
            https://lytechx.com
          </a>
        </div>
      </div>
    </>
  );
}

function SupportContactBlock({ intro }) {
  return (
    <>
      {intro ? <p className={`mb-6 ${typo.legalBody}`}>{intro}</p> : null}
      <div className="flex flex-col items-start gap-2">
        <div className={typo.legalMetaLabel}>
          Email:{" "}
          <a href="mailto:support@lytechx.com" className={typo.legalMetaLink}>
            support@lytechx.com
          </a>
        </div>
        <div className={typo.legalMetaLabel}>
          Phone:{" "}
          <a href="tel:+918065489040" className={typo.legalMetaLink}>
            +91 80654 89040
          </a>
        </div>
      </div>
    </>
  );
}

/** Renders intro + company/address lines + Phone/Email as links */
function AddressContactBlock({ body }) {
  if (!body?.length) return null;
  const intro = body[0];
  const rest = body.slice(1);
  const addressLines = [];
  let phone = null;
  let email = null;
  for (const line of rest) {
    const phoneMatch = line.match(/^Phone:\s*(.+)$/i);
    const emailMatch = line.match(/^Email:\s*(.+)$/i);
    if (phoneMatch) phone = phoneMatch[1].trim();
    else if (emailMatch) email = emailMatch[1].trim();
    else addressLines.push(line);
  }
  return (
    <>
      {intro ? <p className={`mb-4 ${typo.legalBody}`}>{intro}</p> : null}
      {addressLines.length > 0 ? (
        <div className="mb-6 space-y-0.5">
          {addressLines.map((line) => (
            <p key={line} className={typo.legalAddressLine}>
              {line}
            </p>
          ))}
        </div>
      ) : null}
      <div className="flex flex-col items-start gap-2">
        {phone ? (
          <div className={typo.legalMetaLabel}>
            Phone:{" "}
            <a href={`tel:${phone.replace(/\s/g, "")}`} className={typo.legalMetaLink}>
              {phone}
            </a>
          </div>
        ) : null}
        {email ? (
          <div className={typo.legalMetaLabel}>
            Email:{" "}
            <a href={`mailto:${email}`} className={typo.legalMetaLink}>
              {email}
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}

function contactKind(section) {
  if (section.contactVariant === "address") return "address";
  if (section.contactVariant === "privacy") return "privacy";
  if (PRIVACY_CONTACT_TITLES.has(section.title)) return "privacy";
  if (section.isSupport) return "support";
  return null;
}

/**
 * Renders JSON-driven legal sections with consistent typography.
 * @param {{ sections: Array<{ title: string, body?: string[], isList?: boolean, isSupport?: boolean, contactVariant?: string }> }} props
 */
export function LegalDocumentSections({ sections }) {
  if (!sections?.length) return null;

  return (
    <div className={typo.legalSectionsStack}>
      {sections.map((section) => {
        const kind = contactKind(section);

        return (
          <section key={section.title} className={typo.legalCard}>
            <h2 className={typo.legalH2}>{section.title}</h2>

            {kind === "privacy" ? (
              <PrivacyContactBlock intro={section.body?.[0]} />
            ) : kind === "support" ? (
              <SupportContactBlock intro={section.body?.[0]} />
            ) : kind === "address" ? (
              <AddressContactBlock body={section.body} />
            ) : section.isList ? (
              <>
                {section.body[0] ? (
                  <p className={typo.legalListIntro}>{section.body[0]}</p>
                ) : null}
                <ul className={typo.legalUl}>
                  {(section.listOutro
                    ? section.body.slice(1, -1)
                    : section.body.slice(1)
                  ).map((item) => (
                    <li key={item} className={typo.legalListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                {section.listOutro && section.body.length > 1 ? (
                  <p className={`mt-4 ${typo.legalBody}`}>
                    {section.body[section.body.length - 1]}
                  </p>
                ) : null}
              </>
            ) : (
              section.body?.map((para) => (
                <p key={para} className={typo.legalBody}>
                  {para}
                </p>
              ))
            )}
          </section>
        );
      })}
    </div>
  );
}
