import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'are-septic-tank-additives-and-enzymes-useful';
export const metadata = {
  slug: slug,
  title: 'Are Septic Tank Additives and Enzymes Useful?',
  date: '2019-07-09',
  excerpt: 'As a company that specializes in plumbing and septic repair and installation, we get asked this question quite often. Most of the time, customers have heard that they should put additives and enzymes into their septic system regularly to keep everything running properly. Unfortunately, this isn’t the case.',
  image: '/images/septic-system-overview.jpg',
  path: `/news/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold mb-6">Are Septic Tank Additives and Enzymes Useful?</h1>

      <p className="mb-6">
        As a company that specializes in plumbing and septic repair and installation, we get asked this question quite often.
        Most of the time, customers have heard that they should put additives and enzymes into their septic system regularly
        to keep everything running properly. Unfortunately, this isn&#39;t the case, as these products can cause harm to your system.
        We&#39;ll dive into why this is below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Doesn&#39;t the Bacteria Die?</h2>

          <p className="mb-6">
            Usually, bacteria can manage themselves. Their colonies will grow when there are a lot of solids in your tank,
            and shrink when there isn&#39;t. This is really great for a system people don&#39;t want to have to maintain regularly.
          </p>

          <p className="mb-6">
            Although the bacteria colonies don&#39;t die, liquid bleach, disinfectant cleaners, drain cleaners, non-degradable detergents,
            solvents (such as paint thinners), insecticides and some prescription drugs such as antibiotics or strong medications
            can severely hurt them, and nearly wipe out all of them. While bacteria are resilient and able to handle the occasional
            chemical, large quantities, or commonly putting these products down the drain can kill the colonies over time.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Shouldn&#39;t I Add Enzymes and Additives?</h2>

          <p className="mb-6">
            Long story short; mother nature knows best.
          </p>

          <p className="mb-6">
            Specifically, they are linked to pollution from septic systems, there&#39;s a lack of evidence to back up the claims
            from manufacturers of them, and they have the possibility of destroying your septic system&#39;s natural bacteria.
          </p>

          <p className="mb-6">
            Most of these products contain organic chemicals. This means that these chemicals are extremely good at moving
            through the soil, eventually getting into the public water supply. Furthermore, some of these chemicals are
            suspected carcinogens that the EPA has issued health advisories for.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Important:</strong> The natural bacteria in your septic system are typically sufficient for proper functioning.
          Adding commercial additives can disrupt this natural balance and potentially cause more harm than good.
          Regular maintenance and proper usage habits are much more effective for keeping your septic system healthy.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Should I Do Instead?</h2>

      <p className="mb-6">
        Rather than relying on additives, focus on proper septic system maintenance:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>Have your septic tank inspected every 3-5 years by a professional</li>
          <li>Get your tank pumped when necessary (typically every 3-5 years)</li>
          <li>Be mindful of what goes down your drains</li>
          <li>Avoid flushing non-biodegradable items</li>
          <li>Use water efficiently to prevent overloading the system</li>
          <li>Keep heavy vehicles and structures off your drain field</li>
        </ul>
      </div>

      <p className="mb-6">
        These practices will help maintain the natural balance in your septic system and extend its lifespan
        without the need for potentially harmful chemical additives.
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
