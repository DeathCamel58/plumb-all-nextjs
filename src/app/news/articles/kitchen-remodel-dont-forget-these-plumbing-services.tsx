import React from 'react';
import CTACall from "@/components/cta/CTACall";

// Article metadata
const slug = 'kitchen-remodel-dont-forget-these-plumbing-services';
export const metadata = {
  slug: slug,
  title: 'Kitchen Remodel? Don’t Forget These Plumbing Services',
  date: '2025-09-01',
  excerpt: 'Planning a kitchen remodel? Don’t overlook your plumbing! From sink and dishwasher installation to rerouting water and gas lines, these essential services ensure your renovation runs smoothly. Learn what to plan for and why involving a professional plumber early can save time, money, and stress.',
  image: '/images/running-faucet.jpg',
  path: `/news/article/${slug}`
};

// Article content component
export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Kitchen Remodel? Don’t Forget These Plumbing Services</h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>💡 Planning Tip:</strong> Kitchen remodels that involve plumbing changes require careful coordination
          between contractors. Starting with a plumbing consultation can prevent costly delays and ensure your dream
          kitchen becomes a reality without surprises.
        </p>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Thinking about remodeling your kitchen? Whether you&#39;re upgrading appliances, changing fixtures, or
        relocating your sink, a kitchen remodel is an exciting opportunity to create your dream space. But before you
        start tearing down cabinets or moving countertops, it&#39;s important to plan your plumbing. Connecting with a
        professional plumber early in the process can save you time, money, and headaches later on.
      </p>

      <div className="bg-green-50 p-5 rounded-lg mb-6 border border-green-200">
        <h3 className="text-xl font-semibold mb-3 text-green-800">🔧 Essential Plumbing Services for Kitchen
          Remodels</h3>
        <p className="text-gray-700">
          Here are two critical plumbing services you should consider during your kitchen renovation:
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. 🚰 Sink and Dishwasher Installation</h2>

      <div className="bg-yellow-50 p-5 rounded-lg mb-6 border border-yellow-200">
        <h4 className="text-xl font-semibold mb-4 text-yellow-800">⚠️ Moving vs. Keeping in Place</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-yellow-700 mb-2">Moving Location</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Requires major plumbing work</li>
              <li>New hot and cold water lines</li>
              <li>Waste-pipe rerouting needed</li>
              <li>Higher installation costs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-green-700 mb-2">Same Location</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Simpler installation process</li>
              <li>Lower cost investment</li>
              <li>Existing connections work</li>
              <li>Faster completion time</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mb-6">
        If you plan to move your sink or dishwasher, it&#39;s not as simple as just setting them in a new spot. Major
        plumbing work is often required. Both appliances need proper access to hot and cold water as well as waste-pipe
        connections. Since dishwashers typically connect through the sink&#39;s plumbing, they are best installed right
        next to the sink.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700">
          <strong>💡 Pro Tip:</strong> When shopping for a new sink, consider modern features like pull-out sprayers,
          built-in soap dispensers, and stainless steel garbage disposals to enhance both function and style in your new
          kitchen.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. 🔧 Plumbing and Gas Pipe Reroute</h2>

      <div className="bg-red-50 p-5 rounded-lg mb-6 border border-red-200">
        <h4 className="text-xl font-semibold mb-4 text-red-800">🚨 Safety First: Professional Installation Required</h4>
        <p className="text-gray-700 mb-4">
          When relocating appliances or fixtures, your plumbing layout will need a complete overhaul. This complex work
          involves multiple systems that require professional expertise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">💧</div>
            <h5 className="font-semibold text-red-700 mb-1">Water Supply Lines</h5>
            <p className="text-sm text-gray-600">Hot and cold water routing</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚿</div>
            <h5 className="font-semibold text-red-700 mb-1">Drain Lines</h5>
            <p className="text-sm text-gray-600">Waste water removal</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔥</div>
            <h5 className="font-semibold text-red-700 mb-1">Gas Pipes</h5>
            <p className="text-sm text-gray-600">Safe appliance connections</p>
          </div>
        </div>
        <p className="text-gray-700 mt-4">
          Hiring a professional plumber ensures this work is done safely and efficiently, avoiding potential leaks, code
          violations, or damage to your home.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">📋 Plan Ahead for a Smooth Remodel</h2>

      <div className="bg-green-50 p-5 rounded-lg mb-6 border border-green-200">
        <h4 className="text-xl font-semibold mb-4 text-green-800">✅ Benefits of Early Plumbing Consultation</h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span className="text-gray-700"><strong>Expert Plan Evaluation:</strong> Professional assessment of your renovation plans</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span className="text-gray-700"><strong>Cost-Effective Solutions:</strong> Identify the most efficient ways to update your kitchen</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span className="text-gray-700"><strong>Smooth Project Flow:</strong> Prevent delays and coordination issues</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span
              className="text-gray-700"><strong>Time & Money Savings:</strong> Avoid costly mistakes and rework</span>
          </div>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Consulting a plumbing professional early in your renovation is key. They can evaluate your plans, provide expert
        recommendations, and help determine the most effective and cost-efficient ways to update your kitchen. By
        involving a plumber from the start, your remodel will proceed more smoothly, saving you time, stress, and money
        in the long run.
      </p>

      <div className="bg-theme-3/10 p-5 rounded-lg mb-6 border-l-4 border-theme-3">
        <p className="font-medium text-gray-700 text-center">
          <strong>🏠 Ready to tackle your kitchen remodel?</strong> Contact your local plumbing expert today to discuss
          installation and rerouting options that will make your dream kitchen a reality.
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
