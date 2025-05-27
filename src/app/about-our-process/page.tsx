import React from 'react';
import Image from 'next/image';
import { FaClock, FaTruck, FaWrench, FaTint, FaCheckCircle, FaPhoneAlt, FaTools, FaClipboardCheck, FaHandshake, FaStar, FaQuoteLeft } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import {Metadata} from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: About Us';
  const description = 'Our company has been serving South Atlanta since 2003, and our process and our values have always focused on quality workmanship and customer relationships.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/api/og?title=news&image=/images/our-team.jpg';

  const env = process.env.NODE_ENV;

  return {
    metadataBase: env === 'production' ? new URL('https://plumb-all.com') : new URL('http://127.0.0.1:3000'),
    title: finalTitle,
    description: description,
    icons: {
      icon: '/logo/icon.png'
    },
    openGraph: {
      title: finalTitle,
      description: description,
      url: `/about-our-process`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Plumb-All Logo'
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: description,
      images: [ogImageUrl],
      site: '@PlumbAll'
    }
  };
}

// Testimonials data
const testimonials = [
  {
    text: "Their process was smooth from start to finish. The technicians were professional and explained everything clearly.",
    author: "Michael R.",
    stars: 5,
  },
  {
    text: "I was impressed by how organized and efficient their team was. They followed a clear process and got the job done right.",
    author: "Sarah T.",
    stars: 5,
  },
  {
    text: "The step-by-step approach they took to solving my plumbing issue gave me confidence in their expertise.",
    author: "David L.",
    stars: 5,
  },
];

export default function AboutOurProcess() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/our-team.jpg"
          alt="Our Team"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Our Process</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Approach to Excellence</h1>
          <p className="text-xl max-w-4xl mx-auto">
            At Plumb-All, we&#39;ve developed a systematic approach to plumbing and septic services that ensures quality, efficiency, and customer satisfaction. Our process is designed to provide you with peace of mind from the moment you contact us until the job is complete.
          </p>
        </div>

        {/* Our Process Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Step 1 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white font-bold text-xl">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Initial Contact</h3>
                <p className="mb-3">
                  When you call Plumb-All, our friendly staff will gather information about your plumbing needs and schedule a convenient appointment time. For emergencies, we prioritize your call and dispatch a technician immediately.
                </p>
                <a href="tel:+17709143877" className="flex items-center text-white background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition">
                  <FaPhoneAlt className="mr-2" />
                  <span>Quick response guaranteed</span>
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white font-bold text-xl">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Diagnosis</h3>
                <p className="mb-3">
                  Our licensed technicians arrive at your location and conduct a thorough assessment of the issue. We use advanced diagnostic tools to identify the root cause of your plumbing problem.
                </p>
                <div className="flex items-center text-theme-3 py-2">
                  <FaTools className="mr-2" />
                  <span>Comprehensive evaluation</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white font-bold text-xl">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Transparent Quote</h3>
                <p className="mb-3">
                  After diagnosing the issue, we provide a clear, detailed quote before any work begins. We explain the problem, recommended solution, and all associated costs so there are no surprises.
                </p>
                <div className="flex items-center text-theme-3">
                  <FaClipboardCheck className="mr-2" />
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white font-bold text-xl">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Expert Execution</h3>
                <p className="mb-3">
                  Once you approve the quote, our skilled technicians get to work using industry-best practices and quality materials. We work efficiently while maintaining the highest standards of workmanship.
                </p>
                <div className="flex items-center text-theme-3">
                  <FaWrench className="mr-2" />
                  <span>Quality craftsmanship</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white font-bold text-xl">5</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Clean-Up & Inspection</h3>
                <p className="mb-3">
                  After completing the work, we clean the area thoroughly and conduct a final inspection to ensure everything is functioning properly. We take pride in leaving your space as clean as we found it.
                </p>
                <div className="flex items-center text-theme-3">
                  <FaCheckCircle className="mr-2" />
                  <span>Thorough quality check</span>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white font-bold text-xl">6</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Follow-Up</h3>
                <p className="mb-3">
                  We follow up after service to ensure your complete satisfaction. Our work is backed by a satisfaction guarantee, and we&#39;re always available if you have any questions or concerns.
                </p>
                <div className="flex items-center text-theme-3">
                  <FaHandshake className="mr-2" />
                  <span>Satisfaction guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitments Section */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commitments</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 24/7 Service */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaClock className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Service</h3>
              <p className="text-center">
                We understand the frustration of waiting for plumbing issues to be resolved. That&#39;s why we offer 24/7 emergency services to our customers. Whether it&#39;s day or night, we&#39;re always available to assist you with any urgent plumbing needs. Don&#39;t hesitate to call us – we&#39;re here to help!
              </p>
            </div>

            {/* Fast Response */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTruck className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Response Times</h3>
              <p className="text-center">
                Our fleet of vehicles is strategically positioned to allow us to arrive at your location in record time, ready to resolve your plumbing issues. Whether it&#39;s an emergency or routine maintenance, we prioritize fast response times to ensure minimal disruption to your daily routine.
              </p>
            </div>

            {/* Fully Equipped */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Equipped Teams</h3>
              <p className="text-center">
                To ensure efficient service, we come fully equipped with the necessary materials and tools for most standard plumbing jobs. This allows us to arrive at your location ready to work, without the need to make additional trips for materials. Our preparedness enables us to complete your job quickly and effectively, minimizing any inconvenience to you.
              </p>
            </div>

            {/* Water Damage */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTint className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Water Damage Specialists</h3>
              <p className="text-center">
                If you&#39;re experiencing water damage in your home but can&#39;t determine the source, our team can quickly locate and address the issue. By identifying the root cause of the problem, we can prevent any further damage to your property. Don&#39;t let water damage go unchecked – call us today to locate and stop the problem.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <CTACall headerText="Ready to experience our professional process firsthand?" buttonText="Call us at 844 PLUMB-ALL" />
        </div>

        {/* Testimonials Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-theme-3 mb-4">
                  <FaQuoteLeft className="text-3xl" />
                </div>
                <p className="mb-4 italic">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{testimonial.author}</p>
                  <div className="flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company History */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row mb-8 items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/our-team.jpg"
                    alt="Plumbing History"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4">
                  Founded in 2003 by Jamey Hesterlee, HIG Plumbing and Septic has been serving the Atlanta communities of Jonesboro, Morrow, Riverdale, Fayetteville, and beyond. As our business grew, we realized our branding needed to evolve with the times, and in 2018, we changed our name to Plumb-All.
                </p>
                <p className="mb-4">
                  Our team is comprised of licensed Master and Journeyman Plumbers who prioritize customer service and quality workmanship. With a sizable crew and fleet of vehicles, we&#39;re able to provide rapid response times for both emergencies and routine maintenance.
                </p>
                <p className="mb-4">
                  At Plumb-All, we specialize in all types of septic repair, including <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic</Link>, septic drain repair, and <Link href="/services/septic-repair" className="text-theme-3 hover:underline">leach field repair</Link>. We&#39;re also skilled at addressing any plumbing issue you may have. Don&#39;t just take our word for it – check out our outstanding reviews on Google Maps and Yelp to see what our satisfied customers have to say.
                </p>
                <p className="mb-4">
                  To learn more about our services, give us a call at <a href="tel:+17709143877" className="text-theme-3 hover:underline">(770) 914-3877</a> or <a href="mailto:info@plumb-all.com?subject=Plumb-All" className="text-theme-3 hover:underline">email us</a>. We&#39;re excited to serve you and your plumbing needs!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall headerText="Ready to experience our professional process firsthand?" buttonText="Call us at 844 PLUMB-ALL" />
        </div>
      </div>
    </div>
  );
}
