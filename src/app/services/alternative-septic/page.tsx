import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaCheckCircle, FaList, FaWater, FaHome, FaQuestion, FaShieldAlt, FaClock, FaClipboardCheck } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/septic-system-overview.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Alternative Septic Systems Near Me – Metro Atlanta';
  const description = 'Can\'t use a conventional septic system? Plumb-All installs alternative septic systems in Metro Atlanta — aerobic, mound, sand filter, drip emitter & more. Certified technicians. Call today.';
  const ogImageUrl = 'og-alternative-septic-septic-system-overview';
  const path = '/services/alternative-septic';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function AlternativeSeptic() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Alternative Septic System"
        title="Alternative Septic Systems Near Me – Metro Atlanta"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Advanced Alternative Septic Solutions in Metro Atlanta</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Can&#39;t use a conventional septic system? You&#39;re not out of options. Alternative septic systems treat wastewater through advanced processes and are often the only solution for properties with challenging soil, high water tables, or limited space.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Plumb-All&#39;s certified technicians specialize in designing, installing, and maintaining alternative septic systems throughout Metro Atlanta. Free consultations, upfront pricing.
          </p>
        </div>

        {/* Why Choose Plumb-All */}
        <div className="w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClock className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p>We&#39;ll assess your property and recommend the best system — no obligation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Certified Installers</h3>
              <p>Licensed, insured, and certified to install all major alternative septic systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upfront Pricing</h3>
              <p>You&#39;ll know the full cost before any work begins. No surprise fees.</p>
            </div>
          </div>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Need an Alternative Septic Solution?</h2>
              <p className="text-center mb-6">
                Don&#39;t let challenging soil conditions limit your property options. Our specialists can help you find the right system.
              </p>
              <CTACall
                headerText="Contact us today for a free consultation"
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
                src="/images/septic-install.jpg"
                alt="Septic System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Types of Alternative Septic Systems */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Types of Alternative Septic Systems</h2>
          </div>

          {/* Aerobic Treatment and Mound Septic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaWrench className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Aerobic Treatment Systems</h3>
              </div>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/aerobic-treatment.png"
                  alt="Aerobic Treatment Diagram"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Uses oxygen to break down solids quickly and efficiently</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Produces cleaner secondary effluent than traditional systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Treated water can be further sterilized for surface irrigation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Requires up to 50% less space for drain fields</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaHome className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Mound Septic Systems</h3>
              </div>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/mound-septic.jpg"
                  alt="Mound Septic Diagram"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Ideal for areas with high seasonal water tables or moist soil</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Elevates wastewater for better filtration through soil and sand</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Provides superior purification before reaching groundwater</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Engineered solution for challenging soil conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Systems */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaList className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Additional Alternative Systems</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Our expertise extends to a wide range of specialized septic solutions to address various site challenges, including the <Link href="/services/eljen-septic" className="text-theme-3 hover:underline">Eljen GSF system</Link>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Intermittent Sand Filter Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Recirculating Sand Filter Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Glendon BioFilter Systems</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Evapotranspiration/Absorption Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Chlorine Disinfection Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Drip Emitter Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Installation Process */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Installation Process</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Our comprehensive installation process ensures your alternative septic system performs optimally for years to come:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">1. Site Assessment</h3>
                <p>We thoroughly evaluate your property&#39;s soil conditions, topography, and space constraints to determine the ideal system configuration.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">2. Custom Design</h3>
                <p>Our engineers create a tailored alternative septic system design specifically for your property&#39;s unique requirements.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">3. Professional Installation</h3>
                <p>Our certified technicians install your system with precision, ensuring all components work together seamlessly.</p>
              </div>
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
              <h3 className="text-xl font-semibold mb-2">How do I know if I need an alternative system?</h3>
              <p>If your property has poor soil drainage, a high water table, limited space, or has failed a percolation test, an alternative septic system may be your best or only option. If your existing system has failed, our <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair team</Link> can assess your property and let you know.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are alternative septic systems more expensive?</h3>
              <p>They typically cost more to install than conventional systems, but they can save you money long-term by avoiding municipal sewage connection fees and working reliably in conditions where traditional systems fail.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Do alternative systems require more maintenance?</h3>
              <p>Some systems, like aerobic treatment units, require periodic inspections and <Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">regular pumping</Link>. We provide ongoing service plans to keep your system running efficiently.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Are these systems approved in Georgia?</h3>
              <p>Yes, all the alternative septic systems we install are approved for use in Georgia and meet all state and local regulatory requirements.</p>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Solve Your Septic Challenges?</h2>
          <p className="text-lg mb-6">
            Contact Plumb-All today to learn how an alternative septic system can provide the right solution for your property. Read our article on <Link href="/news/article/septic-systems" className="text-theme-3 hover:underline">septic systems</Link> to learn more about how these systems work. Free consultations available.
          </p>
          <CTACall
            headerText="Schedule your free consultation"
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
