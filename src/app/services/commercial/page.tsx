import React from 'react';
import { FaBuilding, FaTools, FaWrench, FaClipboardCheck, FaCheckCircle, FaClock } from 'react-icons/fa';
import CTACall from "@/components/cta/CTACall";
import Link from "next/link";
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../../public/images/backflow.jpg';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Commercial';
  const description = 'Commercial plumbing problems are much more important to get solved quickly. Leaks, clogged pipes, or grease trap issues can hurt your business.';
  const ogImageUrl = 'og-commercial-services-backflow';
  const path = '/services/commercial';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

// Commercial service offerings
const commercialServices = [
  {
    title: "Emergency Repairs",
    description: "Fast response to leaks, clogs, and other urgent plumbing issues that can disrupt your business operations.",
    icon: <FaWrench className="text-4xl" />
  },
  {
    title: "Preventative Maintenance",
    description: "Regular inspections and maintenance to prevent costly emergency repairs and extend the life of your plumbing systems.",
    icon: <FaTools className="text-4xl" />
  },
  {
    title: "System Evaluations",
    description: "Comprehensive assessment of your plumbing infrastructure to identify potential issues before they become problems.",
    icon: <FaClipboardCheck className="text-4xl" />
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service for commercial clients, ensuring your business operations continue without interruption.",
    icon: <FaClock className="text-4xl" />
  }
];

export default function CommercialPlumbing() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Commercial Plumbing Services"
        title="Commercial Plumbing"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Expert Commercial Plumbing Solutions</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            When faced with commercial plumbing challenges, timing is crucial. A sudden leak, stubborn clog, or grease trap issue can disrupt operations and drive away valuable customers. With over two decades of experience, Plumb-All delivers reliable commercial plumbing services designed to minimize downtime and keep your business running smoothly.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Plumb-All for Commercial Services?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {commercialServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-theme-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTACall
              headerText="Need emergency commercial plumbing service?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
          </div>
        </div>

        {/* Commercial Facilities Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaBuilding className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Servicing All Commercial Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            <div className="md:col-span-7 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Commercial Solutions</h3>
              <p className="mb-6">
                Regardless of your business type – be it a school, restaurant, convenience store, or any other establishment – we have the expertise to address your plumbing needs. Equipped with years of industry knowledge and the right tools, our trained professionals efficiently resolve issues, prioritizing minimal disruption to your customers&#39; experiences.
              </p>
              <p className="mb-4">
                Our commercial clients appreciate our attention to detail, professional approach, and commitment to solving problems quickly and effectively. We understand that plumbing issues can significantly impact your bottom line, which is why we prioritize rapid response and lasting solutions.
              </p>
            </div>

            <div className="md:col-span-5 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Industries We Serve</h3>
              <p className="mb-4">We&#39;ve successfully serviced a variety of commercial facilities, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Restaurants and food service establishments</li>
                <li>Retail businesses and shopping centers</li>
                <li>Hotels, motels, and hospitality venues</li>
                <li>Sports and entertainment facilities</li>
                <li>Grocery stores and supermarkets</li>
                <li>Food processing facilities</li>
                <li>Educational institutions</li>
                <li>Government and public buildings</li>
                <li>Healthcare facilities and clinics</li>
                <li>Assisted living and retirement communities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Commercial Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaTools className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Preventative Maintenance</h3>
              </div>
              <p className="mb-4">
                While residential plumbing concerns often arise reactively, we understand the importance of maintaining commercial systems proactively. Plumb-All offers preferred customer agreements, providing regular preventative maintenance services. This ensures minor issues are detected and resolved before they escalate.
              </p>
              <p className="mb-4">
                Trust Plumb-All to keep your commercial plumbing systems in optimal condition, allowing you to focus on what matters most – running your business smoothly. Our maintenance programs can be customized to fit your specific needs and schedule.
              </p>
              <Link href="/services/plumbing-service-agreement" className="inline-block text-theme-3 hover:underline">Learn more about our service agreements →</Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                  <FaWrench className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Commercial Plumbing Services</h3>
              </div>
              <p className="mb-4">Our comprehensive commercial plumbing services include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete plumbing system evaluations</li>
                <li><Link href="/services/plumbing-installation" className="text-theme-3 hover:underline">Installation of new plumbing systems</Link></li>
                <li><Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">Hydro jetting</Link> for floors and lateral lines</li>
                <li><Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">Building drain cleaning</Link> and maintenance</li>
                <li><Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">Sewer line services</Link> and repairs</li>
                <li>Video camera inspections and diagnostics</li>
                <li><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Commercial water heater installation and service</Link></li>
                <li>Scheduled maintenance programs</li>
                <li><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Advanced leak detection</Link> services</li>
                <li><Link href="/services/backflow" className="text-theme-3 hover:underline">Backflow testing and certification</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">What Our Commercial Clients Say</h2>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-24 h-24 rounded-full background-theme-3 flex items-center justify-center text-white">
                  <FaCheckCircle className="text-5xl" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <p className="text-lg italic mb-4">
                  &#34;Plumb-All has been servicing our grocery store chain&#39;s plumbing needs for over 10 years. Their response time is exceptional, and their technicians understand the unique challenges of commercial grocery plumbing systems. They&#39;ve saved us from potential disasters multiple times with their preventative maintenance program across all our locations.&#34;
                </p>
                <p className="font-semibold">- Facilities Manager at a grocery chain headquartered in Stockbridge, GA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full mb-8 bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Ready to experience professional commercial plumbing service?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
