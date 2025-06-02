import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaCheckCircle, FaWater, FaLeaf, FaRecycle, FaShieldAlt } from 'react-icons/fa';
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Septic Repair';
  const description = 'Septic drain fields are essentially eco-friendly drains for your septic system. They connect to your septic tank, and allow water to seep out into your yard.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-septic-repair-septic-system-overview.png';

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
      url: `/services/septic-repair`,
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

export default function SepticRepair() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/septic-system-overview.jpg"
          alt="Septic System"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Septic Repair</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Septic Repair & Installation Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Plumb-All provides comprehensive septic system solutions, specializing in drain field repair and installation.
            Our expert team delivers reliable, long-lasting septic services tailored to your property&#39;s unique needs.
          </p>
        </div>

        {/* Drain Field Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Septic Drain Field Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="mb-6">
                Septic drain fields (also known as leach fields or leach drains) are sophisticated wastewater distribution systems that work with your septic tank to properly treat and dispose of household wastewater. These environmentally-friendly systems allow treated water to naturally filter into the surrounding soil.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaLeaf className="text-theme-3 mr-2" />
                  Benefits of Properly Functioning Drain Fields
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Provides nutrient-rich water to your landscape</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Reduces load on your septic tank, extending system lifespan</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Decreases environmental impact compared to municipal systems</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Promotes healthier, greener yard vegetation</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Extends time between septic tank pumping services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src="/images/septic-system-overview.jpg"
                  alt="Septic System Diagram"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaTools className="text-theme-3 mr-2" />
                  Our Installation Process
                </h3>
                <p className="mb-4">
                  Our comprehensive drain field installation process includes:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Thorough soil analysis to determine optimal system design</li>
                  <li>Custom engineering solutions for your specific property</li>
                  <li>Precision installation by certified technicians</li>
                  <li>Quality materials that exceed code requirements</li>
                  <li>Final inspection and system testing</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center mb-16">
            <CTACall
              headerText="Ready to solve your septic system challenges?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>

          {/* Septic Installation Section */}
          <div className="w-full mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaWrench className="text-2xl" />
              </div>
              <h2 className="text-3xl font-semibold">Professional Septic Installation</h2>
            </div>

            <p className="mb-8">
              When you need a new septic system installed, our professional team delivers solutions that exceed code requirements and provide long-term reliability. We focus on quality workmanship and proper installation techniques to prevent future problems and extend system lifespan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaShieldAlt className="text-theme-3 mr-2" />
                  Alternative Septic Solutions
                </h3>
                <p className="mb-6">
                  We specialize in installing and repairing <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic systems</Link> designed for challenging soil conditions. These innovative systems have helped countless homeowners:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Overcome property limitations that prevent conventional systems</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Avoid costly municipal sewage connection fees</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Maintain property value with reliable wastewater solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaRecycle className="text-theme-3 mr-2" />
                  Advanced Wastewater Management
                </h3>
                <p className="mb-4">
                  Our certified technicians are trained to plan, install, and service a variety of alternative wastewater management systems, including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Aerobic Treatment Systems</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Mound Systems</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Drip Emitter Systems</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Evaporation & Absorption Systems</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span><Link href="/services" className="text-theme-3 hover:underline">And More</Link></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready for Expert Septic Solutions?</h2>
            <p className="text-lg mb-6">
              Contact Plumb-All today to discuss your septic repair or installation needs.
            </p>
            <CTACall
              buttonText="Call us at 844 PLUMB-ALL"
            />
            <p className="text-center mt-4">
              Or <Link href="/contact" className="text-theme-3 hover:underline">contact us online</Link> to schedule a consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
