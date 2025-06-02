import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Image from "next/image";

// Article metadata
const slug = 'how-to-get-items-dropped-in-a-sink';
export const metadata = {
  slug: slug,
  title: 'How to Get Items Dropped in a Sink',
  date: '2022-05-03',
  excerpt: 'We’ve all dropped an item down a p-trap before. In this article we cover a couple techniques you can use to try to retrieve items lost down the drain.',
  image: '/images/sink-underside.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">How to Get Items Dropped in a Sink</h2>

      <p className="mb-6">
        We&#39;ve all experienced that sinking feeling when something valuable drops down a drain.
        Whether it&#39;s a ring, piece of silverware, or other small item, these accidents happen
        to everyone. Fortunately, retrieving these items is often simpler than you might think,
        and can usually be accomplished with a few basic tools and techniques.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> The p-trap under your sink isn&#39;t just a quirky pipe shape -
          it serves the important purpose of creating a water seal that prevents sewer gases from
          entering your home. This same design feature often catches items that fall down the drain!
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Try the Easy Way First</h2>

      <p className="mb-6">
        Before attempting more involved methods, start with the simplest approach: using a long pair
        of pliers to reach into the drain and retrieve your lost item. This method works best when
        the item hasn&#39;t traveled too far down the drain pipe.
      </p>

      <div className="flex justify-center mb-6">
        <figure className="text-center">
          <Image
            src="/images/long-pliers.png"
            alt="Long pliers that can be used to retrieve items from drains"
            className="rounded-lg max-w-full h-auto"
            width={500}
            height={300}
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            An example of long pliers that can help retrieve items from drains.
          </figcaption>
        </figure>
      </div>

      <p className="mb-6">
        This approach is most effective for drains with a removable basket strainer or stopper.
        Simply remove the strainer or stopper, then use the pliers to carefully reach in and
        grasp the lost item.
      </p>

      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> If pliers aren&#39;t long enough or can&#39;t grip the item properly,
          try using a wire coat hanger. Straighten it out, then create a small hook at one end.
          This makeshift tool can be effective for hooking and retrieving items that are just
          out of reach.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Remove the P-Trap</h2>

      <p className="mb-6">
        If the direct retrieval method doesn&#39;t work, the next step is to remove the p-trap.
        This curved section of pipe beneath your sink is designed to hold water, creating a seal
        that prevents sewer gases from entering your home. It&#39;s also where most dropped items end up.
      </p>

      <p className="mb-6">
        Locate the p-trap under your sink - it&#39;s the U-shaped section of pipe that creates a
        low dip in the drain line.
      </p>

      <div className="flex justify-center mb-6">
        <figure className="text-center">
          <Image
            src="/images/sink-underside.jpg"
            alt="Underside of a sink showing the p-trap"
            className="rounded-lg max-w-full h-auto"
            width={500}
            height={350}
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            In this image, the p-trap is the pipe in the lower left with a large dip in it.
          </figcaption>
        </figure>
      </div>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">How to Remove a P-Trap</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Place a bucket underneath</strong> the p-trap to catch any water that will spill out.
          </li>
          <li>
            <strong>Locate the slip nuts</strong> at both ends of the p-trap. These are the large nuts that connect the p-trap to the adjacent pipes.
          </li>
          <li>
            <strong>Loosen the slip nuts</strong> by turning them counterclockwise. You may be able to do this by hand, but pliers are often necessary.
          </li>
          <li>
            <strong>Remove the p-trap</strong> once both nuts are loose. Be careful as water will drain out.
          </li>
          <li>
            <strong>Retrieve your item</strong> from inside the p-trap or from the exposed pipe.
          </li>
        </ol>
      </div>

      <div className="flex justify-center mb-6">
        <figure className="text-center">
          <Image
            src="/images/item-in-p-trap.jpg"
            alt="P-Trap with item in it"
            className="rounded-lg max-w-full h-auto"
            width={500}
            height={300}
          />
          <figcaption className="text-sm text-gray-600 mt-2">
            Once the p-trap is removed, you should be able to retrieve your lost item.
          </figcaption>
        </figure>
      </div>

      <p className="mb-6">
        To reinstall the p-trap, simply reverse the process. Position the p-trap back in place and
        hand-tighten the slip nuts. Finish tightening with pliers if necessary, but be careful not
        to overtighten as this can crack plastic fittings or strip threads.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Call a Professional</h2>

      <p className="mb-6">
        While the methods above are effective for most situations, there are times when professional
        assistance is warranted. Consider calling a plumber if:
      </p>

      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
        <ul className="list-disc pl-6 space-y-2">
          <li>The item has traveled beyond the p-trap into the main drain line</li>
          <li>You&#39;re uncomfortable working with plumbing fixtures</li>
          <li>Your sink has complex plumbing that makes DIY removal difficult</li>
          <li>You&#39;ve tried the above methods without success</li>
          <li>The dropped item is extremely valuable and you want to ensure safe retrieval</li>
        </ul>
      </div>

      <p className="mb-6">
        Professional plumbers have specialized tools like drain cameras and retrieval devices that
        can locate and recover items that have traveled deeper into your plumbing system.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Preventing Future Incidents</h2>

      <p className="mb-6">
        To avoid the hassle of retrieving items from your drain in the future, consider these preventative measures:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">For Kitchen Sinks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Install a sink strainer or drain cover</li>
            <li>Remove jewelry before washing dishes</li>
            <li>Keep small utensils away from the sink edge</li>
            <li>Use a dish tub inside the sink when washing small items</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">For Bathroom Sinks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use a drain stopper when handling small items</li>
            <li>Place a towel in the sink when handling jewelry</li>
            <li>Store frequently used items like rings in a designated dish</li>
            <li>Consider a magnetic drain cover for metal items</li>
          </ul>
        </div>
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
