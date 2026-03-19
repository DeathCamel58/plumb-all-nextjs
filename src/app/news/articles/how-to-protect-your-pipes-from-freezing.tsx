import React from 'react';
import Link from "next/link";
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'how-to-protect-your-pipes-from-freezing';
export const metadata = {
  slug: slug,
  title: 'How to Protect Your Pipes From Freezing',
  date: '2020-12-02',
  excerpt: 'Frozen pipes can burst and cause thousands of dollars in damage. Learn proven methods to protect your pipes during cold weather and what to do if they freeze.',
  image: '/images/frozen-pipe.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">How to Protect Your Pipes From Freezing</h2>

      <p className="mb-6">
        Frozen pipes are one of the most common and costly plumbing problems during the winter months. When
        water freezes inside a pipe, it expands with tremendous force, often enough to crack or burst even
        the strongest pipes. According to the Insurance Institute for Business and Home Safety, burst pipes
        from freezing are one of the most common causes of property damage during winter, with claims
        averaging tens of thousands of dollars per incident.
      </p>

      <p className="mb-6">
        The good news is that frozen and burst pipes are almost entirely preventable. With proper preparation
        and a few simple precautions, you can protect your home&#39;s plumbing system from freeze damage all
        winter long. This guide covers everything from long-term prevention strategies to emergency steps if
        you discover your pipes have already frozen.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Understanding Which Pipes Are Most at Risk</h3>

      <p className="mb-6">
        Not all pipes in your home face the same level of freeze risk. Knowing which pipes are most vulnerable
        helps you focus your prevention efforts where they matter most:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Pipes in exterior walls:</strong> These pipes are separated from the freezing outdoor air by only a thin layer of insulation and siding, making them highly vulnerable.</li>
        <li><strong>Pipes in unheated spaces:</strong> Crawl spaces, attics, garages, and unfinished basements often lack adequate heating, allowing temperatures to drop well below freezing.</li>
        <li><strong>Outdoor faucets and hose bibs:</strong> These are directly exposed to the elements and are among the first fixtures to freeze.</li>
        <li><strong>Pipes near windows, doors, or vents:</strong> Cold air infiltration around these openings can lower the temperature around nearby pipes.</li>
        <li><strong>Swimming pool and sprinkler supply lines:</strong> If not properly winterized, these lines can freeze and crack underground.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Long-Term Prevention: Insulating Your Pipes</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Foam Pipe Insulation</h4>
      <p className="mb-6">
        Foam pipe sleeves are the most common and cost-effective way to insulate your pipes. These pre-slit
        tubes of closed-cell foam slide over your pipes and can be secured with tape or cable ties. They&#39;re
        available in various diameters to fit different pipe sizes and can be found at any hardware store for
        just a few dollars per six-foot section. Apply foam insulation to all exposed pipes in your crawl
        space, attic, basement, and garage.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Fiberglass Pipe Wrap</h4>
      <p className="mb-6">
        For pipes in tight spaces where foam sleeves won&#39;t fit, fiberglass pipe wrap is an excellent
        alternative. It comes in rolls that you wrap around the pipe and secure with tape. Fiberglass provides
        good insulation value and can conform to irregular shapes, elbows, and valves that rigid foam
        sleeves can&#39;t accommodate.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Heat Tape and Heat Cables</h4>
      <p className="mb-6">
        For pipes in the most vulnerable locations, electric heat tape or heat cables provide active freeze
        protection. These products wrap around or alongside the pipe and generate gentle heat to keep the
        pipe above freezing. There are two main types:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Self-regulating heat cables:</strong> These automatically adjust their heat output based on the surrounding temperature. They use more power when it&#39;s colder and less when it&#39;s warmer, making them energy-efficient and safe. They can overlap without overheating.</li>
        <li><strong>Constant-wattage heat tape:</strong> These produce a consistent level of heat regardless of temperature. They&#39;re less expensive but must be installed carefully to avoid overlapping, which can cause overheating. They should always be used with a thermostat.</li>
      </ul>

      <p className="mb-6">
        Always follow the manufacturer&#39;s instructions when installing heat tape, and never use it on pipes
        that are already damaged or leaking.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Sealing Air Leaks</h3>

      <p className="mb-6">
        Cold air drafts can dramatically lower the temperature around your pipes, even in heated spaces. Inspect
        your home for air leaks, paying special attention to:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Gaps where pipes penetrate exterior walls or the foundation</li>
        <li>Cracks around windows and doors near plumbing</li>
        <li>Open vents or gaps in crawl space enclosures</li>
        <li>Unsealed holes around electrical and cable wiring that share walls with plumbing</li>
      </ul>

      <p className="mb-6">
        Seal any gaps with caulk, spray foam, or weatherstripping. This not only protects your pipes but also
        improves your home&#39;s energy efficiency.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">During Cold Snaps: Active Protection Measures</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Let Faucets Drip</h4>
      <p className="mb-6">
        When temperatures drop below freezing, open faucets connected to vulnerable pipes to a slow, steady
        drip. Moving water resists freezing much better than standing water. Open both the hot and cold handles
        slightly. The small amount of water you&#39;ll use is negligible compared to the cost of repairing a
        burst pipe.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Open Cabinet Doors</h4>
      <p className="mb-6">
        Pipes under kitchen and bathroom sinks along exterior walls are often at risk because the cabinet
        enclosure blocks warm air from reaching them. During freezing weather, open the cabinet doors to
        allow heated air from your home to circulate around the pipes. Remember to move any cleaning chemicals
        or hazardous materials out of reach if you have small children or pets.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Maintain a Consistent Temperature</h4>
      <p className="mb-6">
        Keep your thermostat set to the same temperature day and night. While you might normally lower the heat
        at night to save energy, doing so during extreme cold can allow the temperature inside your walls and
        crawl spaces to drop below freezing. Keep the heat at a minimum of 55 degrees Fahrenheit at all times,
        including when you&#39;re away from home.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Close Your Garage Door</h4>
      <p className="mb-6">
        If you have water supply lines running through your garage, keep the garage door closed during cold
        weather. An open garage door exposes these pipes to freezing outdoor temperatures. If you use the
        garage frequently, install a timer or reminder to ensure the door gets closed promptly.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">What to Do If Your Pipes Freeze</h3>

      <p className="mb-6">
        If you turn on a faucet and only a trickle of water comes out, or nothing at all, a frozen pipe is the
        likely culprit. Act quickly but carefully:
      </p>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Leave the faucet open.</strong> As the ice begins to melt, the flowing water will help thaw the rest of the blockage.</li>
        <li><strong>Locate the frozen section.</strong> Check exposed pipes for frost, bulging, or condensation. The frozen area is often near an exterior wall or in an unheated space.</li>
        <li><strong>Apply gentle heat.</strong> Use a hair dryer, heat lamp, portable space heater, or towels soaked in hot water. Work from the faucet end toward the frozen section to allow water to flow out as it melts.</li>
        <li><strong>Never use an open flame.</strong> Blowtorches, propane heaters, charcoal grills, and similar devices can damage pipes, create toxic fumes, and start fires. Stick to safe, controlled heat sources only.</li>
        <li><strong>Check other faucets.</strong> If one pipe is frozen, others may be as well. Test all faucets in your home.</li>
        <li><strong>Call a professional if needed.</strong> If you can&#39;t locate the freeze, can&#39;t access it, or the pipe appears damaged, call a plumber for&nbsp;<Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbing service</Link>&nbsp;immediately.</li>
      </ol>

      <h3 className="text-2xl font-bold mt-8 mb-4">If a Pipe Bursts</h3>

      <p className="mb-6">
        If a frozen pipe has already burst, take immediate action to minimize damage:
      </p>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Shut off the main water supply valve immediately</li>
        <li>Turn off electricity in affected areas if water is near electrical outlets or panels</li>
        <li>Call a professional plumber for&nbsp;<Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">emergency plumbing repair</Link></li>
        <li>Begin removing standing water with towels, mops, or a wet vacuum</li>
        <li>Document all damage with photos for your insurance claim</li>
        <li>Contact your insurance company as soon as possible</li>
      </ol>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Before winter arrives, locate your main water shut-off valve and make sure
          every adult in your household knows where it is and how to operate it. In a burst pipe emergency,
          every second counts. Being able to shut off the water immediately can be the difference between a
          minor inconvenience and tens of thousands of dollars in water damage.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need help protecting your pipes or dealing with freeze damage? We're here 24/7!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
