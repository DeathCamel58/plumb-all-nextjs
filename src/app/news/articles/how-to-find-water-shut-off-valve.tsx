import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import JobPhotoFigure from "@/components/JobPhotoFigure";

// Article metadata
const slug = 'how-to-find-water-shut-off-valve';
export const metadata = {
  slug: slug,
  title: 'How to Find Your Home Water Shut-Off Valve',
  date: '2026-11-03',
  excerpt: 'Where to find your home\'s main water shut-off valve, what gate and ball valves look like (with photos from real jobs), and how to turn the water off fast.',
  image: '/images/jobs/main-water-shut-off-hero-hampton.webp',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="bg-blue-50 p-5 rounded-lg mb-8 border-l-4 border-theme-3 not-prose">
        <h2 className="text-2xl font-bold mb-3">Quick Answer</h2>
        <p className="mb-3">
          Your main water shut-off valve is usually <strong>where the water line enters your house</strong>,
          most often on the side of the house facing the street. Check the crawl space, garage, basement,
          utility closet, near the water heater, or behind a small access panel in a wall.
        </p>
        <p className="mb-3">
          <strong>To turn it off:</strong> turn a round wheel handle clockwise until it stops. Turn a lever
          handle a quarter turn, so it sits crossways to the pipe.
        </p>
        <p>
          Can&#39;t find it, or water is still running? Call <a href="tel:+17709143877" className="text-theme-3 hover:underline font-semibold">(770) 914-3877</a>. A real person answers 24/7.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Water Leak Right Now? Do This First</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong>Shut off the main water valve</strong> (how to find it is below).</li>
        <li><strong>Turn off power to the water heater</strong> (or set a gas water heater to &#34;pilot&#34;) if the water will be off for more than a short time.</li>
        <li><strong>Open a faucet</strong> on the lowest floor to drain the pressure out of the pipes.</li>
        <li><strong>Turn off electricity</strong> to any area where water is near outlets or appliances, if you can do it safely.</li>
        <li><strong>Call a plumber.</strong> Our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbers</Link> are available 24/7.</li>
      </ol>

      <h2 className="text-3xl font-bold mb-4">What Does a Water Shut-Off Valve Look Like?</h2>
      <p className="mb-6">
        Most homes have one of two kinds of main shut-off valve. Here&#39;s what each looks like, with photos
        from our own jobs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ball Valve (Lever Handle)</h3>
          <p className="mb-4">
            A straight lever, often red or yellow. <strong>When the lever runs along the pipe, the water is
            on.</strong> Turn it a quarter turn so it sits crossways to the pipe to shut the water off. Ball
            valves are what we install today, because they close fully and rarely stick.
          </p>
          <JobPhotoFigure
            slug="main-water-shut-off-ball-valve-hampton"
            caption="Main shut-off ball valve (red lever, bottom right) with a pressure-reducing valve, behind a wall access panel. The lever runs along the pipe, so the water is on."
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Gate Valve (Round Wheel Handle)</h3>
          <p className="mb-4">
            A round handle, like a small steering wheel. Turn it <strong>clockwise</strong> until it stops,
            which can take several turns. Gate valves are common in older homes. If one hasn&#39;t been
            turned in years it can stick or break, so don&#39;t force it.
          </p>
          <JobPhotoFigure slug="gate-valve-wheel-handle-rex" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
        <div className="md:col-span-2 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="font-medium text-gray-700">
            <strong>Don&#39;t confuse it with the pressure-reducing valve.</strong> Many homes have a bell-shaped
            brass valve right next to the main shut-off. That&#39;s a pressure-reducing valve (PRV). It controls
            your water pressure; it doesn&#39;t shut the water off, so leave its adjustment screw alone.
          </p>
        </div>
        <JobPhotoFigure slug="pressure-reducing-valve-jonesboro" caption="Pressure-reducing valve (not a shut-off)" />
      </div>

      <h2 className="text-3xl font-bold mb-4">Where to Find the Main Shut-Off Inside Your Home</h2>
      <p className="mb-4">
        Start on the side of the house that faces the street, since that&#39;s usually where the water line
        comes in. Then check these spots:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Crawl space:</strong> common in Georgia homes. Look near the foundation wall where the pipe comes through. Bring a flashlight.</li>
            <li><strong>Garage:</strong> on the wall facing the street, often low, near a hose bib or the water heater.</li>
            <li><strong>Utility closet or near the water heater:</strong> follow the cold-water pipe back toward where it enters the house.</li>
            <li><strong>Behind an access panel:</strong> a small removable panel in a closet or hallway wall, like the one in the photo above.</li>
            <li><strong>Basement:</strong> along the front wall, near where the main line comes through.</li>
            <li><strong>Under the kitchen sink:</strong> in some older homes.</li>
          </ul>
        </div>
        <JobPhotoFigure slug="gate-valve-copper-line-jonesboro" />
      </div>

      <h2 className="text-3xl font-bold mb-4">Outside: The Valve at the Water Meter</h2>
      <p className="mb-4">
        If you can&#39;t find a shut-off inside, look for the water meter box, usually a plastic or metal lid in
        the ground near the street or property line. There&#39;s a valve next to the meter that can stop water
        to the whole house.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>It usually takes a <strong>meter key</strong> (sold at hardware stores) to turn.</li>
        <li>That valve belongs to your water utility. In an emergency it&#39;s your backup, but some utilities prefer you call them to use it.</li>
        <li>If your only shut-off is at the street, it&#39;s worth having an easy-to-reach valve added at the house (see below).</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">Shut-Off Valves for Toilets, Sinks and Appliances</h2>
      <p className="mb-4">
        If only one fixture is leaking, you don&#39;t need to shut off the whole house. Most fixtures have their
        own small valve:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Toilet:</strong> on the wall or floor behind the toilet, where the supply line connects.</li>
          <li><strong>Sinks:</strong> under the sink, one for hot and one for cold.</li>
          <li><strong>Washing machine:</strong> two valves on the wall behind it.</li>
          <li><strong>Water heater:</strong> on the cold-water pipe going into the top of the tank.</li>
          <li><strong>Dishwasher and ice maker:</strong> usually under the kitchen sink, or behind the fridge.</li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <JobPhotoFigure slug="toilet-shut-off-valve-old-atlanta" caption="Old toilet shut-off valve" />
          <JobPhotoFigure slug="toilet-shut-off-valve-new-atlanta" caption="New quarter-turn toilet shut-off" />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">Still Can&#39;t Find It?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Check your <strong>home inspection report</strong> from when you bought the house. The plumbing section often shows where the main shut-off is.</li>
        <li>Ask a neighbor with a similar house where theirs is.</li>
        <li>Call your water utility. They can tell you where the meter is.</li>
        <li>Or call us, and we&#39;ll find it and label it for you.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4">Valve Stuck, Leaking, or Hard to Reach? We Can Fix That</h2>
      <p className="mb-4">
        A shut-off that won&#39;t turn, drips, or sits behind a pile of boxes in the crawl space won&#39;t help
        you in an emergency. Plumb-All can:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Replace an old gate valve</strong> with a full-port ball valve that closes with a quarter turn.</li>
        <li><strong>Add an easy-to-reach main shut-off</strong> inside the house, or a new valve box outside.</li>
        <li><strong>Install a smart whole-home water shutoff</strong> that shuts the water off automatically when it detects a leak, and lets you turn it off from your phone.</li>
        <li>Replace worn toilet and sink shut-off valves while we&#39;re there.</li>
      </ul>
      <p className="mb-6">
        Leaks that keep coming back may need <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection</Link> or{' '}
        <Link href="/services/water-line-repair" className="text-theme-3 hover:underline">water line repair</Link>. See all our{' '}
        <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair services</Link>.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Tip:</strong> Once you find your main shut-off, tag it so everyone in the house can find it
          fast, and turn it off and back on once a year so it doesn&#39;t seize.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need help finding or replacing your water shut-off valve?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
