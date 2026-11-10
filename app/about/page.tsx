import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE, SITE_DEFAULT_DESCRIPTION, SMART_UI } from "@/lib/constants";
import { PLATFORM, PLATFORM_TERMS } from "@/lib/platform-copy";
import { webPageJsonLd } from "@/lib/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { redirectIfAuthenticated } from "@/lib/server/redirect-if-authenticated";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description: `${PLATFORM.aboutIntro}`,
  path: "/about",
});

export default async function AboutPage() {
  await redirectIfAuthenticated();

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/about",
          title: `About ${SITE.name}`,
          description: SITE_DEFAULT_DESCRIPTION,
        })}
      />
      <Section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700">About</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
            About {SITE.name}
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-700">
            <p>{PLATFORM.aboutIntro}</p>
            <p>
              {SITE.name} is a {PLATFORM_TERMS.drivingEducationPlatform.toLowerCase()} that combines Pass Pilot
              Score assessments, {SMART_UI.personalisedReports.toLowerCase()}, {SMART_UI.insights}, {PLATFORM_TERMS.coachingTools}{" "}
              and a growing {PLATFORM_TERMS.learningCentre}. It is not an official DVSA product and should always
              be reviewed alongside your instructor and on-road performance.
            </p>
            <p>
              Learners, supervisors and instructors each have a dedicated workspace so the right people see the
              right information at the right time.
            </p>
          </div>

          <h2 className="mt-12 font-heading text-2xl font-semibold tracking-tight text-brand-950">
            How {SITE.name} started
          </h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-brand-700">
            <p>
              {SITE.name} was founded by Jareer Zeenam, a software engineer with an MSc in Artificial Intelligence
              and Data Science, who designed and built the platform.
            </p>
            <p>
              The idea came while Jareer was learning to drive. His instructor could judge his progress from week to
              week, but none of it was recorded anywhere he could see, and there was no objective way to know when he
              was ready to book his test. Learners already produce useful signals, such as lessons taken, mock-test
              faults, confidence and weak areas, but nobody was turning them into a clear answer.
            </p>
            <p>
              That instructor, Philip Acquaye-Mensah, is a DVSA-approved driving instructor and now {SITE.name}&apos;s
              co-founder and Head of Driving Education. He makes sure the product fits how driving is really taught
              and tested.
            </p>
            <p>
              Our goal is simple: fewer failed tests, safer new drivers and a smarter way to learn to drive, starting
              in the UK.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
