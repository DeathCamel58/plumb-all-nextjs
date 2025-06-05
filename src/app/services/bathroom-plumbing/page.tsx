import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaWrench, FaShieldAlt, FaClock, FaCheckCircle, FaHandshake } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Bathroom Plumbing';
  const description = 'Professional bathroom plumbing services. Our experts fix leaks, clogs, and damaged fixtures with precision and care.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-bathroom-plumbing-toilet.png';

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
      url: `/services/bathroom-plumbing`,
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

// Bathroom plumbing services
const bathroomPlumbingServices = [
  {
    title: "Fast Response",
    description: "Quick service for bathroom plumbing emergencies like leaks, clogs, and broken fixtures to minimize water damage and disruption.",
    icon: <FaWrench className="text-4xl" />
  },
  {
    title: "Expert Diagnostics",
    description: "Thorough assessment of bathroom plumbing issues to identify root causes and provide lasting repairs rather than temporary fixes.",
    icon: <FaTools className="text-4xl" />
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with a satisfaction guarantee on all bathroom plumbing repair services and parts.",
    icon: <FaShieldAlt className="text-4xl" />
  },
  {
    title: "Same-Day Service",
    description: "In most cases, we can provide same-day bathroom plumbing service to get your bathroom back to normal quickly.",
    icon: <FaClock className="text-4xl" />
  }
];

export default function BathroomPlumbing() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/toilet.jpg"
          alt="Bathroom Plumbing"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Bathroom Plumbing</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Bathroom Plumbing Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            From leaky faucets to clogged drains and damaged fixtures, <Link href="/services" className="text-theme-3 hover:underline">Plumb-All</Link> provides comprehensive bathroom plumbing services. Our experienced technicians diagnose and fix bathroom plumbing problems quickly, ensuring minimal disruption to your daily routine. We also offer <Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">drain cleaning</Link>, <Link href="/services/toilet-installation" className="text-theme-3 hover:underline">toilet installation</Link>, and <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">general plumbing repair</Link> services for all your home plumbing needs.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Bathroom Plumbing?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {bathroomPlumbingServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-theme-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTACall
              headerText="Need emergency bathroom plumbing repair?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Common Bathroom Plumbing Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Bathroom Plumbing Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Toilet Repairs</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/toilet-installation" className="text-theme-3 hover:underline">Toilet installation and replacement</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Running toilet repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Toilet flapper and fill valve replacement</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">Toilet unclogging</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Toilet leak repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Wax ring replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sink & Shower Repairs</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/sink-repair" className="text-theme-3 hover:underline">Bathroom sink repairs</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Faucet repairs and replacements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Shower head installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Bathtub and shower valve repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">Shower and tub drain cleaning</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Bathroom leak detection and repair</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bathroom Plumbing Process */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHandshake className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Bathroom Plumbing Process</h2>
          </div>

          <p className="mb-6">
            At Plumb-All, we follow a systematic approach to bathroom plumbing repairs that ensures thorough diagnosis and effective solutions.
            Our process is designed to identify the root cause of bathroom plumbing issues and provide lasting repairs that prevent future problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Thorough inspection of bathroom plumbing fixtures</span>
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
                Regular maintenance can help prevent bathroom plumbing issues and extend the life of your fixtures. Here are some tips to keep your bathroom plumbing in top condition:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Use drain strainers to catch hair and debris</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Clean shower heads regularly to prevent mineral buildup</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Check for toilet leaks by adding food coloring to the tank</span>
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
            headerText="Ready for professional bathroom plumbing service?"
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
