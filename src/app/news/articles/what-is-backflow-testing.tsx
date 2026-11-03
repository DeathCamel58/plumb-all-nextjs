import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import FAQSchema from "@/components/schema/FAQSchema";

const faqs = [
  {
    question: 'How is backflow detected?',
    answer: 'Usually with a backflow test. A certified tester connects a differential pressure gauge to the test ports on your backflow preventer and checks that each check valve holds and the relief valve opens when it should. Between tests, warning signs include discolored, cloudy or bad-tasting water, water dripping from the backflow device, and a sudden drop in water pressure.',
  },
  {
    question: 'How often is backflow testing required in Georgia?',
    answer: 'Georgia requires water systems to run cross-connection control programs, and your local water provider sets the testing schedule. Most require backflow assemblies to be tested every year, and they will send a notice when yours is due.',
  },
  {
    question: 'Who can test a backflow preventer in Georgia?',
    answer: 'Only a tester certified through Georgia\'s backflow prevention assembly tester program. The tester submits the results to your water provider.',
  },
  {
    question: 'How long does a backflow test take?',
    answer: 'Usually 15 to 30 minutes per device. The water is shut off briefly while the device is tested.',
  },
  {
    question: 'What happens if my backflow preventer fails the test?',
    answer: 'It has to be repaired or replaced and retested before a passing report can be filed. Worn rubber parts and springs can often be replaced on the spot; older devices sometimes need to be replaced.',
  },
];

// Article metadata
const slug = 'what-is-backflow-testing';
export const metadata = {
  slug: slug,
  title: 'Backflow Detection and Testing: What to Know',
  date: '2026-11-03',
  excerpt: 'How backflow is detected and tested, the warning signs of a failing backflow preventer, how often Georgia water providers require testing, and what happens during a test.',
  image: '/images/backflow.webp',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <FAQSchema faqs={faqs} />
      <div className="bg-blue-50 p-5 rounded-lg mb-8 border-l-4 border-theme-3 not-prose">
        <h2 className="text-2xl font-bold mb-3">Quick Answer</h2>
        <p className="mb-3">
          <strong>Backflow</strong> is when water flows backward from an irrigation system, pool, boiler or business
          process into the drinking water supply. A <strong>backflow preventer</strong> stops it, and a{' '}
          <strong>backflow test</strong> is how it&#39;s detected: a certified tester checks the device with a pressure
          gauge kit to make sure it&#39;s still working.
        </p>
        <p>
          Most Georgia water providers require backflow preventers to be <strong>tested every year</strong>, with the
          results filed by a certified tester.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">What Is Backflow Testing and Why Does It Matter?</h2>

      <p className="mb-6">
        Every time you turn on a faucet, you expect clean, safe water to flow out. But without proper safeguards, contaminated water can actually flow backward into your drinking supply&#8212;a phenomenon known as backflow. Backflow testing is the process that ensures your&nbsp;
        <Link href="/services/backflow" className="text-theme-3 hover:underline">backflow prevention device</Link>
        &nbsp;is working correctly and keeping your water safe.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Is Backflow and Why Is It Dangerous?</h3>

      <p className="mb-6">
        Backflow occurs when water flows in the opposite direction from its intended path through a plumbing system. Under normal conditions, water pressure keeps water moving in one direction&#8212;from the municipal supply into your home or business. However, when pressure drops or reverses, contaminated water can be siphoned back into the clean water supply.
      </p>

      <p className="mb-6">
        This reversal can introduce dangerous contaminants into your drinking water, including:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Pesticides and fertilizers</strong> from irrigation systems</li>
        <li><strong>Bacteria and chemicals</strong> from industrial processes</li>
        <li><strong>Sewage and wastewater</strong> from cross-connected plumbing</li>
        <li><strong>Heavy metals and solvents</strong> from commercial operations</li>
        <li><strong>Stagnant or non-potable water</strong> from storage tanks and fire suppression systems</li>
      </ul>

      <p className="mb-6">
        Backflow contamination can cause serious illness and has been linked to outbreaks of gastrointestinal disease, chemical poisoning, and other public health emergencies. That&#39;s why local and state regulations require backflow prevention devices on many types of properties.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">How Backflow Prevention Devices Work</h3>

      <p className="mb-6">
        Backflow prevention devices are mechanical assemblies installed on your plumbing system to stop water from flowing backward. They use a combination of check valves, air gaps, and pressure differentials to ensure water only moves in one direction. The most common types include:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Reduced Pressure Zone (RPZ) assemblies:</strong> The most reliable type, featuring two check valves and a pressure-monitored relief valve. These are required for high-hazard applications.</li>
        <li><strong>Double Check Valve Assemblies (DCVA):</strong> Two independently acting check valves that provide protection for low- to moderate-hazard connections.</li>
        <li><strong>Pressure Vacuum Breakers (PVB):</strong> A single check valve with an air inlet that opens when pressure drops. Commonly used for irrigation systems.</li>
        <li><strong>Atmospheric Vacuum Breakers (AVB):</strong> The simplest type, used for individual fixtures where backpressure is not a concern.</li>
      </ul>

      <p className="mb-6">
        These devices contain internal components that wear over time, which is exactly why regular testing is so important. A failing backflow preventer looks like it&#39;s working from the outside but may not actually be protecting your water supply.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">How Is Backflow Detected?</h3>

      <p className="mb-4">
        Backflow usually happens without any warning you can see, which is why testing matters. There are two ways it
        gets caught:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>A backflow test (the reliable way).</strong> A certified tester uses a differential pressure gauge kit on the device&#39;s test ports to confirm each check valve holds and the relief valve opens when it should. A device can look fine from the outside and still fail.</li>
        <li><strong>Warning signs.</strong> Discolored, cloudy or bad-tasting water, water dripping or spraying from the relief valve, or a sudden drop in pressure. If you notice any of these, have the device tested right away.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Georgia Requirements for Annual Testing</h3>

      <p className="mb-6">
        Georgia&#39;s drinking water rules require water systems to run cross-connection control programs, and backflow
        testing must be done by a tester certified through the state&#39;s backflow prevention assembly tester program.
        Your local water provider (for example, Clayton County Water Authority or Henry County Water Authority) sets the
        testing schedule and tracks the results. Most require every assembly to be tested once a year, and missing the
        deadline can lead to fines or a water shutoff.
      </p>

      <p className="mb-6">
        Testing is typically required for commercial properties and for homes with an irrigation system, pool, fire
        sprinkler system or other cross-connection. Your water provider&#39;s notice will tell you which devices are due.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Don&#39;t wait for your water authority to send a notice. Many jurisdictions issue violations with short deadlines. Scheduling your annual backflow test proactively helps you avoid fines and service interruptions.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">What Happens During a Backflow Test</h3>

      <p className="mb-6">
        A backflow test is a straightforward process that typically takes 15 to 30 minutes per device. Here&#39;s what to expect:
      </p>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Locate the device:</strong> Your certified tester will find and inspect your backflow prevention assembly, usually located near the water meter or where the main supply enters the building.</li>
        <li><strong>Shut off downstream water:</strong> The tester will temporarily shut off water flow downstream of the device to isolate it for testing.</li>
        <li><strong>Attach test equipment:</strong> A differential pressure gauge kit is connected to the test ports on the device to measure valve performance.</li>
        <li><strong>Test each component:</strong> The tester checks each check valve and the relief valve (if applicable) to ensure they hold proper pressure and close completely.</li>
        <li><strong>Record and report results:</strong> Results are documented on an official test form and submitted to your local water authority. If the device passes, you&#39;re good for another year.</li>
      </ol>

      <p className="mb-6">
        If the device fails the test, repairs or replacement are required before a passing result can be submitted. In most cases, minor repairs like replacing rubber seals or springs can be done on the spot by a qualified technician.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Signs Your Backflow Preventer May Be Failing</h3>

      <p className="mb-6">
        While annual testing is the most reliable way to catch problems, there are some warning signs that your backflow preventer may need attention between scheduled tests:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Discolored or foul-tasting water:</strong> An unusual color, taste, or smell in your tap water could indicate contamination from a failed backflow device.</li>
        <li><strong>Visible leaking:</strong> Water dripping from the relief valve or around the assembly suggests internal component failure.</li>
        <li><strong>Reduced water pressure:</strong> A partially stuck check valve can restrict normal water flow.</li>
        <li><strong>Sediment or debris in water:</strong> Particles appearing in your water may be a sign of backflow from a non-potable source.</li>
        <li><strong>The device is more than 10 years old:</strong> Older assemblies are more prone to wear and may need more frequent maintenance or full replacement.</li>
      </ul>

      <p className="mb-6">
        If you notice any of these issues, don&#39;t wait for your next scheduled test. Contact a certified backflow technician right away to inspect and service your device.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Commercial vs. Residential Backflow Requirements</h3>

      <p className="mb-6">
        While both&nbsp;
        <Link href="/services/commercial" className="text-theme-3 hover:underline">commercial properties</Link>
        &nbsp;and residential homes can be subject to backflow testing requirements, the rules differ significantly.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Commercial Properties</h4>

      <p className="mb-6">
        Nearly all commercial properties are required to have backflow prevention devices. Restaurants, medical facilities, manufacturing plants, car washes, and any business that uses chemicals or has fire sprinkler systems must maintain and test their devices annually. Commercial properties often have multiple backflow assemblies, each of which must be individually tested and reported.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Residential Properties</h4>

      <p className="mb-6">
        Residential backflow testing is typically required when a home has an irrigation system, a swimming pool or spa connected to the water supply, a well that supplements municipal water, or a fire sprinkler system. Even if your jurisdiction doesn&#39;t currently require testing for your property, having a backflow preventer on your irrigation system is a smart investment in water safety.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> If you&#39;ve received a backflow test notice from your water authority, don&#39;t ignore it. Plumb-All can handle the entire process&#8212;from testing to filing the paperwork with your local jurisdiction&#8212;so you stay compliant without the hassle.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">How Plumb-All Handles Backflow Testing</h3>
      <div className="mb-6 not-prose">
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>A <strong>certified backflow tester</strong> tests your device with a calibrated test kit.</li>
          <li>We <strong>file the test report with your water provider</strong>, so you don&#39;t have to.</li>
          <li>We test devices from <strong>1/2&#34; up to 2&#34; and larger</strong>, for homes and businesses.</li>
          <li>If a device fails, we quote the repair or replacement and retest it.</li>
        </ul>
      </div>

      <div className="bg-white p-5 rounded-lg mb-8 border border-gray-200 not-prose">
        <h3 className="text-2xl font-bold mb-4">Backflow Testing FAQ</h3>
        {faqs.map((faq) => (
          <div key={faq.question} className="mb-4 last:mb-0">
            <h4 className="text-lg font-semibold mb-1">{faq.question}</h4>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Protect Your Water with Professional Backflow Testing</h3>

      <p className="mb-6">
        Backflow testing isn&#39;t just a regulatory checkbox&#8212;it&#39;s a critical safeguard for your family&#39;s or employees&#39; health. At Plumb-All, our certified backflow testers serve homeowners and businesses across South Metro Atlanta with thorough testing, and repairs or replacement when a device fails. We handle the test, the paperwork, and the peace of mind.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Ready to schedule your backflow test? Plumb-All&#39;s certified technicians are here to help."
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
