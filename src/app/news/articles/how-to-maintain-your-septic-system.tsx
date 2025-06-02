import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from 'next/link';

// Article metadata
const slug = 'how-to-maintain-your-septic-system';
export const metadata = {
  slug: slug,
  title: 'How To Maintain Your Septic System',
  date: '2022-07-05',
  excerpt: 'Your septic system cleanly disposes of waste and is at the heart of your plumbing system. When cared for, it can last for years. Here’s how to maintain it.',
  image: '/images/eljen-install.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">How To Maintain Your Septic System</h2>

      <p className="mb-6">
        A septic system treats household wastewater and leaches environmentally friendly water into your yard.
        These systems don&#39;t cost much for maintenance and are easy to maintain. With proper care,
        we&#39;ve seen them last for decades.
      </p>

      <p className="mb-6">
        However, septic system failures are also very common. These often happen due to the negligence
        of the owners with regard to the system&#39;s maintenance. A septic system failure can cause serious
        groundwater pollution and can be expensive to repair.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> A properly maintained septic system can last 25-30 years or more,
          while a neglected system might fail in just 10-15 years. Regular maintenance not only extends
          the life of your system but also protects your property value and the environment.
        </p>
      </div>

      <p className="mb-6">
        For that reason, it is vital to maintain it properly. Following are a few ways through which
        you can easily carry out septic maintenance.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Use Water Efficiently</h2>

      <p className="mb-6">
        Water conservation should be practiced. You can increase the life of your drain field,
        reduce the likelihood of system failure, and avoid costly repairs simply by reducing
        and balancing your water use.
      </p>

      <p className="mb-6">
        Following are a few things you can do in order to reduce water use:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>Make your showers shorter</li>
          <li>Make use of devices like high-efficiency toilets and faucet aerators that help in saving water</li>
          <li>Identify and repair leaky toilets as soon as possible - it&#39;s one of the main causes of water waste</li>
          <li>Spread out your laundry loads throughout the week instead of doing them all in one day</li>
          <li>Install water-efficient appliances when replacing old ones</li>
        </ul>
      </div>

      <p className="mb-6">
        These are a few of the ways through which you can easily save a lot of water. You need to identify
        where your water is being used the most and then try to reduce that usage as much as possible.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Get Your Septic System Inspected</h2>

      <p className="mb-6">
        Your septic system needs to be inspected at least once every <a
        href="https://www.epa.gov/septic/how-care-your-septic-system#inspect"
        className="text-theme-1 hover:text-theme-2 transition">three years</a>.
        Even though other systems do need an inspection once every year, getting your septic system
        inspected once every three years is more than enough.
      </p>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Although some homeowners attempt to inspect their system themselves,
          we strongly advise against this due to health hazards from raw sewage. Additionally, most
          homeowners don&#39;t have access to sewer inspection cameras needed to properly examine the
          septic leach field.
        </p>
      </div>

      <p className="mb-6">
        Having a proper inspection of the system can help you prevent major issues and problems
        associated with poor maintenance of septic systems. Professional inspectors can identify
        early warning signs before they develop into costly problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Signs Your Septic System Needs Attention</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Slow drains throughout the house</li>
            <li>Gurgling sounds in the plumbing</li>
            <li>Sewage odors inside or outside</li>
            <li>Wet, spongy ground around the drain field</li>
            <li>Unusually lush, green grass over the drain field</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">What Professional Inspectors Check</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tank sludge and scum levels</li>
            <li>Signs of leakage or backup</li>
            <li>Condition of baffles and dividers</li>
            <li>Drain field performance</li>
            <li>Potential root intrusions</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Pump Your Tank</h2>

      <p className="mb-6">
        When necessary, pump out your septic tank. Waiting until a problem arises is surely not a good idea.
        Septic tanks are generally pumped every three to five years for a typical household.
      </p>

      <p className="mb-6">
        Regular pumping can avoid costly failures like a backed-up sewage line or a clogged drain field.
        When you use a garbage disposal, more solids will enter the septic tank, necessitating more
        frequent pumping.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Important:</strong> We commonly have clients call who just want to get their septic tank pumped.
          Unfortunately, this can be a temporary fix, as the septic system is designed to drain liquids into
          the drain field, and the drain field can fail. Make sure to follow your plumber&#39;s advice if they&#39;re
          recommending more than just a pump.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Protect The Drain field</h2>

      <p className="mb-6">
        Although drain fields do not require much maintenance, the small pores in the drain field can get
        clogged with biomat, and keep the drain field from working properly. <Link
        href="/news/article/when-is-hydro-jetting-needed/"
        className="text-theme-1 hover:text-theme-2 transition">Hydro-jetting</Link> can open these pores up
        again to make sure that your septic tank is draining properly.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Drain field Protection Tips</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Never park or drive vehicles over the drain field</li>
          <li>Avoid planting trees or shrubs near the drain field (roots can damage the system)</li>
          <li>Direct roof drains, sump pumps, and other rainwater drainage systems away from the drain field</li>
          <li>Keep livestock away from the area</li>
          <li>Don&#39;t build structures (like sheds, patios, or pools) over the drain field</li>
        </ul>
      </div>

      <p className="mb-6">
        Take care to not move heavy equipment or vehicles on top of the drain field to ensure it lasts
        a long time. The soil around your drain field should remain undisturbed to maintain proper
        filtration and treatment.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Not To Flush</h2>

      <p className="mb-6">
        Your septic system relies on natural bacteria to break down waste. Certain items can disrupt this
        process or clog your system when flushed or poured down drains.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Never Flush These Items</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wipes (even those labeled &#34;flushable&#34;)</li>
            <li>Paper towels or tissues</li>
            <li>Feminine hygiene products</li>
            <li>Dental floss</li>
            <li>Cat litter</li>
            <li>Cigarette butts</li>
            <li>Medications</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Never Pour These Down Drains</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cooking oil or grease</li>
            <li>Paint or paint thinners</li>
            <li>Harsh household chemicals</li>
            <li>Gasoline or motor oil</li>
            <li>Pesticides or fertilizers</li>
            <li>Antifreeze</li>
            <li>Excessive amounts of drain cleaners</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Bottom Line</h2>

      <p className="mb-6">
        If you are serious about your septic system and want it to last for a long period of time,
        follow the aforementioned tips. Proper septic maintenance will not only help you save a lot
        of money but will also allow you to protect the environment and reduce groundwater pollution.
      </p>

      <p className="mb-6">
        Remember that prevention is always less expensive than repair or replacement. By implementing
        these maintenance practices, you&#39;re making a smart investment in your property and ensuring
        your septic system functions efficiently for years to come.
      </p>

      <p className="mb-6">
        If you&#39;re experiencing issues with your septic system or it&#39;s time for an inspection or pumping,
        don&#39;t hesitate to contact Plumb-All. Our experienced technicians can provide professional
        service to keep your system in optimal condition.
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
