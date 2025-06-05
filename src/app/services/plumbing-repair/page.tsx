import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaWrench, FaCheckCircle, FaShieldAlt, FaHandshake, FaClock } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Plumbing Repair';
  const description = 'Our experts show a high level of attention to detail, and utilize extensive educational and vocational expertise when determining the best repair solution.';

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
      url: `/services/plumbing-repair`,
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

// Plumbing repair services
const repairServices = [
  {
    title: "Emergency Repairs",
    description: "Fast response to leaks, clogs, and other urgent plumbing issues that can disrupt your home or business.",
    icon: <FaWrench className="text-4xl" />
  },
  {
    title: "Preventative Maintenance",
    description: "Regular inspections and maintenance to prevent costly emergency repairs and extend the life of your plumbing systems.",
    icon: <FaTools className="text-4xl" />
  },
  {
    title: "Quality Guarantee",
    description: "We stand behind our work with a satisfaction guarantee on all plumbing repairs and services.",
    icon: <FaShieldAlt className="text-4xl" />
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service for residential and commercial clients, ensuring your plumbing issues are resolved promptly.",
    icon: <FaClock className="text-4xl" />
  }
];

export default function PlumbingRepair() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/spraying-pipe.jpg"
          alt="Spraying Pipe"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Plumbing Repair</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Plumbing Repair Solutions</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            When plumbing issues arise, quick and effective repairs are essential to prevent water damage and restore normal function to your home or business. With decades of experience, Plumb-All delivers reliable plumbing repair services designed to address problems promptly and prevent future issues.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Repair Services?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {repairServices.map((service, index) => (
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
              headerText="Need emergency plumbing repair?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Common Repair Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Plumbing Repair Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fixture Repairs</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/faucet-repair" className="text-theme-3 hover:underline">Faucet repairs and replacements</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Toilet repairs and replacements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Shower and tub repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/sink-repair" className="text-theme-3 hover:underline">Sink repairs</Link> and installations</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Garbage disposal repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Water heater repairs</Link> and replacements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pipe and Drain Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Leak detection</Link> and repair</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Pipe repairs and replacements</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Drain cleaning and unclogging</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">Hydro jetting</Link> services</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Sewer line repairs</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water line repairs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Agreement Section */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHandshake className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Plumbing Service Agreements</h2>
          </div>

          <p className="mb-6">
            Our commitment to providing exceptional customer service is reflected in our ongoing customer service agreement.
            With emergency service available 24/7, 365 days a year through our emergency answering service and stand-by technicians,
            we strive to ensure that your system is always in good repair and operating condition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Benefits of a Service Agreement</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Lower utility bills</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Water conservation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Extended fixture life</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Inflation protection</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Priority customer service</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>15% discount on all parts and labor</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>No overtime rates year-round</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Maintenance Services Included</h3>
              <p className="mb-4">
                Our plumbing contracts are designed to provide regular preventative maintenance to keep your plumbing systems
                functioning at their best and to detect potential issues before they become costly problems.
              </p>
              <p className="mb-4">
                One of our most popular service contracts is for interval-based <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link>, which effectively clears grime buildup
                in field lines, prevents septic system or grease trap backups, and extends the lifespan of your septic system.
              </p>
              <Link href="/services/plumbing-service-agreement" className="inline-block text-theme-3 hover:underline">Learn more about our service agreements →</Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready to experience professional plumbing repair service?"
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
