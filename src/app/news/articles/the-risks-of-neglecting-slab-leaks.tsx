import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'the-risks-of-neglecting-slab-leaks';
export const metadata = {
  slug: slug,
  title: 'The Risks of Neglecting Slab Leaks',
  date: '2023-11-14',
  excerpt: 'Discover the risks and consequences of ignoring slab leaks on your property. Learn about the causes and potential hazards of slab leaks here.',
  image: '/images/slab-leak.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">The Risks of Neglecting Slab Leaks</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          Did you know? A single slab leak can waste up to 10,000 gallons of water per month, potentially causing thousands of dollars in damage to your home&#39;s foundation, walls, and flooring.
        </p>
      </div>

      <p className="mb-6">
        That damp spot on your floor or the unexplained increase in your water bill might be more than just a minor inconvenience—it could be a warning sign of a slab leak. These hidden plumbing issues can quickly escalate from subtle symptoms to major structural damage if left unaddressed.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Slab Leaks</h2>

      <p className="mb-6">
        Slab leaks occur when water pipes beneath your home&#39;s concrete foundation develop leaks. These can stem from various factors, including:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>External forces like significant ground shifts due to rainfall or drought</li>
        <li>Corrosion of copper pipes due to soil chemistry or water quality</li>
        <li>Abrasion from pipes rubbing against concrete or rebar</li>
        <li>Poor installation or low-quality materials</li>
        <li>High water pressure consistently straining your plumbing system</li>
      </ul>

      <p className="mb-6">
        During rainy periods, the ground beneath your home may expand and contract, causing breaks and cracks in the non-breathable concrete foundation. Internally, factors like bathrooms, clothes dryers, and cooking can contribute to humidity levels that accelerate pipe deterioration.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Warning Signs You Shouldn&#39;t Ignore</h2>

      <ol className="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <h3 className="text-xl font-semibold mb-2">Unexplained Increase in Water Bills</h3>
          <p className="mb-2">A sudden spike in your water bill without a change in usage patterns is often the first indicator of a hidden leak.</p>
          <p><strong>Severity Level:</strong> Moderate - Indicates a problem that needs attention soon.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Warm Spots on Your Floor</h3>
          <p className="mb-2">If you notice areas of your floor that are unexpectedly warm, especially with slab heating systems, it could indicate a hot water line leak beneath.</p>
          <p><strong>Severity Level:</strong> High - Hot water leaks can cause rapid damage and waste energy.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">The Sound of Running Water</h3>
          <p className="mb-2">Hearing water flowing when no fixtures are in use is a clear warning sign of a leak somewhere in your system.</p>
          <p><strong>Severity Level:</strong> High - Indicates an active leak that requires immediate attention.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Cracks in Walls or Flooring</h3>
          <p className="mb-2">Foundation shifts due to water erosion can cause visible cracks in your home&#39;s structure.</p>
          <p><strong>Severity Level:</strong> Very High - Suggests structural damage may already be occurring.</p>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Mold or Excessive Moisture</h3>
          <p className="mb-2">Unexplained mold growth, musty odors, or damp carpeting can indicate water seeping up through the foundation.</p>
          <p><strong>Severity Level:</strong> High - Poses both structural and health risks.</p>
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Addressing Them Matters</h2>

      <p className="mb-6">
        Unchecked slab leaks can start with minor inconveniences and escalate rapidly. If neglected, you face significant financial losses and potential risks to you and your family:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Substantial increases in monthly water bills, sometimes hundreds of dollars</li>
        <li>Higher utility costs as heightened humidity forces your HVAC unit to work harder</li>
        <li>Mold and mildew growth leading to health concerns and unpleasant odors</li>
        <li>Foundation damage that can cost tens of thousands to repair</li>
        <li>Decreased property value due to structural issues</li>
        <li>Potential insurance complications if the leak is deemed a long-term maintenance issue</li>
      </ul>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">When to Call a Professional</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>As soon as you suspect a slab leak—early detection is crucial</li>
          <li>If your water meter runs when all fixtures are turned off</li>
          <li>When you notice any of the warning signs mentioned above</li>
          <li>Before attempting any DIY fixes that could worsen the situation</li>
          <li>If your home is more than 20 years old with original plumbing</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Comprehensive Plumbing Solutions from Plumb-All</h2>

      <p className="mb-6">
        At Plumb-All, we specialize in non-invasive leak detection and efficient repair solutions. Our experienced technicians use advanced technology to pinpoint the exact location of slab leaks without unnecessary demolition of your floors.
      </p>

      <p className="mb-6">
        For all your plumbing needs, reach out to Plumb-All. Call us at <a href="tel:+17709143877" className="text-theme-1 hover:text-theme-2 transition">(770) 914-3877</a> or contact us online to learn more about how our skilled plumbers can assist you. We are fully licensed, bonded, and insured, providing unparalleled service with transparent pricing and guaranteed workmanship. Contact us today!
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Suspect a slab leak in your home?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
