import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'how-to-prevent-pipe-corrosion';
export const metadata = {
  slug: slug,
  title: 'How to Prevent Pipe Corrosion in Your Home',
  date: '2024-12-11',
  excerpt: 'Understand the types of pipe corrosion, what causes them, and learn effective prevention strategies to protect your home\'s plumbing system.',
  image: '/images/gray-pipes-2.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">How to Prevent Pipe Corrosion in Your Home</h2>

      <p className="mb-6">
        Pipe corrosion is a silent problem that affects millions of homes. Unlike a dramatic burst pipe or a
        visible leak, corrosion works slowly over years or even decades, gradually weakening your plumbing
        from the inside out. By the time you notice the symptoms — discolored water, low pressure, pinhole
        leaks, or a metallic taste — the damage may already be extensive. Understanding what causes pipe
        corrosion and how to prevent it can help you protect your plumbing system, your water quality, and
        your wallet.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Types of Pipe Corrosion</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Uniform Corrosion</h4>
      <p className="mb-6">
        Uniform corrosion affects the entire inner surface of the pipe evenly. It occurs when the pipe
        material reacts with the water flowing through it over an extended period. This is the most common
        type of corrosion in metal pipes and gradually thins the pipe walls until they become weak enough to
        leak. Galvanized steel pipes are particularly susceptible to uniform corrosion, which is why many
        older homes with galvanized plumbing experience widespread pipe failures as the pipes age.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Pitting Corrosion</h4>
      <p className="mb-6">
        Unlike uniform corrosion, pitting corrosion attacks specific points on the pipe surface, creating
        small, deep holes known as pits. This type of corrosion is particularly dangerous because it can
        penetrate a pipe wall relatively quickly while the rest of the pipe appears to be in good condition.
        Pitting corrosion is common in copper pipes and is often caused by aggressive water chemistry,
        particularly water with high dissolved oxygen content, low pH (acidic water), or high chloride
        levels.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Galvanic Corrosion</h4>
      <p className="mb-6">
        Galvanic corrosion occurs when two different metals are in direct contact with each other in the
        presence of water. The less noble (more reactive) metal corrodes at an accelerated rate while the
        more noble metal is protected. This is a common issue in homes where copper pipes are connected
        directly to galvanized steel pipes without a dielectric union or coupling. The galvanized steel
        corrodes rapidly at the junction point, leading to leaks and blockages.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Erosion Corrosion</h4>
      <p className="mb-6">
        Erosion corrosion is caused by water flowing at high velocity through pipes, particularly at bends,
        elbows, and tees where the water changes direction. The fast-moving water strips away the protective
        oxide layer on the pipe surface, exposing fresh metal to further corrosion. This type of corrosion is
        exacerbated by high water pressure, undersized pipes, and water containing suspended abrasive
        particles like sand or sediment.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Microbiologically Influenced Corrosion (MIC)</h4>
      <p className="mb-6">
        Certain bacteria that thrive in water systems can accelerate corrosion by creating localized
        acidic conditions on the pipe surface. Sulfate-reducing bacteria and iron-oxidizing bacteria are
        the most common culprits. MIC can affect almost any pipe material and is often found in systems
        with stagnant water or low flow conditions.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">How Water Chemistry Affects Corrosion</h3>

      <p className="mb-6">
        The chemical properties of your water supply play a major role in determining how quickly your
        pipes corrode. Several water chemistry factors influence corrosion rates:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>pH level:</strong> Water with a pH below 7 (acidic) is more corrosive than neutral or
          alkaline water. Acidic water attacks metal pipes more aggressively, particularly copper and
          galvanized steel.</li>
        <li><strong>Dissolved oxygen:</strong> Higher levels of dissolved oxygen in the water increase the
          rate of oxidation (rusting) in metal pipes. This is especially relevant in copper plumbing
          systems.</li>
        <li><strong>Chlorine and chloramine:</strong> While essential for water treatment, these disinfectants
          can be corrosive to certain pipe materials, especially at higher concentrations.</li>
        <li><strong>Total dissolved solids (TDS):</strong> High TDS levels increase the electrical
          conductivity of water, which can accelerate galvanic corrosion between dissimilar metals.</li>
        <li><strong>Temperature:</strong> Hot water is generally more corrosive than cold water. Pipes
          carrying hot water tend to corrode faster, which is why hot water lines often fail before cold
          water lines in the same home.</li>
        <li><strong>Water hardness:</strong> Interestingly, moderately hard water can actually help protect
          pipes by depositing a thin layer of calcium carbonate (scale) on the interior surface, which acts
          as a barrier against corrosion. Very soft water lacks this protective effect and can be more
          corrosive.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Pipe Materials and Their Vulnerability</h3>

      <p className="mb-6">
        Different pipe materials have different susceptibilities to corrosion, and understanding what your
        home&#39;s plumbing is made of helps you assess your risk level.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Galvanized steel:</strong> The most corrosion-prone common pipe material. The zinc
          coating gradually wears away, exposing the steel beneath to rust. Typical lifespan is 40-60
          years. If your home has galvanized pipes, corrosion is likely already underway.</li>
        <li><strong>Copper:</strong> More corrosion-resistant than steel but still susceptible to pitting
          corrosion, erosion corrosion, and galvanic corrosion. Typical lifespan is 50-70 years with
          proper water chemistry.</li>
        <li><strong>PEX (cross-linked polyethylene):</strong> Virtually immune to corrosion because it&#39;s
          a plastic material. PEX has become the preferred material for residential plumbing in modern
          construction.</li>
        <li><strong>CPVC (chlorinated polyvinyl chloride):</strong> Also resistant to corrosion but can
          become brittle over time and is sensitive to certain chemicals.</li>
        <li><strong>Cast iron:</strong> Used primarily for drain lines in older homes. Susceptible to rust
          and internal buildup that restricts flow over decades.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Prevention Strategies</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Test Your Water</h4>
      <p className="mb-6">
        The first step in preventing pipe corrosion is understanding your water chemistry. Have your water
        tested for pH, hardness, dissolved oxygen, chlorine levels, and TDS. Many water utilities provide
        free annual water quality reports, or you can hire a professional to test your water. Knowing what&#39;s
        in your water helps you choose the right treatment approach.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Install a Water Treatment System</h4>
      <p className="mb-6">
        Based on your water test results, a treatment system can be tailored to address the specific
        corrosive factors in your water. A whole-house water softener can prevent scale buildup while a
        neutralizer can raise the pH of acidic water. An activated carbon filter can remove excess chlorine.
        Our&nbsp;
        <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair team</Link>
        &nbsp;can help you evaluate your options and install the right system for your home.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Use Dielectric Unions</h4>
      <p className="mb-6">
        Wherever two different metals meet in your plumbing system (such as copper connecting to galvanized
        steel), a dielectric union or coupling should be used to electrically isolate the two metals from
        each other. This prevents galvanic corrosion at the junction. If your home has mixed-metal plumbing
        without dielectric unions, having them installed is a relatively inexpensive way to prevent
        accelerated corrosion at those points.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Manage Water Pressure</h4>
      <p className="mb-6">
        Excessively high water pressure (above 80 psi) accelerates erosion corrosion, especially at bends
        and fittings. Install a pressure gauge on a hose bib to check your home&#39;s water pressure. If
        it&#39;s consistently above 80 psi, a pressure reducing valve (PRV) should be installed at the main
        water entry point to bring it down to a safe range, typically 50-70 psi.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Consider Repiping</h4>
      <p className="mb-6">
        If your home has galvanized steel pipes that are showing signs of corrosion — rusty water, low
        pressure, frequent leaks — the most effective long-term solution may be to repipe the affected
        sections or the entire home with modern corrosion-resistant materials like PEX or copper. Our&nbsp;
        <Link href="/services/water-line-repair" className="text-theme-3 hover:underline">water line repair services</Link>
        &nbsp;include pipe replacement and repiping for homes dealing with advanced corrosion.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Regular Inspections</h4>
      <p className="mb-6">
        Schedule periodic plumbing inspections, especially if your home is more than 30 years old. A plumber
        can visually inspect exposed pipes for signs of corrosion, check water pressure, test water chemistry,
        and identify potential problems before they become expensive emergencies. Look for green or blue-green
        stains around copper fittings (indicating copper corrosion), rust stains or flaking on galvanized
        pipes, and any signs of moisture or discoloration near pipe joints.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> If you notice blue-green stains in your sinks, tubs, or on your laundry,
          your copper pipes are corroding. This discoloration is caused by dissolved copper in the water and
          is an early warning sign that your pipes are being attacked by aggressive water chemistry. Have your
          water tested and address the underlying cause before the corrosion leads to pinhole leaks.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Worried about pipe corrosion? We can help protect your plumbing!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
