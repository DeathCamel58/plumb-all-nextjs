import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'how-to-clean-a-garbage-disposal';
export const metadata = {
  slug: slug,
  title: 'How to Clean a Garbage Disposal',
  date: '2021-09-17',
  excerpt: 'A garbage disposal does a great job at taking food waste, breaking it up, and getting it disposed of. Unfortunately, every time it’s used, small particles of food build up on the inside of it, and it eventually winds up with a stinky smell.',
  image: '/images/garbage-disposal.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">How to Clean a Garbage Disposal</h2>

      <p className="mb-6">
        A garbage disposal does a great job at taking food waste, breaking it up, and getting it disposed of.
        Unfortunately, every time it&#39;s used, small particles of food build up on the inside of it, and it
        eventually winds up with a stinky smell.
      </p>

      <p className="mb-6">
        In this article, we&#39;re going to cover some tips and tricks to clean it so that the smells go away.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">A Word of Caution</h2>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Important Safety Warning:</strong> Because a garbage disposal contains rotating blades inside,
          <strong> never</strong> reach into a garbage disposal to clean one with a bare hand, and
          <strong> never</strong> reach into a garbage disposal while the circuit breaker for it is on.
          <strong> Always</strong> turn off the circuit breaker for a garbage disposal before working on cleaning it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Clean Garbage Disposal With Ice</h2>

          <h3 className="text-xl font-semibold mb-3">What you&#39;ll need</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Dish Soap</li>
            <li>Ice Cubes (2 cups or so)</li>
            <li>Rock Salt (1 cup)</li>
            <li>Flashlight (optional)</li>
            <li>Tongs or Pliers (optional)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Process</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Turn off the power to the garbage disposal at the circuit breaker (this is to prevent the garbage disposal from accidentally turning on while working with it)</li>
            <li>Look into the garbage disposal and see if there are any solid foods in it. If there is, use pliers or tongs to pull it out.</li>
            <li>Run the water in the sink for a minute to flush all the small stuff out of the garbage disposal.</li>
            <li>Use a sink stopper to keep the sink from draining and fill the sink with a few inches of water. Add dish soap to water.</li>
            <li>Unplug the stopper so that the soap water cleans the garbage disposal.</li>
            <li>Turn the garbage disposal&#39;s power on at the circuit breaker.</li>
            <li>Pour 2 cups of ice and 1 cup of rock salt into the garbage disposal.</li>
            <li>Turn the garbage disposal on and run water in the sink. The ice and rock salt will scrub inside of the garbage disposal to clean it. Turn the garbage disposal back off after 30 seconds.</li>
          </ol>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Clean Garbage Disposal with Baking Soda and Vinegar</h2>

          <h3 className="text-xl font-semibold mb-3">What you&#39;ll need</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Baking Soda (1/2 cup)</li>
            <li>White Vinegar (1 cup)</li>
            <li>Boiling Water</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Process</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Pour baking soda into garbage disposal.</li>
            <li>Pour vinegar into garbage disposal.</li>
            <li>Let it sit for 5-10 minutes.</li>
            <li>Boil a full pot of water.</li>
            <li>Pour boiling water into the garbage disposal. This rinses away the cleaning mixture.</li>
          </ol>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Important Note:</strong> If you have a septic system, be careful about what you put into a garbage disposal.
          Keep in mind that chemicals can kill off the good bacteria in your septic tank, which could cause problems down the road.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Decided that we're the right fit for you?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
