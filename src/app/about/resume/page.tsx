import Link from "next/link";
import Image from "next/image";
import BackArrow from "../../../../public/back-arrow.svg";
import Header from "../../../components/header/header";
import ExternalLinks from "../../../components/external-links/external-links";
import { EDUCATION, EXPERIENCE, PUBLICATIONS } from "./resume-data";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Resume",
};

// SUB-COMPONENTS

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-2xl font-medium text-slate-950">{children}</div>
);

const Divider = () => <div className="h-[2px] w-full bg-slate-950" />;

const ExperienceItem = ({
  role,
  firm,
  url,
  year,
  description,
}: (typeof EXPERIENCE)[0]) => (
  <div>
    <div className="mb-2 flex flex-col gap-y-1 sm:flex-row sm:items-start sm:justify-between">
      <span className="inline-block text-base font-semibold text-slate-950">
        {role} /{" "}
        {url ? (
          <Link
            href={url}
            target="_blank"
            className="text-base font-semibold text-slate-950 underline decoration-neutral-400 underline-offset-4 duration-200 hover:decoration-slate-950"
          >
            {firm}
          </Link>
        ) : (
          firm
        )}
      </span>
      <span className="inline-block shrink-0 text-base font-normal text-slate-950 sm:ml-8 md:ml-16">
        {year}
      </span>
    </div>
    <div className="text-base font-normal text-slate-950">{description}</div>
  </div>
);

const PublicationItem = ({
  id,
  authors,
  title,
  journal,
  details,
  doi,
}: (typeof PUBLICATIONS)[0]) => (
  <div className="flex flex-row gap-x-2 font-serif">
    {/* Citation Number */}
    <div className="inline-block items-start text-xs font-light text-slate-950">
      {id}
    </div>

    {/* Citation Content */}
    <div className="text-base font-normal text-slate-950">
      {authors}. {title}. <em>{journal}</em>, {details ? `${details}.` : ""}
      {doi && (
        <>
          {" "}
          <Link
            href={doi}
            target="_blank"
            className="italic hover:underline underline-offset-4 decoration-neutral-400"
          >
            {doi}
          </Link>
        </>
      )}
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-y-16">
      <Header />

      <main className="mt-16 flex flex-col gap-y-16 pb-16 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:pb-32 lg:gap-x-16">
        {/* Left Content Column */}
        <div className="flex flex-col gap-y-8 sm:col-span-2 sm:col-start-1">
          {/* Resume Header */}
          <section className="flex flex-col gap-y-8">
            <div className="flex flex-row items-end justify-between">
              <h1 className="text-2xl font-medium text-slate-950">Resume</h1>
              <Link
                href="/about"
                className="flex flex-row gap-x-1 items-center"
              >
                <Image
                  src={BackArrow}
                  alt="Back arrow"
                  className="inline-block"
                />
                <span className="text-base font-normal text-slate-950">
                  Back
                </span>
              </Link>
            </div>
          </section>

          <Divider />

          {/* Education Section */}
          <section className="flex flex-col gap-y-6">
            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-col gap-y-6">
              {EDUCATION.map((item, i) => (
                <div key={i}>
                  <div className="mb-2 flex flex-col gap-y-1  sm:flex-row sm:items-start sm:justify-between">
                    <span className="inline-block text-base font-semibold text-slate-950">
                      {item.school}
                    </span>
                    <span className="inline-block shrink-0 text-base font-normal text-slate-950 sm:ml-8 md:ml-16">
                      {item.year}
                    </span>
                  </div>
                  <p className="font-serif text-base font-normal italic text-slate-950">
                    {item.degree}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Experience Section */}
          <section className="flex flex-col gap-y-6">
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="flex flex-col gap-y-6">
              {EXPERIENCE.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </div>
          </section>

          <Divider />

          {/* Publications Section */}
          <section className="flex flex-col gap-y-6">
            <SectionTitle>Publications</SectionTitle>
            <div className="flex flex-col gap-y-6">
              {PUBLICATIONS.map((pub) => (
                <PublicationItem key={pub.id} {...pub} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="hidden sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:block">
          <ExternalLinks />
        </div>
      </main>
    </div>
  );
}
