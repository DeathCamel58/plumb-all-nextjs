import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'how-to-fix-a-running-toilet';
export const metadata = {
  slug: slug,
  title: 'How to Fix a Running Toilet',
  date: '2023-11-03',
  excerpt: 'Learn how to fix a running toilet and prevent water waste with our step-by-step guide. Discover common causes and solutions for a smoothly operating toilet.',
  image: '/images/toilet-flapper.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold mb-6">How to Fix a Running Toilet</h1>

      <p className="mb-6">
        Dealing with a running toilet can be not only a nuisance but also a significant waste of water.
        When faced with this issue, it&#39;s crucial to act promptly to prevent water wastage and potential
        harm to your plumbing system. In this guide, we&#39;ll walk you through the process of diagnosing
        and fixing a running toilet.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> A running toilet can waste up to 200 gallons of water per day.
          That&#39;s equivalent to flushing your toilet about 50 extra times! Fixing this issue promptly can
          save you money on your water bill and help conserve this valuable resource.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Identify the Problem</h2>

      <p className="mb-6">
        The first step in resolving a running toilet is to identify the root cause. Typically, a running
        toilet results from either a faulty flapper valve or a malfunctioning fill valve. The flapper valve
        controls the flow of water from the tank to the bowl, while the fill valve regulates the water level
        in the tank.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Signs of a Faulty Flapper Valve</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Water continuously running into the bowl</li>
            <li>Toilet runs intermittently without being flushed</li>
            <li>Need to jiggle the handle to stop running</li>
            <li>Visible wear or warping on the flapper</li>
            <li>Mineral buildup on the flapper or valve seat</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Signs of a Faulty Fill Valve</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Water level in tank is too high</li>
            <li>Water continuously running into the overflow tube</li>
            <li>Hissing or whistling sounds from the tank</li>
            <li>Inconsistent water level in the tank</li>
            <li>Slow tank refill after flushing</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Examine the Flapper Valve</h2>

      <p className="mb-6">
        Start by lifting the lid of the toilet tank and inspecting the flapper valve. If you notice that
        the flapper valve appears worn, misshapen, or damaged, it may not be creating an adequate seal,
        leading to water seepage.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">How to Replace a Flapper Valve</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Turn off the water supply</strong> to the toilet using the shutoff valve located behind or near the toilet.
          </li>
          <li>
            <strong>Flush the toilet</strong> to drain most of the water from the tank.
          </li>
          <li>
            <strong>Disconnect the old flapper</strong> by detaching it from the flush valve and the chain connected to the flush lever.
          </li>
          <li>
            <strong>Install the new flapper</strong> by attaching it to the flush valve and connecting the chain to the flush lever, ensuring there&#39;s a small amount of slack in the chain.
          </li>
          <li>
            <strong>Turn the water supply back on</strong> and let the tank fill.
          </li>
          <li>
            <strong>Test the flush</strong> to ensure the flapper creates a proper seal after flushing.
          </li>
        </ol>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> When purchasing a replacement flapper, bring your old one to the store
          to ensure you get the correct size and type. Many modern toilets use specific flapper designs that
          aren&#39;t interchangeable with universal models.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Inspect the Fill Valve</h2>

      <p className="mb-6">
        If the flapper valve is functioning correctly, the issue may lie with the fill valve. Examine the
        fill valve for any signs of leakage or a defective float mechanism. Adjust the float to ensure it
        rests at the recommended water level, following the manufacturer&#39;s instructions.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">How to Replace a Fill Valve</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Turn off the water supply</strong> to the toilet.
          </li>
          <li>
            <strong>Flush the toilet</strong> and sponge out any remaining water in the tank.
          </li>
          <li>
            <strong>Disconnect the water supply line</strong> from the bottom of the fill valve.
          </li>
          <li>
            <strong>Remove the old fill valve</strong> by unscrewing the locknut underneath the tank.
          </li>
          <li>
            <strong>Install the new fill valve</strong> according to the manufacturer&#39;s instructions, making sure it&#39;s securely fastened.
          </li>
          <li>
            <strong>Reconnect the water supply line</strong> and turn the water back on.
          </li>
          <li>
            <strong>Adjust the water level</strong> using the adjustment screw or clip on the fill valve.
          </li>
          <li>
            <strong>Test the flush</strong> to ensure proper operation.
          </li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Clean or Replace the Flush Valve Seat</h2>

      <p className="mb-6">
        Sometimes, mineral deposits or debris accumulation on the flush valve seat can prevent the flapper
        from creating a proper seal. To address this, turn off the water supply and flush the toilet to
        empty the tank. Use a sponge or cloth to thoroughly clean the flush valve seat. If you find that
        the seat is damaged or worn, it might be necessary to replace it to ensure a proper seal.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Important:</strong> Hard water can cause mineral buildup on toilet components, leading to
          premature wear and failure. If you have hard water, consider using a toilet tank cleaner specifically
          designed to prevent mineral deposits, or install a whole-house water softener system.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Test and Fine-Tune</h2>

      <p className="mb-6">
        Once you&#39;ve made the necessary repairs or replacements, turn the water supply back on and let the
        tank fill. Observe the toilet for any signs of continuous running or leaks. If the issue persists,
        it may require further investigation or professional assistance.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Troubleshooting Persistent Issues</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Water level too high:</strong> Adjust the float or fill valve to lower the water level below the overflow tube.</li>
          <li><strong>Chain too tight or loose:</strong> Adjust the chain connecting the flush lever to the flapper to ensure proper operation.</li>
          <li><strong>Flush handle sticking:</strong> Lubricate or replace the flush handle assembly if it&#39;s not returning to its proper position.</li>
          <li><strong>Cracked tank or bowl:</strong> If you discover cracks in the porcelain, the toilet may need to be replaced entirely.</li>
          <li><strong>Worn out components:</strong> Consider a complete toilet rebuild kit if multiple components are showing signs of wear.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call a Professional</h2>

      <p className="mb-6">
        While many toilet issues can be resolved with DIY solutions, some situations call for professional
        assistance. Consider contacting Plumb-All if:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>Your repairs don&#39;t resolve the running toilet issue</li>
          <li>You discover cracks or damage to the toilet tank or bowl</li>
          <li>There are signs of water leakage around the base of the toilet</li>
          <li>You&#39;re uncomfortable working with plumbing components</li>
          <li>Your toilet is very old and may benefit from a complete replacement</li>
        </ul>
      </div>

      <p className="mb-6">
        Fixing a running toilet is a relatively straightforward task that can save you from water wastage
        and potential plumbing complications. By following the steps outlined in this guide, you can identify
        and resolve the most common causes of a running toilet. However, if you encounter any challenges or
        prefer professional assistance, don&#39;t hesitate to <a href="/contact/" className="text-theme-1 hover:text-theme-2 transition">get in touch</a> with
        Plumb-All at <a href="tel:+17709143877" className="text-theme-1 hover:text-theme-2 transition">(770) 270-3514</a>. Our team of experts is ready to assist you in
        resolving the issue and ensuring the efficient operation of your toilet.
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
