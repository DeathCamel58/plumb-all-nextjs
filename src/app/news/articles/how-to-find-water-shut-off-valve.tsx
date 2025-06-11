import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Image from "next/image";
import Link from "next/link";

// Article metadata
const slug = 'how-to-find-water-shut-off-valve';
export const metadata = {
  slug: slug,
  title: 'How to Find Your Water Shut Off Valve',
  date: '2022-09-06',
  excerpt: 'Learn how to quickly locate your water shut off valve to prevent damage during plumbing emergencies. This essential knowledge can save you from costly water damage.',
  image: '/images/shut-off-valve.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">How to Find Your Water Shut Off Valve</h2>

      <p className="mb-6">
        Have you ever arrived home to discover water pooling on your floor? A minor plumbing issue can
        rapidly escalate into a full-blown emergency. One of the most effective actions you can take in
        this situation is to shut off your home&#39;s water supply. To do this, you&#39;ll need to know where
        your water shut off valve is located. Being able to quickly shut off your water is essential to
        prevent a bad situation from becoming worse.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> Water damage is one of the most common and costly types of home
          insurance claims. Knowing how to quickly shut off your water can potentially save thousands of
          dollars in damage and prevent the growth of harmful mold.
        </p>
      </div>

      <p className="mb-6">
        The first step is to locate your water shut off valve. Depending on your property, you might find
        the valve inside your home or outside. Some properties have the valve near the property line or
        underground in a covered box. If the water shut off valve is inside your home, common locations
        include the crawl space, basement, or near the foundation.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Does a Water Shut Off Valve Look Like?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <p className="mb-4">
            To find your water shut off valve, you need to know what you&#39;re looking for. The main water
            shut off valve typically looks like a pipe with either a wheel handle or a lever. The majority
            of plumbing emergencies can be prevented or minimized if you quickly turn off the main water supply.
          </p>

          <p className="mb-4">
            Main shut off valves usually come in two types:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Gate valve:</strong> Features a round, wheel-like handle that requires multiple turns to fully close</li>
            <li><strong>Ball valve:</strong> Has a straight lever handle that turns 90 degrees to completely shut off the water</li>
          </ul>
        </div>

        <div className="col-span-1">
          <figure className="mb-4">
            <Image
              src="/images/water-shut-off-valve.jpg"
              alt="Water Shut Off Valve"
              className="rounded-lg shadow-md max-w-full h-auto"
              width={500}
              height={350}
            />
            <figcaption className="text-sm text-gray-600 text-center mt-2">A typical water shut off valve</figcaption>
          </figure>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Finding Indoor Water Shut Off Valves</h2>

      <p className="mb-6">
        Typically, the main shut off valve will be located inside the perimeter of your house at the point
        where water enters your home. Start your search on the side of the house that faces the street, as
        water generally begins at the street and enters your home through a straight line. This method is
        most effective when your water supply is connected to a municipal system.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Common Indoor Locations for Main Water Shut Off Valves</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Near the water meter:</strong> Often located in the same area as your water meter</li>
          <li><strong>Basement:</strong> Check along exterior walls, especially on the street-facing side</li>
          <li><strong>Crawl space:</strong> May require a flashlight to locate</li>
          <li><strong>Utility room:</strong> Near water heaters or washing machines</li>
          <li><strong>Under the kitchen sink:</strong> In some older homes</li>
          <li><strong>Near the foundation:</strong> Where the main water line enters the house</li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Once you&#39;ve located your main water shut off valve, consider labeling it
          clearly and ensuring all household members know its location. In an emergency, every second counts.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Finding Outdoor Water Shut Off Valves</h2>

      <p className="mb-6">
        If you can&#39;t locate the main shut off valve inside your home, it may be outside. Outdoor shut off
        valves are typically found:
      </p>

      <ul className="list-disc pl-8 mb-6 space-y-2">
        <li>Near the property line or close to the street</li>
        <li>In an underground box with a metal or plastic cover (sometimes marked &#34;water&#34;)</li>
        <li>Along the perimeter of the house, often on the street-facing side</li>
        <li>Near the water meter if it&#39;s located outside</li>
      </ul>

      <p className="mb-6">
        Outdoor shut off valves may require a special tool called a &#34;water key&#34; to operate. These can be
        purchased at most hardware stores and are a worthwhile investment for emergency preparedness.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Check Your Property Inspection Report</h2>

      <p className="mb-6">
        If you&#39;re unable to locate your water shut off valve after searching the entire property, check
        your property inspection report. This document is typically provided during the final phases of
        buying a house. The plumbing section of the report should indicate the exact location of the shut
        off valve, and may even include a picture.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Other Resources for Finding Your Shut Off Valve</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Home blueprints:</strong> May show the location of main plumbing lines and valves</li>
          <li><strong>Previous homeowners:</strong> If possible, contact them for information</li>
          <li><strong>Neighbors with similar homes:</strong> Their valve locations may be similar</li>
          <li><strong>Local water utility:</strong> May have records or be able to send someone to help locate it</li>
          <li><strong>Professional <Link href="/services/plumber" className="text-theme-3 hover:underline">plumber</Link>:</strong> Can quickly locate and mark all important valves</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Individual Fixture Shut Off Valves</h2>

      <p className="mb-6">
        In addition to your main water shut off valve, most fixtures in your home have individual shut off
        valves. These allow you to stop water flow to a specific fixture without affecting the rest of your home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Common Fixture Shut Off Valve Locations</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Toilets:</strong> Look for an oval-shaped handle on a pipe behind or beside the toilet</li>
            <li><strong>Sinks:</strong> Check under the sink for small valves on the water supply lines</li>
            <li><strong>Washing machine:</strong> Look for two valves (hot and cold) behind the machine</li>
            <li><strong>Water heater:</strong> The cold water supply line should have a shut off valve</li>
            <li><strong>Dishwasher:</strong> Often shares a valve with the kitchen sink or has one under the sink</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">When to Use Individual Shut Off Valves</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>When replacing or repairing a specific fixture</li>
            <li>If a single fixture is leaking or malfunctioning</li>
            <li>During fixture maintenance or cleaning</li>
            <li>To isolate a problem area without disrupting water to the entire home</li>
            <li>When winterizing unused fixtures to prevent freezing</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Finding Your Water Shut Off Valve Is Important</h2>

      <p className="mb-6">
        Water continuously flowing through your house during a plumbing emergency can quickly cause
        extensive damage. If the water is coming from your home&#39;s water supply, taking quick action can
        prevent these damages and avoid bigger problems. Knowing how to find your water shut off valve
        will help you quickly turn it off and protect your home until a proper solution can be implemented.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Important:</strong> Test your main water shut off valve periodically to ensure it works
          properly. Valves that haven&#39;t been turned for years can become stuck or difficult to operate.
          If your valve is hard to turn or appears corroded, have a professional plumber service or replace it.
        </p>
      </div>

      <p className="mb-6">
        In a plumbing emergency, every second counts. Water damage can quickly escalate from a minor
        inconvenience to a major restoration project. By familiarizing yourself with your home&#39;s water
        shut off valve locations now, you&#39;ll be prepared to act quickly when it matters most.
      </p>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need help locating or servicing your water shut off valve?"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
