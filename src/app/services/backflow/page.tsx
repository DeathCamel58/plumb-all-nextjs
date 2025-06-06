import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaTools, FaWrench, FaClipboardCheck, FaCheckCircle, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Backflow';
  const description = 'Plumb-All is a certified backflow inspection company that specializes in annual inspections, repairs, and installation of backflow preventers required by your local water authority.';
  const ogImageUrl = 'og-backflow-backflow';
  const path = '/services/backflow';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function Backflow() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/backflow.jpg"
          alt="Backflow Device"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Backflow Services</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Professional Backflow Services in Metro Atlanta</h2>

          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <figure className="mb-4">
                <Image
                  src="/images/gray-pipes.jpg"
                  alt="Backflow Prevention Service"
                  width={412}
                  height={268}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full md:w-2/3 px-4 mb-6">
              <p className="mb-4 text-lg">
                As a certified backflow inspection company, Plumb-All offers expert annual inspections, repairs, and installation of backflow preventers required by local water authorities throughout Metro Atlanta.
              </p>
              <p className="mb-4 text-lg">
                Our team is committed to providing exceptional customer service throughout the state of Georgia, and we bring over 15 years of experience to every job. Trust us to handle all of your backflow prevention needs with professionalism and expertise.
              </p>
              <p className="text-lg">
                Don&#39;t let backflow issues compromise your water quality. Contact us today for fast, reliable service or a free quote.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Need Professional Backflow Services?</h2>
          <p className="text-center mb-6">
            Our certified technicians are ready to handle all your backflow prevention needs.
          </p>
          <CTACall
            headerText="Contact us today for fast, reliable service"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Why Choose Plumb-All */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All for Backflow Services?</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Certified Technicians</h3>
                <p className="mb-4 text-lg">Our backflow specialists are fully certified and trained to handle all types of backflow prevention devices. We stay up-to-date with the latest regulations and industry standards to ensure compliance.</p>

                <h3 className="text-xl font-semibold mb-3">Comprehensive Services</h3>
                <p className="text-lg">From installation and testing to repairs and maintenance, we provide complete backflow prevention services for both residential and commercial properties throughout Metro Atlanta.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Reliable Reporting</h3>
                <p className="mb-4 text-lg">We handle all the necessary paperwork and submit test reports to water authorities on your behalf, ensuring you remain compliant with local regulations.</p>

                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-lg">We take pride in our work and strive to provide top-notch service every time. Our free estimates, honest pricing, and satisfaction guarantee ensure you&#39;ll receive the best possible service experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Backflow Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Backflow Services</h2>
          </div>

          {/* Feature Sections - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Commercial Buildings */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaBuilding className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Commercial Backflow Services</h3>
              </div>
              <p className="text-lg">
                Many commercial buildings are required to install and maintain backflow devices on commercial water lines and high hazard lines. We help businesses stay compliant with local regulations while protecting their water supply.
              </p>
            </div>

            {/* Property Management */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaClipboardCheck className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Property Management Solutions</h3>
              </div>
              <p className="text-lg">
                We have experience helping both large property management companies and individual establishments install and maintain backflow prevention devices. We can coordinate annual inspections for multiple properties with our <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">plumbing service agreement</Link>.
              </p>
            </div>

            {/* Installation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaWrench className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Backflow Prevention Installation</h3>
              </div>
              <p className="text-lg">
                We have experience working with the new construction industries to install backflow prevention devices, and make sure that a property passes inspection the first time. Our installations meet all local code requirements.
              </p>
            </div>

            {/* Maintenance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaCheckCircle className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Annual Testing & Maintenance</h3>
              </div>
              <p className="text-lg">
                We are certified for annual inspections of RPZ, DCV, DCDA, PVB, and other backflow devices. By regularly updating our employees on all new regulations for these devices, you can rest assured that we know how to keep your devices in tip-top shape.
              </p>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h2 className="text-2xl font-semibold">Ready to Protect Your Water Supply?</h2>
          </div>
          <CTACall
            headerText="Our backflow prevention experts are ready to help"
            buttonText="Call us at 844 PLUMB-ALL"
          />
          <p className="text-center mt-4">
            Or <Link href="/contact" className="text-theme-3 hover:underline">contact us online</Link> to schedule a service appointment.
          </p>
        </div>
      </div>
    </div>
  );
}
