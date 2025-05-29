import React from 'react';
import Image from 'next/image';
import { FaTools, FaWrench, FaCheckCircle, FaClock } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Plumbing Installation';
  const description = 'As expert plumbers with years of experience in plumbing installation, we are trained to plan and install the best solution to your projects needs.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-plumbing-installation-gray-pipes.png';

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
      url: `/services/plumbing-installation`,
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

export default function PlumbingInstallation() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/gray-pipes.jpg"
          alt="Plumbing Installation"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Plumbing Installation</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Plumbing Installation Services</h2>

          <p className="mb-6">
            With our years of experience and expertise in fixture installation, you can trust us to get the job done right the first time. Our team is trained to review blueprints, drawings, and specifications to determine the layout of your plumbing systems, water supply networks, and waste and drainage systems. This helps us ensure that any new fixtures work seamlessly in your home or <Link href="/services/commercial" className="text-theme-3 hover:underline">business property</Link>.
          </p>

          <p className="mb-6">
            We plan, install, and service plumbing systems, fixtures, piping equipment, and controls while adhering to the highest standards of building codes, water efficiency, and safety. As a member of the Plumbing Heating Cooling Contractors Association, we only bring in certified and dependable contractors for any additional work needed to ensure compliance with legislation and building rules.
          </p>

          <p className="mb-6">
            We use quality parts and tools to provide superior services and stand behind our work to ensure your new system lasts for years to come. Our team is highly skilled in hydraulics, pressure, and the use of specialty tools.
          </p>

          <p className="mb-6">
            To ensure our work meets your satisfaction, we use a <Link href="/about-our-process" className="text-theme-3 hover:underline">comprehensive checklist</Link> to double-check that our work is completed properly and that your plumbing system is in good condition. We also ensure that all other fixtures on your property are functioning properly before we consider the job complete.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Common Installation Services</h3>

            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Washroom & Bathroom</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Toilet Installation</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Urinals & Bidets</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Shower Installation</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Bathtub Installation</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Lavatories</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Sink Installation</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Dishwashing Machines</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span>Garbage Disposals</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-theme-3 mr-2" />
                <span><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Water Heaters</Link> & Storage Tanks</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <p className="mb-6">
                No matter what you want done, whether a new installation, or an <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency repair</Link>, we are here to help. We keep our crews on standby 24/7 to be available when you need us most. We would love to hear from you even if you&#39;re not sure about moving forward on your project yet.
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center text-theme-3 mb-2">
                <FaClock className="mr-2" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center text-theme-3 mb-2">
                <FaTools className="mr-2" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center text-theme-3">
                <FaWrench className="mr-2" />
                <span>Quality Workmanship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Decided that we're the right fit for you?"
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
