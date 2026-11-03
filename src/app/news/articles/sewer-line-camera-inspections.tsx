import React from 'react';
import Link from "next/link";
import CTACall from "@/components/cta/CTACall";
import JobPhotoFigure from "@/components/JobPhotoFigure";
import FAQSchema from "@/components/schema/FAQSchema";

// Article metadata
const slug = 'sewer-line-camera-inspections';
export const metadata = {
  slug: slug,
  title: 'Sewer Line Camera Inspection: What It Shows',
  date: '2026-11-03',
  excerpt: 'What a sewer camera inspection shows, how it works, how long it takes, and when you need one: before buying a home, for recurring clogs, or after a drain cleaning.',
  image: '/images/roots-in-pipe.webp',
  path: `/news/article/${slug}`
};

const faqs = [
  {
    question: 'What does a sewer camera inspection show?',
    answer: 'It shows the inside of the pipe on video: roots growing through joints, cracks and breaks, collapsed or crushed sections, low spots (bellies) where water sits, separated or offset joints, grease and debris buildup, and what the pipe is made of. The plumber can also locate exactly where each problem is from the surface.',
  },
  {
    question: 'How long does a sewer camera inspection take?',
    answer: 'Most residential inspections take under an hour. Our standard inspection covers the first 100 feet of line, which reaches the city sewer or septic tank on most homes.',
  },
  {
    question: 'Should I get another camera inspection after my sewer line is cleaned?',
    answer: 'Yes, if the line had a serious clog or roots. Cleaning can hide or reveal damage, and a camera check afterward confirms the line is actually clear and shows whether there is a crack, belly or root entry point that will cause the clog to come back.',
  },
  {
    question: 'Do I need a sewer camera inspection when buying a house?',
    answer: 'It is one of the best things you can do before closing, especially on an older home or a lot with big trees. A standard home inspection does not look inside the sewer line, and a damaged line is one of the most expensive surprises a new owner can face.',
  },
  {
    question: 'Can you camera a septic line?',
    answer: 'Yes. We run the camera through the line between the house and the septic tank, and through the outlet line toward the drain field, to find roots, breaks and clogs.',
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
          A <strong>sewer line camera inspection</strong> is a video inspection of the pipe that carries wastewater from
          your house to the city sewer or your septic tank. A plumber feeds a waterproof camera on a flexible cable into
          the line through a cleanout and watches a live feed, so they can see roots, cracks, sags and clogs without
          digging.
        </p>
        <p>
          Get one if you have <strong>recurring clogs or backups</strong>, before <strong>buying a home</strong>, or after a
          bad clog has been cleared, to find out why it happened.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">What a Sewer Camera Inspection Shows</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Tree roots.</strong> Roots find their way into joints and small cracks, then grow until they block the line. Early roots can be cleared with <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link>.</li>
            <li><strong>Cracks, breaks and collapsed sections.</strong> Shifting clay soil, age and heavy traffic overhead break pipes. The camera shows how bad it is and exactly where.</li>
            <li><strong>Bellies (sags).</strong> A section that has sunk holds water and debris and causes clogs that keep coming back. You can&#39;t find one without a camera or digging.</li>
            <li><strong>Offset or separated joints.</strong> Gaps between pipe sections let roots in and waste out.</li>
            <li><strong>Grease and buildup.</strong> Knowing what the clog is tells you whether snaking, <Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">drain cleaning</Link> or jetting is the right fix.</li>
            <li><strong>Pipe material.</strong> Older homes may have cast iron, clay or Orangeburg pipe, which fail with age.</li>
          </ul>
        </div>
        <JobPhotoFigure slug="sewer-camera-inspection-2" caption="Our sewer camera monitor during a line inspection" />
      </div>

      <h2 className="text-3xl font-bold mb-4">When You Need One</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Clogs that keep coming back</strong>, or more than one drain backing up at once</li>
        <li><strong>Before buying a home</strong>, especially an older one or a lot with large trees</li>
        <li><strong>After a bad clog is cleared</strong>, to see what caused it (see the FAQ below)</li>
        <li><strong>Sewer smells</strong> inside or in the yard, or a soggy spot over the line</li>
        <li><strong>Before landscaping, an addition or a pool</strong> near the line</li>
        <li><strong>After a sewer repair</strong>, to confirm the work and the flow</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">How We Do It at Plumb-All</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ol className="md:col-span-2 list-decimal pl-6 space-y-3">
          <li><strong>Access the line</strong> through a cleanout, or another access point if there isn&#39;t one.</li>
          <li><strong>Run the camera</strong> through the line while you watch the live feed with us. Our standard inspection covers the first 100 feet and takes under an hour.</li>
          <li><strong>Locate the problem.</strong> A locator picks up the camera head through the ground, so we can mark exactly where and how deep a problem is before anyone digs.</li>
          <li><strong>Explain the options</strong> and quote the repair before any work starts.</li>
        </ol>
        <JobPhotoFigure slug="sewer-camera-inspection-3" caption="Watching the live camera feed on site" />
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg mb-8 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Good to know:</strong> Every Plumb-All truck carries a sewer camera, so if we&#39;re already out for a
          clog we can usually look inside the line on the same visit. And if we do the repair, we discount the camera fee.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">What Happens After the Inspection</h2>
      <p className="mb-4">
        If the line is in good shape, you have peace of mind and a baseline to compare against later. If not, the fix
        depends on what the camera found:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ul className="md:col-span-2 list-disc pl-6 space-y-2">
          <li><strong>Roots or buildup:</strong> <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link> to scour the line clean.</li>
          <li><strong>A single broken or bellied section:</strong> a spot repair of just that section.</li>
          <li><strong>A line failing end to end:</strong> sewer line replacement. See also <Link href="/news/article/what-is-trenchless-sewer-repair" className="text-theme-3 hover:underline">trenchless sewer repair</Link>.</li>
          <li><strong>A septic line problem:</strong> see <Link href="/news/article/septic-system-cleaning" className="text-theme-3 hover:underline">septic line cleaning</Link> and <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair</Link>.</li>
        </ul>
        <JobPhotoFigure slug="septic-root-intrusion-hampton" caption="Roots pulled from a line after a camera inspection found them" />
      </div>

      <div className="bg-white p-5 rounded-lg mb-8 border border-gray-200 not-prose">
        <h2 className="text-2xl font-bold mb-4">Sewer Camera Inspection FAQ</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4 last:mb-0">
            <h3 className="text-lg font-semibold mb-1">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <p className="mb-6">
        Related: <Link href="/news/article/signs-of-a-main-sewer-line-problem" className="text-theme-3 hover:underline">signs of a main sewer line problem</Link>,{' '}
        <Link href="/news/article/how-to-deal-with-a-backed-up-sewer-line" className="text-theme-3 hover:underline">how to deal with a backed-up sewer line</Link>, and{' '}
        <Link href="/news/article/how-to-tell-if-your-sewer-line-needs-repair" className="text-theme-3 hover:underline">how to tell if your sewer line needs repair</Link>.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Want to see what's going on inside your sewer line?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
