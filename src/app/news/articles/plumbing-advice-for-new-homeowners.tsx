import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'plumbing-advice-for-new-homeowners';
export const metadata = {
  slug: slug,
  title: 'Essential Plumbing Knowledge for New Homeowners',
  date: '2023-11-14',
  excerpt: 'From locating the water main to choosing the right plunger, our expert advice ensures you\'re equipped to handle common plumbing issues and prevent costly emergencies.',
  image: '/images/water-shut-off-valve.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Essential Plumbing Knowledge for New Homeowners</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          Did you know? The average household&#39;s plumbing leaks can account for nearly 10,000 gallons of wasted water annually—enough to fill a swimming pool! Learning basic plumbing skills can save both water and money.
        </p>
      </div>

      <p className="mb-6">
        Congratulations on your new home! Amid the excitement of decorating and settling in, it&#39;s easy to overlook one crucial aspect of homeownership—understanding your plumbing system. That first unexpected leak or clogged drain can quickly turn your homeowner dream into a stressful situation if you&#39;re unprepared.
      </p>

      <p className="mb-6">
        While many assume plumbing knowledge is specialized, everyone in the household should understand the basics. These essential tips will help you prevent common issues, handle minor problems confidently, and know when it&#39;s time to call the professionals.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5 Essential Plumbing Skills Every Homeowner Should Master</h2>

      <ol className="list-decimal pl-6 mb-6 space-y-6">
        <li>
          <h3 className="text-xl font-semibold mb-2">Locate and Operate Your Water Main</h3>
          <p className="mb-2">The water main is your first line of defense against major water damage. Knowing its location and how to shut it off quickly can prevent a minor leak from becoming a flooding disaster.</p>
          <p><strong>Where to Find It:</strong> Typically located in the basement, crawlspace, or near the perimeter of your home where the municipal water supply enters.</p>
          <p><strong>Pro Tip:</strong> Practice turning it off once or twice so you&#39;re not fumbling in an emergency. Consider labeling it clearly and keeping any necessary tools nearby.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Prevent and Clear Drain Clogs</h3>
          <p className="mb-2">Clogged drains are among the most common plumbing issues, but they&#39;re also largely preventable with proper habits.</p>
          <p><strong>Prevention Strategies:</strong></p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li>Never pour grease, oil, or fat down any drain—collect it in a container and dispose of it in the trash</li>
            <li>Use drain strainers in showers and sinks to catch hair and food particles</li>
            <li>Run hot water down the drain after each use to help prevent buildup</li>
            <li>Periodically flush drains with a mixture of baking soda and vinegar</li>
          </ul>
          <p><strong>Pro Tip:</strong> For minor clogs, try a plunger before reaching for chemical drain cleaners, which can damage pipes with repeated use.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Select and Use the Right Plunger</h3>
          <p className="mb-2">Not all plungers are created equal, and using the wrong type can make your clog worse or create unnecessary messes.</p>
          <p><strong>Types of Plungers:</strong></p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li><strong>Cup Plunger:</strong> The standard red plunger with a flat bottom—ideal for flat surfaces like sinks and tubs</li>
            <li><strong>Flange Plunger:</strong> Has an extended rubber flap that fits into toilet drains—specifically designed for toilets</li>
            <li><strong>Accordion Plunger:</strong> Made of hard plastic with multiple ridges—provides extra force for stubborn toilet clogs</li>
          </ul>
          <p><strong>Pro Tip:</strong> For maximum effectiveness, ensure you have a tight seal and use slow, deliberate plunging motions rather than quick, forceful ones.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Monitor and Adjust Water Temperature</h3>
          <p className="mb-2">Your water heater is a crucial component of your plumbing system that requires regular attention for safety and efficiency.</p>
          <p><strong>Safety Concerns:</strong> Water heaters set too high can cause scalding (especially dangerous for children and elderly), while temperatures too low may allow harmful bacteria to grow.</p>
          <p><strong>Ideal Setting:</strong> The Department of Energy recommends setting your water heater to 120°F (49°C)—hot enough to kill bacteria but not so hot it poses a scalding risk.</p>
          <p><strong>Pro Tip:</strong> Check your water heater&#39;s temperature setting seasonally, as you may need to adjust it during extreme weather conditions.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Know Your Shut-Off Valves</h3>
          <p className="mb-2">Beyond the main water valve, individual fixtures and appliances typically have their own shut-off valves.</p>
          <p><strong>Common Locations:</strong></p>
          <ul className="list-disc pl-6 mb-2 space-y-1">
            <li><strong>Toilets:</strong> Look for an oval-shaped handle on a pipe near the floor</li>
            <li><strong>Sinks:</strong> Check under the sink for small handles on the water supply lines</li>
            <li><strong>Washing Machine:</strong> Look for lever handles on the wall behind the machine</li>
            <li><strong>Water Heater:</strong> Find a valve on the cold water pipe leading into the heater</li>
          </ul>
          <p><strong>Pro Tip:</strong> Test these valves periodically to ensure they&#39;re not stuck or corroded. A stuck valve during an emergency can lead to significant water damage.</p>
        </li>
      </ol>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">New Homeowner&#39;s Plumbing Checklist</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Locate and label your main water shut-off valve</li>
          <li>Identify individual shut-off valves for each fixture</li>
          <li>Purchase both a cup plunger and a flange plunger</li>
          <li>Check your water heater&#39;s temperature setting</li>
          <li>Install drain strainers in all sinks and showers</li>
          <li>Find and test all outdoor spigots and their indoor shut-offs</li>
          <li>Locate your home&#39;s main sewer cleanout</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call the Professionals at Plumb-All</h2>

      <p className="mb-6">
        While these basic skills will help you handle minor issues, some plumbing problems require professional expertise:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li>Water pressure that&#39;s consistently too high or too low</li>
        <li>Recurring clogs that don&#39;t respond to plunging</li>
        <li>Visible water damage on walls, floors, or ceilings</li>
        <li>Sewer line backups or foul odors</li>
        <li>No hot water or inconsistent water temperature</li>
        <li>Frozen or burst pipes</li>
        <li>Installation of new fixtures or appliances</li>
      </ul>

      <p className="mb-6">
        At Plumb-All, we understand that plumbing emergencies don&#39;t wait for convenient times. Our team of licensed, bonded, and insured professionals is ready to assist with any plumbing issue, from minor repairs to major installations. Contact us online or call <a href="tel:+17709143877" className="text-theme-1 hover:text-theme-2 transition">(770) 914-3877</a> for prompt, reliable service. Your home&#39;s plumbing is our priority!
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need professional plumbing assistance for your new home?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
