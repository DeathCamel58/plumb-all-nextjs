import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import JobPhotoFigure from "@/components/JobPhotoFigure";

// Article metadata
const slug = 'septic-system-cleaning';
export const metadata = {
  slug: slug,
  title: 'Septic Line Cleaning: When Jetting Beats Pumping',
  date: '2026-11-03',
  excerpt: 'If your septic tank keeps filling back up after pumping, the lines may be the problem. How septic line cleaning (hydro-jetting) works, the signs you need it, and when it won\'t help.',
  image: '/images/jobs/septic-tank-open-hero-hampton.webp',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="bg-blue-50 p-5 rounded-lg mb-8 border-l-4 border-theme-3 not-prose">
        <h2 className="text-2xl font-bold mb-3">Quick Answer</h2>
        <p className="mb-3">
          <strong>Septic line cleaning</strong> means clearing the pipes that carry liquid out of your septic tank: the
          outlet line and the drain field lines. It&#39;s usually done with a hydro-jetter, a high-pressure water hose that
          scours out roots, buildup and the slime layer (biomat) that clogs the field.
        </p>
        <p>
          You likely need it, not just a pump-out, if your tank <strong>fills back up quickly after pumping</strong>, or
          you still have slow drains, gurgling or wet spots in the yard after the tank was pumped.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Why Pumping Alone Doesn&#39;t Always Fix It</h2>
      <p className="mb-4">
        A septic system has two jobs. The tank holds the solids, and the drain field gets rid of the liquid by letting it
        soak into the soil. <Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">Pumping</Link> takes
        care of the first job: it removes the sludge and scum from the tank.
      </p>
      <p className="mb-4">
        But many of the calls we get aren&#39;t really about a full tank. The liquid can&#39;t get <em>out</em>. The outlet line
        or the field lines are clogged, so water backs up into the tank and then into the house. Pumping empties the tank
        for a little while, and then it fills right back up.
      </p>
      <div className="bg-yellow-50 p-4 rounded-lg mb-8 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Good to know:</strong> A clogged line and a full tank cause the same symptoms (slow drains, gurgling,
          sewage smell, a soggy yard), which is why most people assume they just need a pump. If you&#39;re pumping more
          often than every 3 years, have the lines checked.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Signs Your Septic Lines Need Cleaning</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>The tank needs pumping much more often than every 3 to 5 years</li>
        <li>Drains slow down again within weeks or months of a pump-out</li>
        <li>Water sits above the outlet when the tank is opened</li>
        <li>Standing water, wet spots or a sewage smell over the drain field</li>
        <li>Gurgling drains or toilets, especially after laundry or heavy water use</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">How We Clean Septic Lines</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ol className="md:col-span-2 list-decimal pl-6 space-y-3">
          <li><strong>Find out why it&#39;s backing up.</strong> We open the tank, check the water level, the baffles and the outlet, and run a camera down the line when needed.</li>
          <li><strong>Get access to the outlet line.</strong> We dig down to the pipe that leaves the tank and install a cleanout up to ground level, so the lines can be reached now and serviced later without digging.</li>
          <li><strong>Jet the lines.</strong> The hydro-jetter scours out roots, buildup and biomat from the outlet line and into the field lines.</li>
          <li><strong>Check the result.</strong> We confirm the water drains out of the tank the way it should, and tell you what we found.</li>
        </ol>
        <JobPhotoFigure slug="septic-cleanout-installed-jonesboro" caption="A new cleanout at ground level gives access to the septic lines" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <JobPhotoFigure slug="septic-root-intrusion-hampton" caption="Roots pulled out of a septic line" />
        <JobPhotoFigure slug="septic-line-red-clay-jonesboro" caption="A septic line exposed in red clay so it can be cleaned and repaired" />
      </div>
      <p className="mb-8">
        Learn more about our <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link> and
        how it compares to snaking in <Link href="/news/article/when-is-hydro-jetting-needed" className="text-theme-3 hover:underline">when is hydro-jetting needed?</Link>
      </p>

      <h2 className="text-3xl font-bold mb-4">When Cleaning Won&#39;t Fix It</h2>
      <p className="mb-4">
        Jetting is the first step before any major repair, but it can&#39;t fix everything. It won&#39;t help if:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>A line is <strong>crushed, separated or broken</strong>. That section has to be dug up and replaced.</li>
        <li>The drain field soil is <strong>saturated end to end</strong>. The field has reached the end of its life and needs replacing.</li>
        <li>A <strong>baffle is broken</strong>, letting solids pour into the field. The baffle has to be replaced first.</li>
      </ul>
      <p className="mb-8">
        In those cases we&#39;ll tell you before doing work that won&#39;t help. See our{' '}
        <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair</Link> services, and{' '}
        <Link href="/services/eljen-septic" className="text-theme-3 hover:underline">Eljen drain fields</Link> for lots where a
        conventional field won&#39;t work.
      </p>

      <h2 className="text-3xl font-bold mb-4">Keep the Lines Clear</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Pump the tank every 3 to 5 years, so solids never reach the outlet.</li>
        <li>Spread out laundry and other heavy water use.</li>
        <li>Keep trees and large shrubs away from the tank and drain field.</li>
        <li>Have the system <Link href="/services/septic-inspection" className="text-theme-3 hover:underline">inspected</Link> at least every 3 years.</li>
      </ul>
      <p className="mb-6">
        More tips in <Link href="/news/article/how-to-maintain-your-septic-system" className="text-theme-3 hover:underline">how to maintain your septic system</Link>.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Septic tank filling back up after pumping?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
