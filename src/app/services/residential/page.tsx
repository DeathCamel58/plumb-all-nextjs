'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaTools, FaWrench, FaWater, FaPhoneAlt, FaClock, FaTruck, FaHome, FaShieldAlt } from 'react-icons/fa';

export default function Residential() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/slab-leak.jpg"
          alt="Residential Plumbing"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Residential Plumbing and Septic</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="w-full mb-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Professional Residential Plumbing in Metro Atlanta</h1>

          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <figure className="mb-4">
                <Image
                  src="/images/water-heater-wrench.jpg"
                  alt="Residential Plumbing Service"
                  width={412}
                  height={268}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full md:w-2/3 px-4 mb-6">
              <p className="mb-4 text-lg">
                When plumbing problems strike your home, you need a reliable team you can count on. Plumb-All provides expert residential plumbing and septic services throughout Metro Atlanta, delivering prompt solutions to keep your home running smoothly.
              </p>
              <p className="mb-4 text-lg">
                From minor repairs to major installations, our experienced technicians handle all your residential plumbing needs with professionalism and care. We understand that plumbing issues can disrupt your daily life, which is why we prioritize fast response times and effective solutions.
              </p>
              <p className="text-lg">
                Trust Plumb-All to treat your home with respect while resolving your plumbing concerns quickly and efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Need Residential Plumbing Service?</h2>
          <p className="text-center mb-6">
            Our expert technicians are ready to solve your home plumbing problems quickly and effectively.
          </p>
          <CTACall
            headerText="Contact us today for fast, reliable service"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Our Residential Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHome className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Residential Services</h2>
          </div>

          {/* Feature Sections - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Feature 1 - 24/7 Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaClock className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">24/7 Emergency Service</h3>
              </div>
              <p className="text-lg">
                We understand how frustrating it can be to wait on someone to show up to fix a problem.
                That&#39;s exactly why we are a 24/7 emergency business. Don&#39;t hesitate to call us, day <em>or</em> night.
              </p>
            </div>

            {/* Feature 2 - Quick Response */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaTruck className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Quick Response Time</h3>
              </div>
              <p className="text-lg">
                With a fleet of vehicles, we are usually pretty close by. This allows us to show up there in record time,
                to get your problems resolved without lengthy delays.
              </p>
            </div>

            {/* Feature 3 - Prepared for Jobs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaWrench className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Fully Equipped Technicians</h3>
              </div>
              <p className="text-lg">
                We come prepared for most standard jobs. This allows us to show up at your location and fix it without
                having to go and get materials, getting your job done faster.
              </p>
            </div>

            {/* Feature 4 - Water Leak Detection */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaWater className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Expert Leak Detection</h3>
              </div>
              <p className="text-lg">
                If you&#39;re seeing water somewhere in your house, but you can&#39;t figure out where it&#39;s coming from,
                we can locate it, then stop it before it does any further damage.
              </p>
            </div>
          </div>
        </div>

        {/* Expert Plumbing Services Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Expert Plumbing Services in Jonesboro</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <p className="mb-4 text-lg">
                  We&#39;re located in Jonesboro, and serve Metro Atlanta&#39;s plumbing needs. Whether you&#39;re needing <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">drain cleaning</Link>, <Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">plumbing repair</Link>, sewer repair, or septic system maintenance, we&#39;re here for you!
                </p>
                <p className="mb-4 text-lg">
                  With years of experience working in homes, you can rest assured that we can fix it right the first time. We&#39;re a member of the Plumbing Heating Cooling Contractors Association, so you can trust that we know the best practices and latest rules of plumbing.
                </p>
                <p className="text-lg">
                  Here at Plumb-All, our residential plumbers have been trained to treat your home better than their own. Our number one goal is to leave every household plumbing issue behind with problems resolved and with a good client experience.
                </p>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold mb-4">Our Residential Services Include:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">Plumbing repairs</Link> and installations</li>
                  <li><Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">Drain cleaning</Link> and maintenance</li>
                  <li><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Water heater</Link> services</li>
                  <li><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Leak detection</Link> and repair</li>
                  <li><Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">Septic system</Link> services</li>
                  <li>Fixture installations and repairs</li>
                  <li>Pipe repairs and replacements</li>
                  <li>Bathroom and kitchen plumbing</li>
                  <li>Sump pump services</li>
                  <li>Preventative maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All?</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Licensed & Experienced</h3>
                <p className="mb-4 text-lg">Our team consists of licensed plumbers with years of experience in residential plumbing. We have the knowledge and skills to handle any plumbing challenge your home might face.</p>

                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-lg">We provide clear, upfront pricing before beginning any work. You&#39;ll never be surprised by hidden fees or unexpected costs when you choose Plumb-All.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Workmanship</h3>
                <p className="mb-4 text-lg">We take pride in delivering high-quality work that stands the test of time. Our technicians use premium materials and follow industry best practices to ensure lasting results.</p>

                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-lg">Your satisfaction is our top priority. We&#39;re not happy until you&#39;re completely satisfied with our work, and we&#39;ll go the extra mile to ensure your plumbing needs are met.</p>
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
            <h2 className="text-2xl font-semibold">Ready to Solve Your Home Plumbing Issues?</h2>
          </div>
          <CTACall
            headerText="Our residential plumbing experts are ready to help"
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
