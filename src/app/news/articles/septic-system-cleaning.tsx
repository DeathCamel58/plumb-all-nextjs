import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import Image from "next/image";

// Article metadata
const slug = 'septic-system-cleaning';
export const metadata = {
  slug: slug,
  title: 'Septic System Cleaning',
  date: '2021-09-09',
  excerpt: 'What is a septic tank cleaning, and why do people get it cleaned instead of pumped? In this article, we strive to inform and educate about septic cleaning.',
  image: '/images/septic-install.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Septic System Cleaning</h2>

      <p className="mb-6">
        Many of our clients call us wanting their septic tank pumped. Unfortunately, pumping out a septic tank
        is commonly only a short-term solution. We strive to provide our clients the best possible services,
        so we often recommend septic system cleaning instead.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How do Septic Systems Work?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="mb-6">
            Most septic systems are &#34;conventional systems&#34;. In this type of septic system, a septic tank
            receives all waste (including water and solids), and passes liquid waste into a leach field.
          </p>

          <p className="mb-6">
            These leach fields slowly leak the liquids out into the ground through small holes in the pipes.
            This is beneficial for plants because it adds nutrients to the soil, and beneficial to the septic
            system, because most waste is removed from the system over time.
          </p>

          <p className="mb-6">
            The solid waste in the septic tank is kept within the tank. Some of these solids, such as septic
            safe toilet paper, are broken down by bacteria into a liquid that can then be released into the
            leach field.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/septic-system-overview.jpg"
            alt="Septic System Diagram"
            className="rounded-lg max-w-full h-auto"
            width={500}
            height={350}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Isn&#39;t Pumping Always Best?</h2>

      <p className="mb-6">
        Although pumping a septic tank removes the solids from the tank, many of our clients have problems
        with the liquids either not going into the leach field, or the liquids not draining from the leach
        field into the yard. With these types of issues, pumping out a septic tank only provides temporary
        relief, as once the tank fills back up, the problems return.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Important:</strong> These issues have the same symptoms as a septic tank that needs a pump,
          so it&#39;s understandable that people default to the idea that they need a pump. Normally people call
          us because of drains not draining, sewer smells,
          or moist ground, which indicates that an issue of some kind exists (not necessarily a cleaning being required).
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What About Septic Tank Maintenance?</h2>

      <p className="mb-6">
        When most people talk about septic tank cleaning, they&#39;re usually referring to <Link href="/news/article/when-is-hydro-jetting-needed" className="text-theme-1 hover:text-theme-2 transition">Hydro-Jetting</Link>.
        This is the process of feeding a specialized pressure washer down the leach field pipes, and breaking
        up any debris and bio-mat that is blocking the holes in the pipe. By unblocking the holes in the leach
        field, we&#39;re able to fix issues where the liquid waste from the tank will not drain out.
      </p>

      <p className="mb-6">
        Most of our clients who come to us with the symptom that their septic tank requires regular pumping
        have other issues they didn&#39;t realize. These clients benefit from septic tank cleaning because we can
        restore the leach field, and allow liquids in the tank to drain into the yard.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">A Common Misconception</h2>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> We hear from customers that they need their septic system pumped
          regularly because it&#39;s &#34;standard maintenance&#34;. Although it&#39;s normal for any septic system to
          periodically need a pump, the normal time period is three to five years, and the EPA recommends
          only an inspection at least every three years.
        </p>
      </div>

      <p className="mb-6">
        If you have a septic system that is needing a pump more often than every 3 years, we&#39;d love to come
        out and make sure it&#39;s running in tip-top shape with an inspection! Regular inspections can identify
        potential issues before they become major problems.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Decided that we're the right fit for you?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
