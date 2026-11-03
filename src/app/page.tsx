import Image from "next/image";
import {FaHome, FaBuilding, FaWater, FaCheck, FaTimes, FaThumbsUp, FaTools, FaPhone, FaShieldAlt, FaAward, FaClock} from 'react-icons/fa';
import React from "react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {Metadata} from "next";
import HomeTabs from "@/components/HomeTabs";
import HomeTestimonials from "@/components/HomeTestimonials";
import {generateMetadataDict} from "@/components/header/metadata";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { serviceAreaTowns } from "@/lib/serviceArea";
import { septicTowns } from "@/lib/septicTowns";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Plumber & Septic Service in Jonesboro, GA';
  const description = 'Plumbing and septic service in Jonesboro and South Metro Atlanta since 2003: repairs, water heaters, drains and septic. Plumbers on call 24/7.';
  const ogImageUrl = 'og-home-page-our-team';
  const path = '/';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function Home() {
  return (
    <div>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full h-[500px] relative">
          <Image
            src="/images/vans.webp"
            alt="Plumb-All plumbing and septic service vans in Jonesboro, GA"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 home-bg-dark-50 flex items-center justify-center">
            <div className="text-white text-center max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing & Septic Experts in Jonesboro and South Metro Atlanta</h1>
              <p className="text-xl md:text-2xl mb-8">Serving Clayton, Henry, Fayette and nearby counties since 2003 · Plumbers available 24/7</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17709143877"
                  className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold"
                >
                  <FaPhone className="inline-block mr-2" /> Call (770) 914-3877
                </a>
                <a
                  href="https://clienthub.getjobber.com/client_hubs/4015938f-cada-4cbe-9e0f-3fa27b028598/public/work_request/new?utm_source=website"
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
              Plumbing and septic for homes and businesses, from a leaking pipe to a new drain field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="h-20 background-theme-1 flex items-center justify-center">
                <FaWater className="text-5xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Septic</h3>
                <p className="text-gray-600 mb-4">
                  Septic pumping, inspections, baffle and drain field repair, risers, and new conventional and Eljen systems.
                </p>
                <Link
                  href="/services/septic-system"
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

          <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">What We Do Most</h3>
            <p className="text-lg text-gray-700 mb-4">
              Plumb-All has handled plumbing and septic work across South Metro Atlanta since 2003, from our shop in
              Jonesboro. Our most requested services:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-lg">
              <li><Link href="/services/leak-detection" className="text-theme-3 hover:underline">Leak detection</Link>, including slab and hidden leaks</li>
              <li><Link href="/services/plumbing-repair" className="text-theme-3 hover:underline">Pipe and plumbing repair</Link></li>
              <li><Link href="/services/water-heater-replacement" className="text-theme-3 hover:underline">Water heater repair and replacement</Link>, tank and tankless</li>
              <li><Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">Drain cleaning</Link> and <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link></li>
              <li><Link href="/services/water-line-repair" className="text-theme-3 hover:underline">Water line</Link> and <Link href="/services/sewer-line-repair" className="text-theme-3 hover:underline">sewer line repair</Link></li>
              <li><Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">Septic tank pumping</Link> and <Link href="/services/septic-inspection" className="text-theme-3 hover:underline">septic inspections</Link></li>
              <li><Link href="/services/septic-repair" className="text-theme-3 hover:underline">Septic and drain field repair</Link></li>
              <li><Link href="/services/eljen-septic" className="text-theme-3 hover:underline">Eljen</Link> and <Link href="/services/alternative-septic" className="text-theme-3 hover:underline">alternative septic systems</Link></li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Plumbers are on call 24/7 for <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergencies</Link>, and
              we can usually be there within 24 hours anywhere in our service area. See <Link href="/services" className="text-theme-3 hover:underline">all services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Plumb-All Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Licensed plumbers and septic technicians working out of our shop in Jonesboro since 2003.
              When you call, it&#39;s our own team that shows up.
            </p>
          </div>
          <figure>
            <Image
              src="/images/our-team.webp"
              alt="The Plumb-All team with their service trucks outside the Plumb-All office in Jonesboro, GA"
              width={1440}
              height={961}
              sizes="(min-width: 1152px) 1120px, 100vw"
              className="w-full aspect-[16/7] object-cover object-[center_40%] rounded-lg shadow-md"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">
              The Plumb-All team at our shop, 218 N McDonough St, Jonesboro
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Plumb-All is based at 218 N McDonough St in Jonesboro. Our plumbers and septic crews cover South Metro Atlanta,
            including:
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {serviceAreaTowns.map((town) => {
              const septicPage = septicTowns.find((t) => t.name === town);
              return (
                <li key={town}>
                  {septicPage ? (
                    <Link href={`/septic-service/${septicPage.slug}`} className="inline-block border border-gray-300 rounded-full px-4 py-2 font-semibold text-theme-3 hover:underline">
                      {town}, GA
                    </Link>
                  ) : (
                    <span className="inline-block border border-gray-200 rounded-full px-4 py-2 font-semibold text-gray-700">{town}, GA</span>
                  )}
                </li>
              );
            })}
          </ul>
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
              href="https://phccga.memberclicks.net/index.php?option=com_community&view=profile&userid=2007416173&directory_search_id=2001417#/profile"
              className="inline-block transform transition duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/PHCC-logo.webp"
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

          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden relative">
            <Image
              src="/images/formbg.webp"
              alt="Plumbing pipes background"
              fill
              className="object-cover object-center z-0"
              sizes="100vw"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 home-bg-dark-50">
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
                      <p className="text-gray-300">Plumbers available 24/7</p>
                      <p className="text-gray-300">Office: Monday–Friday, 8am–4pm</p>
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
