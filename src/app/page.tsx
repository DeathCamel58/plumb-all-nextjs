import Image from "next/image";
import {FaHome, FaBuilding, FaCheck, FaTimes, FaThumbsUp} from 'react-icons/fa';
import React from "react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {Metadata} from "next";
import HomeTabs from "@/components/HomeTabs";
import HomeTestimonials from "@/components/HomeTestimonials";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All';
  const description = 'Plumb-All\'s expert plumbers have been tackling all types of plumbing and septic problems in South Atlanta since 2003.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/og-images/og-home-page-formbg.png';

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
      url: `/`,
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

export default function Home() {
  return (
    <div>
      <section className="w-full flex flex-col md:flex-row">
        {/* Left side with background image */}
        <div
          className="home-pipes-bg w-full bg-cover bg-center flex items-center justify-center p-8"
        >
          <div className="text-white text-center max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold">Plumb-All: Atlanta’s Best Plumbers</h1>
            <p className="text-xl mt-2">All your plumbing needs: solved!</p>
            <p className="mt-4">
              <a
                href="tel:+17709143877"
                className="inline-block border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-theme-3 transition"
              >
                Call Us At (770) 914-3877
              </a>
            </p>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="w-full md:w-1/3 flex flex-col">
          <div className="flex-1 p-6 text-white background-theme-1 justify-items-center text-center">
            <i className="fas fa-home fa-3x mb-2"></i>
            <FaHome className="text-6xl mb-4" />
            <h6 className="text-lg font-semibold">Residential</h6>
            <p className="mt-2 text-sm">
              We have tons of experience with water heaters, shower, septic tanks, and more!
            </p>
            <Link
              href="/services/residential"
              className="inline-block mt-3 border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-theme-3 transition text-sm"
            >
              Details
            </Link>
          </div>
          <div className="flex-1 p-6 text-white background-theme-2 justify-items-center text-center">
            <FaBuilding className="text-6xl mb-4" />
            <h6 className="text-lg font-semibold">Commercial</h6>
            <p className="mt-2 text-sm">
              If you want for a plumber for grease traps, commercial heaters, or something else, we’re here.
            </p>
            <Link
              href="/services/commercial"
              className="inline-block mt-3 border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-theme-3 transition text-sm"
            >
              Details
            </Link>
          </div>
          <div className="flex-1 p-6 text-white background-theme-3 justify-items-center text-center">
            <FaThumbsUp className="text-6xl mb-4" />
            <h6 className="text-lg font-semibold">Customer Service</h6>
            <p className="mt-2 text-sm">
              Our top goal is to leave two things behind us: Quality work and happy customers!
            </p>
            <Link
              href="contact"
              className="inline-block mt-3 border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-theme-3 transition text-sm"
            >
              Details
            </Link>
          </div>
        </aside>
      </section>

      {/* Unsurpassed Experience Section */}
      <section className="w-full bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Unsurpassed Experience</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            With years of experience working on plumbing and septic, we have the skills to work on any plumbing or
            septic system.
            As a member of the Plumbing Heating Cooling Contractors Association, you can rest assured that you’re
            getting the highest quality work.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a
              href="https://www.expertise.com/ga/fayetteville/plumbing"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Expertise-logo.svg"
                alt="Best Plumbers in Fayetteville Award"
                width={300}
                height={300}
                className="w-52 object-cover"
              />
            </a>

            <a
              href="https://phccga.memberclicks.net/index.php?option=com_community&view=profile&userid=2007416173&uuid=01785e52-bf79-428e-ab88-84a9f3e49098&current_page=1&directory_search_id=2001417"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/PHCC-logo.png"
                alt="Plumbing Heating Cooling Contractors Association Member"
                width={300}
                height={300}
                className="w-52 object-cover"
              />
            </a>

            <a
              href="https://www.loc8nearme.com/georgia/jonesboro/plumb-all/6312177/"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Loc8NearMe-logo.png"
                alt="Loc8NearMe Recommends Plumb-All"
                width={300}
                height={300}
                className="w-52 object-cover"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Tabbed Section */}
      <HomeTabs />

      {/* Only One Call */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-center mb-4">Only One Call</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          There’s no reason to call a plumbing company, and get told that they can’t work on your septic system. We do
          it all.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left font-semibold"></th>
              <th className="p-4 text-left font-semibold">Plumbing Company</th>
              <th className="p-4 text-left font-semibold">Septic Company</th>
              <th className="p-4 text-left font-semibold">Plumb-All</th>
            </tr>
            </thead>
            <tbody className="bg-white">
            <tr className="border-b">
              <td className="p-4 font-medium text-gray-700">Sink Repair</td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
              <td className="p-4 text-red-600 text-center"><FaTimes className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium text-gray-700">Field Line Repair</td>
              <td className="p-4 text-red-600 text-center"><FaTimes className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium text-gray-700">Toilet Installation</td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
              <td className="p-4 text-red-600 text-center"><FaTimes className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium text-gray-700">Baffle-T Installs</td>
              <td className="p-4 text-red-600 text-center"><FaTimes className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium text-gray-700">Hydro Jetting</td>
              <td className="p-4 text-red-600 text-center"><FaTimes className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Drain Cleaning</td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
              <td className="p-4 text-red-600 text-center"><FaTimes className="text-2xl" /></td>
              <td className="p-4 text-green-600 text-center"><FaCheck className="text-2xl" /></td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Reviews */}
      <HomeTestimonials />

      {/* Form */}
      <div className="w-full bg-white my-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">We can contact you!</h2>
          <p className="text-gray-600 text-lg mb-10">
            We’ll reach out asap to get your problem solved quickly.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-gray-900 rounded-lg shadow-md p-6 home-contact-form">
            {/* Left Info */}
            <div className="text-left text-white">
              <h3 className="text-2xl font-semibold mb-4">Talk to us</h3>
              <p className="mb-4 text-gray-300">
                Give us a short description of what&#39;s going on, and we&#39;ll reply asap!
              </p>
              <a
                href="tel:+17709143877"
                className="inline-block border border-theme-0 text-theme-0 px-4 py-2 rounded hover:bg-theme-0 hover:text-gray-900 transition"
              >
                Call Us At (770) 697-0105
              </a>
            </div>

            {/* Right Form */}
            <ContactForm onDarkBackground={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
