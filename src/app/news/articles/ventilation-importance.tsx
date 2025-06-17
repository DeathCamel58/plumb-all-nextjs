// src/app/news/articles/ventilation-importance.tsx

import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'ventilation-importance';
export const metadata = {
  slug: slug,
  title: "The Importance of Proper Ventilation in Plumbing Systems",
  date: "2025-06-17",
  excerpt: 'A well-functioning ventilation system is critical to the overall health of a plumbing system. In this article, we\'ll explore why proper ventilation is so important in a plumbing system.',
  image: '/images/roof-vent-2.jpg',
  path: `/news/article/${slug}`
};

const VentilationImportanceArticle: React.FC = () => {
  return (
    <article className="min-h-screen">
      <h2 className="text-3xl font-bold mb-6">The Importance of Proper Ventilation in Plumbing Systems</h2>
      <p className="mb-6">
        A well-functioning ventilation system is critical to the overall health of a plumbing system. Proper ventilation ensures that air can flow freely through the pipes, preventing issues such as slow drainage, unpleasant odors, and even structural damage. In this article, we&#39;ll explore why proper ventilation is so important in a plumbing system.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What is Plumbing Ventilation?</h3>
      <p className="mb-6">
        Plumbing ventilation refers to the network of pipes that allow air to flow into and out of your plumbing system. These vents are usually located on the roof or in attics, providing a pathway for air movement that balances the pressure within the drainage system.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Why is Proper Ventilation Important?</h3>
      <div className="mb-4 text-lg">
        <ul className="list-disc pl-5">
          <li><strong>Prevents Clogs:</strong> Proper ventilation helps maintain the correct pressure balance, which allows waste to flow freely through pipes without causing blockages.</li>
          <li><strong>Avoids Odors:</strong> Without proper ventilation, sewer gases can escape into your home, resulting in unpleasant smells. Ventilation ensures these gases are safely routed outside.</li>
          <li><strong>Protects Pipes and Fixtures:</strong> Consistent pressure from proper ventilation prevents pipes from becoming damaged or warped over time due to excessive pressure buildup.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Signs of Poor Ventilation</h3>
      <p className="mb-6">
        If your plumbing system is not properly ventilated, you might notice several signs:
      </p>
      <ul className="list-disc pl-5 mb-8 text-lg">
        <li>Gurgling noises coming from drains</li>
        <li>Slow draining sinks, tubs, or toilets</li>
        <li>Strong sewer odors in your home</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Maintaining Proper Ventilation</h3>
      <p className="mb-6">
        Regular inspections and maintenance of your plumbing system can help ensure proper ventilation. If you notice any signs of poor ventilation, it&#39;s important to consult with a professional plumber who can assess the issue and make necessary repairs.
      </p>

      <div className="mt-12 mb-8">
        <CTACall
          headerText="Need help with your plumbing system?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
};

export default VentilationImportanceArticle;
