import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'what-is-a-slab-leak';
export const metadata = {
  slug: slug,
  title: 'What Is a Slab Leak and How Is It Repaired?',
  date: '2024-10-30',
  excerpt: 'Learn what slab leaks are, how to recognize the warning signs, and explore the detection methods and repair options available to fix them.',
  image: '/images/slab-leak.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">What Is a Slab Leak and How Is It Repaired?</h2>

      <p className="mb-6">
        A slab leak is a water leak that occurs in the plumbing pipes running beneath or within your home&#39;s
        concrete foundation (commonly called the slab). Because these pipes are buried under several inches of
        solid concrete, slab leaks are difficult to detect and can cause significant damage before a homeowner
        realizes anything is wrong. Understanding what causes slab leaks, how to spot them early, and what
        repair options are available can help you protect your home from this potentially devastating problem.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Causes Slab Leaks?</h3>

      <p className="mb-6">
        Several factors can contribute to the development of a slab leak, and in many cases, multiple factors
        work together over time.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Pipe Corrosion</h4>
      <p className="mb-6">
        Copper pipes, which are commonly used in under-slab plumbing, can corrode over time due to the
        chemical properties of the water flowing through them and the minerals in the surrounding soil.
        Both internal corrosion (from the water side) and external corrosion (from the soil side) can
        eventually eat through the pipe wall, creating a leak. Homes with aggressive water chemistry —
        water that is particularly acidic or has high mineral content — are more susceptible to this type
        of corrosion.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Abrasion</h4>
      <p className="mb-6">
        Pipes naturally expand and contract with temperature changes as hot and cold water flows through
        them. When a pipe runs through a tight space in the concrete slab, this repeated movement can cause
        the pipe to rub against the surrounding concrete, gravel, or other pipes. Over years of this
        continuous friction, the pipe wall wears thin and eventually develops a pinhole leak. Hot water lines
        are particularly susceptible to abrasion because they experience more thermal expansion and
        contraction than cold water lines.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Soil Shifting and Foundation Movement</h4>
      <p className="mb-6">
        The soil beneath your home is not as static as it seems. Clay soils expand when wet and contract when
        dry, creating a cycle of movement that can stress the pipes embedded in or beneath the slab. Seismic
        activity, even minor tremors, can shift the foundation enough to put pressure on pipes. Construction
        activity nearby, changes in the water table, and erosion can also cause soil movement that damages
        under-slab plumbing.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Poor Installation or Pipe Quality</h4>
      <p className="mb-6">
        Pipes that were kinked, dented, or improperly soldered during installation are more likely to develop
        leaks over time. Poor-quality pipe materials or fittings that don&#39;t meet current standards can
        also fail prematurely. Homes built during periods of rapid construction may have been plumbed with
        less attention to detail, increasing the risk of slab leaks decades later.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Warning Signs of a Slab Leak</h3>

      <p className="mb-6">
        Because slab leaks are hidden beneath concrete, the signs are often indirect. Learning to recognize
        these warning signs can help you catch a slab leak before it causes severe damage.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Unexplained increase in water bills:</strong> A sudden or steady rise in your water bill
          without a corresponding increase in usage is one of the earliest indicators of a hidden leak.</li>
        <li><strong>Sound of running water:</strong> If you can hear water flowing or hissing when all
          fixtures are turned off, water may be escaping from a pipe beneath the slab.</li>
        <li><strong>Hot spots on the floor:</strong> A hot water line leak will warm the concrete above it,
          creating noticeable warm areas on your floor. You may feel these hot spots with bare feet,
          especially on tile or hardwood flooring.</li>
        <li><strong>Damp or wet spots on floors:</strong> Water seeping up through the slab can create damp
          patches on carpet, warped hardwood, or discolored areas on tile or laminate flooring.</li>
        <li><strong>Mold or mildew smell:</strong> Persistent moisture beneath the slab creates ideal
          conditions for mold growth. If you notice a musty smell that you can&#39;t trace to a visible
          source, a slab leak could be the cause.</li>
        <li><strong>Cracks in walls or foundation:</strong> A significant slab leak can erode the soil
          beneath the foundation, causing the slab to shift or settle unevenly. This can result in cracks
          in the foundation, walls, or flooring.</li>
        <li><strong>Low water pressure:</strong> A leak in the supply line beneath the slab reduces the
          amount of water reaching your fixtures, which you may notice as decreased water pressure
          throughout the house.</li>
        <li><strong>Water meter test:</strong> Turn off all water-using fixtures and appliances in your home,
          then check your water meter. If the meter is still registering water flow, you have a leak
          somewhere in the system.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">How Slab Leaks Are Detected</h3>

      <p className="mb-6">
        Professional&nbsp;
        <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection services</Link>
        &nbsp;use specialized technology to locate slab leaks without tearing up your floor. These
        non-invasive methods allow plumbers to pinpoint the exact location of the leak before any repair
        work begins.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Electronic listening devices:</strong> Sensitive microphones and amplifiers are placed on
          the floor to detect the sound of water escaping from a pressurized pipe. The sound pattern helps
          the technician identify the leak&#39;s location.</li>
        <li><strong>Electromagnetic pipe locators:</strong> These devices send a signal through the pipe and
          track it from above, mapping the pipe&#39;s path beneath the slab and identifying areas of
          concern.</li>
        <li><strong>Infrared thermography:</strong> Thermal cameras detect temperature variations on the floor
          surface. A hot water leak will create a warm zone that shows up clearly on the thermal image.</li>
        <li><strong>Pressure testing:</strong> The plumber can isolate sections of the plumbing system and
          pressurize them to determine which line is leaking and approximately where.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Slab Leak Repair Options</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Spot Repair</h4>
      <p className="mb-6">
        If the leak is in a single, accessible location and the rest of the pipe is in good condition, a
        spot repair may be the most cost-effective option. The plumber cuts through the concrete slab at the
        leak location, repairs or replaces the damaged section of pipe, and then patches the concrete. This
        approach works best for newer pipes with isolated damage, such as a construction defect or localized
        abrasion.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Pipe Rerouting (Repiping)</h4>
      <p className="mb-6">
        When the pipes beneath the slab are old or corroded in multiple areas, repairing individual spots
        becomes impractical because new leaks will likely develop soon. In these cases, the plumber may
        recommend rerouting the affected water lines through the walls, ceiling, or attic, bypassing the
        under-slab pipes entirely. The old pipes are capped off and abandoned in place. While this is a
        more involved and costly project, it eliminates the risk of future slab leaks in those lines. Our&nbsp;
        <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair team</Link>
        &nbsp;can evaluate your situation and recommend the best approach.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Epoxy Pipe Lining</h4>
      <p className="mb-6">
        In some cases, an epoxy coating can be applied to the interior of the damaged pipe to seal small
        leaks and prevent future corrosion. This trenchless method avoids the need to break through the slab
        and is less disruptive than other repair options. However, it&#39;s not suitable for all types of
        damage, particularly larger breaks or collapsed sections.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Full Repipe</h4>
      <p className="mb-6">
        For homes with extensive corrosion or a history of multiple slab leaks, a full repipe — replacing
        all the plumbing lines in the home — may be the most practical long-term solution. Modern piping
        materials like PEX (cross-linked polyethylene) are flexible, corrosion-resistant, and can be routed
        through walls and ceilings to avoid running under the slab entirely.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Preventing Slab Leaks</h3>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Monitor your water bill for unexplained increases.</li>
        <li>Test your water pressure periodically — excessively high pressure (above 80 psi) stresses pipes
          and fittings.</li>
        <li>Consider installing a water pressure regulator if your pressure is consistently high.</li>
        <li>Have your plumbing inspected if your home is more than 20 years old.</li>
        <li>Address water chemistry issues with a water softener or treatment system if your water is
          aggressive.</li>
      </ul>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Make it a habit to check your water meter once a month with all fixtures
          turned off. If the meter is moving even slightly, you have a leak somewhere. Catching a slab leak
          early — before it causes foundation damage or mold growth — can save you tens of thousands of
          dollars in repairs.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Suspect a slab leak? Let our experts find and fix it!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
