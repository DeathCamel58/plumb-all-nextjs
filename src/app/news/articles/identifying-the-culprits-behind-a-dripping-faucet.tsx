import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'identifying-the-culprits-behind-a-dripping-faucet';
export const metadata = {
  slug: slug,
  title: 'Stop That Drip: Identifying What\'s Behind Your Leaky Faucet',
  date: '2023-12-21',
  excerpt: 'That annoying drip is more than just a nuisance—it\'s wasting water and money. Identify the common causes of leaky faucets.',
  image: '/images/dripping-faucet.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Stop That Drip: Identifying What&#39;s Behind Your Leaky Faucet</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          Did you know? A single dripping faucet can waste up to 3,000 gallons of water per year. That&#39;s enough to take 180 showers!
        </p>
      </div>

      <p className="mb-6">
        Tick, tick, tick... That persistent dripping sound from your faucet isn&#39;t just annoying—it&#39;s literally money going down the drain. If you&#39;ve been ignoring that leaky faucet, you might be surprised to learn how much it&#39;s costing you and how simple the fix might be.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Hidden Cost of That Tiny Drip</h2>

      <p className="mb-6">
        What seems like a minor annoyance can have major consequences for both your wallet and the environment. The EPA estimates that household leaks waste nearly 1 trillion gallons of water annually nationwide. A leaky faucet that drips at the rate of one drop per second can waste more than 3,000 gallons per year—that&#39;s the equivalent of 180 showers!
      </p>

      <p className="mb-6">
        By fixing that dripping faucet, you could reduce your water bill by 10% or more. But before you can fix it, you need to know what&#39;s causing it.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The 3 Most Common Culprits</h2>

      <ol className="list-decimal pl-6 mb-6 space-y-6">
        <li>
          <h3 className="text-xl font-semibold mb-2">Worn-Out O-Ring</h3>
          <p className="mb-2">A small disc attached to the stem screw that holds the faucet handle in place.</p>
          <p><strong>Signs:</strong> Dripping near the handle rather than the spout.</p>
          <p><strong>DIY Potential:</strong> Medium - Requires basic tools and an inexpensive replacement O-ring.</p>
          <p><strong>Pro Tip:</strong> Take the old O-ring to the hardware store to ensure you get the exact size replacement.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Corroded Valve Seat</h3>
          <p className="mb-2">The connector between the faucet and the spout that can corrode from mineral buildup.</p>
          <p><strong>Signs:</strong> Water leaking around the base of the spout.</p>
          <p><strong>DIY Potential:</strong> Low - Special tools may be required.</p>
          <p><strong>Pro Tip:</strong> Regular cleaning can prevent this issue. Consider a professional valve seat cleaning during routine maintenance.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Worn Washer</h3>
          <p className="mb-2">The most common cause of dripping faucets. The rubber washer creates friction each time you use the faucet.</p>
          <p><strong>Signs:</strong> Dripping from the spout when the faucet is turned off.</p>
          <p><strong>DIY Potential:</strong> High - Simple fix with basic tools and an inexpensive washer.</p>
          <p><strong>Pro Tip:</strong> Make sure to get the correct size and type of washer for your specific faucet model.</p>
        </li>
      </ol>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">When to Call a Professional</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>If you&#39;ve replaced the washer but the faucet still drips</li>
          <li>When you can&#39;t identify the source of the leak</li>
          <li>If your faucet is more than 15 years old (it might be time for a replacement)</li>
          <li>When you don&#39;t have the right tools or aren&#39;t comfortable disassembling the faucet</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How Plumb-All Can Help</h2>

      <p className="mb-6">
        While some <Link href="/services/faucet-repair" className="text-theme-3 hover:underline">Faucet repairs and replacements</Link> can be DIY projects, others require professional expertise. At Plumb-All, our team of experienced plumbers can quickly diagnose and fix your dripping faucet, saving you time, frustration, and money in the long run.
      </p>

      <p className="mb-6">
        With over two decades of experience, our fully licensed, bonded, and insured plumbers provide fast, reliable service at competitive rates. We&#39;ll not only fix your immediate issue but can also identify potential problems before they become costly emergencies.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Ready to Stop That Drip For Good?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
