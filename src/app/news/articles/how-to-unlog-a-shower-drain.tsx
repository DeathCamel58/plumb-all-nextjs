import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'how-to-unlog-a-shower-drain';
export const metadata = {
  slug: slug,
  title: 'How to Unclog a Shower Drain',
  date: '2025-09-10',
  excerpt: 'A step-by-step guide to clearing a slow or clogged shower drain safely and effectively.',
  image: '/images/clogged-drain.png',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Title + Intro */}
      <header className="not-prose mb-8 p-6 md:p-8 rounded-xl bg-gradient-to-r from-theme-1/10 via-theme-3/10 to-theme-4/10 border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">How to Unclog a Shower Drain</h1>
        <p className="text-gray-600">Updated {new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="mt-4 text-lg text-gray-800 max-w-3xl">
          A slow-draining or clogged shower is usually caused by hair, soap scum, or hard-water buildup. Use this safe, step-by-step
          guide to clear the blockage and get the water flowing again.
        </p>
        <div className="mt-4 not-prose">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border text-sm">
            <span className="inline-block h-2 w-2 rounded-full background-theme-1" />
            DIY Difficulty: Easy–Moderate
          </div>
        </div>
      </header>

      {/* Tools & Supplies */}
      <section className="not-prose mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg border bg-white">
            <h3 className="text-xl font-semibold mb-3">Tools</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Gloves and screwdriver (for drain cover)</li>
              <li>Needle-nose pliers or plastic drain snake</li>
              <li>Cup plunger</li>
            </ul>
          </div>
          <div className="p-5 rounded-lg border bg-white">
            <h3 className="text-xl font-semibold mb-3">Supplies</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Boiling water (see safety note below)</li>
              <li>Baking soda and white vinegar</li>
              <li>Bucket and old towel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Callout */}
      <div className="not-prose bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-6">
        <p className="text-sm md:text-base text-yellow-900">
          <strong>Safety tip:</strong> Skip boiling water if you have PVC pipes; use hot (not boiling) water instead. Test any chemical-free
          method first and never mix commercial drain cleaners with vinegar or baking soda.
        </p>
      </div>

      {/* Steps */}
      <section className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full background-theme-1 text-white text-sm font-bold">1</span>
            <h3 className="text-xl font-semibold">Remove visible debris</h3>
          </div>
          <p className="text-gray-800">
            Pop off the drain cover (use a screwdriver if needed) and pull out hair and soap buildup with gloves or needle‑nose pliers.
            Toss debris in the trash—don’t push it back down the drain.
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full background-theme-1 text-white text-sm font-bold">2</span>
            <h3 className="text-xl font-semibold">Flush with hot water</h3>
          </div>
          <p className="text-gray-800">
            Slowly pour hot water in stages, pausing between pours to let it work through soap or grease. Avoid boiling water on PVC.
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full background-theme-1 text-white text-sm font-bold">3</span>
            <h3 className="text-xl font-semibold">Baking soda + vinegar</h3>
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>Pour 1/2 cup baking soda down the drain.</li>
            <li>Add 1/2 cup white vinegar.</li>
            <li>Cover and wait 15–30 minutes.</li>
            <li>Flush with hot water.</li>
          </ul>
          <p className="text-gray-700 mt-2">Great for mild clogs and ongoing maintenance.</p>
        </div>

        <div className="p-6 rounded-xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full background-theme-1 text-white text-sm font-bold">4</span>
            <h3 className="text-xl font-semibold">Plunge the drain</h3>
          </div>
          <p className="text-gray-800">
            Set a cup plunger over the drain with enough water to cover the rim, then plunge vigorously to dislodge deeper clogs.
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full background-theme-1 text-white text-sm font-bold">5</span>
            <h3 className="text-xl font-semibold">Use a drain snake</h3>
          </div>
          <p className="text-gray-800">
            Feed a plastic snake or auger into the drain, twist as you advance, then pull out hair and debris. Repeat until clear.
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-full background-theme-1 text-white text-sm font-bold">6</span>
            <h3 className="text-xl font-semibold">Know when to call a pro</h3>
          </div>
          <p className="text-gray-800">
            If none of the above works, the blockage may be deeper in the line. Pros use motorized augers and hydro‑jetting to clear
            stubborn clogs safely without damaging pipes.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="not-prose mt-8">
        <h3 className="text-2xl font-bold mb-3">Prevent future shower clogs</h3>
        <div className="p-5 rounded-lg border bg-white">
          <ul className="list-disc pl-6 space-y-1 text-gray-800">
            <li>Use a drain cover or hair catcher.</li>
            <li>Rinse with hot water weekly.</li>
            <li>Avoid oils and greasy products down the drain.</li>
            <li>Schedule periodic professional cleanings if clogs are frequent.</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section className="not-prose mt-8">
        <h3 className="text-2xl font-bold mb-3">Final thoughts</h3>
        <p className="text-gray-800">
          Most shower clogs can be cleared at home with patience and the right tools. If you’re battling recurring blockages, a
          professional inspection can pinpoint the real cause and prevent damage to your pipes.
        </p>
      </section>

      {/* CTA */}
      <div className="not-prose bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Decided that we're the right fit for you?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
