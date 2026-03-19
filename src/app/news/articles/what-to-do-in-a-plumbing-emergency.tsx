import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'what-to-do-in-a-plumbing-emergency';
export const metadata = {
  slug: slug,
  title: 'What to Do in a Plumbing Emergency',
  date: '2025-12-03',
  excerpt: 'A plumbing emergency can happen at any time. Learn the critical first steps to take before the plumber arrives to minimize damage and protect your home.',
  image: '/images/spraying-pipe.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">What to Do in a Plumbing Emergency</h2>

      <p className="mb-6">
        A plumbing emergency can strike without warning. Whether it&#39;s a burst pipe flooding your basement,
        a sewage backup in your bathroom, or an overflowing water heater, the first few minutes are critical.
        How you respond before the plumber arrives can mean the difference between a minor repair and
        thousands of dollars in water damage. Here&#39;s a step-by-step guide to help you stay calm and take
        the right actions when disaster strikes.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Bookmark this page or print it out and keep it near your main water shut
          off valve. In a true emergency, you won&#39;t have time to search for instructions.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Step 1: Shut Off the Water</h3>

      <p className="mb-6">
        The single most important thing you can do during a plumbing emergency is to stop the flow of water.
        Every second that water continues to flow means more damage to your floors, walls, furniture, and
        belongings. If the problem is isolated to a single fixture like a toilet or sink, look for the
        individual shut off valve near that fixture and turn it clockwise to close it.
      </p>

      <p className="mb-6">
        If the leak is more widespread or you can&#39;t identify the source, go straight to your main water shut
        off valve and turn off the water supply to the entire house. Not sure where your shut off valve is
        located? Read our guide on&nbsp;
        <Link href="/news/article/how-to-find-water-shut-off-valve" className="text-theme-3 hover:underline">how to find your water shut off valve</Link>
        &nbsp;so you&#39;re prepared before an emergency happens.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Step 2: Turn Off the Water Heater</h3>

      <p className="mb-6">
        Once the main water supply is shut off, turn off your water heater as a precaution. When the water
        supply is cut and the tank empties, the heater can overheat and potentially cause damage or even
        burst. For a gas water heater, turn the gas valve to the &quot;off&quot; position. For an electric water heater,
        switch off the appropriate breaker at your electrical panel.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Label your electrical panel breakers clearly so you can quickly identify
          the water heater circuit during an emergency. This simple step can save valuable time when every
          minute counts.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Step 3: Open Drains and Spigots</h3>

      <p className="mb-6">
        Even after you&#39;ve shut off the main water supply, there&#39;s still water sitting in your pipes that
        can continue to leak. To drain this remaining water, open any outdoor spigots and turn on the cold
        water taps in your home. This redirects the water in your pipes away from the problem area and helps
        reduce pressure in the system. Be careful not to turn on any hot water taps, as this could cause
        issues with your water heater.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Step 4: Assess the Damage</h3>

      <p className="mb-6">
        With the water stopped, take a moment to assess the situation. Look for the source of the leak and
        take note of any visible damage. If it&#39;s safe to do so, start cleaning up standing water with towels,
        mops, or a wet/dry vacuum. The faster you remove standing water, the less likely you are to experience
        secondary damage like mold growth or warped flooring.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Take photos and videos of the damage for insurance documentation</li>
        <li>Move furniture, electronics, and valuables away from the affected area</li>
        <li>If water is near electrical outlets or appliances, turn off electricity to that area at the breaker</li>
        <li>Open windows and doors to improve ventilation and help the area dry out</li>
        <li>Place buckets under any active drips to contain remaining water</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Step 5: Call a Professional</h3>

      <p className="mb-6">
        Once you&#39;ve taken these immediate steps, it&#39;s time to call a licensed plumber. A plumbing emergency
        requires professional expertise to properly diagnose and fix the underlying problem. At Plumb-All, we
        offer&nbsp;
        <Link href="/services/emergencies" className="text-theme-3 hover:underline">24/7 emergency plumbing services</Link>
        &nbsp;throughout Metro Atlanta. Our experienced technicians can respond quickly to stop the damage and
        get your plumbing system back to normal.
      </p>

      <p className="mb-6">
        When you call, be ready to describe what happened, where the water is coming from, and what steps
        you&#39;ve already taken. This helps the plumber prepare the right tools and parts so they can resolve the
        issue as quickly as possible.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Counts as a Plumbing Emergency?</h3>

      <p className="mb-6">
        Not every plumbing problem requires an emergency call. Understanding the difference can save you money
        while still ensuring you get help when you truly need it. Here are situations that warrant an
        immediate call:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Burst or broken pipes</strong> causing active flooding</li>
        <li><strong>Sewage backups</strong> creating health hazards in your home</li>
        <li><strong>No water at all</strong> when it&#39;s not a utility company issue</li>
        <li><strong>Gas line leaks</strong> near plumbing fixtures (leave the house and call 911 first)</li>
        <li><strong>Overflowing toilets</strong> that won&#39;t stop with the shut off valve</li>
        <li><strong>Major leaks</strong> that could cause structural damage</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Issues That Can Usually Wait</h4>

      <p className="mb-6">
        On the other hand, some plumbing issues are inconvenient but not urgent. A slowly dripping faucet, a
        toilet that runs intermittently, minor&nbsp;
        <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection</Link>
        &nbsp;concerns, or a slightly slow drain can typically wait for a scheduled appointment during regular
        business hours. Scheduling a non-emergency visit is usually more cost-effective than calling for
        after-hours service.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Why DIY Fixes During Emergencies Can Make Things Worse</h3>

      <p className="mb-6">
        When water is pouring into your home, it&#39;s tempting to try a quick fix yourself. However, attempting
        DIY plumbing repairs during an emergency often creates bigger problems. Pipe clamps, epoxy putty, and
        duct tape may seem like reasonable temporary solutions, but they can mask the true extent of the damage
        and give you a false sense of security.
      </p>

      <p className="mb-6">
        Improper repairs can also make the situation worse. Overtightening a fitting can crack a pipe. Using
        the wrong sealant can contaminate your water supply. And working near water and electricity without
        proper training puts your safety at risk. Your job during a plumbing emergency is to stop the water
        and prevent further damage, not to fix the pipe itself. Leave the repair work to a licensed
        professional who has the tools, training, and experience to do the job safely and correctly.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Keep a basic emergency plumbing kit handy that includes a pipe wrench,
          plumber&#39;s tape, old towels, a bucket, and a flashlight. These items can help you manage a situation
          until professional help arrives, without attempting risky repairs.
        </p>
      </div>

      <p className="mb-6">
        Plumbing emergencies are stressful, but preparation makes all the difference. Know where your shut off
        valves are, keep emergency contact numbers accessible, and remember that acting quickly in those first
        few minutes is the best way to protect your home from serious water damage.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Dealing with a plumbing emergency? Plumb-All is here for you 24/7."
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
