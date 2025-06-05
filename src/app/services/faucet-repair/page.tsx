import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaWrench, FaCheckCircle, FaShieldAlt, FaHandshake, FaClock } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Faucet Repair';
  const description = 'Faucet dripping? We fix and replace all makes—kitchen, bathroom, outdoor & more. Our experts show a high level of attention to detail, and utilize extensive educational and vocational expertise when determining the best repair solution.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-faucet-repair-running-faucet.png';

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
      url: `/services/faucet-repair`,
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

export default function FaucetRepair() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/running-faucet.jpg"
          alt="Running Faucet"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Faucet Repair</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Faucet Repair Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            From dripping faucets to complete replacements, <Link href="/services" className="text-theme-3 hover:underline">Plumb-All</Link> provides comprehensive faucet repair services for kitchens, bathrooms, and outdoor fixtures. Our experienced technicians diagnose and fix faucet problems quickly, ensuring minimal disruption to your daily routine. We also offer <Link href="/services/sink-repair" className="text-theme-3 hover:underline">sink repair</Link>, <Link href="/services/bathroom-plumbing" className="text-theme-3 hover:underline">bathroom plumbing</Link>, and <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">general plumbing repair</Link> services for all your home plumbing needs.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Faucet Repairs?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Response</h3>
              <p>Quick service for faucet emergencies like leaks, drips, and broken fixtures to minimize water waste and disruption.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Diagnostics</h3>
              <p>Thorough assessment of faucet issues to identify root causes and provide lasting repairs rather than temporary fixes.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaShieldAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p>We stand behind our work with a satisfaction guarantee on all faucet repair services and parts.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaClock className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Same-Day Service</h3>
              <p>In most cases, we can provide same-day faucet repair service to get your kitchen or bathroom back to normal quickly.</p>
            </div>
          </div>

          <div className="mt-8">
            <CTACall
              headerText="Need emergency faucet repair?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Common Faucet Repair Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Faucet Repair Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Kitchen Faucet Repairs</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Dripping faucet repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Spray nozzle replacements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Handle and cartridge replacements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Complete faucet installations</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Water line connection repairs</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Low water pressure fixes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Bathroom Faucet Repairs</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Faucet leak repairs</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Washer and O-ring replacements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Valve seat repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Fixture upgrades and modernization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Shower and tub faucet repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">Water pressure adjustments</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Faucet Repair Process */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHandshake className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Faucet Repair Process</h2>
          </div>

          <p className="mb-6">
            At Plumb-All, we follow a systematic approach to faucet repairs that ensures thorough diagnosis and effective solutions.
            Our process is designed to identify the root cause of faucet issues and provide lasting repairs that prevent future problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Thorough inspection of the faucet and related plumbing</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Accurate diagnosis of the problem</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Clear explanation of repair options</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Professional repair using quality parts</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Final testing to ensure proper function</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Preventative Maintenance Tips</h3>
              <p className="mb-4">
                Regular maintenance can help prevent faucet issues and extend the life of your fixtures. Here are some tips to keep your faucets in top condition:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Clean aerators regularly to prevent mineral buildup</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Avoid overtightening handles to prevent damage</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Address drips and leaks promptly to prevent water waste</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Schedule annual plumbing inspections</span>
                </li>
              </ul>
              <p className="mt-4">
                <Link href="/services/plumbing-service-agreement" className="inline-block text-theme-3 hover:underline">Learn more about our maintenance plans →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready for professional faucet repair service?"
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
