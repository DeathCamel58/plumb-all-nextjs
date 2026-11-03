import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'why-schedule-plumbing-inspections';
export const metadata = {
  slug: slug,
  title: 'Why You Should Schedule Regular Plumbing Inspections',
  date: '2026-11-03',
  excerpt: 'Why regular plumbing inspections matter for Atlanta-area homeowners: what a plumber checks, how often to schedule one, the warning signs, and how inspections prevent costly water damage.',
  image: '/images/flush-water-heater.webp',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Why You Should Schedule Regular Plumbing Inspections</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> A single burst pipe can cause thousands of dollars in water damage, but
          regular plumbing inspections can catch potential problems before they become costly disasters. In Metro
          Atlanta, where clay soil, tree roots and aging pipes create unique challenges, preventive maintenance is your best defense.
        </p>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Most homeowners only think about their plumbing when something goes wrong – but by then, it&#39;s often too late
        to prevent expensive damage. Regular plumbing inspections are like annual check-ups for your home&#39;s
        circulatory system, helping you catch small issues before they become major headaches. In the Metro Atlanta
        area, where unique environmental factors put extra stress on plumbing systems, scheduled inspections aren&#39;t
        just recommended – they&#39;re essential. Understanding the <Link href="/news/article/common-plumbing-issues" className="text-theme-3 hover:underline">common plumbing issues in Metro Atlanta</Link> can help you appreciate why regular inspections are so important.
      </p>

      <h3 className="text-2xl font-semibold mb-4">The Hidden Costs of Neglecting Your Plumbing</h3>

      <div className="bg-red-50 p-5 rounded-lg mb-6 border border-red-200">
        <h4 className="text-xl font-semibold mb-4 text-red-800">💰 What Plumbing Problems Really Cost</h4>
        <p className="text-gray-700 mb-4">
          According to insurance industry data, the average water damage claim runs over $10,000. The failures that
          cause the biggest bills usually start small:
        </p>
        <div className="space-y-3">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>A slow leak</strong> behind a wall or under a slab that turns into rot, mold and ruined floors</li>
            <li><strong>A cracked sewer line</strong> that backs up into the house</li>
            <li><strong>An aging water heater</strong> that finally lets go and floods the room</li>
            <li><strong>A failing septic system</strong> that needs a new drain field instead of a repair</li>
          </ul>
          <p className="text-red-700 font-semibold mt-4">
            An inspection costs a small fraction of any of these, and it&#39;s how they get caught early.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Key Benefits of Regular Plumbing Inspections</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="text-lg font-semibold mb-3 text-green-800">🛡️ Prevention & Early Detection</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Identify leaks before they cause water damage</li>
            <li>Detect pipe corrosion and wear</li>
            <li>Spot potential blockages early</li>
            <li>Find issues with water pressure</li>
            <li>Assess fixture condition and performance</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="text-lg font-semibold mb-3 text-blue-800">💵 Cost Savings</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Avoid emergency repair costs</li>
            <li>Extend equipment lifespan</li>
            <li>Improve water efficiency</li>
            <li>Prevent water damage restoration</li>
            <li>Maintain home value</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
          <h4 className="text-lg font-semibold mb-3 text-purple-800">🏠 Home Protection</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Protect structural integrity</li>
            <li>Prevent mold and mildew growth</li>
            <li>Maintain indoor air quality</li>
            <li>Preserve flooring and walls</li>
            <li>Safeguard personal belongings</li>
          </ul>
        </div>

        <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
          <h4 className="text-lg font-semibold mb-3 text-orange-800">⚡ Performance & Efficiency</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Optimize water pressure</li>
            <li>Improve energy efficiency</li>
            <li>Ensure proper drainage</li>
            <li>Maintain fixture functionality</li>
            <li>Reduce water waste</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Small Problems an Inspection Catches</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Hidden leaks.</strong> An unexplained jump in your water bill often means a leak you can&#39;t see.
          Our <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection</Link> finds
          leaks under slabs, in walls and in the yard. Learn more about{' '}
          <Link href="/news/article/how-to-find-a-plumbing-leak" className="text-theme-3 hover:underline">finding plumbing leaks</Link>.
        </li>
        <li>
          <strong>Dripping faucets and running toilets.</strong> They waste gallons every day and add to your bill, and
          they&#39;re usually a quick fix once someone looks.
        </li>
        <li>
          <strong>High water pressure.</strong> Pressure above about 60 PSI wears out fixtures, appliances and water
          heaters early. We check it and adjust or replace the pressure-reducing valve if needed.
        </li>
        <li>
          <strong>Septic problems.</strong> Septic tanks need pumping every 3 to 5 years and an inspection at least every
          3 years. See our <Link href="/services/septic-inspection" className="text-theme-3 hover:underline">septic inspections</Link>.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">What&#39;s Included in a Professional Plumbing Inspection</h3>

      <p className="mb-4">
        A comprehensive plumbing inspection covers every aspect of your home&#39;s water and waste systems. Here&#39;s
        what a qualified plumber will examine during your inspection:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h4 className="text-xl font-semibold mb-4 text-gray-800">🔍 Complete System Assessment</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Water Supply System</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
              <li>Main water line and shutoff valve</li>
              <li>Supply pipes throughout the home</li>
              <li>Water pressure testing</li>
              <li>Pipe material assessment</li>
              <li>Joint and connection inspection</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Drainage System</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
              <li>Drain pipes and vents</li>
              <li>Sewer line condition</li>
              <li>Septic system (if applicable)</li>
              <li>Floor drains and sump pumps</li>
              <li>Drainage flow testing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Fixtures & Appliances</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
              <li>Faucets and showerheads</li>
              <li>Toilets and bidets</li>
              <li>Water heater inspection (including <Link href="/news/article/guide-to-tankless-water-heaters" className="text-theme-3 hover:underline">tankless systems</Link>)</li>
              <li>Washing machine connections</li>
              <li>Dishwasher plumbing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">Safety & Code Compliance</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
              <li>Gas line inspection (if applicable)</li>
              <li>Backflow prevention devices</li>
              <li>Code compliance verification</li>
              <li>Safety valve testing</li>
              <li>Leak detection throughout</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">How Often Should You Schedule Inspections?</h3>

      <div className="bg-yellow-50 p-5 rounded-lg mb-6 border border-yellow-200">
        <h4 className="text-xl font-semibold mb-4 text-yellow-800">📅 Recommended Inspection Schedule</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-yellow-700 mb-2">Annual Inspections (Recommended for Most Homes)</h5>
            <p className="text-gray-700 mb-2">
              Most Metro Atlanta homes benefit from yearly plumbing inspections, especially those with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Homes 10+ years old</li>
              <li>Homes on well water, where hard water builds up scale</li>
              <li>Houses with mature landscaping (tree roots)</li>
              <li>Homes that have experienced previous plumbing problems</li>
              <li>Properties with pipes vulnerable to <Link href="/news/article/coping-with-frozen-pipes-a-guide-to-protecting-your-home" className="text-theme-3 hover:underline">winter freezing</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-yellow-700 mb-2">Twice-a-Year Inspections (High-Risk Properties)</h5>
            <p className="text-gray-700 mb-2">
              Consider twice-yearly inspections if your home has:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Homes 20+ years old with original plumbing</li>
              <li>Properties with a history of sewer backups</li>
              <li>Houses with galvanized steel pipes</li>
              <li>Homes in areas with shifting clay soil</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Warning Signs You Need an Inspection Now</h3>

      <p className="mb-4">
        Don&#39;t wait for your scheduled inspection if you notice any of these warning signs. Early intervention can
        prevent minor issues from becoming major disasters:
      </p>

      <div className="bg-red-50 p-5 rounded-lg mb-6 border border-red-200">
        <h4 className="text-xl font-semibold mb-4 text-red-800">🚨 Immediate Inspection Needed</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-red-700 mb-2">Water Issues</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Sudden drop in water pressure</li>
              <li>Discolored or foul-smelling water</li>
              <li>Water temperature fluctuations</li>
              <li>Unexplained increase in water bills</li>
              <li>Water stains on walls or ceilings</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-red-700 mb-2">Drainage Problems</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Slow draining sinks or tubs</li>
              <li>Gurgling sounds from drains</li>
              <li>Sewage odors in the home</li>
              <li>Multiple drain backups (often caused by <Link href="/news/article/are-flushable-wipes-safe-to-flush" className="text-theme-3 hover:underline">improper disposal items</Link>)</li>
              <li>Wet spots in the yard</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Special Considerations for Metro Atlanta Homes</h3>

      <p className="mb-4">
        Living in the Metro Atlanta area presents unique challenges that make regular plumbing inspections even more
        critical:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="text-lg font-semibold mb-2 text-blue-800">💧 Well Water</h4>
          <p className="text-gray-700">
            City water in Metro Atlanta is generally soft, but many homes in the rural parts of South Metro are on private
            wells, where hard water builds up scale in pipes, fixtures and water heaters. Regular inspections catch it
            before it causes blockages or equipment failure.
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="text-lg font-semibold mb-2 text-orange-800">🌱 Clay Soil Challenges</h4>
          <p className="text-gray-700">
            The region&#39;s expansive clay soil shifts with moisture changes, potentially damaging underground pipes.
            Inspections can detect early signs of pipe movement or stress.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="text-lg font-semibold mb-2 text-green-800">🌳 Tree Root Intrusion</h4>
          <p className="text-gray-700">
            Atlanta&#39;s lush landscaping means tree roots are constantly seeking water sources. Regular sewer line
            inspections can catch root intrusion before it causes major blockages.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Making the Investment: Cost vs. Value</h3>

      <div className="bg-green-50 p-5 rounded-lg mb-6 border border-green-200">
        <h4 className="text-xl font-semibold mb-4 text-green-800">💡 The Smart Homeowner&#39;s Choice</h4>
        <p className="text-gray-700 mb-4">
          A routine inspection costs far less than almost any plumbing emergency. Here&#39;s what you get:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-green-700 mb-2">Inspection Benefits</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Peace of mind year-round</li>
              <li>Early problem detection</li>
              <li>Maintenance recommendations</li>
              <li>System optimization tips</li>
              <li>Professional documentation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-green-700 mb-2">Potential Savings</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Avoid $5,000+ emergency repairs</li>
              <li>Prevent water damage restoration</li>
              <li>Extend equipment lifespan</li>
              <li>Reduce utility costs</li>
              <li>Maintain home value</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mb-6">
        Between inspections, a few habits help too: know where your{' '}
        <Link href="/news/article/how-to-find-water-shut-off-valve" className="text-theme-3 hover:underline">main water shut-off valve</Link> is,{' '}
        <Link href="/news/article/flushing-your-water-heater" className="text-theme-3 hover:underline">flush your water heater</Link> once a year,
        and keep an eye on the{' '}
        <Link href="/news/article/10-factors-that-affect-water-quality" className="text-theme-3 hover:underline">factors that affect water quality</Link>.
        If you&#39;d rather not keep track, a{' '}
        <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">plumbing service agreement</Link> puts
        inspections on a schedule for you.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Take Action: Protect Your Home Today</h3>

      <p className="text-lg text-gray-700 mb-6">
        Regular plumbing inspections aren&#39;t just about preventing problems – they&#39;re about protecting your most
        valuable investment. In Metro Atlanta, where environmental factors create unique challenges for plumbing
        systems, preventive maintenance is your best defense against costly surprises.
      </p>

      <CTACall
        headerText="Don&#39;t wait for a plumbing emergency to discover problems with your system."
        buttonText="Call us at 844 PLUMB-ALL"
      />
    </article>
  );
}
