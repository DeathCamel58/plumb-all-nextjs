import Image from "next/image";
import {FaHome, FaBuilding, FaCheck, FaTimes, FaThumbsUp, FaTools, FaPhone, FaShieldAlt, FaAward, FaClock} from 'react-icons/fa';
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
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="home-pipes-bg w-full h-[500px] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Atlanta&#39;s Premier Plumbing & Septic Experts</h1>
              <p className="text-xl md:text-2xl mb-8">Solving all your plumbing needs since 2003</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17709143877"
                  className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold"
                >
                  <FaPhone className="inline-block mr-2" /> Call (770) 914-3877
                </a>
                <a
                  href="https://clienthub.getjobber.com/client_hubs/4015938f-cada-4cbe-9e0f-3fa27b028598/public/work_request/new?source=website"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition text-lg font-semibold"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential plumbing to commercial systems, we provide comprehensive solutions for all your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-20 background-theme-1 flex items-center justify-center">
                <FaHome className="text-5xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Residential</h3>
                <p className="text-gray-600 mb-4">
                  Expert solutions for water heaters, showers, septic tanks, and all your home plumbing needs.
                </p>
                <Link
                  href="/services/residential"
                  className="inline-block background-theme-1 text-white px-4 py-2 rounded hover:background-theme-2 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-20 background-theme-2 flex items-center justify-center">
                <FaBuilding className="text-5xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Specialized services for grease traps, commercial water heaters, and business plumbing systems.
                </p>
                <Link
                  href="/services/commercial"
                  className="inline-block background-theme-2 text-white px-4 py-2 rounded hover:background-theme-3 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-20 background-theme-3 flex items-center justify-center">
                <FaTools className="text-5xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
                <p className="text-gray-600 mb-4">
                  Fast response for urgent plumbing issues. We&#39;re available when you need us most.
                </p>
                <Link
                  href="/services/emergencies"
                  className="inline-block background-theme-3 text-white px-4 py-2 rounded hover:background-theme-1 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Plumb-All</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience and a commitment to excellence, we deliver superior plumbing and septic services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mx-auto mb-4">
                <FaAward className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="/services" className="hover:text-theme-3 transition">Expertise</Link>
              </h3>
              <p className="text-gray-600">
                Certified professionals with years of experience in all plumbing systems.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mx-auto mb-4">
                <FaShieldAlt className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="/services/plumbing-repair" className="hover:text-theme-3 transition">Quality</Link>
              </h3>
              <p className="text-gray-600">
                Premium materials and workmanship backed by our satisfaction guarantee.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mx-auto mb-4">
                <FaClock className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="/services/emergencies" className="hover:text-theme-3 transition">Reliability</Link>
              </h3>
              <p className="text-gray-600">
                Prompt service with clear communication and on-time appointments.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mx-auto mb-4">
                <FaThumbsUp className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="/services/plumbing-service-agreement" className="hover:text-theme-3 transition">Customer Focus</Link>
              </h3>
              <p className="text-gray-600">
                Dedicated to exceeding expectations with personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As members of professional associations and recipients of industry awards, we maintain the highest standards of service.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <a
              href="https://www.expertise.com/ga/fayetteville/plumbing"
              className="inline-block transform transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Expertise-logo.svg"
                alt="Best Plumbers in Fayetteville Award"
                width={200}
                height={200}
                className="w-52 object-cover"
              />
            </a>

            <a
              href="https://phccga.memberclicks.net/index.php?option=com_community&view=profile&userid=2007416173&uuid=01785e52-bf79-428e-ab88-84a9f3e49098&current_page=1&directory_search_id=2001417"
              className="inline-block transform transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/PHCC-logo.png"
                alt="Plumbing Heating Cooling Contractors Association Member"
                width={200}
                height={200}
                className="w-52 object-cover"
              />
            </a>

            <a
              href="https://www.loc8nearme.com/georgia/jonesboro/plumb-all/6312177/"
              className="inline-block transform transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Loc8NearMe-logo.svg"
                alt="Loc8NearMe Recommends Plumb-All"
                width={200}
                height={200}
                className="w-52 object-cover"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Tabbed Section */}
      <HomeTabs />

      {/* Comparison Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One Call Does It All</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Unlike other companies that specialize in either plumbing or septic, we handle both—saving you time and hassle.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full">
              <thead className="background-theme-4 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-lg">Service</th>
                  <th className="py-4 px-6 text-center font-semibold text-lg">Plumbing Company</th>
                  <th className="py-4 px-6 text-center font-semibold text-lg">Septic Company</th>
                  <th className="py-4 px-6 text-center font-semibold text-lg">Plumb-All</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link href="/services/sink-repair" className="hover:text-theme-3 transition">Sink Repair</Link>
                  </td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-red-600 text-center"><FaTimes className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link href="/services/septic-repair" className="hover:text-theme-3 transition">Field Line Repair</Link>
                  </td>
                  <td className="py-4 px-6 text-red-600 text-center"><FaTimes className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link href="/services/toilet-installation" className="hover:text-theme-3 transition">Toilet Installation</Link>
                  </td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-red-600 text-center"><FaTimes className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link href="/services/septic-tank-pumping" className="hover:text-theme-3 transition">Baffle-T Installs</Link>
                  </td>
                  <td className="py-4 px-6 text-red-600 text-center"><FaTimes className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link href="/services/hydro-jetting" className="hover:text-theme-3 transition">Hydro Jetting</Link>
                  </td>
                  <td className="py-4 px-6 text-red-600 text-center"><FaTimes className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link href="/services/drain-cleaning" className="hover:text-theme-3 transition">Drain Cleaning</Link>
                  </td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-red-600 text-center"><FaTimes className="text-2xl inline-block" /></td>
                  <td className="py-4 px-6 text-green-600 text-center"><FaCheck className="text-2xl inline-block" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <HomeTestimonials />

      {/* Contact Form */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Link href="/contact" className="hover:text-theme-3 transition">Get in Touch</Link>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a plumbing issue? We&#39;ll reach out quickly to solve your problem.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="mb-8 text-gray-300 text-lg">
                  Give us a brief description of your plumbing needs, and our team will get back to you promptly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <a href="tel:+17709143877" className="text-gray-300 hover:text-white transition">
                        (770) 914-3877
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                      <FaClock className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Business Hours</h4>
                      <p className="text-gray-300">Monday-Friday: 8am-5pm</p>
                      <p className="text-gray-300">Emergency service available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <ContactForm onDarkBackground={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
