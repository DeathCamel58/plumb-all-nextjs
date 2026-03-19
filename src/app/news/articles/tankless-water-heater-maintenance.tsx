import React from 'react';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";

// Article metadata
const slug = 'tankless-water-heater-maintenance';
export const metadata = {
  slug: slug,
  title: 'Tankless Water Heater Maintenance Tips',
  date: '2024-11-20',
  excerpt: 'Keep your tankless water heater running efficiently with these essential maintenance tips, including descaling, filter cleaning, and annual service schedules.',
  image: '/images/tankless-water-heaters.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Tankless Water Heater Maintenance Tips</h2>

      <p className="mb-6">
        Tankless water heaters have gained popularity for good reason — they provide hot water on demand,
        take up far less space than traditional tank units, and can last 20 years or more with proper care.
        However, &quot;with proper care&quot; is the key phrase. Many homeowners assume that because tankless
        water heaters don&#39;t have a large tank of standing water, they require no maintenance. This is a
        common misconception that can lead to reduced performance, higher energy bills, and a shortened
        lifespan. Regular maintenance keeps your tankless water heater running at peak efficiency and helps
        you avoid costly repairs down the road.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Why Maintenance Matters</h3>

      <p className="mb-6">
        Even though tankless water heaters don&#39;t store water, they still face challenges from the water
        passing through them. The biggest enemy is mineral scale buildup, particularly in areas with hard
        water. As water is heated inside the unit&#39;s heat exchanger, dissolved calcium and magnesium
        precipitate out and form a crusty layer of scale on the heat exchanger surfaces. This scale acts as
        an insulator, forcing the unit to work harder to heat the water. Over time, scale buildup reduces
        efficiency, decreases flow rate, and can eventually damage the heat exchanger — the most expensive
        component of the unit.
      </p>

      <p className="mb-6">
        Most manufacturers require regular maintenance to keep the warranty valid. If a heat exchanger fails
        and the manufacturer determines that the unit was not maintained according to their specifications,
        the warranty claim may be denied. Routine maintenance is a small investment that protects a much
        larger one.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Descaling: The Most Important Maintenance Task</h3>

      <p className="mb-6">
        Descaling (also called flushing or deliming) is the process of circulating an acidic solution through
        the heat exchanger to dissolve mineral scale deposits. This is the single most important maintenance
        task for a tankless water heater.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">How Often to Descale</h4>
      <p className="mb-6">
        The frequency of descaling depends primarily on your water hardness. In areas with moderately hard
        water (7-10 grains per gallon), annual descaling is typically sufficient. In areas with very hard
        water (above 10 grains per gallon), descaling every six months may be necessary. If your home has a
        water softener, you may be able to extend the interval to every 18 to 24 months. Some modern tankless
        units have built-in error codes that alert you when scale buildup is affecting performance, which is
        a helpful indicator that descaling is overdue.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">The Descaling Process</h4>
      <p className="mb-6">
        Professional descaling involves connecting a small submersible pump and a bucket of descaling solution
        (typically food-grade white vinegar or a commercial descaling product) to the unit&#39;s isolation
        valves. The pump circulates the solution through the heat exchanger for 45 minutes to an hour,
        dissolving the accumulated scale. The system is then flushed with clean water to remove any remaining
        solution and loosened deposits. While some handy homeowners perform this task themselves using a
        descaling kit, many prefer to have a professional handle it to ensure it&#39;s done thoroughly and
        correctly. If you&#39;re considering a new tankless unit or need service on your current one,
        our&nbsp;
        <Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">water heater services</Link>
        &nbsp;include both installation and ongoing maintenance.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Cleaning the Inlet Filter</h3>

      <p className="mb-6">
        Every tankless water heater has an inlet water filter (sometimes called a strainer or screen) that
        catches sediment and debris before they enter the unit. This filter is usually located at the cold
        water inlet connection and is easily accessible. Over time, the filter can become clogged with
        sediment, reducing water flow to the unit and potentially causing it to shut down or display an
        error code.
      </p>

      <p className="mb-6">
        Cleaning the inlet filter is a simple task that should be done every six months or whenever you
        notice a decrease in hot water flow. Turn off the cold water supply to the unit, remove the filter
        (usually by unscrewing a small fitting), rinse it under running water to remove debris, and reinstall
        it. If the filter is damaged or heavily corroded, replace it with a new one from the manufacturer.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Inspecting the Venting System</h3>

      <p className="mb-6">
        Gas-powered tankless water heaters require proper venting to safely exhaust combustion gases. The
        vent pipe should be inspected annually to ensure it is in good condition and free of obstructions.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Check for blockages:</strong> Bird nests, leaves, insect nests, or ice can obstruct the
          vent termination on the exterior of the home. A blocked vent can cause the unit to shut down
          for safety or, worse, allow carbon monoxide to back up into the home.</li>
        <li><strong>Inspect for damage:</strong> Look for cracks, corrosion, or disconnected sections in
          the vent pipe. Any damage that could allow combustion gases to leak into living spaces requires
          immediate repair.</li>
        <li><strong>Verify proper slope:</strong> Condensing tankless water heaters produce acidic
          condensate that must drain properly. The vent pipe should be sloped so that condensate flows
          toward the unit or an external drain point, not pooling in low spots.</li>
        <li><strong>Check clearances:</strong> Ensure the vent termination maintains the required clearances
          from windows, doors, and air intake openings as specified in the installation manual and local
          building codes.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Additional Maintenance Tasks</h3>

      <h4 className="text-xl font-bold mt-6 mb-3">Check the Condensate Drain</h4>
      <p className="mb-6">
        Condensing tankless water heaters produce condensate (slightly acidic water) as a byproduct of the
        high-efficiency combustion process. This condensate is typically routed to a floor drain or
        neutralizer. Check the condensate drain line periodically to ensure it is not clogged or blocked,
        and verify that the neutralizer cartridge (if installed) is not exhausted.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Test the Pressure Relief Valve</h4>
      <p className="mb-6">
        Like tank water heaters, most tankless units have a pressure relief valve as a safety feature. Test
        it annually by lifting the lever and verifying that water is discharged. If the valve is stuck or
        doesn&#39;t release water, it should be replaced immediately.
      </p>

      <h4 className="text-xl font-bold mt-6 mb-3">Monitor Error Codes</h4>
      <p className="mb-6">
        Modern tankless water heaters have digital displays or indicator lights that communicate error codes
        when something is wrong. Familiarize yourself with the common error codes for your specific model
        (found in the owner&#39;s manual) so you can quickly identify issues. Common codes relate to
        ignition failure, flame loss, exhaust blockage, and scale buildup. For a deeper dive into tankless
        water heater technology and selection, check out our&nbsp;
        <Link href="/news/article/guide-to-tankless-water-heaters" className="text-theme-3 hover:underline">guide to tankless water heaters</Link>.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Recommended Annual Service Schedule</h3>

      <p className="mb-6">
        To keep your tankless water heater in top condition, follow this annual maintenance schedule:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Every 6 months:</strong> Clean the inlet water filter. Descale if you have very hard
          water.</li>
        <li><strong>Annually:</strong> Perform a full descaling flush. Inspect the venting system. Test the
          pressure relief valve. Check the condensate drain (condensing models). Review any stored error
          codes. Clean the exterior and surrounding area of dust and debris.</li>
        <li><strong>Every 3-5 years:</strong> Have a professional perform a comprehensive inspection of all
          internal components, including the burner assembly, ignition system, and gas connections.</li>
      </ul>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Pro Tip:</strong> Install isolation valves (also called service valves) on both the hot and
          cold water lines to your tankless water heater if they aren&#39;t already installed. These valves
          make descaling dramatically easier because you can connect the flushing pump directly to them
          without disturbing any other plumbing connections. Many newer installations include these valves
          by default, but older installations may not.
        </p>
      </div>

      <div className="bg-theme-4/10 p-6 rounded-lg mt-10 mb-8">
        <CTACall
          headerText="Need tankless water heater maintenance? We've got you covered!"
          buttonText="Call us at 844 PLUMB-ALL"
        />
      </div>
    </article>
  );
}
