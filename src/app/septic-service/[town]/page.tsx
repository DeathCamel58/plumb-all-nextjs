import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTACall from '@/components/cta/CTACall';
import { FaWater, FaCheckCircle, FaTools, FaExclamationTriangle, FaQuestion, FaBell, FaSmog, FaToilet, FaCalendarCheck, FaPhoneAlt, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import SepticServiceAreas from "@/components/SepticServiceAreas";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import Image from 'next/image';
import { septicTowns, getSepticTown } from '@/lib/septicTowns';
import { getJobPhoto } from '@/lib/jobPhotos';
import HeroImage from '../../../../public/images/septic-pumping.webp';

export const dynamicParams = false;

export async function generateStaticParams() {
  return septicTowns.map((town) => ({ town: town.slug }));
}

type Props = {
  params: Promise<{ town: string }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getSepticTown(slug);
  if (!town) return {};

  const title = `Septic Tank Pumping & Repair in ${town.name}, GA`;
  const description = town.metaDescription;
  const ogImageUrl = 'og-septic-tank-pumping-septic-pumping';
  const path = `/septic-service/${town.slug}`;

  return generateMetadataDict(title, description, ogImageUrl, path);
}

const services = [
  { name: 'Septic Tank Pumping', href: '/services/septic-tank-pumping', text: 'Routine pump-outs every 3–5 years, with a check of the baffles and sludge level.' },
  { name: 'Septic Repair', href: '/services/septic-repair', text: 'Baffles, lines, pumps, alarms and drain field repairs.' },
  { name: 'Septic Systems', href: '/services/septic-system', text: 'New and replacement tanks and conventional drain fields.' },
  { name: 'Eljen & Alternative Systems', href: '/services/alternative-septic', text: 'Options for small lots and soil that won’t pass for a conventional field.' },
];

const signs = [
  { icon: FaCalendarCheck, title: 'Due for Pumping', text: 'It’s been 3–5 years, or you’re not sure when it was last pumped.' },
  { icon: FaToilet, title: 'Slow Drains & Gurgling', text: 'Drains slowing down all over the house, or gurgling pipes.' },
  { icon: FaSmog, title: 'Sewage Smell', text: 'Odors in the house, in the yard, or near the tank.' },
  { icon: FaWater, title: 'Soggy Yard', text: 'Standing water or unusually green grass over the drain field.' },
  { icon: FaBell, title: 'Septic Alarm Going Off', text: 'A high-water alarm on the tank or pump chamber.' },
  { icon: FaExclamationTriangle, title: 'Sewage Backing Up', text: 'Sewage coming up in tubs, showers, or floor drains.' },
];

export default async function SepticTownPage({ params }: Props) {
  const { town: slug } = await params;
  const town = getSepticTown(slug);
  if (!town) notFound();

  const path = `/septic-service/${town.slug}`;
  const nearby = town.nearby
    .map((s) => getSepticTown(s))
    .filter((t) => t !== undefined);
  const photos = town.photos
    .map((s) => getJobPhoto(s))
    .filter((p) => p !== undefined);

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name={`Septic Service in ${town.name}, GA`}
        description={town.tagline}
        url={path}
        city={town.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Septic Tank Pumping", url: "/services/septic-tank-pumping" },
          { name: `${town.name}, GA`, url: path },
        ]}
      />
      <FAQSchema faqs={town.faqs} />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText={`Septic service in ${town.name}, GA`}
        title={`Septic Service in ${town.name}, GA`}
        subtitle={town.tagline}
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Local Septic Company in {town.name}</h2>
          {town.intro.map((paragraph, i) => (
            <p key={i} className="text-xl max-w-4xl mx-auto mb-6">{paragraph}</p>
          ))}
        </div>

        {/* Local experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                <FaClipboardList className="text-xl" />
              </div>
              <h2 className="text-2xl font-semibold">Our Septic Work in {town.name}</h2>
            </div>
            <p className="text-lg mb-4">
              <span className="font-bold text-theme-3">{town.jobVolume}</span> of septic jobs in {town.name}. The work we do most here:
            </p>
            <ul className="space-y-3">
              {town.commonWork.map((item) => (
                <li key={item} className="flex items-start">
                  <FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h2 className="text-2xl font-semibold">What We See in {town.name}</h2>
            </div>
            <p className="text-lg mb-4">{town.localNote}</p>
            <p className="text-lg mb-4">{town.tankNote}</p>
            <p className="text-sm text-gray-600">
              {town.county} County · ZIP {town.zips.join(', ')}
            </p>
          </div>
        </div>

        {/* Job photos */}
        {photos.length > 0 && (
          <div className="w-full mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {photos.some((photo) => photo.town === town.name) ? `Recent Septic Work in ${town.name}` : `Recent Septic Work Near ${town.name}`}
            </h2>
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

        {/* Backup and Alarm Callout */}
        <div className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Sewage Backing Up or Alarm Going Off in {town.name}?</h2>
          <p className="mb-4 text-lg">Cut back on water use (hold off on laundry, the dishwasher, and long showers), then call us. Waiting can put sewage in your home. Our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbers</Link> are available 24/7.</p>
          <a
            href="tel:+17709143877"
            className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold shadow"
          >
            <FaPhoneAlt className="inline-block mr-2" /> Call (770) 914-3877
          </a>
        </div>

        {/* When to Call */}
        <div className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">When to Call</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {signs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
                <Icon className="text-theme-3 text-2xl md:text-3xl mx-auto mb-3" />
                <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Septic Services in {town.name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-theme-3">{service.name}</h3>
                <p>{service.text}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Schedule Septic Service in {town.name}</h2>
          <p className="text-center mb-6">
            We can usually be at your {town.name} home within 24 hours. Free estimates and upfront pricing, so you&#39;ll know the cost before we start.
          </p>
          <CTACall
            headerText={`Contact us today for septic service in ${town.name}`}
            buttonText="Call us at 844 PLUMB-ALL"
          />
          <p className="text-center mt-2">
            Or <Link href="/contact" className="text-theme-3 hover:underline">request a quote online</Link>
          </p>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">{town.name} Septic Questions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {town.faqs.map((faq, i) => (
              <div key={faq.question} className={i < town.faqs.length - 1 ? 'mb-6' : ''}>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby towns */}
        {nearby.length > 0 && (
          <div className="w-full mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Septic Service Near {town.name}</h2>
            <ul className="flex flex-wrap justify-center gap-4">
              {nearby.map((t) => (
                <li key={t.slug}>
                  <Link href={`/septic-service/${t.slug}`} className="inline-block border border-gray-300 rounded-lg px-4 py-2 text-theme-3 hover:underline font-semibold">
                    {t.name}, GA
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Septic Service Areas */}
        <SepticServiceAreas current={town.slug} />
      </div>
    </div>
  );
}
