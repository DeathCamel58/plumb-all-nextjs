import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaWater, FaLeaf, FaCheckCircle, FaTools, FaExclamationTriangle, FaClipboardCheck } from 'react-icons/fa';
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Septic Tank Pumping';
  const description = 'Discover the importance of septic tank pumping and its benefits for your system\'s longevity and efficiency. At Plumb-All, we offer professional septic tank pumping services in Jonesboro and surrounding areas.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/api/og?title=news&image=/images/septic-pumping.jpg';

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
      url: `/services/septic-tank-pumping`,
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

export default function SepticTankPumping() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/septic-pumping.jpg"
          alt="Septic Pump Hose"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Septic Tank Pumping</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Professional Septic Tank Pumping Services</h1>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            At Plumb-All, we understand the importance of proper septic tank maintenance. Our professional pumping services help prevent system failures, extend equipment lifespan, and protect your property and the environment.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Whether you&#39;re a homeowner, <Link href="/services/commercial" className="text-theme-3 hover:underline">business owner</Link>, or property manager in Jonesboro and surrounding areas, our expert technicians provide reliable, thorough septic tank pumping using advanced equipment and techniques.
          </p>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Ready to Maintain Your Septic System?</h2>
              <p className="text-center mb-6">
                Don&#39;t wait for problems to develop. Regular septic tank pumping is essential for the health and longevity of your system.
              </p>
              <CTACall
                headerText="Contact us today for professional septic tank pumping"
                buttonText="Call us at 844 PLUMB-ALL"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/septic-pumping.jpg"
                alt="Septic Tank Pumping"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* The Importance of Septic Tank Pumping */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">The Importance of Septic Tank Pumping</h2>
          </div>
          <p className="text-lg mb-8">
            Regular septic tank pumping is a crucial aspect of septic system maintenance. It ensures the proper functioning of your system and helps prevent costly repairs and potential health hazards. Here&#39;s why septic tank pumping is essential:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaTools className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Preventing System Failures</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Removes accumulated solids that reduce storage capacity</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Prevents backups and unpleasant odors</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Maintains system efficiency and proper flow</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Reduces risk of emergency situations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaClipboardCheck className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Extending System Lifespan</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Helps prolong the lifespan of your septic system</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Reduces strain on system components</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Minimizes risk of damage to drain fields</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Prevents need for expensive repairs or replacements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaLeaf className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Environmental Benefits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Protects groundwater from contamination</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Prevents solids and bacteria from infiltrating drain fields</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Maintains healthy balance in septic system</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Safeguards nearby water sources and ecosystems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaExclamationTriangle className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Practical Advantages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Cost-effective maintenance in the long run</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Saves money on emergency services</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Ensures compliance with local regulations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Helps avoid potential fines and penalties</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="w-full mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaTools className="text-2xl" />
              </div>
              <h2 className="text-3xl font-semibold">Our Professional Services</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-10">
              <p className="text-lg mb-4">
                At Plumb-All, we specialize in professional septic tank pumping services. Our experienced technicians use advanced equipment and techniques to ensure thorough pumping, adhering to the highest industry standards.
              </p>
              <p className="text-lg">
                We follow a comprehensive process that includes inspection, pumping, and cleaning to ensure your system operates at peak efficiency. Our team will also provide recommendations for ongoing maintenance to extend the life of your septic system.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center mb-10">
              <CTACall
                headerText="Ready to schedule your septic tank pumping?"
                buttonText="Call us at 844 PLUMB-ALL"
              />
            </div>
          </div>

          {/* Common Issues Section */}
          <div className="w-full mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaExclamationTriangle className="text-2xl" />
              </div>
              <h2 className="text-3xl font-semibold">Common Septic System Concerns</h2>
            </div>

            {/* Two-column sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Worried about your system?</h3>
                <p className="text-lg mb-4">
                  If you&#39;re experiencing any concerns or issues with your septic system, don&#39;t worry. Our team of highly skilled and trained professionals at Plumb-All is here to help.
                </p>
                <p className="text-lg">
                  We understand that septic system problems can be stressful, but with our expertise and dedication, we&#39;ll diagnose the issue and provide effective solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Alarm box going off?</h3>
                <p className="text-lg mb-4">
                  If your septic system has an alarm box installed and it&#39;s going off, it&#39;s essential to address the situation promptly.
                </p>
                <p className="text-lg">
                  The alarm system is designed to alert you when there&#39;s a problem with your septic system, indicating that immediate attention is needed. Contacting us can ensure that you prevent a larger problem from happening.
                </p>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Protect Your Investment</h2>
            <p className="text-lg mb-6">
              Regular septic tank pumping is essential for maintaining your system and protecting your property. Contact Plumb-All today to schedule your service.
            </p>
            <CTACall
              headerText="Need professional septic tank pumping services?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
            <p className="text-center mt-4">
              Or <Link href="/contact" className="text-theme-3 hover:underline">contact us online</Link> to schedule a consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
