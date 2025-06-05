import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaWrench, FaCheckCircle, FaShieldAlt, FaHandshake, FaClock } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Toilet Installation';
  const description = 'Professional toilet installation services by Plumb-All. Our expert plumbers ensure proper installation, preventing leaks and ensuring optimal performance.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-plumbing-repair-spraying-pipe.png';

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
      url: `/services/toilet-installation`,
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

// Toilet installation services
const installationServices = [
  {
    title: "Expert Installation",
    description: "Professional installation by licensed plumbers who ensure your new toilet is properly fitted and sealed.",
    icon: <FaWrench className="text-4xl" />
  },
  {
    title: "Comprehensive Service",
    description: "Complete service including removal of old toilet, installation of new unit, and testing to ensure proper function.",
    icon: <FaTools className="text-4xl" />
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with a satisfaction guarantee on all toilet installations and services.",
    icon: <FaShieldAlt className="text-4xl" />
  },
  {
    title: "Quick Response",
    description: "Fast scheduling and efficient service to minimize disruption to your home or business.",
    icon: <FaClock className="text-4xl" />
  }
];

export default function ToiletInstallation() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/toilet-install.jpg"
          alt="Toilet Installation"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Toilet Installation</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Toilet Installation Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            A properly installed toilet is essential for a functional <Link href="/services/bathroom-plumbing" className="text-theme-3 hover:underline">bathroom</Link>. Whether you&#39;re replacing an old unit or installing a new one during a renovation, <Link href="/services" className="text-theme-3 hover:underline">Plumb-All&#39;s</Link> expert technicians ensure your toilet is installed correctly, preventing leaks and ensuring optimal performance for years to come. We also offer <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair</Link> and <Link href="/services/sink-repair" className="text-theme-3 hover:underline">sink repair</Link> services to address all your bathroom plumbing needs.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Toilet Installation?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {installationServices.map((service, index) => (
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
              headerText="Need a toilet installed or replaced?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Toilet Installation Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Toilet Installation Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Installation Types</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Standard toilet installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Wall-mounted toilet installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Dual-flush toilet installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Smart toilet installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>ADA-compliant toilet installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Commercial toilet installation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Installation Process</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Removal and disposal of old toilet</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Inspection of flange and <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">water supply</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Proper sealing and mounting</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Connection to water supply</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Thorough testing for <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leaks</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Final adjustments and cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHandshake className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Benefits of Professional Toilet Installation</h2>
          </div>

          <p className="mb-6">
            While DIY toilet installation might seem tempting, professional installation offers numerous advantages that ensure your toilet functions properly and lasts longer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Immediate Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Proper sealing to prevent leaks</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Correct alignment and stability</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Optimal water efficiency</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Proper venting and drainage</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Professional disposal of old unit</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Long-Term Advantages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Extended toilet lifespan</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Reduced risk of <Link href="/services/leak-detection" className="text-theme-3 hover:underline">water damage</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Lower water bills with efficient models</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Warranty protection on installation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Peace of mind with <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">professional work</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready for professional toilet installation?"
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
