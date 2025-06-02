import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import { FaWrench, FaTools, FaCheckCircle, FaHome, FaLeaf, FaStar, FaQuestion } from 'react-icons/fa';
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Eljen Septic';
  const description = 'Many plumbers are stumped when it comes to Eljen Septic systems. Here at Plumb-All, we hold certifications to show that we can work on these.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-eljen-septic-septic-system-overview.png';

  const env = process.env.NODE_ENV;

  return {
    metadataBase: env === 'production' ? new URL('https://plumb-all.com') : new URL('http://127.0.0.1:3000'),
    title: finalTitle,
    description: description,
    icons: {
      icon: '/logo/icon.png'
    },
    openGraph: {
      title: finalTitle,
      description: description,
      url: `/services/eljen-septic`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Plumb-All Logo'
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: description,
      images: [ogImageUrl],
      site: '@PlumbAll'
    }
  };
}

export default function EljenSeptic() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/septic-system-overview.jpg"
          alt="Eljen GSF Septic System"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Eljen GSF Septic Systems</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Advanced Eljen GSF Septic Solutions</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Looking for an innovative septic solution for challenging soil conditions? Plumb-All specializes in Eljen Geotextile Sand Filter (GSF) systems, a revolutionary alternative to traditional septic systems that provides superior treatment in difficult soil environments.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Our expert team is certified to install and maintain these advanced systems, helping homeowners overcome property limitations and achieve reliable, environmentally-friendly wastewater treatment.
          </p>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Ready for an Advanced Septic Solution?</h2>
              <p className="text-center mb-6">
                Don&#39;t let challenging soil conditions limit your property options. Our Eljen GSF specialists are ready to help you find the perfect septic solution.
              </p>
              <CTACall
                headerText="Contact us today for expert Eljen GSF installation"
                buttonText="Call us at 844 PLUMB-ALL"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/septic-system-overview.jpg"
                alt="Eljen GSF Septic System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Eljen GSF Benefits */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaStar className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Benefits of Eljen GSF Systems</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaHome className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Property Advantages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Works in difficult soil conditions where traditional systems fail</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Requires less space than conventional drain fields</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Extends the life of your septic system</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Prevents costly property limitations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Eliminates the need for expensive municipal sewage connections</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaLeaf className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Environmental Benefits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Superior wastewater treatment and filtration</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Reduces environmental impact compared to traditional systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Provides nutrient-rich water to surrounding soil</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Helps maintain healthier groundwater</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Sustainable long-term wastewater solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Eljen GSF Works */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">How Eljen GSF Systems Work</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Eljen GSF (Geotextile Sand Filter) systems use an innovative approach to wastewater treatment that combines traditional septic principles with advanced filtration technology:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Wastewater flows from your home to the septic tank where solids settle</li>
              <li>Partially treated effluent moves to the GSF modules</li>
              <li>The GSF modules contain geotextile fabric and sand that provide superior filtration</li>
              <li>Beneficial bacteria develop on the geotextile fabric, providing biological treatment</li>
              <li>The sand filter provides final polishing before the treated water returns to the soil</li>
            </ol>
            <p className="mb-4">
              This multi-stage process ensures thorough treatment even in challenging soil conditions, making it an ideal solution for properties with high groundwater, clay soils, or limited space.
            </p>
          </div>
        </div>

        {/* Our Installation Process */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Eljen GSF Installation Process</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Our comprehensive installation process ensures your Eljen GSF system performs optimally for years to come:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">1. Site Assessment</h3>
                <p>We thoroughly evaluate your property&#39;s soil conditions, topography, and space constraints to determine the ideal system configuration.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">2. Custom Design</h3>
                <p>Our engineers create a tailored Eljen GSF system design specifically for your property&#39;s unique requirements.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">3. Professional Installation</h3>
                <p>Our certified technicians install your system with precision, ensuring all components work together seamlessly.</p>
              </div>
            </div>
            <p>
              After installation, we provide comprehensive maintenance guidance and ongoing support to ensure your system continues to perform at its best.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long do Eljen GSF systems last?</h3>
              <p>With proper maintenance, Eljen GSF systems typically last 25-30 years, often outlasting traditional septic systems in challenging soil conditions.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are Eljen GSF systems approved in Georgia?</h3>
              <p>Yes, Eljen GSF systems are approved for use throughout Georgia and meet all state regulatory requirements for advanced septic treatment.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do Eljen systems require special maintenance?</h3>
              <p>While Eljen systems are designed for reliability, we recommend regular inspections and maintenance to ensure optimal performance and longevity.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How much space do Eljen GSF systems require?</h3>
              <p>Eljen GSF systems typically require 50-60% less space than conventional drain fields, making them ideal for properties with limited available area.</p>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Solve Your Septic Challenges?</h2>
          <p className="text-lg mb-6">
            Contact Plumb-All today to learn how an Eljen GSF system can provide the perfect septic solution for your property.
          </p>
          <CTACall
            headerText="Schedule your free consultation"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
