import React from 'react';
import Link from 'next/link';
import { FaTools, FaWrench, FaCheckCircle, FaShieldAlt, FaClock, FaWater, FaTint } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/vans.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Water Line Repair & Replacement Services';
  const description = 'Expert water line repair and replacement services by Plumb-All. We diagnose and fix water line leaks, breaks, and corrosion with minimal disruption to your property. Available 24/7 for emergency water line repairs.';
  const ogImageUrl = 'og-water-line-repair-spraying-pipe';
  const path = '/services/water-line-repair';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function WaterLineRepairServices() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Professional Water Line Repair Vans"
        title="Water Line Repair & Replacement"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Water Line Repair Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            When you&#39;re facing water line problems, <Link href="/services" className="text-theme-3 hover:underline">Plumb-All</Link> is your trusted solution. Our team of licensed, experienced <Link href="/services/plumber" className="text-theme-3 hover:underline">plumbers</Link> specializes in water line repair and replacement for both <Link href="/services/residential" className="text-theme-3 hover:underline">residential</Link> and <Link href="/services/commercial" className="text-theme-3 hover:underline">commercial</Link> properties. From <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency water line breaks</Link> to gradual leaks and corrosion issues, our experts diagnose and fix water line problems with minimal disruption to your property.
          </p>
        </div>

        <div className="mt-8">
          <CTACall
            headerText="Need emergency water line repair?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Water Line Services?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Water Line Specialists</h3>
              <p>Our <Link href="/services/plumber" className="text-theme-3 hover:underline">plumbers</Link> are specially trained in water line diagnostics and repair techniques, ensuring accurate solutions for your specific water line issues.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Detection Equipment</h3>
              <p>We use state-of-the-art <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection</Link> and pipe locating technology to pinpoint water line problems without unnecessary excavation.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaShieldAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
              <p>We use only high-quality, durable materials for water line repairs and replacements, ensuring long-lasting solutions for your property.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaClock className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Water Line Service</h3>
              <p>Water line emergencies don&#39;t wait for business hours. Our team is available around the clock for <Link href="/services/emergencies" className="text-theme-3 hover:underline">urgent water line repairs</Link>.</p>
            </div>
          </div>
        </div>

        {/* Water Line Services We Offer */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Comprehensive Water Line Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Water Line Repair Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Water line leak detection</Link> and repair</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/emergencies" className="text-theme-3 hover:underline">Broken water line emergency repairs</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water line joint and connection repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Frozen water line thawing and repair</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water pressure problem diagnosis</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water line valve repair and replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Water Line Replacement Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Complete water line replacement</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Partial water line replacement</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water line material upgrades (copper, PEX, etc.)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/plumbing-installation" className="text-theme-3 hover:underline">Water service line installation for new construction</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water line relocation services</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Trenchless water line replacement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Water Line Problems and Solutions */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTint className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Water Line Problems</h2>
          </div>

          <p className="mb-6">
            Water line issues can cause significant damage to your property if not addressed promptly. Here are some common water line problems we regularly address:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Signs of Water Line Problems</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Unexplained increase in water bills</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Wet spots or puddles in your yard</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">Reduced water pressure throughout your home</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Discolored water coming from taps</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Unusual sounds in your plumbing system</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Foundation cracks or settling</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Water Line Repair Process</h3>
              <p className="mb-4">
                Our systematic approach to water line repair ensures thorough diagnosis and effective solutions:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Comprehensive inspection of your water line system</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Advanced leak detection</Link> to pinpoint exact problem areas</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Clear explanation of repair options and costs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Minimally invasive repair techniques when possible</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Thorough testing of repaired water lines</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Property restoration after water line work</span>
                </li>
              </ul>
              <p className="mt-4">
                <Link href="/services/plumbing-service-agreement" className="inline-block text-theme-3 hover:underline">Learn about our preventative maintenance plans →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Need water line repair or replacement?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
          <p className="text-center mt-4">
            Or <Link href="/contact" className="text-theme-3 hover:underline">contact us online</Link> to schedule a water line inspection.
          </p>
        </div>
      </div>
    </div>
  );
}
