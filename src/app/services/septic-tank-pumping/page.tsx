import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaWater, FaCheckCircle, FaTools, FaExclamationTriangle, FaClipboardCheck, FaClock, FaShieldAlt, FaQuestion, FaBell, FaSmog, FaToilet, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import SepticServiceAreas from "@/components/SepticServiceAreas";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HeroImage from '../../../../public/images/septic-pumping.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Septic Tank Pumping Near Me – Metro Atlanta Septic Service';
  const description = 'Need septic tank pumping near you? Plumb-All provides professional septic service across Metro Atlanta — pumping, inspections, repairs & maintenance. Licensed & insured. Call (770) 914-3877.';
  const ogImageUrl = 'og-septic-tank-pumping-septic-pumping';
  const path = '/services/septic-tank-pumping';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function SepticTankPumping() {
  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Septic Tank Pumping"
        description="Professional septic tank pumping services in Metro Atlanta."
        url="/services/septic-tank-pumping"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Septic Tank Pumping", url: "/services/septic-tank-pumping" },
        ]}
      />
      <FAQSchema
        faqs={[
          { question: "How often should a septic tank be pumped?", answer: "Most septic tanks should be pumped every 3-5 years, depending on household size and usage. Larger families or homes with garbage disposals may need more frequent pumping." },
          { question: "What are signs my septic tank is full?", answer: "Common signs include slow drains throughout the house, gurgling sounds in pipes, sewage odors near the tank or drain field, and standing water or lush grass over the drain field." },
          { question: "How much does septic tank pumping cost?", answer: "The cost varies based on tank size and accessibility. Contact Plumb-All for a free estimate — we offer upfront pricing with no hidden fees." },
          { question: "My septic alarm is going off. What should I do?", answer: "Cut back on water use (hold off on laundry, the dishwasher, and long showers) and call us. The alarm usually means the water level in the tank or pump chamber is too high. A pumping often fixes it, and if the pump or float has failed, we repair that too." },
          { question: "What areas do you serve?", answer: "Plumb-All provides septic pumping across South Metro Atlanta, including Jonesboro, Fayetteville, Peachtree City, Tyrone, McDonough, Stockbridge, Hampton, Locust Grove, Griffin, and Newnan." },
        ]}
      />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Metro Atlanta Septic Service – Pump Hose"
        title="Septic Tank Pumping Near Me – Metro Atlanta"
        subtitle="Same-week scheduling · Free estimates · Upfront pricing · Licensed & insured"
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* When to Call */}
        <div className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">When to Call for Septic Pumping</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaCalendarCheck className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Due for Pumping</h3>
              <p className="text-sm md:text-base">It&#39;s been 3–5 years, or you&#39;re not sure when it was last pumped.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaToilet className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Slow Drains & Gurgling</h3>
              <p className="text-sm md:text-base">Drains slowing down all over the house, or gurgling pipes.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaSmog className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Sewage Smell</h3>
              <p className="text-sm md:text-base">Odors in the house, in the yard, or near the tank.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaWater className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Soggy Yard</h3>
              <p className="text-sm md:text-base">Standing water or unusually green grass over the drain field.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaBell className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Septic Alarm Going Off</h3>
              <p className="text-sm md:text-base">A high-water alarm on the tank or pump chamber.</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <FaExclamationTriangle className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-semibold mb-2">Sewage Backing Up</h3>
              <p className="text-sm md:text-base">Sewage coming up in tubs, showers, or floor drains.</p>
            </div>
          </div>
        </div>

        {/* Backup and Alarm Callout */}
        <div className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Sewage Backing Up or Alarm Going Off?</h2>
          <p className="mb-4 text-lg">Cut back on water use (hold off on laundry, the dishwasher, and long showers), then call us. Waiting can put sewage in your home. If your system needs more than pumping, we also handle <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair</Link>, and our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbers</Link> are available 24/7.</p>
          <a
            href="tel:+17709143877"
            className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold shadow"
          >
            <FaPhoneAlt className="inline-block mr-2" /> Call (770) 914-3877
          </a>
        </div>

        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Septic Service and Tank Pumping</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Whether your tank is overdue for pumping, you&#39;re noticing slow drains or odors, or you just want to stay ahead of problems — Plumb-All&#39;s licensed technicians provide fast, reliable septic tank pumping across Metro Atlanta.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            We serve homeowners, <Link href="/services/commercial" className="text-theme-3 hover:underline">businesses</Link>, and property managers with same-week scheduling, upfront pricing, and no surprise fees.
          </p>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Schedule Your Septic Pumping</h2>
              <p className="text-center mb-6">
                Don&#39;t wait for a backup. We offer free estimates and upfront pricing — you&#39;ll know the cost before we start.
              </p>
              <CTACall
                headerText="Contact us today for professional septic tank pumping"
                buttonText="Call us at 844 PLUMB-ALL"
              />
              <p className="text-center mt-2">
                Or <Link href="/contact" className="text-theme-3 hover:underline">request a quote online</Link>
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/septic-pumping.jpg"
                alt="Septic service in Metro Atlanta"
                fill
                className="object-cover"
              />
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
              <h3 className="text-lg font-semibold mb-2">Fast Scheduling</h3>
              <p>Same-week appointments available for most services across Metro Atlanta.</p>
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

        {/* Our Services Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">What&#39;s Included in Our Septic Pumping Service</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <p className="text-lg mb-4">
              Our septic tank pumping service goes beyond just emptying the tank. We follow a thorough process to ensure your system is in top shape:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">1. Inspection</h3>
                <p>We assess your tank&#39;s condition, check for damage, and measure sludge levels before pumping.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">2. Pumping & Cleaning</h3>
                <p>We pump out all solids and liquids using professional-grade equipment, then clean the tank interior.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">3. Report & Recommendations</h3>
                <p>We provide a summary of your system&#39;s health and recommendations for ongoing maintenance. Learn more in our guide on <Link href="/news/article/how-to-maintain-your-septic-system" className="text-theme-3 hover:underline">how to maintain your septic system</Link>.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits - condensed to 2 cards */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Benefits of Regular Septic Pumping</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaTools className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Prevents Costly Problems</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Prevents backups, odors, and system failures</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Reduces risk of drain field damage</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Saves money vs. emergency repairs or full replacement — consider an <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic system</Link> if your current setup keeps failing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Keeps your system compliant with local regulations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaClipboardCheck className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Extends System Lifespan</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Prolongs the life of your tank and drain field</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Protects groundwater from contamination</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Maintains system efficiency and proper flow</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Recommended every 3–5 years for most households</span>
                </li>
              </ul>
            </div>
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
              <h3 className="text-xl font-semibold mb-2">How often should a septic tank be pumped?</h3>
              <p>Most septic tanks should be pumped every 3-5 years, depending on household size and usage. Larger families or homes with garbage disposals may need more frequent pumping.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What are signs my septic tank is full?</h3>
              <p>Common signs include slow drains throughout the house, gurgling sounds in pipes, sewage odors near the tank or drain field, and standing water or lush grass over the drain field.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How much does septic tank pumping cost?</h3>
              <p>The cost varies based on tank size and accessibility. Contact Plumb-All for a free estimate — we offer upfront pricing with no hidden fees.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">My septic alarm is going off. What should I do?</h3>
              <p>Cut back on water use (hold off on laundry, the dishwasher, and long showers) and call us. The alarm usually means the water level in the tank or pump chamber is too high. A pumping often fixes it, and if the pump or float has failed, we <Link href="/services/septic-repair" className="text-theme-3 hover:underline">repair that too</Link>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
              <p>Plumb-All provides septic pumping across South Metro Atlanta, including Jonesboro, Fayetteville, Peachtree City, Tyrone, McDonough, Stockbridge, Hampton, Locust Grove, Griffin, and Newnan.</p>
            </div>
          </div>
        </div>

        {/* Financing */}
        <div className="w-full mb-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg">
            Septic tank pumping can be a significant investment. <Link href="/financing" className="text-theme-3 hover:underline font-semibold">Flexible financing options</Link> are available to help make your project affordable.
          </p>
        </div>

        {/* Septic Service Areas */}
        <SepticServiceAreas />

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Protect Your Investment</h2>
          <p className="text-lg mb-6">
            Regular septic tank pumping is one of the best ways to protect your property and avoid expensive emergencies. Ask about our <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">plumbing service agreement</Link> to stay on a regular maintenance schedule. Contact Plumb-All today to schedule your service.
          </p>
          <CTACall
            headerText="Need professional septic tank pumping?"
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
