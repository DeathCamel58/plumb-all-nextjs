import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'why-is-my-toilet-running';
export const metadata = {
  slug: slug,
  title: 'Why Is My Toilet Running and How Do I Fix It?',
  date: '2024-08-28',
  excerpt: 'Discover the most common reasons your toilet keeps running and learn step-by-step fixes for flapper issues, fill valve problems, and more.',
  image: '/images/toilet-flapper.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Why Is My Toilet Running and How Do I Fix It?</h2>

      <p className="mb-6">
        Few household sounds are as persistent and annoying as a running toilet. That constant trickle or
        hiss of water flowing into the bowl when nobody has flushed isn&#39;t just irritating — it&#39;s
        wasteful and costly. A running toilet can waste anywhere from 30 to 200 gallons of water per day,
        depending on the severity of the leak. That translates to a significant increase on your water bill
        and a lot of wasted resources. The good news is that a running toilet is usually caused by one of a
        few common, fixable problems inside the tank.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Understanding How Your Toilet Works</h3>

      <p className="mb-6">
        Before diving into troubleshooting, it helps to understand the basic mechanics of a toilet tank.
        When you flush, a lever lifts the flapper (a rubber seal at the bottom of the tank), allowing water
        to rush from the tank into the bowl. Once the tank empties, the flapper closes and the fill valve
        opens, refilling the tank with fresh water. A float mechanism (either a ball float on an arm or a
        float cup that slides up the fill valve shaft) rises with the water level and shuts off the fill
        valve when the tank reaches the correct level. The overflow tube in the center of the tank prevents
        the water level from rising too high by directing excess water into the bowl. When any of these
        components malfunction, the result is a running toilet.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Common Causes and How to Fix Them</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">1. Worn or Damaged Flapper</h4>
      <p className="mb-6">
        The flapper is the single most common cause of a running toilet. This rubber or silicone seal sits
        over the flush valve opening at the bottom of the tank. Over time, the flapper can warp, crack, or
        develop mineral buildup that prevents it from seating properly. When the flapper doesn&#39;t seal
        completely, water slowly leaks from the tank into the bowl, causing the fill valve to cycle on
        periodically to replenish the lost water.
      </p>
      <p className="mb-6">
        <strong>How to fix it:</strong> Turn off the water supply to the toilet using the shutoff valve
        behind the base. Flush the toilet to drain the tank, then unhook the old flapper from the pegs on
        the overflow tube. Take the old flapper to a hardware store to find a matching replacement. Install
        the new flapper by hooking it onto the same pegs and reconnecting the chain to the flush lever. Turn
        the water back on and check that the flapper seats properly when the tank refills. Flappers cost
        just a few dollars and take about five minutes to replace.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">2. Flapper Chain Issues</h4>
      <p className="mb-6">
        The chain connecting the flush lever to the flapper needs to have just the right amount of slack. If
        the chain is too short, it pulls the flapper partially open, allowing a constant leak. If the chain
        is too long, it can get caught under the flapper when it closes, preventing a proper seal. You may
        also notice the chain getting tangled or kinked, which causes intermittent running.
      </p>
      <p className="mb-6">
        <strong>How to fix it:</strong> Adjust the chain so there is about half an inch of slack when the
        flapper is in the closed position. Most chains have a clip that allows you to easily shorten or
        lengthen the connection. Trim any excess chain length to prevent tangling, but leave a few extra
        links in case you need to readjust later.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">3. Faulty Fill Valve</h4>
      <p className="mb-6">
        The fill valve controls the flow of fresh water into the tank after each flush. When a fill valve
        wears out or becomes clogged with sediment, it may not shut off completely, allowing water to
        continuously flow into the tank. You&#39;ll often hear a constant hissing sound when the fill valve
        is the problem. In some cases, the valve may also vibrate or produce a loud humming noise.
      </p>
      <p className="mb-6">
        <strong>How to fix it:</strong> First, try cleaning the fill valve. Remove the cap from the top of
        the valve, place a cup over the opening, and briefly turn on the water to flush out debris. If
        cleaning doesn&#39;t solve the problem, the fill valve likely needs to be replaced. Universal fill
        valves are available at any hardware store and typically cost between $8 and $15. Replacement involves
        turning off the water, draining the tank, disconnecting the water supply line, unscrewing the old
        valve, and installing the new one.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">4. Float Set Too High</h4>
      <p className="mb-6">
        The float mechanism tells the fill valve when to stop adding water to the tank. If the float is set
        too high, the water level will rise above the top of the overflow tube, causing a constant stream of
        water to flow into the bowl. This is one of the easiest problems to diagnose — simply remove the
        tank lid and observe the water level. If water is flowing into the overflow tube, the float is set
        too high.
      </p>
      <p className="mb-6">
        <strong>How to fix it:</strong> For ball float designs (an older style with a ball on the end of a
        metal arm), gently bend the arm downward to lower the float. For float cup designs (found on most
        modern fill valves), look for an adjustment screw or clip on the side of the fill valve and turn or
        slide it to lower the float position. The ideal water level is about one inch below the top of the
        overflow tube. Mark this level on the inside of the tank for easy reference during future adjustments.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">5. Cracked Overflow Tube</h4>
      <p className="mb-6">
        The overflow tube is the large, hollow tube in the center of the tank. If it develops a crack below
        the water line, water will leak through the crack and continuously drain into the bowl. This is less
        common than flapper or fill valve issues, but it does happen, particularly in older toilets. A
        cracked overflow tube usually requires replacing the entire flush valve assembly, which is a more
        involved repair.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">The Dye Test: Confirming a Silent Leak</h3>

      <p className="mb-6">
        Sometimes a toilet leak is so small that you can&#39;t hear or see it. To check for a silent leak,
        add a few drops of food coloring to the tank water and wait 15 to 20 minutes without flushing. If
        colored water appears in the bowl, you have a leak — most likely a worn flapper. This simple test
        can help you catch a slow leak before it adds up on your water bill.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">When to Call a Professional</h3>

      <p className="mb-6">
        Many running toilet issues are manageable DIY repairs. However, there are situations where
        professional help is the better option. If you&#39;ve replaced the flapper and fill valve but the
        toilet still runs, if the toilet is old and parts are difficult to find, or if you notice cracks in
        the porcelain tank or bowl, it may be time for a&nbsp;
        <Link href="/services/toilet-installation" className="text-theme-3 hover:underline">new toilet installation</Link>.
        &nbsp;Modern toilets are significantly more water-efficient than older models, using as little as
        1.28 gallons per flush compared to 3.5 to 7 gallons for vintage models. Upgrading can save hundreds
        of dollars per year in water costs. If you&#39;re dealing with persistent plumbing issues beyond the
        toilet itself, our&nbsp;
        <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair services</Link>
        &nbsp;can help diagnose and resolve the underlying problem.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Keep a basic toilet repair kit on hand — a universal flapper, a fill
          valve, and a supply line — so you can fix most running toilet issues the same day you notice them.
          The total cost for all three parts is typically under $25, and having them ready saves you a trip
          to the store while your toilet wastes water.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Toilet troubles? We'll get it fixed fast!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
