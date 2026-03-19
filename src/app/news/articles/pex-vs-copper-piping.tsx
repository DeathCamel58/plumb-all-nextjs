import React from 'react';
import Link from "next/link";
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'pex-vs-copper-piping';
export const metadata = {
  slug: slug,
  title: 'PEX vs. Copper: Which Piping Is Right for Your Home?',
  date: '2021-02-10',
  excerpt: 'Choosing between PEX and copper piping is one of the biggest decisions in a plumbing project. Learn the pros, cons, and best use cases for each material.',
  image: '/images/pipes.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">PEX vs. Copper: Which Piping Is Right for Your Home?</h2>

      <p className="mb-6">
        Whether you&#39;re building a new home, repiping an older one, or planning a major renovation, one of
        the most important decisions you&#39;ll face is choosing the right piping material for your water supply
        lines. For decades, copper was the undisputed standard in residential plumbing. But in recent years, PEX
        (cross-linked polyethylene) has surged in popularity, capturing a significant share of the residential
        plumbing market. Both materials have their strengths and weaknesses, and the right choice depends on your
        specific situation, budget, and priorities.
      </p>

      <p className="mb-6">
        In this comprehensive comparison, we&#39;ll examine the key differences between PEX and copper piping
        across the factors that matter most to homeowners: cost, durability, installation, performance, and
        long-term value.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Is PEX Piping?</h3>

      <p className="mb-6">
        PEX stands for cross-linked polyethylene. It&#39;s a flexible plastic tubing that was first developed in
        Europe in the 1960s and has been used in the United States since the 1980s. PEX is manufactured by
        cross-linking the molecular structure of high-density polyethylene, which gives it enhanced flexibility,
        durability, and resistance to temperature extremes. It comes in three varieties (PEX-A, PEX-B, and
        PEX-C) that differ in their manufacturing process and flexibility, with PEX-A being the most flexible
        and generally considered the highest quality.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Is Copper Piping?</h3>

      <p className="mb-6">
        Copper piping has been used in residential plumbing since the 1940s and became the dominant pipe material
        by the 1960s. It&#39;s a rigid metal pipe that comes in several types: Type M (thinnest wall, most
        common for residential water supply), Type L (medium wall, used for water supply and some drain lines),
        and Type K (thickest wall, used for underground water service lines). Copper pipes are joined by
        soldering (also called &quot;sweating&quot;) the joints with a torch and flux.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Cost Comparison</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Material Cost</h4>
      <p className="mb-6">
        PEX piping costs significantly less than copper. On average, PEX material costs roughly one-third to
        one-quarter the price of copper per linear foot. Copper is a commodity metal whose price fluctuates with
        the global market, meaning costs can vary considerably. PEX pricing is more stable and predictable.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Labor Cost</h4>
      <p className="mb-6">
        PEX is faster and easier to install than copper, which translates to lower labor costs. PEX connections
        use crimp, clamp, or push-fit fittings that don&#39;t require soldering. The flexible tubing can be
        routed through walls with fewer fittings and connections. Copper installation requires a skilled plumber
        with soldering experience, and every joint and connection must be individually soldered, which is
        time-intensive.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Total Project Cost</h4>
      <p className="mb-6">
        When you combine material and labor, a PEX repipe typically costs 40 to 60 percent less than an equivalent
        copper repipe. For a typical three-bedroom home, this can represent a savings of several thousand dollars.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Durability and Lifespan</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Copper</h4>
      <p className="mb-6">
        Copper pipes are exceptionally durable and can last 50 to 70 years or more under normal conditions.
        They&#39;re resistant to UV light, won&#39;t degrade from sunlight exposure, and have a long track
        record proving their longevity. However, copper can corrode in areas with acidic water (low pH) or
        aggressive soil chemistry. Copper is also susceptible to pinhole leaks, particularly in certain water
        conditions, and can develop scale buildup in hard water areas.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">PEX</h4>
      <p className="mb-6">
        PEX pipes are expected to last 40 to 50 years, though the material hasn&#39;t been in widespread use
        long enough for definitive real-world data beyond that. PEX is resistant to corrosion and scale buildup,
        which are common problems with metal pipes. It&#39;s also resistant to the chemicals typically found in
        municipal water supplies. However, PEX is sensitive to UV light and will degrade if exposed to direct
        sunlight for extended periods, so it should only be used indoors or underground.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Freeze Resistance</h3>

      <p className="mb-6">
        This is one area where PEX has a clear advantage. PEX tubing can expand slightly when water inside it
        freezes, making it more resistant to bursting than rigid copper pipes. While PEX can still burst under
        extreme freezing conditions, it&#39;s significantly more forgiving than copper. For homes in areas prone
        to occasional freezing temperatures, this flexibility provides an extra margin of safety.
      </p>

      <p className="mb-6">
        Copper, being a rigid metal, has no flexibility. When water freezes inside a copper pipe, the expanding
        ice puts direct pressure on the pipe walls, and if the pressure exceeds the pipe&#39;s strength, it will
        crack or split.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Installation Considerations</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">PEX Advantages</h4>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Flexible and can be bent around corners, reducing the need for elbow fittings</li>
        <li>Can be run in long continuous lengths from a manifold to each fixture, minimizing connections</li>
        <li>No soldering or open flame required, reducing fire risk during installation</li>
        <li>Color-coded (red for hot, blue for cold) for easy identification</li>
        <li>Lighter weight makes it easier to handle and route through tight spaces</li>
        <li>Quieter than copper, reducing water hammer and flow noise</li>
      </ul>

      <h4 className="text-xl font-bold mt-6 mb-3">Copper Advantages</h4>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Can be used outdoors and in direct sunlight without degradation</li>
        <li>Universally accepted by all building codes (some areas still restrict PEX)</li>
        <li>Does not require special fittings at connections to fixtures and valves</li>
        <li>Has inherent antimicrobial properties that inhibit bacterial growth</li>
        <li>Recyclable and has scrap value at end of life</li>
        <li>Proven track record spanning more than 70 years</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Water Quality and Health Considerations</h3>

      <p className="mb-6">
        Both PEX and copper are safe for drinking water and are approved by plumbing codes nationwide. Copper has
        natural antimicrobial properties that can inhibit the growth of certain bacteria. Some homeowners report a
        slight plastic taste or odor from new PEX installations, but this typically dissipates within a few weeks
        of use as the pipes are flushed.
      </p>

      <p className="mb-6">
        It&#39;s worth noting that copper pipes with lead solder (common in homes built before 1986) can leach
        lead into the water supply. If you have older copper pipes, it&#39;s the solder, not the copper itself,
        that poses a health risk. Modern copper installations use lead-free solder and are perfectly safe.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Which Should You Choose?</h3>

      <p className="mb-6">
        The best choice depends on your priorities. Here&#39;s a quick summary to help you decide:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Choose PEX if:</strong> Budget is a primary concern, you want faster installation with less disruption, you live in an area prone to freezing, or your water is corrosive to metals.</li>
        <li><strong>Choose copper if:</strong> You want maximum proven longevity, you need outdoor or UV-exposed runs, your local code requires it, or you prefer a material with a multi-decade track record.</li>
        <li><strong>Consider a hybrid approach:</strong> Many plumbers use copper for the main water service line and visible runs, with PEX for the distribution lines inside walls. This combines the strengths of both materials.</li>
      </ul>

      <p className="mb-6">
        Regardless of which material you choose, professional installation is essential. Our&nbsp;<Link href="/services/plumbing-installation" className="text-theme-3 hover:underline">plumbing installation</Link>&nbsp;team
        has extensive experience with both PEX and copper and can help you determine the best material for your
        home&#39;s specific needs. If you&#39;re dealing with aging pipes that need attention, our&nbsp;<Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair</Link>&nbsp;specialists
        can assess your current system and recommend the best path forward.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Before committing to a piping material, check with your local building
          department about code requirements in your area. While PEX is accepted in most jurisdictions, some
          municipalities still have restrictions on its use. Your plumber should be familiar with local codes,
          but it never hurts to verify independently.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need help choosing the right piping for your home? We're happy to consult!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
