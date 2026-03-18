import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaCheckCircle, FaWater, FaExclamationTriangle, FaShieldAlt, FaClock, FaClipboardCheck } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import HeroImage from '../../../../public/images/septic-system-overview.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Septic Repair Near Me – Metro Atlanta';
  const description = 'Need septic repair in Metro Atlanta? Plumb-All specializes in drain field repair, septic system installation, and alternative septic solutions. Licensed technicians, upfront pricing. Call today.';
  const ogImageUrl = 'og-septic-repair-septic-system-overview';
  const path = '/services/septic-repair';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function SepticRepair() {
  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Septic Repair"
        description="Expert septic repair services in Metro Atlanta."
        url="/services/septic-repair"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Septic Repair", url: "/services/septic-repair" },
        ]}
      />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Septic System"
        title="Septic Repair Near Me – Metro Atlanta"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Septic Repair Services in Metro Atlanta</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Septic problems don&#39;t wait — and neither should you. Plumb-All&#39;s licensed technicians diagnose and repair septic system issues across Metro Atlanta, from drain field failures to damaged tanks and beyond.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            We offer free estimates, upfront pricing, and fast scheduling so you can get your system back to normal quickly.
          </p>
        </div>

        {/* Signs You Need Repair */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Signs Your Septic System Needs Repair</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Common Warning Signs</h3>
              <p className="text-lg mb-4">
                If you&#39;re experiencing any of these, your septic system may need professional repair:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Sewage backing up into your home or building</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Persistent foul odors near the tank or drain field</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Standing water or saturated ground around the septic area</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Unusually green or lush grass over the drain field</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Slow drains or gurgling throughout the house</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Alarm box going off?</h3>
              <p className="text-lg mb-4">
                A septic alarm means your system needs immediate attention. Don&#39;t wait — delays can cause sewage backups and property damage. Visit our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency services</Link> page for more information.
              </p>
              <p className="text-lg mb-4">
                Call us right away. Our technicians will respond quickly to diagnose the issue and get your system working again.
              </p>
              <div className="mt-4">
                <CTACall
                  headerText="Septic emergency? Call now."
                  buttonText="Call us at 844 PLUMB-ALL"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Plumb-All */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClock className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
              <p>Quick scheduling for septic repairs across Metro Atlanta.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p>Fully licensed, insured, and serving Metro Atlanta since 2003.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upfront Pricing</h3>
              <p>Free estimates with no hidden fees. You approve the price before we start.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">Need Septic Repair?</h2>
          <p className="text-lg mb-6">
            Get a free estimate for your septic repair. We&#39;ll diagnose the problem and give you a clear, upfront price.
          </p>
          <CTACall
            headerText="Contact us today for expert septic repair"
            buttonText="Call us at 844 PLUMB-ALL"
          />
          <p className="text-center mt-4">
            Or <Link href="/contact" className="text-theme-3 hover:underline">request a quote online</Link>
          </p>
        </div>

        {/* Drain Field Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Drain Field Repair & Installation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="mb-6">
                Drain fields (also known as leach fields) are a critical part of your septic system. When they fail, wastewater can&#39;t be properly treated and disposed of — leading to backups, contamination, and costly property damage.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaWrench className="text-theme-3 mr-2" />
                  What We Repair & Install
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Failed or saturated drain fields</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Damaged or collapsed septic tanks</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Broken distribution boxes and baffles</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>New drain field installation</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                    <span>Complete septic system replacement</span>
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
                  Our Repair Process
                </h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Thorough inspection to identify the root cause</li>
                  <li>Clear diagnosis and upfront repair estimate</li>
                  <li>Professional repair by licensed technicians</li>
                  <li>Final testing to confirm everything is working</li>
                  <li>Maintenance recommendations to prevent future issues — including <Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">routine septic pumping</Link></li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* New Installation */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Need a New Septic System?</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-4">
              Sometimes a repair isn&#39;t enough. If your system is beyond repair or you&#39;re building new, we install complete septic systems — including <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic systems</Link> like the <Link href="/services/eljen-septic" className="text-theme-3 hover:underline">Eljen GSF system</Link> for properties with challenging soil conditions.
            </p>
            <p className="text-lg">
              Our team handles everything from soil analysis and permitting to installation and final inspection, ensuring your new system meets all local codes and is built to last.
            </p>
          </div>
        </div>

        {/* Financing */}
        <div className="w-full mb-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg">
            Septic repair can be a significant investment. <Link href="/financing" className="text-theme-3 hover:underline font-semibold">Flexible financing options</Link> are available to help make your project affordable.
          </p>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready for Expert Septic Repair?</h2>
          <p className="text-lg mb-6">
            Contact Plumb-All today to discuss your septic repair or installation needs. You can also read our overview of <Link href="/news/article/septic-systems" className="text-theme-3 hover:underline">how septic systems work</Link> to better understand your options. Free estimates, no obligation.
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
  );
}
