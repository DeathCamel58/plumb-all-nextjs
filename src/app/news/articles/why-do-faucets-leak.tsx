import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'why-do-faucets-leak';
export const metadata = {
  slug: slug,
  title: 'Why do faucets leak?',
  date: '2022-09-06',
  excerpt: 'A single leaking faucet can waste approximately 3,000 gallons of water per year. In this article, we cover some common causes.',
  image: '/images/faucet-leak.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why do faucets leak?</h2>

      <p className="mb-6">
        Statistics show that a single leaking faucet can waste approximately{' '}
        <a
          href="https://www.epa.gov/watersense/fix-leak-week#Faucet%20Leaks"
          className="text-theme-1 hover:text-theme-2 transition"
        >
          3,000 gallons
        </a>{' '}
        of water in a year. It is the most under-inspected part of a home&#39;s structure. A leaky faucet
        creates a lot of trouble including disturbed sleep and a dramatic rise in your water bill.
        If you are looking to get rid of the constant drip, drip, drip sound, then it is imperative
        to understand the cause behind a leaking faucet.
      </p>

      <p className="mb-6">
        In the majority of cases, homeowners with the right tools and some plumbing knowledge can fix
        this issue themselves. While in other cases, you may want to hire a professional.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> A leaking faucet that drips at the rate of one drop per second can waste
          more than 3,000 gallons per year. That&#39;s the amount of water needed to take more than 180 showers!
        </p>
      </div>

      <p className="mb-6">Let&#39;s dive into the reasons why faucets can leak.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Malfunctioning O-ring</h2>

      <p className="mb-6">
        The stem screw on the faucet&#39;s handle has a small disc called the o-ring. It is a common point
        where dripping ensues over time when the O ring wears out or becomes loose. As a result, you get
        a leaking faucet near the handle. This problem has a simple solution: replace the O-ring and the
        annoying dripping will stop.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Rusted Valve Seat</h2>

      <p className="mb-6">
        Connecting the faucet with the spout, the valve seat is an integral part of the faucet. If the
        leak is coming from the spout itself, there is a high chance that a rusted valve seat is causing
        the leak. Water sediments accumulate and can cause corrosion/rust leading to a leaking faucet.
        To avoid this problem, you should regularly clean out the valve seat to delay corrosion. Replacing
        the valve seat is an excellent solution once the damage is done.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Common Signs of a Leaky Faucet</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Visible water droplets forming at the spout</li>
            <li>Water pooling around the base of the faucet</li>
            <li>Damp or wet areas under the sink</li>
            <li>Increased water bills without increased usage</li>
            <li>Audible dripping sounds, especially at night</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Tools Needed for Repair</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Adjustable wrench</li>
            <li>Screwdriver (flathead and Phillips)</li>
            <li>Replacement parts (O-rings, washers, etc.)</li>
            <li>Plumber&#39;s tape</li>
            <li>Penetrating oil for stuck parts</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Improper Washer Installation</h2>

      <p className="mb-6">
        Choosing the wrong faucet size or improper installation is a common cause of a leaking faucet.
        It will inevitably cause a leak, which is why it is best to hire a professional plumber to install
        the faucet. If done correctly, you can bid farewell to high water bills, sleepless nights, and the
        annoying dripping noise.
      </p>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> When replacing washers, always bring your old one to the hardware store
          to ensure you get the exact size and type needed for your specific faucet model.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Worn Out Washers</h2>

      <p className="mb-6">
        The washers in a faucet are rubber or metal pieces that close gaps in the pipe to inhibit leaks.
        When you use the sink, its mechanism forces the washer against the valve seat to cause constant
        friction. Over time, the washer wears out and you will begin noticing a leak around the spout.
        This problem is common amongst compression sinks. Swapping the worn-out washer is an easy way to
        mend the leaking faucet.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Water Pressure</h2>

      <p className="mb-6">
        Do you only experience a leaking faucet during a particular time of the day? Then the issue might
        be high water pressure in your home. In this scenario, the faucets will not leak all the time.
        Leaks owing to high pressure begin with small leaks and ultimately lead to bigger leaks in the
        piping, which deteriorates the situation.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Preventing Faucet Leaks</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Regular maintenance:</strong> Check faucets periodically for signs of wear or leakage.
          </li>
          <li>
            <strong>Gentle operation:</strong> Avoid using excessive force when turning faucets on and off.
          </li>
          <li>
            <strong>Water pressure regulation:</strong> Install a pressure regulator if your home&#39;s water pressure exceeds 80 psi.
          </li>
          <li>
            <strong>Quality fixtures:</strong> Invest in high-quality faucets with ceramic disc valves for longer life.
          </li>
          <li>
            <strong>Professional installation:</strong> Have new faucets installed by qualified plumbers.
          </li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Final Thoughts: Why do I have a leaking faucet?</h2>

      <p className="mb-6">
        There are numerous reasons that result in a leaking faucet. Diagnosing a leak isn&#39;t complicated
        but will require observation skills. The majority of faucet leaks can be taken as a DIY task if
        you are familiar with plumbing mechanics. However, if you are unable to identify the issue and
        are tired of the dripping noise; then contact Plumb-All for professional help.
      </p>

      <p className="mb-6">
        Remember that addressing a leaking faucet promptly not only saves water and money but also prevents
        potential water damage to your home. Our experienced plumbers can quickly diagnose and fix any type
        of faucet leak, ensuring your plumbing system operates efficiently.
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
