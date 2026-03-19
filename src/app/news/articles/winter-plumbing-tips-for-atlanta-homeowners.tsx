import React from 'react';
import Link from "next/link";
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'winter-plumbing-tips-for-atlanta-homeowners';
export const metadata = {
  slug: slug,
  title: 'Winter Plumbing Tips for Atlanta Homeowners',
  date: '2019-12-11',
  excerpt: 'Atlanta winters may be mild compared to the north, but freezing temperatures can still wreak havoc on your plumbing. Learn how to protect your home this winter.',
  image: '/images/frozen-pipe.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Winter Plumbing Tips for Atlanta Homeowners</h2>

      <p className="mb-6">
        While Atlanta doesn&#39;t experience the brutal winters that the northern states are known for, our
        region does see its fair share of freezing temperatures between December and February. In fact, because
        many Atlanta homes were built without extreme cold in mind, our plumbing systems can actually be more
        vulnerable to freeze damage than homes in colder climates. Pipes may be routed through uninsulated
        crawl spaces, exterior walls, or attics where they&#39;re exposed to the cold.
      </p>

      <p className="mb-6">
        A single night of below-freezing temperatures is all it takes to burst a pipe, potentially causing
        thousands of dollars in water damage. The good news is that with some preparation and awareness, you
        can protect your home&#39;s plumbing system throughout the winter months. Here&#39;s everything Atlanta
        homeowners need to know.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Why Frozen Pipes Are Dangerous</h3>

      <p className="mb-6">
        When water freezes inside a pipe, it expands by approximately nine percent. This expansion creates
        enormous pressure within the pipe, often exceeding 25,000 pounds per square inch. That&#39;s more than
        enough to split copper, PVC, or even steel pipes. The real danger comes when the ice thaws. Once the
        blockage melts, water rushes through the cracked or burst pipe, flooding your home with potentially
        hundreds of gallons of water per hour.
      </p>

      <p className="mb-6">
        The pipes most at risk in Atlanta homes include those in exterior walls, unheated garages, crawl spaces,
        attics, and any outdoor plumbing fixtures like hose bibs and irrigation systems.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Before the Cold Arrives: Winterization Steps</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Disconnect and Drain Outdoor Hoses</h4>
      <p className="mb-6">
        Before the first freeze of the season, disconnect all garden hoses from outdoor faucets. A connected
        hose traps water in the faucet and the pipe behind it, making it much more likely to freeze and burst.
        After disconnecting, open the outdoor faucet briefly to let any remaining water drain out. If your
        home has interior shut-off valves for outdoor faucets, close them and drain the lines.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Insulate Exposed Pipes</h4>
      <p className="mb-6">
        Pipe insulation is inexpensive and easy to install. Foam pipe sleeves or fiberglass wrapping should
        be applied to any exposed pipes in your crawl space, attic, garage, or basement. Pay special attention
        to pipes that run along exterior walls or in unheated areas. For added protection in particularly
        vulnerable spots, consider using heat tape or heat cables, which provide a gentle warmth that prevents
        freezing.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Seal Air Leaks Near Pipes</h4>
      <p className="mb-6">
        Cold air drafts can quickly drop the temperature around your pipes to dangerous levels. Check for gaps
        and cracks where pipes enter your home through exterior walls, and seal them with caulk or spray foam
        insulation. Also check around windows, doors, and vents in areas where pipes are located. Even a small
        draft can make the difference between a pipe that stays liquid and one that freezes.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Service Your Water Heater</h4>
      <p className="mb-6">
        Your water heater works harder during the winter months because the incoming water is colder. This extra
        strain can lead to breakdowns at the worst possible time. Have your water heater inspected and flushed
        before winter to ensure it&#39;s operating efficiently. Check the temperature setting and make sure
        it&#39;s set to 120 degrees Fahrenheit for optimal performance and safety.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">During Freezing Weather: Active Protection</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Let Faucets Drip</h4>
      <p className="mb-6">
        When temperatures drop below freezing, open both hot and cold faucets on vulnerable pipes to a slow
        drip. Moving water is much harder to freeze than standing water. You don&#39;t need a heavy flow; a
        slow, steady drip is sufficient. Focus on faucets served by pipes that run through exterior walls or
        unheated spaces.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Open Cabinet Doors</h4>
      <p className="mb-6">
        Kitchen and bathroom cabinets along exterior walls can trap cold air around the pipes inside them.
        During cold snaps, open these cabinet doors to allow warm air from your home to circulate around the
        pipes. If you have small children, make sure to move any household chemicals or cleaning supplies to
        a safe location first.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Keep Your Thermostat Consistent</h4>
      <p className="mb-6">
        Resist the temptation to turn the heat down too low at night or when you leave the house. Keep your
        thermostat set to at least 55 degrees Fahrenheit at all times during winter, even if you&#39;re away
        on vacation. The small increase in your heating bill is far less expensive than repairing burst pipes
        and water damage.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What to Do If Your Pipes Freeze</h3>

      <p className="mb-6">
        If you turn on a faucet and only a trickle comes out, or nothing at all, you likely have a frozen pipe.
        Here&#39;s what to do:
      </p>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Keep the faucet open.</strong> As the ice begins to melt, water needs somewhere to go. Running water through the pipe will also help melt the remaining ice.</li>
        <li><strong>Apply gentle heat to the frozen section.</strong> Use a hair dryer, heating pad, space heater, or towels soaked in hot water. Never use an open flame, blowtorch, or propane heater, as these can damage the pipe or start a fire.</li>
        <li><strong>Work from the faucet toward the frozen area.</strong> This allows water to flow out as you thaw the pipe, reducing pressure buildup.</li>
        <li><strong>Check all other faucets in your home.</strong> If one pipe is frozen, others may be as well.</li>
        <li><strong>If you can&#39;t locate the frozen section or can&#39;t thaw it,</strong> call a professional plumber immediately.</li>
      </ol>

      <h3 className="text-2xl font-bold mt-8 mb-4">What to Do If a Pipe Bursts</h3>

      <p className="mb-6">
        A burst pipe is a&nbsp;<Link href="/services/emergencies" className="text-theme-3 hover:underline">plumbing emergency</Link>&nbsp;that
        requires immediate action:
      </p>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Shut off the main water supply immediately.</strong> Every member of your household should know where the main shut-off valve is located.</li>
        <li><strong>Turn off the electricity</strong> in any areas affected by flooding to prevent electrical shock.</li>
        <li><strong>Call a professional plumber</strong> right away for&nbsp;<Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">emergency plumbing repair</Link>.</li>
        <li><strong>Begin removing standing water</strong> as quickly as possible to minimize damage to flooring, walls, and belongings.</li>
        <li><strong>Document the damage</strong> with photos and videos for your insurance claim.</li>
      </ol>

      <h3 className="text-2xl font-bold mt-8 mb-4">Preparing for Vacation During Winter</h3>

      <p className="mb-6">
        If you&#39;re leaving your Atlanta home for an extended period during the winter, take these extra
        precautions:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Keep the heat on and set to at least 55 degrees Fahrenheit</li>
        <li>Ask a trusted neighbor or friend to check on your home daily</li>
        <li>Consider shutting off the main water supply and draining the system if you&#39;ll be gone for more than a few days</li>
        <li>Open cabinet doors under sinks along exterior walls</li>
        <li>Make sure your garage door stays closed if there are water lines in the garage</li>
      </ul>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Install a smart water leak detector near your water heater and in your
          crawl space. These affordable devices connect to your phone and will alert you immediately if they
          detect water, giving you time to act before a small leak becomes a major flood.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need help winterizing your plumbing? We're here for you!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
