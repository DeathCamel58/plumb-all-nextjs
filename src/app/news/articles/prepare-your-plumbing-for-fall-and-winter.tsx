import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'prepare-your-plumbing-for-fall-and-winter';
export const metadata = {
  slug: slug,
  title: 'How to Prepare Your Plumbing for Fall and Winter',
  date: '2024-10-09',
  excerpt: 'Protect your plumbing from cold weather damage with this comprehensive guide to fall and winter preparation, including pipe insulation, water heater checks, and more.',
  image: '/images/frozen-pipe.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">How to Prepare Your Plumbing for Fall and Winter</h2>

      <p className="mb-6">
        As temperatures drop in the fall and winter months, your home&#39;s plumbing system faces a unique
        set of challenges. Freezing temperatures can cause pipes to burst, outdoor fixtures to crack, and
        water heaters to work overtime. The damage from a single burst pipe can cost thousands of dollars in
        repairs and water damage restoration. The good news is that most winter plumbing problems are
        preventable with some straightforward preparation. Taking a few hours in early fall to winterize
        your plumbing can save you from costly emergencies when the cold hits.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Outdoor Plumbing Preparation</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Disconnect and Store Garden Hoses</h4>
      <p className="mb-6">
        One of the simplest yet most important steps in winter plumbing preparation is disconnecting your
        garden hoses from outdoor faucets (also called hose bibs or spigots). A hose left connected to an
        outdoor faucet traps water inside the faucet and the connecting pipe. When that trapped water
        freezes, it expands and can crack the faucet or the pipe behind it, often without any visible sign
        until spring when you turn the water back on and discover a leak inside the wall. Disconnect all
        hoses, drain them completely, and store them in a garage or shed for the winter.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Shut Off and Drain Outdoor Faucets</h4>
      <p className="mb-6">
        After disconnecting your hoses, locate the interior shutoff valve for each outdoor faucet. Most homes
        have individual shutoff valves for exterior hose bibs, typically located in the basement or crawl
        space near where the pipe exits the house. Turn off each shutoff valve, then open the outdoor faucet
        to drain any remaining water from the line. Leave the outdoor faucet in the open position so any
        residual water can expand without building up pressure. If your home has frost-free hose bibs
        (spigots with a long stem that places the shutoff point inside the heated space), disconnecting the
        hose is usually sufficient, but draining the line is still a good precaution.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Winterize Irrigation Systems</h4>
      <p className="mb-6">
        If your home has a sprinkler or irrigation system, it needs to be properly winterized before the
        first freeze. This involves shutting off the water supply to the system and blowing compressed air
        through the lines to remove all remaining water. Most homeowners hire a professional for this service,
        as improper blowout can damage sprinkler heads and valves. A cracked sprinkler line can be expensive
        to locate and repair in the spring.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Indoor Pipe Protection</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Insulate Exposed Pipes</h4>
      <p className="mb-6">
        Pipes in unheated areas of your home — such as basements, crawl spaces, attics, garages, and
        exterior walls — are the most vulnerable to freezing. Insulating these pipes with foam pipe
        insulation sleeves is one of the most cost-effective ways to prevent frozen pipes. Foam insulation
        is inexpensive, easy to install (just slit it along the seam and wrap it around the pipe), and
        available at any hardware store. For pipes in particularly cold areas, consider using thermostatically
        controlled heat tape or heat cables, which provide a low level of electrical warmth to keep the pipe
        above freezing. If you notice any pipes that are already damaged or showing signs of wear, our&nbsp;
        <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair services</Link>
        &nbsp;can address those issues before winter arrives.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Seal Drafts Near Pipes</h4>
      <p className="mb-6">
        Cold air leaking into your home through gaps around pipes, electrical wires, dryer vents, or other
        wall penetrations can create localized cold spots that freeze nearby pipes. Inspect your basement,
        crawl space, and exterior walls for any gaps or cracks that allow cold air in, and seal them with
        caulk, expanding foam, or weatherstripping. Pay special attention to areas where pipes enter the
        home from outside and to the rim joist area in the basement, which is a common source of cold air
        infiltration.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Know How to Prevent Freezing During Extreme Cold</h4>
      <p className="mb-6">
        During extreme cold snaps when temperatures drop well below freezing for extended periods, take
        additional precautions. Open cabinet doors under sinks on exterior walls to let warm air circulate
        around the pipes. Let faucets served by exposed pipes drip slightly — the continuous flow of water,
        even at a trickle, helps prevent freezing. Keep your thermostat set to at least 55 degrees
        Fahrenheit, even when you&#39;re away from home or sleeping. If you&#39;re leaving for an extended
        trip during winter, consider shutting off your main water supply and draining the system to eliminate
        the risk of a burst pipe while you&#39;re gone.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Water Heater Maintenance</h3>

      <p className="mb-6">
        Your water heater works harder during the cold months because incoming water from the supply line is
        significantly colder, requiring more energy to heat it to the desired temperature. Fall is the ideal
        time to perform water heater maintenance to ensure it&#39;s ready for the increased demand.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Flush the tank:</strong> Sediment accumulates at the bottom of tank water heaters over
          time, reducing efficiency and capacity. Drain two to three gallons from the tank&#39;s drain valve
          to flush out sediment, or perform a full tank flush if it hasn&#39;t been done in over a year.</li>
        <li><strong>Check the temperature setting:</strong> The recommended setting is 120 degrees Fahrenheit.
          Higher settings waste energy and increase the risk of scalding, while lower settings may not
          provide adequate hot water during winter.</li>
        <li><strong>Inspect the anode rod:</strong> The sacrificial anode rod protects the tank from
          corrosion. If it&#39;s heavily corroded or less than half an inch in diameter, it should be
          replaced to extend the life of your water heater.</li>
        <li><strong>Test the pressure relief valve:</strong> Lift the lever on the temperature and pressure
          (T&amp;P) relief valve and let it snap back. You should hear a gurgle of water being released into
          the drain tube. If the valve doesn&#39;t operate smoothly, it needs to be replaced.</li>
        <li><strong>Insulate the tank and pipes:</strong> If your water heater is in an unheated space,
          adding an insulation blanket to the tank and insulating the hot water pipes can reduce heat loss
          and save energy.</li>
      </ul>

      <p className="mb-6">
        If your water heater is more than 10 years old and showing signs of reduced performance, fall is a
        smart time to consider a&nbsp;
        <Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">water heater replacement</Link>
        &nbsp;before the peak demand season hits. A new, energy-efficient water heater will provide better
        performance and lower utility bills throughout the winter.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Thermostat and Heating Considerations</h3>

      <p className="mb-6">
        Your home&#39;s heating system plays a direct role in plumbing protection. Maintaining a consistent
        indoor temperature helps keep pipes warm and prevents freezing, even in the coldest weather.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Set your thermostat to no lower than 55 degrees Fahrenheit at all times, even when the house
          is unoccupied.</li>
        <li>Avoid drastic temperature swings between day and night settings — keep the temperature
          relatively stable.</li>
        <li>Ensure heating vents are not blocked by furniture or stored items in areas near plumbing.</li>
        <li>If you have a programmable thermostat, verify that the schedule is set for winter conditions
          and that the battery backup is working.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Emergency Preparedness</h3>

      <p className="mb-6">
        Despite your best efforts, emergencies can still happen. Make sure every member of your household
        knows where the main water shutoff valve is located and how to turn it off. In the event of a burst
        pipe, shutting off the water immediately can prevent thousands of dollars in water damage. Keep the
        phone number of a reliable plumber easily accessible so you can get emergency help quickly if needed.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Create a simple fall plumbing checklist and walk through it every year
          before the first freeze. Include disconnecting hoses, shutting off outdoor water, insulating
          pipes, flushing the water heater, and testing your sump pump. A consistent annual routine takes
          the guesswork out of winter preparation and ensures nothing gets overlooked.
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
