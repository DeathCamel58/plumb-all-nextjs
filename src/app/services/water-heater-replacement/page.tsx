import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaCheckCircle, FaWater, FaHome, FaBuilding, FaStar } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Water Heater Replacement';
  const description = 'Discover the importance of septic tank pumping and its benefits for your system\'s longevity and efficiency. At Plumb-All, we offer professional septic tank pumping services in Jonesboro and surrounding areas.';
  const ogImageUrl = 'og-water-heater-replacement-water-heater-wrench';
  const path = '/services/water-heater-replacement';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function WaterHeaterReplacement() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/water-heater-wrench.jpg"
          alt="Water Heater being repaired"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Water Heater Replacement</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Water Heater Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Looking for water heater services? Look no further than Plumb-All! Whether you need a new electric or gas hot water heater installed, want to explore tankless options, or require maintenance and repair services for your existing water heater, our expert team can help.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            We specialize in water heater and expansion tank installation and maintenance for both commercial and residential properties in the Metro Atlanta area. With our extensive training and experience, we can handle any water heater-related issue with ease.
          </p>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Ready for Professional Water Heater Service?</h2>
              <p className="text-center mb-6">
                Don&#39;t let plumbing or septic problems stress you out. Our expert technicians are ready to help with all your water heater needs.
              </p>
              <CTACall
                headerText="Contact us today for fast, reliable service"
                buttonText="Call us at 844 PLUMB-ALL"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/flush-water-heater.jpg"
                alt="Person opening flush valve on water heater."
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Water Heater Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Water Heater Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaHome className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Residential Services</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Traditional tank water heater installation and replacement</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Tankless water heater installation and service</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Water heater repair and maintenance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Expansion tank installation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Energy-efficient upgrades</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaBuilding className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Commercial Services</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Commercial-grade water heater installation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>High-capacity system design and installation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Preventative maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Emergency repair services</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Code compliance and safety inspections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
              <p>
                Our plumbers have extensive training on all the latest water heater systems and standards to ensure quality installation and service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaStar className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Highly Reviewed</h3>
              <p>
                Discover why our customers trust us as the leading plumbing service provider with consistently positive feedback and five-star ratings.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p>
                We provide warranties on water heaters to give our clients peace of mind, and offer long-term extended warranties on select models.
              </p>
            </div>
          </div>
        </div>

        {/* Reputation Section */}
        <div className="w-full mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Reputation</h3>
            <p className="mb-4">
              We strive to leave all of our clients with a good experience. Because we place importance on this within our company, our customers notice. We&#39;re proud to be one of the highest rated plumbing companies on Google, which shows that we&#39;ve succeeded at giving all of our customers a good experience.
            </p>
            <p className="mb-4">
              We&#39;ve all been in the situation where a company leaves us with a bad experience, and we&#39;d never want to leave our customers feeling that way. That&#39;s why we always make a point to treat your home like we&#39;d treat ours.
            </p>
            <p className="mb-4">
              From five-star ratings to heartfelt testimonials, our reviews highlight our ability to deliver tailored solutions, transparent communication, and prompt responses. Your satisfaction is not just our goal – it&#39;s our track record.
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
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
