import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Image from "next/image";

// Article metadata
const slug = 'sewer-smells';
export const metadata = {
  slug: slug,
  title: 'Sewer Smells',
  date: '2021-08-31',
  excerpt: 'Sewer gas smells in your home can be dangerous, leading to health issues and potential fire hazards. Learn about the causes and solutions.',
  image: '/images/roof-vent.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Sewer Smells</h2>

      <p className="mb-6">
        Sewer gas smells in your home can be more dangerous than most realize. These gasses can include
        Hydrogen Sulfide, Methane, and Ammonia. Breathing in these gasses can lead to dizziness, headaches,
        memory loss, and poisoning. In large amounts, these gasses can be explosive, and set your home afire.
      </p>

      <p className="mb-6">
        These smells normally originate from drains and septic systems when air is allowed to flow from the
        sewer pipes out of drains. Normally this problem can be solved quickly by a professional plumber,
        and fixed on the same day. Don&#39;t risk the dangers associated with these gasses, and get a specialist
        to diagnose your problem.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Potential Causes</h2>

      <p className="mb-6">
        Although these smells can originate from a wide variety of places in your plumbing system,
        here are some of the more common culprits:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>P-traps or S-traps can let these smells into your home if there isn&#39;t any water in the elbow</li>
          <li>Loose connections along vent pipes or sewer lines</li>
          <li>Missing clean out plugs will get the gasses out into your property</li>
          <li>Bad wax rings on toilets can get the gasses seep out from under your toilet</li>
          <li>Sewer or septic pipe leaks</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">P-Traps & S-Traps</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <p className="mb-4">
            P-traps and S-traps are parts of drains that keep smells from the sewers from being able to
            escape through your drains.
          </p>

          <p className="mb-4">
            By holding some standing water in the bottom of the looped section, the water can block
            sewer gasses from being able to enter your home.
          </p>

          <p className="mb-4">
            If you&#39;re noticing a smell coming from a drain, try running some water down the drain
            (not much is necessary, a half gallon will do), and see if the smell goes away.
          </p>

          <p className="mb-4">
            If the smell dissipates, it was likely just that your P-Trap had no water in it
            (which blocks the gasses from coming up through the drain).
          </p>

          <p className="mb-4">
            If the smell stays, this signals other issues. Reach out to us, and we&#39;ll be on our way
            to fix it ASAP.
          </p>
        </div>

        <div>
          <figure className="relative">
            <Image
              src="/images/sink-underside.jpg"
              alt="P Trap Diagram"
              className="rounded-lg border border-gray-200 max-w-full h-auto"
              width={500}
              height={300}
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              This is a diagram of a P-Trap. Note that the standing water in the bottom seals the
              sewer gasses away from your drains.
            </figcaption>
          </figure>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call a Professional</h2>

      <p className="mb-6">
        While some minor sewer smell issues might be resolved by adding water to dry P-traps,
        persistent odors typically indicate a more serious problem that requires professional attention.
        Consider calling a plumber if:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>Sewer smells persist after running water down all drains</li>
          <li>You notice the smell coming from multiple locations</li>
          <li>The smell is accompanied by slow drains or gurgling sounds</li>
          <li>You&#39;ve recently had plumbing work done</li>
          <li>The smell is particularly strong near toilets or floor drains</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

      <p className="mb-6">
        Sewer smells in your home should never be ignored. They can indicate serious plumbing issues
        and pose health risks to you and your family. A professional plumber can quickly diagnose
        the source of the smell and implement the appropriate solution before more serious damage occurs.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Decided that we're the right fit for you?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
