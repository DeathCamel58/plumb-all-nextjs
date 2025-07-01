import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'coping-with-frozen-pipes-a-guide-to-protecting-your-home';
export const metadata = {
  slug: slug,
  title: 'Winter Woes: How to Prevent and Thaw Frozen Pipes',
  date: '2023-12-01',
  excerpt: 'When temperatures drop, your pipes are at risk. Learn how to identify, thaw, and prevent frozen pipes with our comprehensive guide.',
  image: '/images/frozen-pipe.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Winter Woes: How to Prevent and Thaw Frozen Pipes</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          Did you know? Just one-eighth inch crack in a pipe can release up to 250 gallons of water a day, causing thousands of dollars in damage to your home.
        </p>
      </div>

      <p className="mb-6">
        That sinking feeling when you turn on the faucet and nothing comes out—in the middle of winter, it usually means one thing: frozen pipes. If you&#39;ve ever dealt with this winter emergency, you know it&#39;s not just an inconvenience—it&#39;s a race against time to prevent a potential disaster.
      </p>

      <p className="mb-6">
        Frozen pipes aren&#39;t just a nuisance; they&#39;re a ticking time bomb that can lead to burst pipes, flooding, and extensive property damage. The good news? With the right knowledge and quick action, you can thaw frozen pipes safely and take steps to prevent them in the future.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to Spot Frozen Pipes Before They Burst</h2>

      <p className="mb-4">
        Catching frozen pipes early can be the difference between a simple fix and a flooded home. Here are the telltale signs to watch for:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li>
          <strong>Visible frost on exposed pipes</strong> - Check pipes under sinks, in basements, or along exterior walls for a layer of frost.
        </li>
        <li>
          <strong>Strange odors from drains</strong> - When water can&#39;t flow through frozen pipes, <Link href="/news/article/sewer-smells" className="text-theme-3 hover:underline">unusual smells</Link> may back up into your home.
        </li>
        <li>
          <strong>No water coming from faucets</strong> - If you turn on a tap and only get a trickle or nothing at all, you likely have a frozen pipe somewhere in your system.
        </li>
        <li>
          <strong>Unusual sounds when using water</strong> - Bubbling, banging, or whistling noises can indicate that ice is blocking normal water flow.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Your Step-by-Step Guide to Thawing Frozen Pipes</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Safety First!</h3>
        <p className="mb-2">Before attempting to thaw any pipes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Shut off the main water valve to your home</li>
          <li>Open the affected faucet to allow water to flow as the ice melts</li>
          <li>Never use an open flame to thaw pipes—this is a serious fire hazard</li>
        </ul>
      </div>

      <ol className="list-decimal pl-6 mb-6 space-y-6">
        <li>
          <h3 className="text-xl font-semibold mb-2">Start with Gentle Heat</h3>
          <p className="mb-2">Apply heat to the frozen section using a hair dryer, heating pad, or towels soaked in hot water.</p>
          <p><strong>Pro Tip:</strong> Start heating from the faucet end and work your way toward the frozen section to allow melting ice to escape.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Keep the Faucet Open</h3>
          <p className="mb-2">As you heat the pipes, keep the faucet open. The flowing water will help melt ice in the pipe, and the running water prevents refreezing.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Apply Heat Until Full Water Pressure Returns</h3>
          <p className="mb-2">Continue applying heat until full water pressure is restored. This ensures all ice has melted, not just a portion.</p>
          <p><strong>Pro Tip:</strong> Once one section is thawed, check all other faucets in your home to ensure no other pipes are frozen.</p>
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Preventing Future Freezes: Your Winter Pipe Protection Plan</h2>

      <p className="mb-4">
        An ounce of prevention is worth a gallon of water damage cleanup. Here&#39;s how to keep your pipes from freezing in the first place:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Before Winter Hits</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Insulate pipes in unheated areas with foam pipe insulation</li>
            <li>Seal cracks and openings near pipes, especially where they enter your home</li>
            <li>Disconnect garden hoses and shut off outdoor water supplies</li>
            <li>Consider installing heat tape or heat cables on vulnerable pipes</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">During Cold Snaps</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep your home heated to at least 55°F, even when you&#39;re away</li>
            <li>Open cabinet doors to allow warm air to circulate around pipes</li>
            <li>Let faucets drip slightly to prevent pressure buildup in pipes</li>
            <li>Keep garage doors closed if water supply lines run through the garage</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call the Professionals at Plumb-All</h2>

      <p className="mb-4">
        While many frozen pipe situations can be handled DIY-style, some scenarios call for professional expertise:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li>You can&#39;t locate the frozen section of pipe</li>
        <li>The frozen pipe is inside a wall or inaccessible area</li>
        <li>You&#39;ve tried thawing methods but water flow hasn&#39;t returned</li>
        <li>A pipe has already burst or is leaking</li>
        <li>You&#39;re uncomfortable working with your plumbing system</li>
      </ul>

      <p className="mb-6">
        At Plumb-All, our team of experienced <Link href="/services/plumber" className="text-theme-3 hover:underline">plumbers</Link> is available 24/7 for frozen pipe emergencies. With over 20 years of experience, our fully licensed, bonded, and insured professionals can quickly diagnose and resolve your frozen pipe issues before they cause extensive damage to your home.
      </p>

      <p className="mb-6">
        We don&#39;t just fix the immediate problem—we&#39;ll help you identify vulnerable areas in your plumbing system and recommend preventative measures to protect your home throughout the winter season.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Frozen Pipes? Don't Wait Until They Burst!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
