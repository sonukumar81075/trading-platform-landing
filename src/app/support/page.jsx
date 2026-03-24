import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEmail, MdLocationPin, MdPhoneInTalk, MdOutlineTimer } from "react-icons/md";
import contactData from "../../../data/contact.json";
import SupportHubCard from "@/components/ui/SupportHubCard";

export default function ContactPage() {
  const data = contactData;

  return (
    <main className="min-h-screen pb-6 font-lexend pt-28 md:pt-40 bg-[#FFFFFF]">
      <Container>
        {/* Header Section - Matches screenshot style */}
        <div className="max-w-4xl mx-auto text-center mb-20">

          <SectionHeading
            title={data.title}
            description={data.description}
            align="center"
          />
 
          {data.intro?.map((para, index) => (
            <p
              key={index}
              className="text-[18px] font-lexend font-[500] leading-[27px] text-[#666666] mx-auto max-w-xl"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Support Grid - 3 Columns like the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Office Address */}
          <SupportHubCard
            icon={<MdLocationPin />}
            title={data.office.title}
            description={data.office.lines.join(", ")}
            actionLabel={data.office.buttonLabel ?? "View Address"}
            actionHref="#office"
          />

          {/* Card 2: Phone */}
          <SupportHubCard
            icon={<MdPhoneInTalk />}
            title={data.phone.title}
            description={[data.phone.scheduleTitle, ...data.phone.scheduleLines].join(" • ")}
            actionLabel={data.phone.number}
            actionHref={`tel:${data.phone.number.replace(/[^+\d]/g, "")}`}
          />

          {/* Card 3: Email */}
          <SupportHubCard
            icon={<MdOutlineEmail />}
            title={data.email.title}
            description={data.email.description}
            actionLabel={data.email.address}
            actionHref={`mailto:${data.email.address}`}
          />
        </div>

        {/* Detailed Info Section: Socials + Customer Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Connect With Us card (light card style) */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {data.connect.title}
              </h2>
              <p className="text-slate-600 text-base font-sans mb-4">
                {data.connect.description}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-3">
                {data.connect.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-5 py-2.5 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-xl text-slate-700 font-medium transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Support card (match normal light card style) */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {data.customerSupport.title}
              </h2>
              <p className="text-slate-600 text-base font-sans mb-4">
                {data.customerSupport.intro}
              </p>
            </div>
            <ul className="space-y-3">
              {data.customerSupport.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-slate-600 text-sm md:text-base font-sans">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs md:text-sm text-slate-400 italic border-t border-slate-100 pt-4">
              {data.customerSupport.note}
            </p>
          </div>
        </div>

        {/* Instructors + Legal & Compliance (from JSON) */}
        <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              {data.instructors.title}
            </h2>
            <p className="text-[15px] md:text-[16px] font-sans text-slate-600 mb-3">
              {data.instructors.intro}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              {data.instructors.points.map((point) => (
                <li
                  key={point}
                  className="text-[15px] md:text-[16px] font-sans text-slate-600"
                >
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-[15px] md:text-[16px] font-sans text-slate-600">
              {data.instructors.note}
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              {data.legal.title}
            </h2>
            {data.legal.body.map((para) => (
              <p
                key={para}
                className="text-[15px] md:text-[16px] font-sans text-slate-600 mb-2"
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

