import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaPhoneAlt, FaExclamationTriangle, FaTools, FaClock } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/vans.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Emergency Plumber Near Me – 24/7 Urgent Plumbing Service';
  const description = 'Need an urgent plumber now? Plumb-All sends emergency plumbers near you 24/7 — nights, weekends & holidays. Licensed & insured. Call (770) 914-3877 for immediate help.';
  const ogImageUrl = 'og-emergency-services-vans';
  const path = '/services/emergencies';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function Emergencies() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Plumb-All Service Vans"
        title="Emergency Plumber Near Me – Available 24/7"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center">24/7 Emergency Plumbing Services – We Come to You Now</h2>

          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <figure className="mb-4">
                <Image
                  src="/images/vans.jpg"
                  alt="Plumb-All Emergency Service"
                  width={412}
                  height={268}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full md:w-2/3 px-4 mb-6">
              <p className="mb-4 text-lg">If you need a plumber now, don&#39;t wait — Plumb-All dispatches urgent plumbers near you around the clock. We have multiple plumbing crews on standby 24/7, ready to respond to your emergency with lightning-fast speed.</p>

              <p className="mb-4 text-lg">Whether you&#39;re searching for &#34;plumbers near me now&#34; at 2 AM or need an urgent plumber on a holiday weekend, we answer every call and send a technician fast. Burst pipes, sewage backups, no hot water — we handle it all.</p>

              <p className="mb-4 text-lg">Trust Plumb-All for the fastest emergency plumber response times in Metro Atlanta — when you need help the most, we deliver.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Need Emergency Plumbing Service?</h2>
          <p className="text-center mb-6">
            Our expert technicians are on standby 24/7, ready to resolve your plumbing emergency.
          </p>
          <CTACall
            headerText="Contact us now for immediate assistance"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All for Emergencies</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Rapid Response Team</h3>
                <p className="mb-4 text-lg">Our dedicated emergency response team is available 24/7, with multiple crews on standby ready to address your plumbing crisis. We understand that plumbing emergencies don&#39;t wait for business hours, and neither do we.</p>

                <h3 className="text-xl font-semibold mb-3">Highly Rated Service</h3>
                <p className="text-lg">By choosing Plumb-All, you&#39;re selecting a highly rated <Link href="/services/plumber" className="text-theme-3 hover:underline">plumber</Link> in your area. We&#39;re fully licensed and insured with a 4.8 star rating on <a rel="noreferrer noopener" href="https://g.page/r/Cbrr7EyVgUNcEBA" target="_blank" className="text-theme-3 hover:underline">Google Maps</a>, which demonstrates our commitment to customer satisfaction and quality workmanship.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Experienced Professionals</h3>
                <p className="mb-4 text-lg">Our technicians have years of experience handling all types of plumbing emergencies. We&#39;re trained to diagnose problems quickly and implement effective solutions that prevent further damage to your home.</p>

                <h3 className="text-xl font-semibold mb-3">Comprehensive Quality Check</h3>
                <p className="text-lg">We finish every emergency job with a thorough evaluation to ensure that you receive the highest quality work and that your plumbing system is functioning properly. Our goal is not just to fix the immediate problem, but to prevent future issues.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Emergency Situations */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Common Plumbing Emergencies We Handle</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-lg">Burst or leaking pipes causing water damage — our <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection</Link> team can pinpoint the source</li>
                  <li className="text-lg">Overflowing toilets that won&#39;t stop running</li>
                  <li className="text-lg">Sewer line backups creating unsanitary conditions — may require professional <Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">drain cleaning</Link></li>
                  <li className="text-lg"><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Water heater</Link> failures leaving you without hot water</li>
                </ul>
              </div>

              <div>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-lg">Main <Link href="/services/water-line-repair" className="text-theme-3 hover:underline">water line</Link> breaks requiring immediate attention</li>
                  <li className="text-lg"><Link href="/news/article/coping-with-frozen-pipes-a-guide-to-protecting-your-home" className="text-theme-3 hover:underline">Frozen pipes</Link> at risk of bursting during cold weather</li>
                  <li className="text-lg">Gas line leaks requiring professional repair</li>
                  <li className="text-lg">Sump pump failures during heavy rainfall or <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic emergencies</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaClock className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our 24/7 Commitment</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-lg">
              At Plumb-All, we are your go-to 24-hour emergency plumbers, on call all day, every day. We understand that plumbing emergencies don&#39;t follow a 9-to-5 schedule, and neither do we.
            </p>

            <p className="mb-4 text-lg">
              Our team is always ready to respond to your call, no matter when disaster strikes. We make sure to be available 24/7 for your emergency plumbing repairs and services, so that you can have your issues fixed immediately.
            </p>

            <p className="text-lg">
              With our experience and dedication, we are your local professionals committed to restoring your peace of mind. If you&#39;re facing a plumbing emergency, don&#39;t wait – contact Plumb-All right away.
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h2 className="text-2xl font-semibold">Emergency? Don&#39;t Wait!</h2>
          </div>
          <CTACall
            headerText="Our emergency response team is standing by"
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
