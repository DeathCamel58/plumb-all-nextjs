import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaCheckCircle, FaHandshake, FaTools, FaWrench, FaShieldAlt, FaMoneyBillWave, FaCalendarCheck } from 'react-icons/fa';
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Plumbing Service Agreement';
  const description = 'Our ongoing plumbing service agreement keeps you better protected from costly and damaging plumbing emergencies with regular inspections and maintenance.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/api/og?title=news&image=/images/spraying-pipe.jpg';

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
      url: `/services/plumbing-service-agreement`,
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

export default function PlumbingServiceAgreement() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/spraying-pipe.jpg"
          alt="Plumbing Service Agreement"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Plumbing Service Agreement</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="w-full mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Professional Plumbing Service Agreements</h1>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            At Plumb-All, we believe in proactive maintenance to keep your plumbing systems running smoothly and efficiently. Our comprehensive service agreements provide peace of mind and significant cost savings for homeowners and businesses throughout Metro Atlanta.
          </p>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Protect Your Plumbing Investment</h2>
              <p className="text-center mb-6">
                Don&#39;t wait for emergencies to occur. Our service agreements provide regular maintenance and priority service when you need it most.
              </p>
              <CTACall
                headerText="Contact us today to set up your plumbing service agreement"
                buttonText="Call us at 844 PLUMB-ALL"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/water-heater-wrench.jpg"
                alt="Professional Plumber"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Agreement Overview */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Service Agreement Commitment</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4 text-lg">
              Our commitment to providing exceptional customer service is reflected in our ongoing customer service agreement. With emergency service available 24/7, 365 days a year through our emergency answering service and stand-by technicians, we strive to ensure that your system is always in good repair and operating condition.
            </p>

            <p className="mb-4 text-lg">
              Our plumbing contracts are designed to provide regular preventative maintenance to keep your plumbing and septic systems functioning at their best and to detect potential issues before they become costly problems.
            </p>

            <p className="text-lg">
              One of our most popular service contracts is for interval-based <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link>, which effectively clears grime buildup in field lines, prevents septic system or grease trap backups, and extends the lifespan of your septic system.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaMoneyBillWave className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Valuable Benefits of Our Service Agreements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaCheckCircle className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Cost Savings</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Lower utility bills through efficient system operation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Conserve water with properly functioning fixtures</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Extended fixture life through regular maintenance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Inflation protection with locked-in service rates</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>15% discount on all parts and labor</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaHandshake className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Premium Service</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Priority customer service - front of the line</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Transferable agreement when selling your home</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>24-hour <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency service</Link> availability</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>No overtime rates year-round</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Regular scheduled maintenance visits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mid-page Call to Action */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Save Money and Prevent Plumbing Emergencies?</h2>
          <p className="text-center mb-6">
            Our service agreements provide peace of mind and significant cost savings over time.
          </p>
          <CTACall
            headerText="Contact us to learn more about our service agreement options"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Common Services Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Comprehensive Maintenance Services</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-6 text-lg">
              Our service agreement includes a thorough inspection and maintenance of your entire plumbing system. During each scheduled visit, our professional technicians will perform any of the following services:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaWrench className="text-theme-3 mr-2" />
                  Fixture Maintenance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Clean and check faucet aerators</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Tighten and lubricate shut off pack nuts</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Clean and inspect shower valves</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Test diverter operation</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Test flush valve</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Test disposal operation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaWrench className="text-theme-3 mr-2" />
                  System Inspection
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Inspect for visible water line leaks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Inspect drain lines for visible leaks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Inspect sink supplies and drains</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Tag main water shut off</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Inspect pressure relief valve</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Check pressure reducing valve PSI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaWrench className="text-theme-3 mr-2" />
                  Appliance Checks
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Test dishwasher and connections</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Check all well pump motors</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Check water heater settings</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Inspect water heater flue draft</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Clean water heater burners and area</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaCalendarCheck className="text-theme-3 mr-2" />
                  Additional Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Inspect washer connections</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Pressure reducing valve location</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Detailed report of system condition</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Recommendations for improvements</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Water conservation tips</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Protect Your Home with Preventative Maintenance</h2>
          <p className="text-lg mb-6">
            Don&#39;t wait for plumbing emergencies to disrupt your life. Our service agreements provide peace of mind and significant cost savings over time.
          </p>
          <CTACall
            headerText="Ready to get started with a plumbing service agreement?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
          <p className="text-center mt-4">
            Or <Link href="/contact" className="text-theme-3 hover:underline">contact us online</Link> to schedule a consultation.
          </p>
        </div>
      </div>
    </div>
  );
}
