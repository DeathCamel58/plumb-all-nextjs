import React from 'react';
import Image from 'next/image';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaWrench, FaTools, FaLeaf, FaCheckCircle, FaQuestion, FaCalendarAlt } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Hydro Jetting';
  const description = 'We offer hydro jetting services to the Metro Atlanta Area. Jetting is an effective preventative maintenance that keeps your pipes running well.';
  const ogImageUrl = 'og-hydro-jetting-hydro-jetting-nozzle';
  const path = '/services/hydro-jetting';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function HydroJetting() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/hydro-jetting-nozzle.jpg"
          alt="Hydro Jetting Nozzle"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Hydro Jetting</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Professional Hydro Jetting Services</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Plumb-All&#39;s hydro jetting services are available throughout the Metro Atlanta Area, including Fayette County and Clayton County. This method utilizes high-pressure water to clear clogs, sludge, and debris from drains, supply lines, and septic fields. Over time, these lines can accumulate buildup, restricting the flow of water through them.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            While most companies only offer traditional drain machines, we go the extra mile with our hydro jetting services. Drain machines use a spiral cable to catch and bore through blockages, but they leave behind grease, sludge, and dirt in the pipes. Our hydro jetting services thoroughly clean problem pipes, addressing both the symptoms and underlying issues to prevent future problems.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            If you&#39;re experiencing frequent backups or improper draining, let us provide our expert jetting services to restore proper flow.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ready for Professional Hydro Jetting?</h2>
          <p className="text-center mb-6">
            Our expert technicians are ready to help you clear your pipes and restore proper flow to your plumbing system.
          </p>
          <CTACall
            headerText="Contact us today for fast, reliable service"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* What is Hydro Jetting & When to Use It */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* What is Hydro Jetting */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaQuestion className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">What is Hydro Jetting?</h3>
            </div>
            <p className="mb-4">
              High-pressure jetting is an efficient, economical, and environmentally safe way to clean drain and sewer pipes. Using state of the art pumps and flexible hoses, ordinary water is propelled under varying amounts of pressure into a sewer line, drain pipe, or septic field. A special nozzle mounted on the end of a heavy-duty hose has an array of forward and reverse water jets, which direct extremely powerful concentrated streams of water all the way to the pipe walls. Even the toughest blockages and buildup can&#39;t stand up to water jet machine cutting, which thoroughly cleans pipes.
            </p>
            <p className="mb-4">
              For a complete list of <Link href="/services/residential" className="text-theme-3 hover:underline">residential plumbing</Link> or <Link href="/services/commercial" className="text-theme-3 hover:underline">commercial plumbing</Link> services – including everything from toilet repair to grease trap cleaning and backflow services – call us! You can set up <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">regular appointments</Link> for water jetting maintenance or call us in an emergency too. We&#39;re available 24 hours a day, 7 days a week, 365 days a year – even holidays and weekends – to help get your plumbing system up and running smoothly again.
            </p>
          </div>

          {/* When should it get done */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaCalendarAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">When should it get done?</h3>
            </div>
            <p className="mb-4">
              Residences can benefit from annual jetting to help keep waste from backing up. This helps to make sure that when toilets flush, garbage disposals run, and sinks drain, it goes down.
            </p>
            <p className="mb-4">
              Restaurants and other commercial establishments typically require frequent high-pressure water jetting to remove mineral deposits, grease buildup, sludge and debris that accumulate in the lines. Clogs can cause down time, and down time in any industry means lost customers and revenue.
            </p>
            <p className="mb-4">
              Some businesses may require just one or two cleanings annually, while others benefit from monthly or quarterly cleanings. That&#39;s why many of our customers prefer to set up a scheduled program for water jetting service that keeps their drains flowing freely. A Plumb-All professional can recommend a jetting service schedule that best meets the needs of your business.
            </p>
            <p className="mb-4">
              Water jet machine service means cleaner pipes, which means fewer service calls, less down time, overall cost savings and one less thing for you to worry about.
            </p>
          </div>
        </div>

        {/* Environmentally Friendly Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaLeaf className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Environmentally Friendly</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Safe for the Environment</h3>
            <p className="mb-6">
              Most people use chemicals to attempt to clear these blockages, which can harm the environment, and the EPA recommends against. Because Hydro Jetting only uses high pressure water, there are no dangers to the environment.
            </p>
            <p className="mb-4">
              Our commitment to environmentally friendly practices extends to all our services. By choosing hydro jetting, you&#39;re not only getting a more effective cleaning solution but also making a choice that&#39;s better for our planet.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full mb-16 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Equipment</h3>
              <p>
                We use state-of-the-art hydro jetting equipment that can handle even the most stubborn blockages and buildup in your pipes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaWrench className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Technicians</h3>
              <p>
                Our plumbers have been through extensive training on all of the latest plumbing systems and standards to ensure quality service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaCheckCircle className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Thorough Service</h3>
              <p>
                We make sure that the job is done quickly and correctly so that you can move on with your day, and not worry about your plumbing.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-center text-lg mb-6">
              Though there are many plumbers out there, our <Link href="/services/plumber" className="text-theme-3 hover:underline">plumbers</Link> have been through extensive training on all of the latest plumbing systems and standards. We are a group of hard working individuals who will make sure that the job is done quickly and correctly so that you can move on with your day, and not worry about your plumbing.
            </p>
            <CTACall
              headerText="Need professional hydro jetting service?"
              buttonText="Call us at 844 PLUMB-ALL"
            />
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
