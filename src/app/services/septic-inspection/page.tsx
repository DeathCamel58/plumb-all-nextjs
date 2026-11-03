import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaCheckCircle, FaClipboardCheck, FaHome, FaFileSignature, FaSearch, FaShieldAlt, FaQuestion, FaCalendarCheck, FaExclamationTriangle, FaTools, FaClock } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import SepticServiceAreas from "@/components/SepticServiceAreas";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import { getJobPhoto } from '@/lib/jobPhotos';
import HeroImage from '../../../../public/images/jobs/septic-tank-open-hero-hampton.webp';
import ServiceReviews from '@/components/ServiceReviews';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Septic Tank Inspection in South Metro Atlanta';
  const description = 'Septic tank and system inspections for home buyers, sellers and homeowners in South Metro Atlanta. Written inspection letter, free estimates.';
  const ogImageUrl = 'og-septic-inspection-septic-system-overview';
  const path = '/services/septic-inspection';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

const faqs = [
  { question: "How often should a septic system be inspected?", answer: "The EPA recommends having a septic system inspected at least every 3 years. Most tanks also need pumping every 3 to 5 years, depending on the size of the tank and the household." },
  { question: "Do I need a septic inspection to buy or sell a home?", answer: "Many buyers, lenders and real estate agents ask for one before closing. An inspection shows the condition of the tank and drain field so there are no surprises after the sale. We provide a written inspection letter you can share with the other party." },
  { question: "What's in the septic inspection letter?", answer: "The letter documents the condition of your system: the tank, the baffles, how the system is draining, and any concerns we found, along with our recommended actions if something needs attention." },
  { question: "I don't know where my septic tank is. Can you still inspect it?", answer: "Yes. We locate the tank and dig up the lid, so you don't have to find it. If the lid is buried, we can add a riser so it sits at ground level and future inspections and pumpings are quicker." },
  { question: "How much does a septic inspection cost?", answer: "It depends on the system and how easy the tank is to reach. We give free estimates and quote the price before any work starts." },
  { question: "What areas do you serve?", answer: "We inspect septic systems across South Metro Atlanta, including Jonesboro, Fayetteville, McDonough, Stockbridge, Hampton, Ellenwood, Peachtree City, Tyrone, Locust Grove, Griffin, and Newnan." },
];

const checks = [
  { title: 'Locate the Tank', text: 'We find the tank and dig up the lid, so you don’t have to.' },
  { title: 'Sludge & Scum Levels', text: 'We measure what’s built up in the tank and tell you if it’s due for pumping.' },
  { title: 'Baffles & Tees', text: 'We check the inlet and outlet baffles that keep solids out of the drain field.' },
  { title: 'Tank Condition', text: 'We look for cracks, damage, and signs of leaks in the tank and lids.' },
  { title: 'Drain Field', text: 'We check how the system is draining and look for wet spots, odors, or a field that’s failing.' },
  { title: 'Pumps, Floats & Alarms', text: 'On systems with a pump tank, we check the pump, floats, and high-water alarm.' },
];

const galleryPhotos = [
  'septic-tank-scum-layer-jonesboro',
  'septic-tank-outlet-baffle-jonesboro',
  'septic-broken-baffle-jonesboro',
  'sewer-camera-inspection-2',
  'septic-effluent-filter-cleaning-jonesboro',
  'septic-risers-mcdonough',
];

export default function SepticInspection() {
  const photos = galleryPhotos
    .map((s) => getJobPhoto(s))
    .filter((p) => p !== undefined);

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Septic Tank Inspection"
        description="Septic tank and system inspections for home buyers, sellers and homeowners in South Metro Atlanta, with a written inspection letter."
        url="/services/septic-inspection"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Septic Inspection", url: "/services/septic-inspection" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Septic tank opened for inspection, showing the outlet baffle"
        title="Septic Tank Inspection"
        subtitle="For home sales and peace of mind · Written inspection letter · Free estimates · Licensed & insured"
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Know the Condition of Your Septic System</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            A septic inspection tells you what shape your tank and drain field are in before a small problem turns into a backup or a drain field replacement. Plumb-All inspects septic systems across South Metro Atlanta for home buyers, sellers, and homeowners who want to stay ahead of problems.
          </p>
          <p className="text-xl max-w-4xl mx-auto">
            We can usually be there within 24 hours, and our trucks carry a sewer camera, so if something looks wrong we can see inside the line on the same visit.
          </p>
        </div>

        {/* When You Need One */}
        <div className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">When You Need a Septic Inspection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHome className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Buying a Home</h3>
              <p>Find out what you&#39;re buying before closing, not after.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaFileSignature className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Selling a Home</h3>
              <p>A recent inspection letter answers the buyer&#39;s questions up front.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaCalendarCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">It&#39;s Been 3+ Years</h3>
              <p>The EPA recommends an inspection at least every 3 years.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaExclamationTriangle className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Signs of Trouble</h3>
              <p>Slow drains, odors, gurgling, or a soggy yard over the drain field.</p>
            </div>
          </div>
        </div>

        {/* What We Check */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaSearch className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">What We Check</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checks.map((check) => (
              <div key={check.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2 flex-shrink-0" />{check.title}
                </h3>
                <p>{check.text}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mt-6">
            If the line between the house and the tank is slow or backing up, we can run a sewer camera through it to find roots, cracks, or clogs. Learn more in our guide on <Link href="/news/article/what-to-expect-during-a-septic-inspection" className="text-theme-3 hover:underline">what to expect during a septic inspection</Link>.
          </p>
        </div>

        {/* Inspection Letter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                <FaClipboardCheck className="text-xl" />
              </div>
              <h2 className="text-2xl font-semibold">Septic Inspection Letter for Home Sales</h2>
            </div>
            <p className="text-lg mb-4">
              Buying or selling a home with a septic system? After the inspection, we put our findings in a written letter you can share with the buyer, seller, lender, or agent. It covers:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>The condition of the tank and baffles</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>How the system is draining</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>Any concerns we found</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>Recommended next steps, if anything needs attention</span></li>
            </ul>
          </div>
          <div className="md:col-span-5 bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">Schedule an Inspection</h2>
            <p className="text-center mb-6">
              Free estimates and upfront pricing. You&#39;ll know the cost before we start.
            </p>
            <CTACall
              headerText="Book your septic inspection"
              buttonText="Call us at 844 PLUMB-ALL"
            />
            <p className="text-center mt-2">
              Or <Link href="/contact" className="text-theme-3 hover:underline">request a quote online</Link>
            </p>
          </div>
        </div>

        {/* Photos */}
        {photos.length > 0 && (
          <div className="w-full mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">What We Find During Inspections</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <li key={photo.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <a href={`/images/jobs/${photo.slug}.webp`} target="_blank" rel="noopener">
                    <Image
                      src={`/images/jobs/sm/${photo.slug}.webp`}
                      alt={`${photo.alt} in ${photo.town}, GA`}
                      width={photo.smWidth}
                      height={photo.smHeight}
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </a>
                  <p className="p-3 text-sm">
                    {photo.alt} <span className="text-gray-500">· {photo.town}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* After the Inspection */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">If We Find a Problem</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              We explain what we found and quote the fix before any work starts. Because we handle every part of a septic system, you don&#39;t need a second company:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">Septic tank pumping</Link> when the tank is full</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><Link href="/services/septic-repair" className="text-theme-3 hover:underline">Baffle, line, pump, and drain field repair</Link></span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>Risers, so the lid is at ground level for next time</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span><Link href="/services/septic-system" className="text-theme-3 hover:underline">New tanks</Link> and <Link href="/services/eljen-septic" className="text-theme-3 hover:underline">Eljen drain fields</Link> when replacement is the answer</span></li>
            </ul>
            <p className="text-lg mt-4">If a repair needs a permit, we&#39;ll tell you up front, and we can pull it for you.</p>
          </div>
        </div>

        {/* Why Choose Plumb-All */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Why Choose Plumb-All</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClock className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Fast Scheduling</h3>
              <p>We can usually be there within 24 hours anywhere in our service area.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p>Plumbing and septic under one roof, serving South Metro Atlanta since 2003.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upfront Pricing</h3>
              <p>Free estimates with no hidden fees. You approve the price before we start.</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <ServiceReviews service="septic-inspection" />

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Septic Inspection Questions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {faqs.map((faq, i) => (
              <div key={faq.question} className={i < faqs.length - 1 ? 'mb-6' : ''}>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Septic Service Areas */}
        <SepticServiceAreas />

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Don&#39;t Guess About Your Septic System</h2>
          <p className="text-lg mb-6">
            Whether you&#39;re closing on a home or it&#39;s just been a while, an inspection tells you exactly where your system stands.
          </p>
          <CTACall
            headerText="Need a septic inspection?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
