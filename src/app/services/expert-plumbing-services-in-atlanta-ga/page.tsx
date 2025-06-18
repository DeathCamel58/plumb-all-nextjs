import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaTools, FaWrench, FaPhoneAlt, FaClock, FaStar, FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import {Metadata} from "next";
import { GoogleMapsEmbed } from '@next/third-parties/google'
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Plumbers in Atlanta, Ga';
  const description = 'Here at Plumb-All, we take pride in providing top-notch plumbing solutions for both residential and commercial needs.';
  const ogImageUrl = 'og-expert-plumbers-in-atlanta-slab-leak';
  const path = '/services/expert-plumbing-services-in-atlanta-ga';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function ExpertPlumbingAtlanta() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/slab-leak.jpg"
          alt="Expert Plumbing Services in Atlanta"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Expert Plumbing Services in Atlanta, GA</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="w-full mb-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Professional Plumbing Services in Atlanta</h2>

          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <figure className="mb-4">
                <Image
                  src="/images/pipes.jpg"
                  alt="Plumbing Services"
                  width={412}
                  height={268}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full md:w-2/3 px-4 mb-6">
              <p className="mb-4 text-lg">At Plumb-All, we&#39;re your trusted local plumbing experts in Atlanta, Georgia. With years of experience serving the Atlanta community, we take pride in providing top-notch plumbing solutions for both residential and commercial needs.</p>

              <p className="mb-4 text-lg">Our team of skilled plumbers is dedicated to delivering high-quality services and ensuring your satisfaction. From routine maintenance to emergency repairs, we have the expertise to handle all your plumbing requirements.</p>

              <p className="text-lg">Whether you&#39;re dealing with a leaky faucet, clogged drain, or need a complete plumbing system installation, Plumb-All is your reliable partner for all plumbing services in Atlanta.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Need Professional Plumbing Services?</h2>
          <p className="text-center mb-6">
            Our expert technicians are ready to solve your plumbing problems quickly and effectively.
          </p>
          <CTACall
            headerText="Contact us today for fast, reliable service"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Our Services Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Comprehensive Plumbing Services</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Residential Plumbing</h3>
                <p className="mb-4 text-lg">Our comprehensive residential plumbing services encompass everything from routine maintenance to complex repairs. We specialize in <Link href="/services/leak-detection" className="text-theme-3 hover:underline">leak detection</Link> and repair, <Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">water heater</Link> installation and servicing, drain cleaning, faucet and fixture replacement, and sewer line inspections.</p>

                <h3 className="text-xl font-semibold mb-3">Commercial Plumbing</h3>
                <p className="text-lg">We understand the unique plumbing needs of businesses in Atlanta. Our commercial plumbing services are designed to minimize disruption to your operations while ensuring your plumbing systems function optimally. From office buildings to restaurants, we have the expertise to handle commercial plumbing projects of any scale.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Septic Services</h3>
                <p className="mb-4 text-lg">Our septic services include <Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">septic tank pumping</Link>, maintenance, and <Link href="/services/septic-repair" className="text-theme-3 hover:underline">repairs</Link>. Our team understands the importance of a well-functioning septic system for your property&#39;s hygiene and environmental health, and we&#39;re equipped to handle all aspects of septic system care.</p>

                <h3 className="text-xl font-semibold mb-3">Emergency Services</h3>
                <p className="text-lg"><Link href="/services/emergencies" className="text-theme-3 hover:underline">Plumbing emergencies</Link> can strike at any time. That&#39;s why we offer 24/7 emergency plumbing services in Atlanta. Whether it&#39;s a burst pipe or a sudden leak, you can rely on us to be there when you need us the most.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaCheck className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All?</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-500 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">Highly Reviewed</h3>
                </div>
                <p className="mb-6 text-lg">Discover why our customers trust us as the leading plumbing and septic service provider. With a trail of satisfied clients, our reviews speak volumes about the quality of our work and the dedication of our team.</p>

                <div className="flex items-center mb-4">
                  <FaWrench className="text-theme-3 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">Experienced Technicians</h3>
                </div>
                <p className="text-lg">Our licensed plumbers have years of experience and ongoing training, allowing them to diagnose and solve any plumbing problem quickly and effectively.</p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <FaClock className="text-theme-3 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">Fast & Reliable Service</h3>
                </div>
                <p className="mb-6 text-lg">We understand the urgency of plumbing issues and offer same-day service in most cases. Our technicians arrive promptly and work efficiently to minimize disruption to your home or business.</p>

                <div className="flex items-center mb-4">
                  <FaTools className="text-theme-3 mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">Advanced Equipment</h3>
                </div>
                <p className="text-lg">We use state-of-the-art tools and techniques to ensure your plumbing issues are resolved effectively and efficiently, providing long-lasting solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Service Area</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6 text-lg text-center">
              Plumb-All proudly serves Atlanta and the surrounding metro area. Our service area includes:
            </p>

            <div className="mb-6">
              <GoogleMapsEmbed
                apiKey="AIzaSyAdvsJphJWbjDOs7HWqOy1PXaOXgiMHXPk"
                height={300}
                width="100%"
                mode="place"
                q="Plumb-All,+Jonesboro,%20Ga"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-2">
                <p className="font-semibold">Atlanta</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Jonesboro</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Marietta</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Decatur</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Sandy Springs</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Roswell</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Mableton</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">Dunwoody</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h2 className="text-2xl font-semibold">Ready to Solve Your Plumbing Issues?</h2>
          </div>
          <CTACall
            headerText="Our plumbing experts are ready to help"
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
