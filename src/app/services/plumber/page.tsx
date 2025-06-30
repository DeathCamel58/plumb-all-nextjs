import React from 'react';
import Link from 'next/link';
import { FaTools, FaWrench, FaCheckCircle, FaShieldAlt, FaHandshake, FaClock } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/vans.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Professional Plumber Services';
  const description = 'Looking for a reliable plumber? Plumb-All offers expert plumbing services for residential and commercial properties.';
  const ogImageUrl = 'og-plumbing-repair-spraying-pipe';
  const path = '/services/plumber';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function PlumberServices() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Professional Plumber Vans"
        title="Professional Plumber Services"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Plumber Services for All Your Needs</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            When you need a reliable plumber, <Link href="/services" className="text-theme-3 hover:underline">Plumb-All</Link> is your trusted solution. Our team of licensed, experienced plumbers provides comprehensive plumbing services for both <Link href="/services/residential" className="text-theme-3 hover:underline">residential</Link> and <Link href="/services/commercial" className="text-theme-3 hover:underline">commercial</Link> properties. From emergency repairs to new installations, our plumbers deliver quality workmanship with exceptional customer service.
          </p>
        </div>

        <div className="mt-8">
          <CTACall
            headerText="Need a plumber right away?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All Plumbers?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Experienced</h3>
              <p>Our plumbers are fully licensed, insured, and have years of experience handling all types of plumbing issues.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Equipment</h3>
              <p>We use the latest tools and technology to diagnose and solve plumbing problems efficiently and effectively.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaShieldAlt className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p>We stand behind our work with a satisfaction guarantee on all plumbing services and parts.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaClock className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Service</h3>
              <p>Our plumbers are available around the clock for emergency plumbing situations that can&#39;t wait.</p>
            </div>
          </div>
        </div>

        {/* Plumbing Services We Offer */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Comprehensive Plumbing Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Plumbing</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Leak detection and repair</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">Drain cleaning</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/faucet-repair" className="text-theme-3 hover:underline">Faucet repair and replacement</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/toilet-installation" className="text-theme-3 hover:underline">Toilet installation and repair</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Water heater services</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/bathroom-plumbing" className="text-theme-3 hover:underline">Bathroom plumbing</Link></span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Plumbing</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/commercial" className="text-theme-3 hover:underline">Commercial plumbing repairs</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/plumbing-installation" className="text-theme-3 hover:underline">New construction plumbing</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/backflow" className="text-theme-3 hover:underline">Backflow prevention</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">Hydro jetting</Link></span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Code compliance inspections</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span><Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">Preventative maintenance plans</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Plumbing Process */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHandshake className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Professional Plumbing Process</h2>
          </div>

          <p className="mb-6">
            At Plumb-All, our plumbers follow a systematic approach that ensures thorough diagnosis and effective solutions.
            Our process is designed to identify the root cause of plumbing issues and provide lasting repairs that prevent future problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Thorough inspection of your plumbing system</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Accurate diagnosis of the problem</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Clear explanation of repair options</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Professional repair using quality parts</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Final testing to ensure proper function</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Plumbing Maintenance Tips</h3>
              <p className="mb-4">
                Regular maintenance can help prevent plumbing issues and extend the life of your plumbing system. Here are some tips from our professional plumbers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Regularly check for leaks and drips</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Don&#39;t flush anything but toilet paper</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Use drain strainers to catch hair and debris</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2" />
                  <span>Schedule annual plumbing inspections</span>
                </li>
              </ul>
              <p className="mt-4">
                <Link href="/services/plumbing-service-agreement" className="inline-block text-theme-3 hover:underline">Learn more about our maintenance plans →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready to hire a professional plumber?"
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
