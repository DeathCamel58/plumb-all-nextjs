'use client'

import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import { FaWrench, FaTools, FaCheckCircle, FaList, FaWater, FaHome, FaQuestion } from 'react-icons/fa';

export default function AlternativeSeptic() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/septic-system-overview.jpg"
          alt="Alternative Septic System"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Alternative Septic Systems</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Advanced Alternative Septic Solutions</h1>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Traditional septic systems separate and store solid waste from wastewater before allowing the liquid (effluent) to flow into the drain field. Alternative septic systems, however, treat wastewater more actively through innovative processes.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            For properties with challenging soil conditions, high water tables, or limited space, alternative septic designs provide effective solutions. Our expert team specializes in designing, installing, and maintaining these advanced systems to meet your specific needs.
          </p>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Need an Alternative Septic Solution?</h2>
              <p className="text-center mb-6">
                Don&#39;t let challenging soil conditions limit your property options. Our alternative septic specialists can help you find the perfect solution.
              </p>
              <CTACall
                headerText="Contact us today for expert alternative septic installation"
                buttonText="Call us at 844 PLUMB-ALL"
              />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/septic-install.jpg"
                alt="Septic System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Types of Alternative Septic Systems */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Types of Alternative Septic Systems</h2>
          </div>

          {/* Aerobic Treatment and Mound Septic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaWrench className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Aerobic Treatment Systems</h3>
              </div>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/aerobic-treatment.png"
                  alt="Aerobic Treatment Diagram"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Uses oxygen to break down solids quickly and efficiently</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Produces cleaner secondary effluent than traditional systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Treated water can be further sterilized for surface irrigation</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Requires up to 50% less space for drain fields</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaHome className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Mound Septic Systems</h3>
              </div>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/mound-septic.jpg"
                  alt="Mound Septic Diagram"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Ideal for areas with high seasonal water tables or moist soil</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Elevates wastewater for better filtration through soil and sand</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Provides superior purification before reaching groundwater</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Engineered solution for challenging soil conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Systems */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaList className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Additional Alternative Systems</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Our expertise extends to a wide range of specialized septic solutions to address various site challenges:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Intermittent Sand Filter Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Recirculating Sand Filter Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Glendon BioFilter Systems</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Evapotranspiration/Absorption Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Chlorine Disinfection Systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Drip Emitter Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Installation Process */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Installation Process</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Our comprehensive installation process ensures your alternative septic system performs optimally for years to come:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">1. Site Assessment</h3>
                <p>We thoroughly evaluate your property&#39;s soil conditions, topography, and space constraints to determine the ideal system configuration.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">2. Custom Design</h3>
                <p>Our engineers create a tailored alternative septic system design specifically for your property&#39;s unique requirements.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">3. Professional Installation</h3>
                <p>Our certified technicians install your system with precision, ensuring all components work together seamlessly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Concerns</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Worried about your system?</h3>
              <p className="mb-4">
                If you&#39;re concerned about your plumbing or septic system, don&#39;t hesitate to give us a call today! Our prompt and reliable team will:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Quickly arrive at your property</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Conduct a thorough inspection</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Identify potential issues before they become major problems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Provide preventative maintenance and fast solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Alarm box going off?</h3>
              <p className="mb-4">
                Any type of septic tank alarm should be taken seriously, as these could result in a backup in your home.
              </p>
              <p className="mb-4">
                Don&#39;t jeopardize your system and safety - call the experts immediately when you notice:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Audible alarms from your system</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Warning lights on your control panel</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Unusual odors around your septic area</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Slow drains or backups in your home</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Solve Your Septic Challenges?</h2>
          <p className="text-lg mb-6">
            Contact Plumb-All today to learn how an alternative septic system can provide the perfect solution for your property.
          </p>
          <CTACall
            headerText="Schedule your free consultation"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
