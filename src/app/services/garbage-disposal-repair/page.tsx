import React from 'react';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaRecycle, FaCheckCircle, FaShieldAlt, FaBolt, FaWater } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/garbage-disposal.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Garbage Disposal Repair & Replacement';
  const description = 'Professional garbage disposal repair and replacement services in the Metro Atlanta Area. We fix jams, leaks, and electrical issues, and install new units with expert precision.';
  const ogImageUrl = 'og-garbage-disposal-repair-garbage-disposal';
  const path = '/services/garbage-disposal-repair';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function GarbageDisposalRepair() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Garbage Disposal"
        title="Garbage Disposal Repair & Replacement"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Garbage Disposal Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            Is your garbage disposal making strange noises, leaking, or not working at all? <Link href="/services" className="text-theme-3 hover:underline">Plumb-All</Link> provides expert garbage disposal repair and replacement services for homeowners throughout the Metro Atlanta area. Our skilled technicians can diagnose and fix a wide range of disposal issues or install a brand new unit when necessary.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Garbage Disposal Services?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Diagnosis</h3>
              <p>Our technicians accurately identify the root cause of your garbage disposal issues, whether it&#39;s a jam, electrical problem, or worn components.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Repairs</h3>
              <p>We use professional-grade tools and replacement parts to ensure your garbage disposal is restored to optimal performance.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaRecycle className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Installation</h3>
              <p>When replacement is necessary, we help you select the right model for your needs and install it with precision for years of reliable service.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaShieldAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p>We stand behind our work with a satisfaction guarantee on all garbage disposal repairs and installations.</p>
            </div>
          </div>

          <div className="mt-8">
            <CTACall
              headerText="Need garbage disposal repair or replacement?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Common Garbage Disposal Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Garbage Disposal Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Repair Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Disposal jam clearing</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Leak repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Electrical troubleshooting</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Reset button issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Replacement & Installation</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>New disposal installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Disposal unit upgrades</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Sink flange replacement</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Dishwasher connection</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Proper disposal sizing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Signs You Need Garbage Disposal Service */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Signs You Need Garbage Disposal Service</h2>
          </div>

          <p className="mb-6">
            Don&#39;t ignore these warning signs that indicate your garbage disposal needs professional attention:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Repair Indicators</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Unusual grinding noises</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Disposal jams frequently</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water leaking from the unit</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Disposal runs but doesn&#39;t grind</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Foul odors that persist after cleaning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Replacement Indicators</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Unit is more than 10 years old</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Frequent repairs needed</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Motor doesn&#39;t turn on</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Reset button no longer works</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Significant rust or corrosion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Garbage Disposal Maintenance Tips */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaBolt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Garbage Disposal Maintenance Tips</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Extend the life of your garbage disposal with these simple maintenance tips:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                <span>Run cold water before, during, and after using the disposal</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                <span>Avoid putting fibrous foods (celery, corn husks), bones, coffee grounds, or grease down the disposal</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                <span><Link href="/news/article/how-to-clean-a-garbage-disposal" className="inline-block text-theme-3 hover:underline">Clean the disposal regularly with ice cubes and citrus peels</Link></span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                <span>Cut large food items into smaller pieces before disposal</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                <span>Never use harsh chemicals to clean your disposal</span>
              </li>
            </ul>
            <p className="mt-4">
              <Link href="/services/plumbing-service-agreement" className="inline-block text-theme-3 hover:underline">Learn more about our maintenance plans →</Link>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready for professional garbage disposal service?"
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
