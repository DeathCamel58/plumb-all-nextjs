import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaCheckCircle, FaWater, FaExclamationTriangle, FaShieldAlt, FaClock, FaClipboardCheck, FaBell, FaSmog, FaToilet, FaPhoneAlt, FaQuestion } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import SepticServiceAreas from "@/components/SepticServiceAreas";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HeroImage from '../../../../public/images/septic-system-overview.webp';

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
      <FAQSchema
        faqs={[
          { question: "My septic alarm is going off. What should I do?", answer: "Cut back on water use (hold off on laundry, the dishwasher, and long showers) and call us. The alarm usually means the water level in the tank or pump chamber is too high, often from a failed pump, a stuck float, or a clog. Waiting it out can lead to a sewage backup." },
          { question: "Can a failing drain field be repaired?", answer: "Sometimes. It depends on what caused it. We inspect the system and tell you whether a repair will work or the field needs replacing, with an upfront price either way." },
          { question: "Do you offer financing for septic repairs?", answer: "Yes. Flexible financing is available through Wisetack on larger repairs and replacements." },
          { question: "What areas do you serve?", answer: "Plumb-All provides septic service across South Metro Atlanta, including Jonesboro, Fayetteville, Peachtree City, Tyrone, McDonough, Stockbridge, Hampton, Locust Grove, Griffin, and Newnan." },
        ]}
      />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Septic System"
        title="Septic Repair Near Me – Metro Atlanta"
        subtitle="Sewage backup, septic alarm, or soggy yard? Free estimates · Upfront pricing · Licensed & insured"
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Septic Problems We Fix */}
        <div className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Septic Problems We Fix</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaExclamationTriangle className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Sewage Backing Up</h3>
              <p className="text-sm md:text-base">Sewage coming up in tubs, showers, or floor drains.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaBell className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Septic Alarm Going Off</h3>
              <p className="text-sm md:text-base">High-water alarms, failed pumps, and stuck floats.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaWater className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Soggy Yard or Standing Water</h3>
              <p className="text-sm md:text-base">Wet ground or unusually green grass over the drain field.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaSmog className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Sewage Smell</h3>
              <p className="text-sm md:text-base">Odors in the house, in the yard, or near the tank.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaToilet className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Slow Drains & Gurgling</h3>
              <p className="text-sm md:text-base">Drains slowing down all over the house, or gurgling pipes.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaWrench className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Broken Lids, Baffles & Lines</h3>
              <p className="text-sm md:text-base">Damaged tank lids, baffles, distribution boxes, and lines.</p>
            </div>
          </div>
        </div>

        {/* Backup and Alarm Callout */}
        <div className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Sewage Backing Up or Alarm Going Off?</h2>
          <p className="mb-4 text-lg">Cut back on water use (hold off on laundry, the dishwasher, and long showers), then call us. A backup or high-water alarm means the tank or pump chamber can&#39;t drain, and waiting can put sewage in your home. Our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbers</Link> are available 24/7.</p>
          <a
            href="tel:+17709143877"
            className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold shadow"
          >
            <FaPhoneAlt className="inline-block mr-2" /> Call (770) 914-3877
          </a>
        </div>

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
                  src="/images/septic-system-overview.webp"
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

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Questions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">My septic alarm is going off. What should I do?</h3>
              <p>Cut back on water use (hold off on laundry, the dishwasher, and long showers) and call us. The alarm usually means the water level in the tank or pump chamber is too high, often from a failed pump, a stuck float, or a clog. Waiting it out can lead to a sewage backup.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can a failing drain field be repaired?</h3>
              <p>Sometimes. It depends on what caused it. We inspect the system and tell you whether a repair will work or the field needs replacing, with an upfront price either way.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer financing for septic repairs?</h3>
              <p>Yes. <Link href="/financing" className="text-theme-3 hover:underline">Flexible financing</Link> is available through Wisetack on larger repairs and replacements.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
              <p>Plumb-All provides septic service across South Metro Atlanta, including Jonesboro, Fayetteville, Peachtree City, Tyrone, McDonough, Stockbridge, Hampton, Locust Grove, Griffin, and Newnan.</p>
            </div>
          </div>
        </div>

        {/* Financing */}
        <div className="w-full mb-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg">
            Septic repair can be a significant investment. <Link href="/financing" className="text-theme-3 hover:underline font-semibold">Flexible financing options</Link> are available to help make your project affordable.
          </p>
        </div>

        {/* Septic Service Areas */}
        <SepticServiceAreas />

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
