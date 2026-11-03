import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaCheckCircle, FaHome, FaLeaf, FaStar, FaQuestion, FaShieldAlt, FaClock, FaClipboardCheck, FaDollarSign, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import SepticServiceAreas from "@/components/SepticServiceAreas";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HeroImage from '../../../../public/images/septic-system-overview.webp';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Certified Eljen Septic Installer in Metro Atlanta';
  const description = 'Certified Eljen installer since 2003, serving South Metro Atlanta, Conyers and Covington: soil test, design, permit and install. Free estimates.';
  const ogImageUrl = 'og-eljen-septic-septic-system-overview';
  const path = '/services/eljen-septic';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

const faqs = [
  { question: "How much does an Eljen septic system cost?", answer: "It depends on the size of the home (the number of bedrooms sets the system size), the soil test results, the lot's size, slope and access for equipment, whether a pump tank is needed, and whether the existing septic tank can be reused. An Eljen system usually costs more than a conventional drain field, but on a lot that won't pass for a conventional field it's often the most practical option. We give free estimates, and financing is available." },
  { question: "How long do Eljen septic systems last?", answer: "With routine pumping and inspections, an Eljen system is built to last for decades. Like any septic system, the biggest threat is solids reaching the drain field, so keeping the tank pumped on schedule matters most." },
  { question: "How much space does an Eljen system need?", answer: "Less than a conventional drain field. The exact size depends on your soil, the size of the home, and the county's sizing rules, which the engineered design accounts for." },
  { question: "Are you a certified Eljen installer?", answer: "Yes. Plumb-All is a certified Eljen installer, and we've been installing Eljen systems since 2003. One of our installations is featured in Eljen's own installer training materials." },
  { question: "Are Eljen systems approved in Georgia?", answer: "Yes. Eljen GSF systems are approved for use in Georgia. Each installation still needs a soil test, a design, and a permit from the county Environmental Health office, which we handle." },
  { question: "Do you install Eljen systems in Conyers and Covington?", answer: "Yes. We install and service Eljen and other septic systems in Conyers, Covington, and across South Metro Atlanta, including Jonesboro, Fayetteville, Tyrone, Senoia, McDonough and Stockbridge." },
  { question: "Are you an Eljen distributor?", answer: "No. We're a certified Eljen installer, not a parts distributor. You don't need to buy anything yourself; the Eljen modules and all materials are part of our installation quote." },
  { question: "Do Eljen systems require special maintenance?", answer: "Not much beyond any septic system: pump the tank every few years, have the system inspected, and keep the effluent filter clean. If your system has a pump tank, the pump, floats and alarm should be checked about once a year." },
];

export default function EljenSeptic() {
  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Eljen Septic System Installation"
        description="Certified Eljen installer since 2003. Eljen GSF septic system installation across South Metro Atlanta, Conyers and Covington, including soil test, design, permit and installation."
        url="/services/eljen-septic"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Eljen GSF Septic Systems", url: "/services/eljen-septic" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Diagram of a septic system with an Eljen drain field"
        title="Eljen Septic System Installation – Metro Atlanta"
        subtitle="Soil test, design, permit and installation · Free estimates · Financing available"
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Eljen Septic Installation in Metro Atlanta, Conyers and Covington</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Looking for an Eljen septic installer near you? Plumb-All installs Eljen Geotextile Sand Filter (GSF) systems, a proven <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic system</Link> for lots where the soil, slope or space won&#39;t allow a conventional drain field.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            We&#39;re a certified Eljen installer and have been installing Eljen systems since 2003, from Fayetteville, Tyrone and Senoia to Conyers and Covington. We handle every step: the soil test, the design, the county permit and the installation.
          </p>
          <div className="max-w-4xl mx-auto bg-blue-50 border-l-4 border-theme-3 rounded-lg p-4 text-left">
            <p className="text-lg font-medium text-gray-700">
              <strong>Featured by Eljen:</strong> one of our Eljen installations is featured in Eljen&#39;s own installer
              training materials.
            </p>
          </div>
        </div>

        {/* Why Choose Plumb-All */}
        <div className="w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClock className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p>We&#39;ll assess your property and determine if Eljen GSF is the right fit — no obligation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Certified Eljen Installer</h3>
              <p>Installing Eljen systems since 2003, plus the pumping and repairs that keep them running.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upfront Pricing</h3>
              <p>You&#39;ll know the full cost before any work begins. No surprise fees.</p>
            </div>
          </div>
        </div>

        {/* Image and Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center">Ready for an Advanced Septic Solution?</h2>
              <p className="text-center mb-6">
                Don&#39;t let challenging soil conditions limit your property options. Our Eljen GSF specialists are ready to help.
              </p>
              <CTACall
                headerText="Contact us today for a free Eljen GSF consultation"
                buttonText="Call us at 844 PLUMB-ALL"
              />
              <p className="text-center mt-2">
                Or <Link href="/contact" className="text-theme-3 hover:underline">request a quote online</Link>
              </p>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/septic-system-overview.webp"
                alt="Eljen GSF Septic System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Eljen GSF Benefits */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaStar className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Benefits of Eljen GSF Systems</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaHome className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Property Advantages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Works in difficult soil conditions where traditional systems fail</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Fits in less space than a conventional drain field</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Built to last for decades with routine pumping and inspections</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Can make a lot buildable when it won&#39;t pass for a conventional septic system</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaLeaf className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Environmental Benefits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Superior wastewater treatment and filtration</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Reduces environmental impact compared to traditional systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Provides nutrient-rich water to surrounding soil</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>Helps maintain healthier groundwater</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Eljen GSF Works */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaWrench className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">How Eljen GSF Systems Work</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Eljen GSF (Geotextile Sand Filter) systems use an innovative multi-stage approach to wastewater treatment:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Wastewater flows from your home to the septic tank where solids settle</li>
              <li>Partially treated effluent moves to the GSF modules</li>
              <li>The GSF modules contain geotextile fabric and sand that provide superior filtration</li>
              <li>Beneficial bacteria develop on the geotextile fabric, providing biological treatment</li>
              <li>The sand filter provides final polishing before the treated water returns to the soil</li>
            </ol>
            <p>
              This multi-stage process ensures thorough treatment even in challenging soil conditions, making it an ideal solution for properties with high groundwater, clay soils, or limited space.
            </p>
          </div>
        </div>

        {/* Cost */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaDollarSign className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">How Much Does an Eljen Septic System Cost?</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              Every Eljen system is designed for its lot, so the price depends on your property. These are the things that
              move the price the most:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><strong>Size of the home.</strong> The number of bedrooms sets how large the system must be.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><strong>Soil test results.</strong> Poorer soil can mean a larger or deeper system.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><strong>Lot size, slope and access.</strong> Tight or steep lots take more work and equipment.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><strong>Pump tank.</strong> If the drain field sits uphill from the tank, a pump tank and alarm are needed.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><strong>The existing tank.</strong> Reusing a sound tank costs less than replacing it.</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><strong>Design and permit.</strong> The soil test and engineered design come first, before the county issues a permit.</span></li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-theme-3 mb-4">
              <p className="font-medium text-gray-700">
                <strong>Eljen vs. a conventional drain field:</strong> an Eljen system usually costs more than a
                conventional field. But when a lot fails a conventional soil test or doesn&#39;t have room for one, Eljen is
                often the most practical way to get a working septic system.
              </p>
            </div>
            <p className="text-lg">
              We give free estimates and quote the full price before any work begins.{' '}
              <Link href="/financing" className="text-theme-3 hover:underline font-semibold">Financing</Link> is available.
            </p>
          </div>
        </div>

        {/* Our Installation Process */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Our Eljen GSF Installation Process</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              We handle the whole project, so you deal with one company from the soil test to the final inspection:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">1. Soil Test</h3>
                <p>We test the soil where the system will go to find out how well it drains.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">2. Design</h3>
                <p>We design an Eljen system sized for your home, soil and lot.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">3. Permit</h3>
                <p>We pull the permit from your county&#39;s Environmental Health office.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">4. Installation</h3>
                <p>Our crew installs the tank, Eljen modules and lines, and restores the yard.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">5. Inspection</h3>
                <p>The county inspects the system before it&#39;s covered and put into service.</p>
              </div>
            </div>
            <p>
              After installation, we provide comprehensive maintenance guidance and ongoing support to ensure your system continues to perform at its best. If issues arise down the road, our <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair services</Link> are always available.
            </p>
          </div>
        </div>

        {/* Customer review */}
        <div className="w-full mb-16 bg-white p-6 rounded-lg shadow-md border-l-4 border-theme-3">
          <FaQuoteLeft className="text-theme-3 text-2xl mb-3" />
          <p className="text-lg italic mb-3">
            &#34;Contacted Plumb-All about installing Eljen septic system. Ryan came out and provided specifics and pricing on
            installation. They coordinated acquiring all of the required permits and tests needed. Steven H. and his asst
            came out and installed the system.&#34;
          </p>
          <p className="text-sm text-gray-600">Google review, October 2023 · ★★★★★</p>
        </div>

        {/* Where we install */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Where We Install Eljen Systems</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              We install Eljen systems across South Metro Atlanta and east to <strong>Conyers</strong> (Rockdale County) and{' '}
              <strong>Covington</strong> (Newton County), where many lots have the clay soil and slopes that make a
              conventional drain field hard to permit. Recent Eljen work includes{' '}
              <Link href="/septic-service/fayetteville-ga" className="text-theme-3 hover:underline">Fayetteville</Link>, Tyrone,
              Senoia, <Link href="/septic-service/jonesboro-ga" className="text-theme-3 hover:underline">Jonesboro</Link> and Riverdale.
            </p>
            <p className="text-lg">
              Not sure whether your lot needs an alternative system? A <Link href="/services/septic-inspection" className="text-theme-3 hover:underline">septic inspection</Link>{' '}
              or soil test is the first step.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {faqs.map((faq, i) => (
              <div key={faq.question} className={i < faqs.length - 1 ? 'mb-6' : ''}>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
            <p className="mt-6">See our guide on <Link href="/news/article/how-to-maintain-your-septic-system" className="text-theme-3 hover:underline">how to maintain your septic system</Link>.</p>
          </div>
        </div>

        {/* Financing */}
        <div className="w-full mb-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg">
            Eljen GSF systems are a significant investment. <Link href="/financing" className="text-theme-3 hover:underline font-semibold">Flexible financing options</Link> are available to help make your project affordable.
          </p>
        </div>

        {/* Septic Service Areas */}
        <SepticServiceAreas />

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Solve Your Septic Challenges?</h2>
          <p className="text-lg mb-6">
            Contact Plumb-All today to learn how an Eljen GSF system can provide the right septic solution for your property. Free consultations available.
          </p>
          <CTACall
            headerText="Schedule your free consultation"
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
