import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'plumbing-sounds';
export const metadata = {
  slug: slug,
  title: 'Plumbing Sounds',
  date: '2019-07-17',
  excerpt: 'Although not all building plumbing systems make noticeable sounds, these annoying sounds can come from anyone’s home and they’re more common in older homes.',
  image: '/images/gray-pipes-2.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Plumbing Sounds</h2>

      <p className="mb-6">
        Although not all building&#39;s plumbing systems make noticeable sounds, everyone has heard them before.
        These annoying sounds can come from anyone&#39;s home, but they&#39;re more likely to occur in older homes.
        In this article, we&#39;ll explore some of the more common plumbing sounds, why they occur,
        and whether they have the potential to cause serious issues.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Banging</h2>

          <p className="mb-4">
            We&#39;ve all heard it before. When someone flushes a toilet, or a washing machine stops,
            there are banging sounds. This sound is called a &#34;water hammer&#34;.
          </p>

          <p className="mb-4">
            <strong>The Cause:</strong> This occurs due to water moving in the pipes, then suddenly stopping.
            Because of the sudden stop of water at the end of the pipe, the water behind it will continue moving,
            and smash into the stopped water. This creates a shock wave that travels through the pipe.
          </p>

          <p className="mb-4">
            This sound is something that you don&#39;t want to hear, as it can damage your pipes. Fortunately,
            installing a dead-end piece of pipe that&#39;s normally filled with air works effectively at preventing
            the water hammer effect. These dead-end pipes allow the moving water to have somewhere to go,
            while gradually slowing down.
          </p>

          <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
            <p className="font-medium text-gray-700">
              <strong>Pro Tip:</strong> Water hammer is such a common issue that many washing machine
              manufacturers recommend installing a dead-end air chamber to prevent it from occurring.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Clicking</h2>

          <p className="mb-4">
            These sounds aren&#39;t as common, but are sometimes heard in plumbing systems.
          </p>

          <p className="mb-4">
            <strong>The Cause:</strong> Clicking sounds are usually traced back to one of two different things:
            relays clicking, or pipes expanding slightly due to thermal expansion.
          </p>

          <p className="mb-4">
            Relays are electrical components used to turn something on and off. These can be found on pumps
            for water tanks, hot tubs, pools, and other fixtures that turn on and off automatically.
            Hearing a relay &#34;click&#34; simply means that it&#39;s doing its job properly.
          </p>

          <p className="mb-4">
            Thermal expansion is caused by the temperature of the water in a pipe changing. This temperature
            is transferred to the pipe, which slightly expands when it gets hot.
          </p>

          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-theme-3">
            <p className="font-medium text-gray-700">
              <strong>Good News:</strong> Clicking sounds are typically normal and nothing to worry about.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Gurgling</h2>

          <p className="mb-4">
            <Link href="/news/article/plumbing-gurgling" className="text-theme-3 hover:underline">
              Gurgling
            </Link> can be caused by many different things, and we&#39;ll cover a few of the causes below.
          </p>

          <p className="mb-4">
            <strong>The Cause:</strong> Gurgling, &#34;Glug Glug&#34;, or bubbling sounds are usually related to water draining.
            This is commonly heard due to an issue with the vents on the plumbing system, causing air bubbles
            to percolate up through the water in your pipes. Private well systems can have these sounds due to
            water pumps pulling in air. This is an issue because usually there&#39;s either a hole in the pipe,
            and the pump is sucking in air, or the well&#39;s water level is low.
          </p>

          <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
            <p className="font-medium text-gray-700">
              <strong>Warning:</strong> No matter what the cause of the gurgling is, it should be checked out
              by a professional, as this sound can indicate some serious issues.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Rattling & Shaking</h2>

          <p className="mb-4">
            Rattling is one of the most common sounds to hear in plumbing systems. Usually,
            this is a simple fix that doesn&#39;t take too long to diagnose and repair.
          </p>

          <p className="mb-4">
            <strong>The Cause:</strong> Rattling and shaking is almost always caused by loose pipe straps.
            Pipe straps hold the pipes to boards in your walls (such as studs). The purpose of these straps
            is to hold the pipe firmly, so that it doesn&#39;t move or bang against anything. This isn&#39;t always
            the issue, as water pressure that&#39;s too high could also be the cause.
          </p>

          <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
            <p className="font-medium text-gray-700">
              <strong>Warning:</strong> These symptoms shouldn&#39;t be ignored, and should be immediately checked.
              Ignoring this issue could lead to a pipe bursting, and leaking water into your residence.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold mb-4">Hissing and Whining</h2>

        <p className="mb-4">
          If your system is hissing or whining, you should get someone to check why immediately.
        </p>

        <p className="mb-4">
          <strong>The Cause:</strong> This can be caused by water pressure being too high, creating resonant
          sounds from the pressure difference between the supply piping and your home system&#39;s piping.
          A water or air leak can also cause this (think of a water hose running). A water heater can
          also have scale buildup, which could cause these sounds.
        </p>

        <p className="mb-4">
          Unfortunately, not all of these sounds can be easily diagnosed without tools and experience,
          as these sounds can travel long distances along pipes. As some of these causes can lead to
          serious damage, it should be checked out quickly to avoid harm to your plumbing system.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call a Professional</h2>

      <p className="mb-6">
        While some plumbing sounds might be normal or have simple fixes, many indicate potential problems
        that require professional attention. Consider calling a plumber if:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>You hear water hammer sounds when using fixtures or appliances</li>
          <li>Gurgling sounds persist in multiple drains</li>
          <li>Rattling or shaking sounds occur when water is running</li>
          <li>You notice hissing or whining from your plumbing system</li>
          <li>Any plumbing sounds are accompanied by decreased water pressure or leaks</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

      <p className="mb-6">
        Although we&#39;ve provided information about potential causes of common plumbing sounds,
        these noises can result from countless issues, and we&#39;ve only listed the more common reasons.
        If you have any concerns about sounds coming from your plumbing system, it&#39;s best to contact
        a professional plumber who can properly diagnose and address the issue before it leads to
        more serious problems.
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
