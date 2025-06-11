import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaTools, FaWrench, FaWater, FaExclamationTriangle, FaPhoneAlt } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Drain Cleaning';
  const description = 'Need fast, professional drain cleaning in Metro Atlanta? Plumb-All in Jonesboro, GA, offers expert service, including hydro jetting and sectional machine cleaning. Call today for a free estimate!';
  const ogImageUrl = 'og-drain-cleaning-drain-cleaning';
  const path = '/services/drain-cleaning';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function DrainCleaning() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/drain-cleaning.jpg"
          alt="Cleaning a drain"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Drain Cleaning</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Professional Drain Cleaning in Metro Atlanta</h2>

          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <figure className="mb-4">
                <Image
                  src="/images/hand-drain-cleaning.jpg"
                  alt="Drain Cleaning Service"
                  width={412}
                  height={268}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full md:w-2/3 px-4 mb-6">
              <p className="mb-4 text-lg">Are you dealing with a slow or clogged drain? Plumb-All is here to help! As a trusted plumbing company based in Jonesboro, GA, we provide expert drain cleaning services to homeowners and businesses across Metro Atlanta.</p>

              <p className="mb-4 text-lg">Our professional technicians use advanced equipment and proven techniques to clear blockages quickly and effectively, restoring proper flow to your plumbing system.</p>

              <p className="text-lg">Don&#39;t let drain problems disrupt your daily routine. With Plumb-All&#39;s fast, reliable service, you can count on us to solve your drain issues promptly and prevent future clogs.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Need Professional Drain Cleaning?</h2>
          <p className="text-center mb-6">
            Our expert technicians are ready to solve your drain problems quickly and effectively.
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
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All for Drain Cleaning?</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Fast & Reliable Service</h3>
                <p className="mb-4 text-lg">We understand the urgency of drain issues and offer same-day service in most cases. Our technicians arrive promptly and work efficiently to minimize disruption to your home or business.</p>

                <h3 className="text-xl font-semibold mb-3">Experienced Technicians</h3>
                <p className="text-lg">Our licensed <Link href="/services/plumber" className="text-theme-3 hover:underline">plumbers</Link> have the expertise to clear even the toughest clogs. With years of experience and ongoing training, they can diagnose and solve any drain problem quickly and effectively.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Advanced Equipment</h3>
                <p className="mb-4 text-lg">We use state-of-the-art tools, including <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro jetting</Link> and drain snakes, to ensure a thorough cleaning that removes all debris and buildup from your pipes.</p>

                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-lg">We take pride in our work and strive to provide top-notch service every time. Our free estimates, honest pricing, and satisfaction guarantee ensure you&#39;ll receive the best possible service experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Drain Issues */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Drain Issues We Solve</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-lg">Slow-draining <Link href="/services/sink-repair" className="text-theme-3 hover:underline">sinks</Link>, tubs, and showers</li>
                  <li className="text-lg">Recurring clogs in kitchen and bathroom drains</li>
                  <li className="text-lg">Sewer line blockages and backups</li>
                </ul>
              </div>

              <div>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-lg">Foul odors coming from drains</li>
                  <li className="text-lg">Gurgling sounds in pipes</li>
                  <li className="text-lg">Multiple clogged drains throughout your home</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Drain Cleaning Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWater className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Drain Cleaning Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sectional Machine Cleaning */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Sectional Machine Cleaning</h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/drain-cleaning.jpg"
                  alt="Drain Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg">
                This method uses a mechanical cable to break apart and remove blockages. It is effective for routine clogs caused by hair, grease, and debris buildup. Our technicians are skilled at using this technique to clear most common drain obstructions quickly and safely.
              </p>
            </div>

            {/* Hydro Jetting */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">Hydro Jetting</Link>
              </h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/hydro-jetting-nozzle.jpg"
                  alt="Hydro-Jetting"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg">
                This high-pressure water jet system blasts away even the most stubborn clogs, including tree roots and heavy grease accumulation. It provides a more thorough clean and helps prevent future blockages by completely scouring the inside of your pipes.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Drain Cleaning Process</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-lg">
              Our experts will assess your situation and recommend the best solution for your drain problem. We follow a thorough process to ensure your drains are completely clear:
            </p>

            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li className="text-lg"><strong>Inspection:</strong> We identify the location and cause of the blockage</li>
              <li className="text-lg"><strong>Solution:</strong> We select the appropriate cleaning method based on the type and severity of the clog</li>
              <li className="text-lg"><strong>Execution:</strong> Our technicians use specialized equipment to clear the blockage completely</li>
              <li className="text-lg"><strong>Verification:</strong> We test the drain to ensure proper flow has been restored</li>
              <li className="text-lg"><strong>Prevention:</strong> We provide recommendations to help prevent future clogs</li>
            </ol>

            <p className="text-lg">
              Don&#39;t let a clogged drain disrupt your day! <Link href="/contact" className="text-theme-3 hover:underline">Schedule</Link> your drain cleaning today with Plumb-All. We offer free estimates and quick response times to get your plumbing back in top shape.
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h2 className="text-2xl font-semibold">Ready to Clear Those Drains?</h2>
          </div>
          <CTACall
            headerText="Our drain cleaning experts are ready to help"
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
