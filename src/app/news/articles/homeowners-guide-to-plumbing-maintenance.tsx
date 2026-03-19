import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'homeowners-guide-to-plumbing-maintenance';
export const metadata = {
  slug: slug,
  title: 'The Homeowner\u0027s Guide to Plumbing Maintenance',
  date: '2025-06-04',
  excerpt: 'Learn the essential plumbing maintenance tasks every homeowner should perform throughout the year to prevent costly repairs and keep your system running smoothly.',
  image: '/images/sink-repair.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">The Homeowner&#39;s Guide to Plumbing Maintenance</h2>

      <p className="mb-6">
        Your home&#39;s plumbing system is one of those things you rarely think about until something goes wrong. A burst pipe, a backed-up drain, or a failing water heater can quickly turn a quiet evening into a stressful emergency. The good news is that most plumbing disasters are preventable. With a consistent maintenance routine and a little knowledge about what to watch for, you can extend the life of your plumbing, avoid expensive repairs, and enjoy the peace of mind that comes with a well-maintained home.
      </p>

      <p className="mb-6">
        This guide walks you through everything you need to know about plumbing maintenance, from seasonal checklists to understanding when it&#39;s time to call a professional. Whether you&#39;re a first-time homeowner or you&#39;ve been in your house for decades, these tips will help you stay ahead of problems before they start.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Why Plumbing Maintenance Matters</h3>

      <p className="mb-6">
        Plumbing systems are built to last, but they aren&#39;t invincible. Over time, mineral deposits build up inside pipes, seals wear out, and fixtures degrade. Small issues like a slow drain or a minor leak might seem harmless at first, but they can escalate into major problems if left unaddressed. A slow leak under a sink, for example, can lead to mold growth, structural damage, and water bills that climb higher each month without explanation.
      </p>

      <p className="mb-6">
        Regular maintenance helps you catch these issues early. It also keeps your plumbing operating efficiently, which translates to lower water bills and fewer emergency calls. Think of it like changing the oil in your car &mdash; a small investment of time and attention now saves you from a much larger bill down the road.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Seasonal Plumbing Maintenance Checklist</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Spring</h4>
      <p className="mb-6">
        Spring is the ideal time to inspect your plumbing after the winter months. Cold weather can take a toll on pipes, outdoor fixtures, and water heaters. Start by checking all exposed pipes in your basement, crawl space, and garage for signs of cracking or leaking. Turn on outdoor faucets and hose bibs to make sure they flow properly and don&#39;t drip when shut off. If you notice reduced water pressure or sputtering, there may be a blockage or a cracked pipe that needs attention.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Inspect exposed pipes for leaks, corrosion, or frost damage</li>
        <li>Test outdoor faucets and hose bibs for proper flow</li>
        <li>Check your sump pump by pouring water into the pit to trigger the float switch</li>
        <li>Flush your water heater to remove sediment buildup</li>
        <li>Look under sinks and around toilets for signs of moisture or dripping</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Summer</h4>
      <p className="mb-6">
        Summer is a great time to tackle maintenance projects while the weather is warm. Check your washing machine hoses for bulging, cracking, or stiffness &mdash; these hoses are under constant pressure and are a common source of flooding when they fail. Clean out your garbage disposal by running ice cubes and cold water through it, followed by citrus peels for a fresh scent. Inspect your sprinkler system heads and connections for leaks, and make sure your main water shut-off valve operates smoothly. Knowing where this valve is and confirming it works could save you thousands of dollars in a plumbing emergency.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Replace washing machine hoses if they&#39;re more than five years old</li>
        <li>Clean garbage disposal blades and check for leaks beneath the unit</li>
        <li>Test your main water shut-off valve to make sure it turns easily</li>
        <li>Inspect irrigation system connections and sprinkler heads</li>
        <li>Check toilet flappers and fill valves for signs of wear</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Fall</h4>
      <p className="mb-6">
        Fall is all about preparing for cold weather. Disconnect garden hoses and shut off exterior water supply lines if your home has interior shut-off valves for outdoor faucets. Insulate exposed pipes in unheated areas like the garage, attic, and crawl space. Have your water heater inspected by a professional to ensure it&#39;s ready for the increased demand of winter. This is also a good time to have your drains professionally cleaned, especially if you&#39;ve noticed any slow drainage throughout the year.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Disconnect and drain garden hoses before the first freeze</li>
        <li>Shut off and drain exterior water supply lines</li>
        <li>Insulate exposed pipes in unheated areas</li>
        <li>Schedule a professional water heater inspection</li>
        <li>Clear leaves and debris from outdoor drains and gutters</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Winter</h4>
      <p className="mb-6">
        During winter, your main concern is preventing frozen pipes. On especially cold nights, let faucets drip slightly on exterior walls to keep water moving through the pipes. Open cabinet doors under sinks to allow warm air to circulate around the plumbing. If you&#39;re leaving for vacation, set your thermostat no lower than 55 degrees Fahrenheit and consider shutting off the main water supply. Monitor your water bill closely &mdash; an unexplained spike could indicate a hidden leak.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Let faucets drip during extreme cold to prevent freezing</li>
        <li>Open cabinet doors under sinks on exterior walls</li>
        <li>Keep your home heated to at least 55&deg;F, even when traveling</li>
        <li>Know the location of your main water shut-off valve</li>
        <li>Watch for unexplained increases in your water bill</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">DIY Maintenance vs. Calling a Professional</h3>

      <p className="mb-6">
        Many plumbing maintenance tasks are well within the abilities of an average homeowner. Checking for leaks, replacing a toilet flapper, cleaning aerators on faucets, and insulating pipes are all straightforward jobs that require minimal tools and experience. These small tasks, done regularly, go a long way toward preventing bigger problems.
      </p>

      <p className="mb-6">
        However, some jobs should always be left to a licensed plumber. Anything involving your main sewer line, water heater repairs, gas line connections, or significant pipe replacement requires professional expertise and specialized equipment. Attempting these repairs yourself can lead to code violations, property damage, or even safety hazards. If you&#39;re ever unsure about whether a job is within your skill level, it&#39;s always better to call a professional than to risk making the problem worse. Our&nbsp;<Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair services</Link>&nbsp;are designed to handle everything from minor fixes to major system overhauls.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Creating a Plumbing Inspection Schedule</h3>

      <p className="mb-6">
        Beyond the seasonal checklist above, it&#39;s wise to schedule a comprehensive professional plumbing inspection at least once a year. A licensed plumber can use specialized tools like video camera inspections to check the inside of your pipes for buildup, tree root intrusion, and early signs of corrosion. They can also test water pressure, inspect your water heater&#39;s anode rod, and evaluate the overall condition of your system.
      </p>

      <p className="mb-6">
        For homeowners who want to take the guesswork out of scheduling, a&nbsp;<Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">plumbing service agreement</Link>&nbsp;is an excellent option. These plans typically include annual inspections, priority scheduling for repairs, and discounts on parts and labor. It&#39;s a simple way to ensure your plumbing gets the professional attention it needs without having to remember to book an appointment each year.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Warning Signs You Shouldn&#39;t Ignore</h3>

      <p className="mb-6">
        Even with the best maintenance routine, issues can still arise. Keep an eye out for these warning signs that indicate it&#39;s time to call a plumber:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Persistent slow drains</strong> &mdash; Could indicate a blockage deep in the line or a venting issue</li>
        <li><strong>Discolored water</strong> &mdash; Brown or rusty water may signal corroding pipes</li>
        <li><strong>Unexplained water bill increases</strong> &mdash; Often the first sign of a hidden leak</li>
        <li><strong>Low water pressure</strong> &mdash; May indicate mineral buildup, a leak, or a failing pressure regulator</li>
        <li><strong>Foul odors from drains</strong> &mdash; Can signal a dry trap, a blockage, or a sewer line issue</li>
        <li><strong>Water stains on walls or ceilings</strong> &mdash; A clear sign of an active leak somewhere in the system</li>
        <li><strong>Gurgling sounds from toilets or drains</strong> &mdash; Usually caused by a venting problem or a developing clog</li>
      </ul>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Keep a simple plumbing maintenance log. Note the date of each inspection, any issues you found, and repairs that were made. This record helps you spot recurring problems and gives your plumber valuable history when diagnosing new issues. It&#39;s also useful documentation if you ever sell your home.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Ready to get your plumbing on a maintenance schedule? We can help!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
