import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'why-your-water-pressure-is-low';
export const metadata = {
  slug: slug,
  title: 'Why Your Water Pressure is Low and How to Fix It',
  date: '2025-09-08',
  excerpt: 'Struggling with low water pressure in your home? There are several common causes - and many have simple fixes. Find out how here!',
  image: '/images/running-faucet.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Why Your Water Pressure is Low and How to Fix It</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>Did you know?</strong> Turning on a faucet or shower only to be met with a weak, dribbling stream is
          frustrating. Washing dishes, rinsing soap, or taking a quick shower shouldn&#39;t take forever. The good news?
          Low water pressure almost always has a clear cause, and many issues are easy to fix.
        </p>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Here&#39;s a breakdown of common causes and how to resolve them.
      </p>

      <h3 className="text-2xl font-semibold mb-6">Common Causes of Low Water Pressure</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">🧱</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Debris and Mineral Buildup</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Over time, pipes and fixtures can accumulate dirt, rust, and mineral deposits, restricting water flow.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">💧</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Leaks in Pipes or Fixtures</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Even small leaks can reduce water pressure throughout your home.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">🔧</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Faulty or Partially Closed Valves</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Main shut-off valves or plumbing system valves that aren&#39;t fully open can limit water flow.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">🚰</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Narrowed or Corroded Pipes</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Older pipes, especially galvanized steel, can corrode, restricting water movement.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">🔍</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Clogged Faucet Aerators</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Aerators catch debris and minerals, which can reduce pressure if not cleaned regularly.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">⏰</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Peak Water Use Times</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            High demand in your neighborhood can temporarily lower water pressure.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">🏢</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Problems with Local Water Supply</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Sometimes the issue is with the municipal supply, not your home plumbing.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-6">How to Diagnose Low Water Pressure</h3>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-theme-3 rounded-full flex items-center justify-center mr-4 shadow-md">
            <span className="text-white text-xl">🔍</span>
          </div>
          <h4 className="text-2xl font-bold text-gray-800">Diagnostic Steps</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">1</span>
              <h5 className="font-semibold text-gray-800">Check All Valves</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Make sure both individual plumbing valves and the main shut-off valve near the water meter are fully open.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">2</span>
              <h5 className="font-semibold text-gray-800">Measure Pressure</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Use a water pressure gauge to check. Normal home water pressure is 40–80 PSI.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">3</span>
              <h5 className="font-semibold text-gray-800">Inspect Faucets</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Remove and clean aerators to ensure they aren&#39;t clogged.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">4</span>
              <h5 className="font-semibold text-gray-800">Look for Leaks</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Check around pipes and fixtures. For hidden leaks, shut off all taps for two hours, then check the water
              meter. Any change could indicate a leak.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">5</span>
              <h5 className="font-semibold text-gray-800">Check Pressure Regulator</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Malfunctioning pressure regulators can cause high or low pressure.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">6</span>
              <h5 className="font-semibold text-gray-800">Call the Water Company</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Verify whether there are issues in your local water supply.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 md:col-span-2">
            <div className="flex items-center mb-2">
              <span className="w-6 h-6 bg-theme-3 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">7</span>
              <h5 className="font-semibold text-gray-800">Inspect Pipes</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              If the above steps don&#39;t solve the issue, professional plumbers can check for corrosion, mineral buildup,
              or hidden leaks.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-6">How to Fix Low Water Pressure</h3>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200 shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-theme-3 rounded-full flex items-center justify-center mr-4 shadow-md">
            <span className="text-white text-xl">🔧</span>
          </div>
          <h4 className="text-2xl font-bold text-gray-800">Solution Methods</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">⚡</span>
              </div>
              <h5 className="font-bold text-gray-800">Open All Valves</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ensure every plumbing valve in your home is fully open. Often, this simple step restores proper pressure.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🧽</span>
              </div>
              <h5 className="font-bold text-gray-800">Clean or Replace Aerators</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Remove mineral deposits and debris from faucet aerators. If cleaning doesn&#39;t help, replacing them or the
              faucet may be necessary.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🚿</span>
              </div>
              <h5 className="font-bold text-gray-800">Clear Pipe Clogs</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Professional plumbers can flush pipes to remove mineral deposits and debris that restrict water flow.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🔄</span>
              </div>
              <h5 className="font-bold text-gray-800">Replace Corroded Pipes</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Galvanized steel, brass, and copper pipes can corrode over time. Plumbers can either clean or replace
              pipes depending on their condition.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🔒</span>
              </div>
              <h5 className="font-bold text-gray-800">Seal Leaks</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Even minor leaks can impact water pressure. Video inspection can help locate hidden leaks for repair or
              pipe replacement.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-theme-3 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">⚙️</span>
              </div>
              <h5 className="font-bold text-gray-800">Replace Pressure Regulator</h5>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pressure regulators control your water flow. Malfunctioning regulators can lead to high or low water
              pressure and should be serviced by professionals.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">When to Call a Plumber</h3>

      <div className="bg-red-50 p-5 rounded-lg mb-6 border border-red-200">
        <h4 className="text-xl font-semibold mb-4 text-red-800">📞 Professional Help Needed</h4>
        <p className="text-gray-700 mb-4">Call a professional if:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>You cannot identify the cause of low water pressure.</li>
          <li>Significant leaks or pipe damage are present.</li>
          <li>You need a pressure regulator replaced.</li>
          <li>Pipes require professional cleaning or replacement.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Low water pressure can have multiple causes, and diagnosing the exact reason often requires a professional eye.
          A licensed plumber ensures your system is safe, efficient, and running at the proper pressure.
        </p>
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
