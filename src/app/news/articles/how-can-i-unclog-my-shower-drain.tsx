import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import FAQSchema from "@/components/schema/FAQSchema";

// Article metadata
const slug = 'how-can-i-unclog-my-shower-drain';
export const metadata = {
  slug: slug,
  title: 'How to Unclog a Shower Drain (Step by Step)',
  date: '2026-11-03',
  excerpt: 'The fastest ways to unclog a shower drain, in the order that works: pull the hair out, plunge, snake, then hot water and baking soda. Plus when a slow shower means a bigger problem.',
  image: '/images/shower-drain.webp',
  path: `/news/article/${slug}`
};

const faqs = [
  {
    question: 'What is the fastest way to unclog a shower drain?',
    answer: 'Take the drain cover off and pull the hair out. Most shower clogs are a clump of hair and soap scum within a few inches of the drain opening. A plastic drain snake (the barbed strip sold at hardware stores) or a bent wire hanger pulls it out in a minute or two.',
  },
  {
    question: 'How do I unclog a shower drain if I can\'t remove the cover?',
    answer: 'Feed a thin plastic drain snake or a hand auger through the slots in the cover, twist, and pull the hair back out. A cup plunger also works through most covers.',
  },
  {
    question: 'Can bleach unclog a shower drain?',
    answer: 'No. Bleach disinfects, but it doesn\'t dissolve hair, and mixing it with other drain cleaners can release toxic fumes. Pull the clog out mechanically instead.',
  },
  {
    question: 'What are the best home remedies for a clogged shower drain?',
    answer: 'For a slow drain, pour hot (not boiling, if you have PVC pipes) water in stages, then try 1/2 cup of baking soda followed by 1/2 cup of white vinegar, cover for 15 to 30 minutes, and flush with hot water. A squirt of dish soap followed by hot water also helps loosen hair. These work best on slow drains, not complete clogs.',
  },
  {
    question: 'Why is sewage coming up in my shower?',
    answer: 'That isn\'t a shower clog. It means the main sewer line or septic system is backed up, and the shower is the lowest drain in the house. Stop running water and flushing toilets, and call a plumber.',
  },
];

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <FAQSchema faqs={faqs} />

      <div className="bg-blue-50 p-5 rounded-lg mb-8 border-l-4 border-theme-3 not-prose">
        <h2 className="text-2xl font-bold mb-3">Quick Answer</h2>
        <p className="mb-3">
          Almost every shower clog is <strong>hair and soap scum</strong> caught just below the drain. The fastest fix is to{' '}
          <strong>take off the drain cover and pull the hair out</strong>. If that doesn&#39;t do it, use a plunger, then a
          drain snake. Hot water and baking soda help with slow drains, but they won&#39;t clear a solid clog.
        </p>
        <p>
          <strong>If the toilet gurgles or water comes up in the tub when you flush, it&#39;s not a shower clog</strong>.
          It&#39;s the main line. Skip to <a href="#bigger-problem" className="text-theme-3 hover:underline">when it&#39;s a bigger problem</a>.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">What You&#39;ll Need</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Tools</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rubber gloves</li>
            <li>Screwdriver (for the drain cover)</li>
            <li>Plastic drain snake or a bent wire hanger</li>
            <li>Cup plunger</li>
            <li>Hand auger (optional, for deeper clogs)</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Supplies</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hot water</li>
            <li>Baking soda and white vinegar</li>
            <li>Dish soap</li>
            <li>A bucket and an old towel</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">How to Unclog a Shower Drain, Step by Step</h2>
      <p className="mb-4">Try these in order. Most clogs are cleared by step 1 or 2.</p>

      <h3 className="text-2xl font-semibold mb-2">1. Remove the cover and pull out the hair</h3>
      <p className="mb-4">
        Unscrew or pop off the drain cover. With gloves on, pull out any hair you can see, then fish deeper with a plastic
        drain snake or a wire hanger bent into a small hook. Twist and pull slowly so the clump comes out instead of going
        further down. Throw the hair in the trash.
      </p>

      <h3 className="text-2xl font-semibold mb-2">2. Plunge it</h3>
      <p className="mb-4">
        Put a cup plunger over the drain with enough water in the shower to cover the rim. If it&#39;s a tub, hold a wet rag
        over the overflow opening so the pressure goes down the drain. Plunge hard 10 to 15 times, then check the flow.
      </p>

      <h3 className="text-2xl font-semibold mb-2">3. Use a hand auger</h3>
      <p className="mb-4">
        If the clog is past the trap, feed a hand auger into the drain, cranking as you push. When you feel resistance,
        keep cranking to grab or break up the clog, then pull it back out. Run hot water to flush what&#39;s left.
      </p>

      <h3 className="text-2xl font-semibold mb-2">4. Hot water, baking soda and vinegar (for slow drains)</h3>
      <p className="mb-4">
        Pour hot water down the drain in two or three stages. Then pour in 1/2 cup of baking soda, follow it with 1/2 cup of
        white vinegar, cover the drain for 15 to 30 minutes, and flush with hot water. A squirt of dish soap followed by hot
        water also helps loosen hair stuck to the pipe.
      </p>

      <div className="bg-yellow-50 p-4 rounded-lg mb-8 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Safety:</strong> If your drain pipes are PVC (white plastic), use hot tap water, not boiling water. Never
          mix commercial drain cleaners with bleach, vinegar or each other, and don&#39;t plunge after pouring in a chemical
          cleaner; it can splash back on you.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Skip These</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Chemical drain cleaners.</strong> They rarely dissolve a hair clog, and they can damage older pipes and finishes.</li>
        <li><strong>Bleach.</strong> It doesn&#39;t break down hair.</li>
        <li><strong>Pushing the clog deeper.</strong> Always pull hair back out instead of poking it down the drain.</li>
      </ul>

      <h2 id="bigger-problem" className="text-3xl font-bold mb-4">When It&#39;s a Bigger Problem</h2>
      <p className="mb-4">
        A shower clog only affects the shower. Call a plumber if you see any of these instead:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>More than one drain is slow</strong>, or the toilet gurgles when the shower drains.</li>
        <li><strong>Water or sewage comes up in the shower</strong> when you flush or run the washer. That&#39;s a main sewer line or septic backup. Stop using water and call.</li>
        <li><strong>The clog keeps coming back</strong> within weeks of clearing it.</li>
        <li><strong>A bad smell</strong> comes from the drain even when it&#39;s flowing.</li>
      </ul>
      <p className="mb-6">
        We clear stubborn and recurring clogs with{' '}
        <Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">professional drain cleaning</Link> and{' '}
        <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link>, and a{' '}
        <Link href="/news/article/sewer-line-camera-inspections" className="text-theme-3 hover:underline">sewer camera inspection</Link>{' '}
        shows why a main line keeps backing up. For sewage in the house after hours, our{' '}
        <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbers</Link> are available 24/7.
      </p>

      <h2 className="text-3xl font-bold mb-4">Prevent Shower Clogs</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Put a hair catcher over the drain and empty it after every few showers.</li>
        <li>Run hot water for a minute after showers to rinse soap scum through.</li>
        <li>Keep oils, bath products with oils, and grease out of the drain.</li>
        <li>Pull the cover and clear the hair every month or two, before it builds into a clog.</li>
      </ul>

      <div className="bg-white p-5 rounded-lg mb-8 border border-gray-200 not-prose">
        <h2 className="text-2xl font-bold mb-4">Shower Drain FAQ</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4 last:mb-0">
            <h3 className="text-lg font-semibold mb-1">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Shower still won't drain? We can clear it."
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
