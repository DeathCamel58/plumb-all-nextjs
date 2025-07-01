import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Image from "next/image";
import Link from "next/link";

// Article metadata
const slug = 'increasing-life-of-septic-systems';
export const metadata = {
  slug: slug,
  title: 'Increasing Life of Septic Systems',
  date: '2021-09-02',
  excerpt: 'A couple of the most common questions we get asked are “What can I safely put down my drains with my septic tank?” and “How can I keep my septic system healthy for longer?” In this article, we’re going to dive into what is and isn’t safe to put down drains on a septic system.',
  image: '/images/septic-tank-diagram.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Increasing Life of Septic Systems</h2>

      <p className="mb-6">
        A couple of the most common questions we get asked are &#34;What can I safely put down my drains with my septic tank?&#34;
        and &#34;How can I keep my septic system healthy for longer?&#34; In this article, we&#39;re going to dive into what is and
        isn&#39;t safe to put down drains on a septic system.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What is a septic system?</h2>

      <p className="mb-6">
        Septic systems are essentially a sewage system owned by a property owner when municipal sewage systems
        aren&#39;t available at a property.
      </p>

      <p className="mb-6">
        These systems work by having a septic tank that stores waste, and having a leach field attached to the
        tank to allow liquids to drain out into the ground.
      </p>

      <p className="mb-6">
        Because a properly working septic system is able to drain liquids into the ground, pumping a septic tank
        is not usually necessary unless the tank is filled with solid waste.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> A well-maintained septic system can last for decades without major issues.
          Regular inspections and proper usage are key to extending its lifespan.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What shouldn&#39;t be put down drains?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Chemicals</h3>

          <p className="mb-4">
            Generally, any cleaning chemical should not be put down the drains on a septic system. This is because
            a septic tank needs bacteria to break down solid waste (like toilet paper).
          </p>

          <p className="mb-4">
            Putting cleaning chemicals down drains can kill off this vital bacteria, which will lead to more solids
            staying in the tank and requiring septic pumping regularly.
          </p>

          <p className="mb-4">
            Drain cleaning chemicals also shouldn&#39;t be used in septic systems because they can also kill off the
            necessary bacteria.
          </p>

          <p className="mb-4">
            Furthermore, because drain cleaners are usually caustic or oxidizing, they should not be used in general,
            as they can eat through pipes sometimes, requiring pipes to be replaced.
          </p>

          <figure className="mb-6">
            <Image
              src="/images/drain-cleaner-on-metal.jpg"
              alt="The corrosive effect of drain cleaners on metal"
              className="rounded-lg max-w-full h-auto"
              width={437}
              height={200}
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              This is the effect of metal being exposed to sulfuric acid, the major component of many drain cleaners.
              Note the metal being damaged after only one minute of exposure.
            </figcaption>
          </figure>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Solids</h3>

          <p className="mb-4">
            Most solid materials should never be flushed down drains on septic systems. Most solids can not be broken
            down by the good bacteria in a septic system, and will require septic tank pumping to get these out of your system.
          </p>

          <p className="mb-4">
            <strong>Do not flush:</strong>
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
            <ul className="list-disc pl-6 space-y-2">
              <li>Baby Wipes</li>
              <li>Tampons</li>
              <li>Coffee Grounds</li>
              <li>Paper Towels</li>
              <li>Toilet Seat Covers</li>
              <li>Sanitary Napkins</li>
              <li>Dryer Sheets</li>
              <li>And others</li>
            </ul>
          </div>

          <p className="mb-4">
            For a system to last a long time, only flush septic safe toilet paper and stool.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Septic Tank Additives and Enzymes</h2>

      <p className="mb-6">
        We get asked about <Link href="/news/article/are-septic-tank-additives-and-enzymes-useful" className="text-theme-3 hover:underline">septic tank additives and enzymes</Link> regularly. Although these products market themselves
        as helpful to septic systems, these chemicals are snake oil. The EPA recommends
        (<a href="https://www3.epa.gov/npdes/pubs/homeowner_guide_long_customize.pdf" className="text-theme-1 hover:text-theme-2 transition">
          A Homeowner&#39;s Guide to Septic Systems, Page 6
        </a>) not using any of these chemicals, as the microbes contained in a septic system are all that is
        necessary to break down waste.
      </p>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Instead of relying on additives, focus on proper maintenance and being mindful
          of what goes down your drains. This natural approach is more effective and environmentally friendly.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Decided that we're the right fit for you?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
