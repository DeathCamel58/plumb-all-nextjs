import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaWater, FaCheckCircle, FaTools, FaExclamationTriangle, FaClipboardCheck, FaClock, FaShieldAlt, FaQuestion, FaWrench, FaHome } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HeroImage from '../../../../public/images/septic-system-overview.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Septic System Services – Metro Atlanta';
  const description = 'Septic system services in Metro Atlanta — installation, pumping, inspection, drain field repair, and alternative systems. Licensed septic experts. Call (770) 914-3877.';
  const ogImageUrl = 'og-septic-system-septic-system-overview';
  const path = '/services/septic-system';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function SepticSystem() {
  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Septic System Services"
        description="Complete septic system services in Metro Atlanta — installation, pumping, inspection, drain field repair, and alternative systems."
        url="/services/septic-system"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Septic System", url: "/services/septic-system" },
        ]}
      />
      <FAQSchema
        faqs={[
          { question: "What is a septic system?", answer: "A septic system is an on-site wastewater treatment system used in homes and properties that aren't connected to a municipal sewer line. It consists of a septic tank, where solids settle and break down, and a drain field (or leach field), which disperses the treated liquid back into the soil." },
          { question: "How often does a septic system need service?", answer: "Most septic systems should be pumped every 3-5 years. The exact interval depends on tank size, household size, and water usage. Systems with garbage disposals or larger families usually need more frequent service." },
          { question: "What are the signs my septic system is failing?", answer: "Common warning signs include slow drains, sewage odors around the tank or drain field, gurgling pipes, standing water or soggy ground over the drain field, unusually lush grass, and sewage backups inside the home." },
          { question: "How much does a new septic system cost?", answer: "Costs vary widely based on tank size, drain field design, soil conditions, and local permitting. A conventional septic system typically costs less than an alternative system like a mound or Eljen GSF system. Plumb-All provides free estimates with upfront pricing." },
          { question: "Do you install alternative septic systems?", answer: "Yes. For properties with challenging soil, high groundwater, or failed perc tests, we install alternative septic systems including Eljen GSF and mound systems that work where conventional drain fields can't." },
        ]}
      />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Septic System Overview – Metro Atlanta Septic Services"
        title="Septic System Services in Metro Atlanta"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Complete Septic System Services — One Licensed Team</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Whether you need a new septic system installed, your existing septic system inspected, pumped, or repaired, Plumb-All has served Metro Atlanta homeowners and businesses since 2003. Our licensed technicians handle every part of your septic system — tank, drain field, distribution box, and alternative systems — with upfront pricing and no surprise fees.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Call us at (770) 914-3877 or <Link href="/contact" className="text-theme-3 hover:underline">request a free quote online</Link> and we&#39;ll get your septic system sorted fast.
          </p>
        </div>

        {/* What Is a Septic System */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaHome className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">What Is a Septic System?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                A septic system is an on-site wastewater treatment system used in properties that aren&#39;t on a municipal sewer line. A well-maintained septic system safely treats and disperses household wastewater right on your property.
              </p>
              <p className="text-lg mb-4">
                Every septic system has two main components:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Septic tank</strong> — where solids settle and bacteria begin breaking down waste.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Drain field</strong> (also called a leach field) — where the treated liquid is dispersed into the soil for final filtration.</span>
                </li>
              </ul>
              <p className="text-lg">
                Want the deeper explanation? Read our full guide on <Link href="/news/article/septic-systems" className="text-theme-3 hover:underline">how septic systems work</Link>.
              </p>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/septic-tank-diagram.jpg"
                alt="Septic system diagram showing tank and drain field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Septic System Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Septic System Services</h2>
          </div>

          <p className="text-lg mb-8">
            Plumb-All is a full-service septic system provider. Whatever stage your septic system is in, we can help:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/services/septic-tank-pumping" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
              <h3 className="text-xl font-semibold mb-3 text-theme-3">Septic Tank Pumping</h3>
              <p>Scheduled pumping to remove accumulated solids, prevent backups, and extend the life of your septic system. Recommended every 3–5 years.</p>
            </Link>
            <Link href="/services/septic-repair" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
              <h3 className="text-xl font-semibold mb-3 text-theme-3">Septic System Repair</h3>
              <p>Drain field repair, damaged tank repair, distribution box and baffle fixes, and full system replacement when needed.</p>
            </Link>
            <Link href="/services/alternative-septic" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
              <h3 className="text-xl font-semibold mb-3 text-theme-3">Alternative Septic Systems</h3>
              <p>Specialized septic system installations for difficult soil, failed perc tests, high groundwater, or small lots — including mound systems.</p>
            </Link>
            <Link href="/services/eljen-septic" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
              <h3 className="text-xl font-semibold mb-3 text-theme-3">Eljen GSF Septic Systems</h3>
              <p>Certified installation of the Eljen GSF alternative septic system — a compact, eco-friendly design ideal for Metro Atlanta&#39;s challenging soil conditions.</p>
            </Link>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <CTACall
              headerText="Not sure what your septic system needs? We&rsquo;ll diagnose it for free."
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Signs Your Septic System Needs Attention */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Signs Your Septic System Needs Attention</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Common Warning Signs</h3>
              <p className="text-lg mb-4">
                A struggling septic system gives you warning before it fails outright. Watch for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Slow drains throughout the house</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Sewage odors near the tank or drain field</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Gurgling sounds in toilets or drains</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Standing water or soggy ground over the drain field</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Unusually lush, green grass above the septic area</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>A septic alarm that&#39;s going off</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>It&#39;s been more than 3–5 years since your last pumping</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">When It&rsquo;s an Emergency</h3>
              <p className="text-lg mb-4">
                Sewage backing up into your home, wastewater pooling in the yard, or an alarm that won&#39;t stop — those are septic system emergencies. Don&#39;t wait. Damage spreads fast and costs more the longer it&#39;s ignored.
              </p>
              <p className="text-lg mb-4">
                Call us right away and we&#39;ll dispatch a licensed technician. If you&#39;re unsure whether the problem is with your septic system or the plumbing in your home, visit our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency services page</Link>.
              </p>
              <div className="mt-4">
                <CTACall
                  headerText="Septic system emergency? We can help."
                  buttonText="Call us at 844 PLUMB-ALL"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Plumb-All */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All for Your Septic System</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClock className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Fast Scheduling</h3>
              <p>Same-week appointments for most septic system service across Metro Atlanta.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p>Fully licensed septic installers and plumbers. Serving Metro Atlanta since 2003.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upfront Pricing</h3>
              <p>Free estimates, no hidden fees. You approve the price before we start any work.</p>
            </div>
          </div>
        </div>

        {/* Septic System Maintenance */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Keep Your Septic System Running for Decades</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              A well-maintained septic system can last 25–40 years. A neglected one can fail in under 10. Regular pumping, careful water use, and keeping heavy loads (like vehicles) off the drain field are the biggest factors in your septic system&#39;s lifespan.
            </p>
            <p className="text-lg mb-4">
              We put together a <Link href="/news/article/how-to-maintain-your-septic-system" className="text-theme-3 hover:underline">complete septic system maintenance guide</Link> that walks through what to do — and what to avoid — to protect your investment. If you&#39;d rather not think about it, ask about our <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">plumbing service agreement</Link> and we&#39;ll keep your septic system on a scheduled maintenance plan.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Septic System FAQs</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What is a septic system?</h3>
              <p>A septic system is an on-site wastewater treatment system used in homes and properties that aren&#39;t connected to a municipal sewer line. It consists of a septic tank, where solids settle and break down, and a drain field (or leach field), which disperses the treated liquid back into the soil.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How often does a septic system need service?</h3>
              <p>Most septic systems should be pumped every 3–5 years. The exact interval depends on tank size, household size, and water usage. Systems with garbage disposals or larger families usually need more frequent service.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What are the signs my septic system is failing?</h3>
              <p>Common warning signs include slow drains, sewage odors around the tank or drain field, gurgling pipes, standing water or soggy ground over the drain field, unusually lush grass, and sewage backups inside the home.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How much does a new septic system cost?</h3>
              <p>Costs vary widely based on tank size, drain field design, soil conditions, and local permitting. A conventional septic system typically costs less than an alternative system like a mound or Eljen GSF system. Plumb-All provides free estimates with upfront pricing — <Link href="/contact" className="text-theme-3 hover:underline">contact us</Link> for a quote on your property.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you install alternative septic systems?</h3>
              <p>Yes. For properties with challenging soil, high groundwater, or failed perc tests, we install <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic systems</Link> including <Link href="/services/eljen-septic" className="text-theme-3 hover:underline">Eljen GSF</Link> and mound systems that work where conventional drain fields can&#39;t.</p>
            </div>
          </div>
        </div>

        {/* Financing */}
        <div className="w-full mb-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg">
            A new septic system or major repair is a significant investment. <Link href="/financing" className="text-theme-3 hover:underline font-semibold">Flexible financing options</Link> are available to help make your project affordable.
          </p>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <FaWater className="text-theme-3 text-3xl mr-3" />
            <h2 className="text-2xl font-semibold">Talk to a Septic System Expert Today</h2>
          </div>
          <p className="text-lg mb-6">
            Whatever your septic system needs — install, pump, inspect, or repair — Plumb-All&#39;s licensed team has you covered across Metro Atlanta. Free estimates, upfront pricing, fast scheduling.
          </p>
          <CTACall
            headerText="Need septic system service?"
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