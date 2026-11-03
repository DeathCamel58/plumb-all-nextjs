import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTACall from '@/components/cta/CTACall';
import { FaCheckCircle, FaVideo, FaSearch, FaShieldAlt, FaQuestion, FaExclamationTriangle, FaTools, FaClock, FaClipboardCheck, FaMapMarkerAlt } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import { getJobPhoto } from '@/lib/jobPhotos';
import { serviceAreaTowns } from '@/lib/serviceArea';
import HeroImage from '../../../../public/images/jobs/sewer-line-trench-cleanout-jonesboro.webp';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Sewer Line Repair & Camera Inspection';
  const description = 'Sewer line repair, replacement and camera inspection in Jonesboro and South Metro Atlanta. We find the problem on camera first, then quote the fix.';
  const ogImageUrl = 'og-sewer-line-repair-roots-in-pipe';
  const path = '/services/sewer-line-repair';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

const faqs = [
  { question: "How do I know if my sewer line is clogged or broken?", answer: "More than one drain backing up at once, a toilet that gurgles when the shower or washer drains, sewage coming up in the lowest drain in the house, a sewer smell in the yard, or a soggy spot over the line. A single slow sink is usually just that drain. Several at once usually means the main line." },
  { question: "What does a sewer camera inspection show?", answer: "Roots growing through joints, cracks and breaks, crushed or collapsed sections, low spots (bellies) where water sits, separated joints, and grease or debris buildup. We locate the camera head from the surface, so we know exactly where and how deep the problem is before anyone digs." },
  { question: "How long does a sewer camera inspection take?", answer: "It depends on how long the line is and what we find along the way. We run the camera as far as we need to find the problem, and we record the video." },
  { question: "Do you have to dig up the whole yard to fix a sewer line?", answer: "Usually not. Because the camera shows exactly where the damage is, we dig only at that spot and replace the bad section. If the line is failing end to end, we replace the full run from the house to the tap." },
  { question: "Is it safe to dig a deep trench for a sewer line?", answer: "Our plumbers hold OSHA trench safety certification, and we shore deeper trenches so the walls can't cave in while we work." },
  { question: "Do you discount the camera inspection if you do the repair?", answer: "Yes. If we do the repair, we discount the camera inspection fee." },
  { question: "Can you camera and repair the line to my septic tank?", answer: "Yes. We inspect and repair the line between the house and the septic tank, and we can replace it with a new line and a cleanout. For the tank and drain field, see our septic repair service." },
  { question: "Do I need a permit for sewer line repair?", answer: "Some sewer repairs need one. We tell you up front when a permit is required, and we can pull it for you." },
  { question: "How much does sewer line repair cost?", answer: "It depends on how deep the line is, how much pipe has to be replaced, and what's on top of it. We find the problem on camera first and give you a firm quote before any digging starts." },
];

const signs = [
  { title: 'Several Drains Backing Up', text: 'Toilets, tubs and floor drains backing up at the same time point to the main line, not one fixture.' },
  { title: 'Sewage in the Lowest Drain', text: 'Water coming up in a tub or shower when you flush or run the washer means the line is blocked.' },
  { title: 'Gurgling Toilets', text: 'Air pushed back through the drains when water can’t get past a clog or a sag.' },
  { title: 'Clogs That Keep Coming Back', text: 'If a line has to be cleared every few months, something like roots or a broken section is catching waste.' },
  { title: 'Sewer Smell or Soggy Yard', text: 'Odors, lush green strips or wet spots over the line can mean it’s leaking underground.' },
  { title: 'Older Home or Big Trees', text: 'Older lines and lots with large trees are the most likely to have roots, cracks or sagging pipe.' },
];

const repairs = [
  { title: 'Spot Repair', text: 'When the camera finds one broken, crushed or bellied section, we dig at that spot and replace just that part of the line.' },
  { title: 'Sewer Line Replacement', text: 'When the line is failing end to end, we replace the full run from the house to the tap or the septic tank.' },
  { title: 'Cleanout Installation', text: 'We add a cleanout at ground level so the line can be cleared and inspected later without digging.' },
  { title: 'Drain Line Under the House', text: 'We replace broken building drains in the crawl space before they reach the yard line.' },
  { title: 'Clearing Clogs and Roots', text: 'We clear the line with a sewer machine or hydro-jetter, then run the camera to confirm it’s actually clear.' },
  { title: 'Sewage Ejector Pumps', text: 'For basements and fixtures that sit below the sewer line, we install and replace ejector pumps.' },
];

const steps = [
  { title: 'Camera Inspection', text: 'We run the camera through the line and you can watch the feed with us. The video is recorded.' },
  { title: 'Locate & Mark', text: 'A locator picks up the camera head through the ground, so we mark exactly where and how deep the problem is.' },
  { title: 'Upfront Quote', text: 'We explain what we found and quote the repair. You approve the price before we dig.' },
  { title: 'Repair', text: 'We dig at the marked spot and replace the damaged pipe. Deeper trenches are shored, and our plumbers are OSHA trench safety certified.' },
  { title: 'Test & Backfill', text: 'We check the flow, run the camera again if needed, and backfill the trench.' },
];

const galleryPhotos = [
  'sewer-camera-inspection-2',
  'sewer-camera-inspection-4',
  'sewer-line-new-pvc-jonesboro',
  'sewer-line-cleanout-atlanta',
  'sewer-line-new-pipe-jonesboro',
  'sewer-line-repair-dig-atlanta',
  'building-drain-replacement-jonesboro-1',
  'building-drain-replacement-jonesboro-2',
  'septic-root-intrusion-hampton',
];

export default function SewerLineRepair() {
  const photos = galleryPhotos
    .map((s) => getJobPhoto(s))
    .filter((p) => p !== undefined);

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Sewer Line Repair and Camera Inspection"
        description="Sewer line camera inspection, repair and replacement in Jonesboro and South Metro Atlanta."
        url="/services/sewer-line-repair"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Sewer Line Repair", url: "/services/sewer-line-repair" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="New sewer line and cleanout in a trench in Jonesboro, GA"
        title="Sewer Line Repair & Camera Inspection"
        subtitle="Camera on every truck · Recorded video · Upfront pricing · Licensed & insured"
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See the Problem Before Anyone Digs</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            A backed-up or broken sewer line is one of the worst problems a home can have, and guessing at the cause gets expensive. Plumb-All starts every sewer job with a camera, so you see exactly what&#39;s wrong and where before we quote the repair.
          </p>
          <p className="text-xl max-w-4xl mx-auto">
            We&#39;ve repaired sewer lines across South Metro Atlanta since 2003, from our shop in Jonesboro. We can usually be there within 24 hours, and our plumbers are on call 24/7 for <Link href="/services/emergencies" className="text-theme-3 hover:underline">sewage backups</Link>.
          </p>
        </div>

        {/* Signs */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Signs of a Sewer Line Problem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signs.map((sign) => (
              <div key={sign.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2 flex-shrink-0" />{sign.title}
                </h3>
                <p>{sign.text}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mt-6">
            Sewage coming up in the house? Stop running water and flushing toilets, then call us. More in <Link href="/news/article/signs-of-a-main-sewer-line-problem" className="text-theme-3 hover:underline">signs of a main sewer line problem</Link> and <Link href="/news/article/how-to-deal-with-a-backed-up-sewer-line" className="text-theme-3 hover:underline">how to deal with a backed-up sewer line</Link>.
          </p>
        </div>

        {/* Camera Inspection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white mr-3">
                <FaVideo className="text-xl" />
              </div>
              <h2 className="text-2xl font-semibold">Sewer Camera Inspection</h2>
            </div>
            <p className="text-lg mb-4">
              We feed a waterproof camera through a cleanout and watch the inside of the line on a live feed. It shows roots, cracks, crushed or separated pipe, sags (bellies) and buildup, without digging.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>We run the camera as far down the line as the problem goes</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>Recorded video of the inspection</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>We locate the problem from the surface and mark its depth</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>Every truck carries a camera, so we can look on the same visit as a clog</span></li>
              <li className="flex items-start"><FaCheckCircle className="text-theme-3 mt-1 mr-2 flex-shrink-0" /><span>The camera fee is discounted when we do the repair</span></li>
            </ul>
            <p className="text-lg mt-4">
              More on what the camera finds in <Link href="/news/article/sewer-line-camera-inspections" className="text-theme-3 hover:underline">sewer line camera inspection: what it shows</Link>.
            </p>
          </div>
          <div className="md:col-span-5 bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">Book a Camera Inspection</h2>
            <p className="text-center mb-6">
              Recurring clogs, a backup, or buying a home? Find out what&#39;s going on inside the line.
            </p>
            <CTACall
              headerText="Schedule a sewer camera inspection"
              buttonText="Call us at 844 PLUMB-ALL"
            />
            <p className="text-center mt-2">
              Or <Link href="/contact" className="text-theme-3 hover:underline">request a quote online</Link>
            </p>
          </div>
        </div>

        {/* Repairs */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaTools className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Sewer Line Repair and Replacement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairs.map((repair) => (
              <div key={repair.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FaCheckCircle className="text-theme-3 mr-2 flex-shrink-0" />{repair.title}
                </h3>
                <p>{repair.text}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mt-6">
            Roots and buildup don&#39;t always mean digging. Often <Link href="/services/hydro-jetting" className="text-theme-3 hover:underline">hydro-jetting</Link> or <Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">drain cleaning</Link> is enough, and the camera tells us which. For the water supply line, see <Link href="/services/water-line-repair" className="text-theme-3 hover:underline">water line repair</Link>.
          </p>
        </div>

        {/* Process */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaSearch className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">How a Sewer Repair Works</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-8 h-8 rounded-full background-theme-3 text-white flex items-center justify-center font-bold mb-3">{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-lg mt-6">If the repair needs a permit, we&#39;ll tell you up front, and we can pull it for you.</p>
        </div>

        {/* Photos */}
        {photos.length > 0 && (
          <div className="w-full mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Recent Sewer Line Jobs</h2>
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
              <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
              <p>We can usually be there within 24 hours, and plumbers are on call 24/7.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p>Plumbing and septic under one roof since 2003. Our plumbers are OSHA trench safety certified.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaClipboardCheck className="text-theme-3 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upfront Pricing</h3>
              <p>You see the problem on camera and approve the price before we dig.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Sewer Line Questions</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {faqs.map((faq, i) => (
              <div key={faq.question} className={i < faqs.length - 1 ? 'mb-6' : ''}>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-lg mt-6">
            On a septic system? See <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair</Link> and <Link href="/news/article/septic-system-cleaning" className="text-theme-3 hover:underline">septic line cleaning</Link>.
          </p>
        </div>

        {/* Service Areas */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Sewer Line Repair Near You</h2>
          </div>
          <p className="text-lg mb-4">We repair and inspect sewer lines across South Metro Atlanta, including:</p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-lg">
            {serviceAreaTowns.map((town) => (
              <li key={town} className="flex items-center"><FaCheckCircle className="text-theme-3 mr-2 flex-shrink-0" />{town}</li>
            ))}
          </ul>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Sewer Backing Up? Let&#39;s Find Out Why.</h2>
          <p className="text-lg mb-6">
            We&#39;ll look inside the line, show you what&#39;s wrong, and quote the fix before any digging starts.
          </p>
          <CTACall
            headerText="Need sewer line repair?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
