import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from 'next/link';
import JobPhotoFigure from "@/components/JobPhotoFigure";

// Article metadata
const slug = 'how-to-maintain-your-septic-system';
export const metadata = {
  slug: slug,
  title: 'How To Maintain Your Septic System',
  date: '2026-11-03',
  excerpt: 'How a septic system works, and the maintenance that keeps it running for decades: pumping, inspections, water use, what not to flush, and protecting the drain field.',
  image: '/images/jobs/septic-risers-hero-mcdonough.webp',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="mb-6">
        A septic system treats all of your home&#39;s wastewater right in your yard. It doesn&#39;t need much,
        but what it needs, it needs on schedule. With regular care, septic systems last for decades. Neglected,
        they fail early, and a new drain field or tank is one of the most expensive repairs a homeowner can face.
      </p>

      <div className="bg-blue-50 p-5 rounded-lg mb-8 border-l-4 border-theme-3 not-prose">
        <h2 className="text-2xl font-bold mb-3">Septic Maintenance at a Glance</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Pump the tank</strong> every 3 to 5 years for most households.</li>
          <li><strong>Have it inspected</strong> at least every 3 years, and about once a year if your system has a pump, floats or an alarm.</li>
          <li><strong>Only flush</strong> human waste and toilet paper.</li>
          <li><strong>Spread out water use</strong>, especially laundry.</li>
          <li><strong>Protect the drain field</strong>: no parking, building or planting trees on it.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-4">How a Septic System Works</h2>
      <p className="mb-4">
        Everything that goes down a drain in your house, from the toilets, showers, kitchen and laundry, flows into the
        septic tank. In the tank, solids settle to the bottom as sludge, grease and light material float to the top as
        scum, and bacteria break down the organic waste.
      </p>
      <p className="mb-6">
        Baffles at the tank&#39;s inlet and outlet keep the sludge and scum inside. The liquid in the middle flows out to the
        drain field, a set of perforated pipes in gravel trenches, where it soaks into the soil and is filtered naturally.
        Most maintenance comes down to two things: keeping solids out of the drain field, and not sending it more water
        than the soil can take.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <JobPhotoFigure slug="septic-tank-scum-layer-jonesboro" caption="An open tank with a thick scum layer, ready to be pumped" />
        <JobPhotoFigure slug="septic-broken-baffle-jonesboro" caption="A broken baffle and line found during a repair. Failed baffles let solids reach the drain field." />
      </div>

      <h2 className="text-3xl font-bold mb-4">1. Pump Your Tank on Schedule</h2>
      <p className="mb-4">
        Most households need <Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">septic tank pumping</Link> every
        3 to 5 years. How often depends on the size of the tank, how many people live in the house, and how much water you
        use. A garbage disposal adds solids to the tank, so homes with one usually need pumping sooner.
      </p>
      <p className="mb-6">
        Don&#39;t wait for a backup. Once sludge builds up past the outlet, solids flow into the drain field and clog it,
        and that damage can&#39;t be pumped out.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Important:</strong> We often get calls from homeowners who just want a pump-out. If the drain field is
          already failing, pumping is only a temporary fix: the tank fills right back up because the water has nowhere to
          go. If your plumber recommends more than a pump, ask them to show you why.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4">2. Get Your Septic System Inspected</h2>
      <p className="mb-4">
        The <a href="https://www.epa.gov/septic/how-care-your-septic-system" className="text-theme-3 hover:underline">EPA
        recommends</a> having a septic system inspected at least every 3 years. Systems with mechanical parts, like a pump
        tank, float switches or a high-water alarm, should be checked about once a year. An inspection catches small
        problems, like a broken baffle or a rising sludge level, before they turn into a backup.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Signs Your Septic System Needs Attention</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Slow drains throughout the house</li>
            <li>Gurgling sounds in the plumbing</li>
            <li>Sewage odors inside or outside</li>
            <li>Wet, spongy ground over the drain field</li>
            <li>Unusually lush, green grass over the drain field</li>
            <li>A high-water alarm going off</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">What an Inspection Checks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sludge and scum levels in the tank</li>
            <li>Condition of the baffles and the tank itself</li>
            <li>Signs of leaks or backup</li>
            <li>How well the drain field is draining</li>
            <li>Pumps, floats and alarms, if you have them</li>
          </ul>
        </div>
      </div>
      <p className="mb-8">
        Don&#39;t open the tank yourself: the gases inside are dangerous, and a proper look at the lines takes a sewer camera.
        Learn more about our <Link href="/services/septic-inspection" className="text-theme-3 hover:underline">septic inspections</Link>,
        including inspection letters for home sales.
      </p>

      <h2 className="text-3xl font-bold mb-4">3. Clean the Effluent Filter and Add Risers</h2>
      <p className="mb-4">
        Many newer tanks have an <strong>effluent filter</strong> in the outlet that catches small solids before they reach
        the drain field. It needs to be cleaned, usually whenever the tank is pumped or inspected. A clogged filter backs
        water up into the house.
      </p>
      <p className="mb-6">
        If your tank lids are buried, every service visit starts with digging them up. A <strong>riser</strong> brings the
        lid up to ground level, so pumping and inspections are quicker and cost less.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <JobPhotoFigure slug="septic-effluent-filter-cleaning-jonesboro" caption="An effluent filter pulled from the tank outlet for cleaning" />
        <JobPhotoFigure slug="septic-risers-mcdonough" caption="Risers bring the tank lids up to ground level" />
      </div>

      <h2 className="text-3xl font-bold mb-4">4. Use Water Efficiently</h2>
      <p className="mb-4">
        The average person uses roughly 50 to 60 gallons of water a day, and every gallon ends up in the septic tank. Too
        much water at once pushes waste through the tank before it can settle, and can flood the drain field.
      </p>
      <div className="bg-gray-50 p-5 rounded-lg mb-8 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Spread out laundry</strong> over the week instead of doing it all in one day.</li>
          <li><strong>Fix running toilets and leaky faucets</strong> right away. A running toilet can send hundreds of gallons a day into the tank.</li>
          <li>Take shorter showers.</li>
          <li>Use high-efficiency toilets, faucet aerators and washing machines.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-4">5. Be Careful What Goes Down the Drain</h2>
      <p className="mb-4">
        <strong>Human waste and toilet paper are the only things that should be flushed.</strong> Your septic system relies
        on bacteria to break down waste, and other items either clog the tank and lines or kill the bacteria. Skip septic
        additives too; they can upset the tank&#39;s natural balance and do more harm than good. See <Link href="/news/article/are-septic-tank-additives-and-enzymes-useful" className="text-theme-3 hover:underline">are septic tank additives useful?</Link>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Never Flush These Items</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wipes (even &#34;flushable&#34; ones)</li>
            <li>Paper towels or tissues</li>
            <li>Diapers and feminine hygiene products</li>
            <li>Dental floss</li>
            <li>Cat litter</li>
            <li>Cigarette butts</li>
            <li>Medications</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Never Pour These Down Drains</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><Link href="/news/article/why-pouring-grease-down-your-drain-is-a-recipe-for-trouble" className="text-theme-3 hover:underline">Cooking oil or grease</Link></li>
            <li>Coffee grounds</li>
            <li>Paint or paint thinner</li>
            <li>Harsh household chemicals</li>
            <li>Gasoline or motor oil</li>
            <li>Pesticides or fertilizers</li>
            <li>Large amounts of drain cleaner</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">6. Protect the Drain Field</h2>
      <p className="mb-4">
        The drain field is the most expensive part of the system to replace. Over time, a layer of buildup called biomat
        can clog the soil around the pipes. <Link href="/news/article/when-is-hydro-jetting-needed" className="text-theme-3 hover:underline">Hydro-jetting</Link> can
        often clear the lines and restore drainage before a full replacement is needed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-3">Drain Field Do&#39;s and Don&#39;ts</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Don&#39;t park or drive on it, and keep heavy equipment off it.</li>
            <li>Don&#39;t build sheds, patios or pools over it.</li>
            <li>Don&#39;t plant trees or large shrubs nearby; roots grow into the lines.</li>
            <li>Point gutters, sump pumps and other runoff away from it.</li>
            <li>Don&#39;t overwater it with sprinklers; a soggy field can&#39;t absorb wastewater.</li>
          </ul>
        </div>
        <JobPhotoFigure slug="septic-root-intrusion-hampton" caption="Roots pulled out of a septic line" />
      </div>

      <h2 className="text-3xl font-bold mb-4">7. Keep Your Records</h2>
      <p className="mb-8">
        Keep a record of every pumping, inspection and repair, along with a sketch of where the tank and drain field are.
        It helps your plumber spot problems sooner, and buyers will ask for it if you ever sell your home.
      </p>

      <h2 className="text-3xl font-bold mb-4">Bottom Line</h2>
      <p className="mb-4">
        Septic maintenance is cheap compared to septic repair. Pump on schedule, have the system inspected, watch what
        goes down the drain, and protect the drain field, and your system can serve you for decades.
      </p>
      <p className="mb-6">
        Plumb-All handles septic pumping, inspections, repairs and new systems across South Metro Atlanta, including{' '}
        <Link href="/septic-service/jonesboro-ga" className="text-theme-3 hover:underline">Jonesboro</Link>,{' '}
        <Link href="/septic-service/fayetteville-ga" className="text-theme-3 hover:underline">Fayetteville</Link>,{' '}
        <Link href="/septic-service/mcdonough-ga" className="text-theme-3 hover:underline">McDonough</Link>,{' '}
        <Link href="/septic-service/stockbridge-ga" className="text-theme-3 hover:underline">Stockbridge</Link>,{' '}
        <Link href="/septic-service/hampton-ga" className="text-theme-3 hover:underline">Hampton</Link> and{' '}
        <Link href="/septic-service/ellenwood-ga" className="text-theme-3 hover:underline">Ellenwood</Link>. If you&#39;re due
        for a pumping or seeing any of the warning signs, give us a call.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Time to have your septic system checked?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
