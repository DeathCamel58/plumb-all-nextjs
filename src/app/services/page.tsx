import React from 'react';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaClock, FaTruck, FaWrench, FaTools, FaShieldAlt, FaCheckCircle, FaHome, FaBuilding } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../public/images/toilet-flapper.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Services';
  const description = 'Our top services include: septic drain field repair, plumbing installation & repair, alternative septic solutions, leak detection, and sewer line repair.';
  const ogImageUrl = 'og-services-toilet-flapper';
  const path = '/services';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

// Service categories
const residentialServices = [
  {
    title: "Plumbing Repair",
    path: "/services/plumbing-repair",
    description: "Fast, reliable repairs for leaks, clogs, broken pipes, and other common household plumbing issues. We diagnose and fix problems correctly the first time.",
  },
  {
    title: "Toilet Installation",
    path: "/services/toilet-installation",
    description: "Professional toilet installation services by expert plumbers who ensure proper fitting, sealing, and function for optimal performance and longevity.",
  },
  {
    title: "Bathroom Plumbing",
    path: "/services/bathroom-plumbing",
    description: "Professional bathroom plumbing services for toilets, sinks, showers, and tubs. Our experts fix leaks, clogs, and damaged fixtures with precision and care.",
  },
  {
    title: "Water Line Repair",
    path: "/services/water-line-repair",
    description: "Expert water line repair and replacement services. We diagnose and fix water line leaks, breaks, and corrosion with minimal disruption to your property.",
  },
  {
    title: "Faucet Repair",
    path: "/services/faucet-repair",
    description: "Faucet dripping? We fix and replace all makes—kitchen, bathroom, outdoor & more. Our experts show a high level of attention to detail when determining the best repair solution.",
  },
  {
    title: "Garbage Disposal Repair",
    path: "/services/garbage-disposal-repair",
    description: "Professional garbage disposal repair and replacement services. We fix jams, leaks, and electrical issues, and install new units with expert precision.",
  },
  {
    title: "Sink Repair",
    path: "/services/sink-repair",
    description: "Professional sink repair services for kitchen, bathroom, and utility sinks. Our experts fix leaks, clogs, and damaged fixtures with precision and care.",
  },
  {
    title: "Drain Cleaning",
    path: "/services/drain-cleaning",
    description: "Professional drain cleaning services using advanced techniques like hydro jetting and sectional machine cleaning to remove even the toughest clogs.",
  },
  {
    title: "Leak Detection",
    path: "/services/leak-detection",
    description: "State-of-the-art equipment to locate hidden leaks in walls, floors, and underground pipes before they cause extensive damage to your property.",
  },
  {
    title: "Water Heater Services",
    path: "/services/water-heater-replacement",
    description: "Installation, repair, and maintenance of traditional and tankless water heaters to ensure reliable hot water for your home.",
  },
  {
    title: "Emergency Plumbing",
    path: "/services/emergencies",
    description: "24/7 emergency response for urgent plumbing issues like burst pipes, major leaks, or sewer backups that require immediate attention.",
  },
];

const septicServices = [
  {
    title: "Septic Tank Pumping",
    path: "/services/septic-tank-pumping",
    description: "Regular pumping to remove accumulated solids and prevent system failure, extending the life of your septic system.",
  },
  {
    title: "Septic Drain Field Repair",
    path: "/services/septic-repair",
    description: "Expert repair of failing drain fields to restore proper function and prevent costly system replacements.",
  },
  {
    title: "Alternative Septic Solutions",
    path: "/services/alternative-septic",
    description: "Specialized systems for challenging soil conditions, including high-clay soils, shallow bedrock, or failed perc tests.",
  },
  {
    title: "Eljen Septic Systems",
    path: "/services/eljen-septic",
    description: "Installation and maintenance of Eljen GSF systems, an innovative alternative for properties with difficult soil conditions.",
  },
];

const commercialServices = [
  {
    title: "Commercial Plumbing",
    path: "/services/commercial",
    description: "Comprehensive plumbing services for businesses, restaurants, retail spaces, and multi-unit properties.",
  },
  {
    title: "Plumbing Service Agreements",
    path: "/services/plumbing-service-agreement",
    description: "Customized maintenance plans that provide priority service, regular inspections, and discounted rates for businesses.",
  },
  {
    title: "Plumbing Installation",
    path: "/services/plumbing-installation",
    description: "Professional installation of fixtures, pipes, and plumbing systems for new construction or renovation projects.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Toilet Flapper"
        title="Our Services"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Plumbing & Septic Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            Plumb-All delivers comprehensive plumbing and septic solutions for residential and commercial properties throughout the Metro Atlanta Area. With our team of licensed professionals, we provide reliable service, quality workmanship, and lasting results.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white gap-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 text-theme-3">
                <FaClock className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p>
                Our team is available around the clock for emergency services, ensuring that your plumbing issues are addressed promptly, day or night.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 text-theme-3">
                <FaTruck className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
              <p>
                With our fleet of fully-equipped vehicles, we can respond quickly to your call and arrive ready to solve your plumbing or septic issue.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
              <p>
                Our licensed professionals receive additional training beyond state requirements, ensuring your problems are fixed correctly the first time.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <CTACall
              headerText="Need professional plumbing or septic service?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>

          {/* Residential Services */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaHome className="text-2xl" />
              </div>
              <Link href="/services/residential">
                <h3 className="text-2xl font-semibold">Residential Plumbing Services</h3>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {residentialServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-3">
                    <Link href={service.path} className="text-theme-3 hover:underline">{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Septic Services */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaTools className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">Septic System Services</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {septicServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-3">
                    <Link href={service.path} className="text-theme-3 hover:underline">{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Services */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaBuilding className="text-2xl" />
              </div>
              <Link href="/services/commercial">
                <h3 className="text-2xl font-semibold">Commercial Plumbing Services</h3>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {commercialServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-semibold mb-3">
                    <Link href={service.path} className="text-theme-3 hover:underline">{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8">Our Service Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">Assessment</h3>
              </div>
              <p>Our technicians thoroughly diagnose the issue using advanced tools and their extensive training to identify the root cause.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">Transparent Quote</h3>
              </div>
              <p>We provide a clear, detailed estimate before beginning any work, ensuring you understand the scope and cost of the service.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">Quality Execution</h3>
              </div>
              <p>Our skilled technicians complete the work efficiently and effectively, ensuring lasting results that exceed industry standards.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/about-our-process" className="inline-block background-theme-1 text-white px-6 py-3 rounded shadow hover:background-theme-2 transition">
              Learn More About Our Process
            </Link>
          </div>
        </div>

        {/* Our Guarantees */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Guarantees</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-theme-3">
                <FaShieldAlt className="text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                <p>We stand behind our work with a satisfaction guarantee. If you&#39;re not completely satisfied with our service, we&#39;ll make it right.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 text-theme-3">
                <FaCheckCircle className="text-4xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                <p>Our team consists of licensed professionals who are fully insured, providing you with peace of mind and protection.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready to experience professional plumbing and septic services?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
