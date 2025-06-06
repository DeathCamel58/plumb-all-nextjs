import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaWrench, FaExclamationTriangle, FaWater } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Leak Detection';
  const description = 'Our leak detection services concentrate on speed and damage control. Leaking pipes can cause extensive damage, so if you suspect a leak, act quickly!';
  const ogImageUrl = 'og-leak-detection-spraying-pipe';
  const path = '/services/leak-detection';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function LeakDetection() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Leak Detection</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Professional Leak Detection Services</h2>

          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <figure className="mb-4">
                <Image
                  src="/images/dripping-faucet.jpg"
                  alt="Dripping Faucet"
                  width={412}
                  height={268}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full md:w-2/3 px-4 mb-6">
              <p className="mb-4 text-lg">Our leak detection services prioritize swift action and minimizing damages. Leaks in pipes may start small, but can lead to significant harm if left unchecked. Traditional methods of detecting leaks involve trial-and-error, which can result in unnecessary property damage and expenses.</p>

              <p className="mb-4 text-lg">However, our technicians utilize advanced technology to electronically locate the source of the leak, saving you time and resources. This method is a marked improvement from traditional approaches and eliminates the need for costly and uncertain demolitions.</p>

              <p className="mb-4 text-lg">We understand the urgency of addressing leaks, whether they are in water or sewer lines. Our goal is to quickly identify and resolve the issue to prevent further harm to your home.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Need Professional Leak Detection?</h2>
          <p className="text-center mb-6">
            Our expert technicians are ready to help you locate and fix leaks quickly and efficiently.
          </p>
          <CTACall
            headerText="Contact us today for fast, reliable service"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Symptoms Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Symptoms to Watch For</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-lg">Continuous sound of water (like a toilet running) when nothing is turned on.</li>
                  <li className="text-lg">Water meter reading changing when no water is being used.
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>To determine this, mark the indicator on your meter; don&#39;t use any water for an hour; check the meter to see if the reading has changed.</li>
                      <li>If the indicator moved, you may be experiencing a water leak, and should have the problem investigated by a professional.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-lg">Your water bill escalates over a period of weeks or months. (Compare your monthly bills)</li>
                  <li className="text-lg">Your walls or floors have wet, spongy, moist or discolored areas when nothing has been spilled.</li>
                  <li className="text-lg">You can smell foul odors coming from the floors or walls near drains or sewers.</li>
                  <li className="text-lg">Your building foundation cracks, vegetation grows unevenly or earth shifts for no visible reason.</li>
                  <li className="text-lg">You find warm spots on your floor, particularly on concrete slab floors.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Hydro Jet Cleaning */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaWater className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">Hydro Jet Cleaning</h3>
            </div>
            <p className="mb-4 text-lg">The best way to clear blocked or slowed drain lines is with high pressure <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro jetting</Link>. By using a jet machine, the water pressure can be adjusted to clear all different kinds of debris including grease, dirt, rocks, and more.</p>
            <p className="mb-4 text-lg">Blocked or clogged water lines are much more prone to cracking or rotting out, which can turn into a major repair. We recommend a more proactive approach of having lines cleaned at the first signs of trouble such as slowed draining and gurgling.</p>
          </div>

          {/* Well Pumps */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaWrench className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">Well Pumps</h3>
            </div>
            <p className="mb-4 text-lg">If your home water supply is dependent on well water, we understand the frustration and urgency of a malfunctioning well pump. We&#39;re here to help. If you are experiencing any of the following symptoms, don&#39;t hesitate to <a href="tel:+17709143877" className="text-theme-3 hover:underline">give us a call</a> to come out and investigate the issue.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Short cycling pump</li>
              <li>Dirty water</li>
              <li>Loud noises</li>
              <li>Air &#34;hissing&#34; from the faucet</li>
              <li>Inconsistent or no water pressure</li>
              <li>Lost air in the water tank</li>
              <li>Extra high electric bills</li>
            </ul>
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
