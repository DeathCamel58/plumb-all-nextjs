import React from 'react';
import CTACall from '@/components/cta/CTACall';
import Link from 'next/link';
import { FaHome, FaUtensils, FaBuilding, FaWater, FaSeedling, FaRedo, FaQuestion, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";
import BannerHeader from "@/components/BannerHeader";
import TrustStrip from "@/components/TrustStrip";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import HeroImage from '../../../../public/images/hydro-jetting-nozzle.webp';
import ServiceReviews from '@/components/ServiceReviews';
import JobPhotoGallery from '@/components/JobPhotoGallery';
import { serviceAreaTowns } from '@/lib/serviceArea';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Hydro Jetting & Drain Jetting in Metro Atlanta';
  const description = 'Hydro jetting for sewer lines, grease lines, commercial drains and septic lines in Jonesboro and South Metro Atlanta. Clears grease and roots. Call (770) 914-3877.';
  const ogImageUrl = 'og-hydro-jetting-hydro-jetting-nozzle';
  const path = '/services/hydro-jetting';

  return generateMetadataDict(title, description, ogImageUrl, path);
}

const linesWeJet = [
  { icon: FaHome, title: 'Main Sewer Lines', text: 'The line from the house to the street or the septic tank, when it backs up or keeps clogging.' },
  { icon: FaUtensils, title: 'Kitchen & Grease Lines', text: 'Grease that a drain cable just pokes a hole through, in homes and commercial kitchens.' },
  { icon: FaBuilding, title: 'Commercial Floor Drains & Laterals', text: 'Restaurant and business floor drains and the lateral lines they feed.' },
  { icon: FaWater, title: 'Septic Lines', text: 'The line to the tank and the drain field lines, cleared of sludge and buildup.' },
  { icon: FaSeedling, title: 'Root Intrusion', text: 'Roots that have grown into a sewer or septic line, cut out with the jetter.' },
  { icon: FaRedo, title: 'Recurring Clogs', text: 'A drain that clogs again weeks after it was snaked usually has buildup on the pipe walls.' },
];

const signs = [
  'The same drain clogs again soon after being cleared',
  'Several drains are slow at once, or toilets gurgle when the tub drains',
  'The kitchen sink backs up from grease',
  'Sewage comes up in a tub, shower or floor drain',
  'A camera inspection shows roots or heavy buildup in the line',
  'A restaurant floor drain or lateral keeps backing up',
];

const steps = [
  { title: 'Find the Problem', text: 'We find where the line is blocked. When the job calls for it, we run a camera down the line first.' },
  { title: 'Pick the Right Method', text: 'A simple clog may only need a drain cable. Grease, sludge, roots and recurring clogs get the jetter.' },
  { title: 'Jet the Line', text: 'High-pressure water scours the pipe walls and flushes the grease, sludge and roots out of the line.' },
  { title: 'Confirm It Flows', text: 'We run water to confirm the line drains, and camera it afterward when we need to see that it’s clean.' },
  { title: 'Plan Maintenance', text: 'For commercial kitchens and lines that keep clogging, we can recommend a regular jetting schedule.' },
];

const faqs = [
  { question: 'How is hydro jetting different from snaking?', answer: 'A drain snake (cable) bores a hole through the clog but leaves grease and buildup on the pipe walls, so the clog can come back. Hydro jetting uses high-pressure water to scour the pipe walls and flush grease, sludge and roots out of the line.' },
  { question: 'Can hydro jetting remove tree roots?', answer: 'Yes. The jetter cuts roots out of sewer and septic lines. If roots keep coming back or the pipe is broken, the line may need a repair, and we’ll show you what we found.' },
  { question: 'Do you hydro jet septic lines?', answer: 'Yes. We jet the line to the septic tank and the drain field lines. Jetting doesn’t replace pumping the tank, so if the tank is full we’ll recommend pumping too.' },
  { question: 'Do you jet commercial kitchen grease lines?', answer: 'Yes. We jet kitchen grease lines, floor drains and laterals for restaurants and other businesses. We don’t pump out grease traps.' },
  { question: 'Can I get hydro jetting for a drain that keeps clogging?', answer: 'Yes. Recurring clogs are one of the main reasons to jet a line, because jetting removes the buildup that a drain cable leaves behind.' },
  { question: 'Will you inspect the line with a camera?', answer: 'When the job calls for it. We may run a camera before jetting to find the problem, and after jetting to confirm the line is clean.' },
  { question: 'How often should a line be jetted?', answer: 'It depends on the line. Commercial kitchens and lines with recurring grease or root problems benefit from a regular schedule, and we can recommend one for your property.' },
  { question: 'What areas do you serve?', answer: 'We provide hydro jetting in Jonesboro and across South Metro Atlanta, including Stockbridge, McDonough, Fayetteville, Hampton, Riverdale and nearby towns.' },
];

export default function HydroJetting() {
  return (
    <div className="min-h-screen">
      <ServiceSchema name="Hydro Jetting" description="Hydro jetting for sewer lines, kitchen and grease lines, commercial floor drains and septic lines in Jonesboro and South Metro Atlanta." url="/services/hydro-jetting" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Hydro Jetting', url: '/services/hydro-jetting' },
      ]} />
      <FAQSchema faqs={faqs} />

      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Hydro jetting nozzle spraying high-pressure water"
        title="Hydro Jetting in Metro Atlanta"
        subtitle="Sewer mains, kitchen and grease lines, commercial drains and septic lines · Plumbers available 24/7"
        showQuoteButton
      />
      <TrustStrip />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Lines We Jet */}
        <div className="w-full mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What We Hydro Jet</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {linesWeJet.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <Icon className="text-theme-3 text-3xl mb-3" />
                <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Hydro Jet Plumbing Service in Jonesboro and South Metro Atlanta</h2>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Hydro jetting sends high-pressure water through a drain or sewer line. A nozzle on the end of the hose has jets that point forward and backward, so it pulls itself down the pipe while it scours the walls and flushes grease, sludge and roots out of the line.
          </p>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            Most clogs can be cleared with a <Link href="/services/drain-cleaning" className="text-theme-3 hover:underline">drain cleaning</Link> machine, which uses a spinning cable to bore through the blockage. But a cable leaves the buildup on the pipe walls, so grease lines and lines with roots tend to clog again. Jetting cleans the pipe itself, and it uses only water, with no chemical drain cleaners. Learn more about <Link href="/news/article/when-is-hydro-jetting-needed" className="text-theme-3 hover:underline">when hydro jetting is needed</Link>.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Drain Keeps Clogging?</h2>
          <p className="text-center mb-6">
            Tell us what&#39;s backing up and we&#39;ll tell you whether it needs a cable or the jetter.
          </p>
          <CTACall
            headerText="Call for hydro jetting service"
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>

        {/* Signs */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Signs a Line Needs Hydro Jetting</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start"><FaCheckCircle className="text-theme-3 mr-2 mt-1 flex-shrink-0" />{sign}</li>
            ))}
          </ul>
          <p className="text-lg mt-6">
            Sewage backing up into the house? Stop running water and call our <Link href="/services/emergencies" className="text-theme-3 hover:underline">emergency plumbers</Link>, available 24/7.
          </p>
        </div>

        {/* Process */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">How We Hydro Jet a Line</h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 rounded-full background-theme-3 flex items-center justify-center text-white font-bold mb-3">{i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-lg mt-6">
            If the camera shows a broken or collapsed pipe, jetting won&#39;t fix it. See <Link href="/services/sewer-line-repair" className="text-theme-3 hover:underline">sewer line repair</Link>.
          </p>
        </div>

        {/* Commercial & Septic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaCalendarAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">Commercial Jetting</h3>
            </div>
            <p className="mb-4">
              Restaurants and other businesses build up grease in kitchen lines, floor drains and laterals, and a backup means downtime. We jet those lines when they clog, and we can set up <Link href="/services/plumbing-service-agreement" className="text-theme-3 hover:underline">regular service</Link> so they stay clear. See our <Link href="/services/commercial" className="text-theme-3 hover:underline">commercial plumbing</Link> services.
            </p>
            <p>We jet the lines; we don&#39;t pump out grease traps.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
                <FaWater className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold">Septic Line Jetting</h3>
            </div>
            <p>
              We jet the line from the house to the tank and the drain field lines. Jetting clears the lines, but it doesn&#39;t empty the tank, so we&#39;ll tell you if the tank needs <Link href="/services/septic-tank-pumping" className="text-theme-3 hover:underline">septic tank pumping</Link> or the system needs <Link href="/services/septic-repair" className="text-theme-3 hover:underline">septic repair</Link>.
            </p>
          </div>
        </div>

        {/* Job Photos */}
        <JobPhotoGallery
          title="From Our Drain and Sewer Jobs"
          slugs={['commercial-sewer-drain-clogged-hampton', 'commercial-sewer-debris-pulled-hampton', 'septic-root-intrusion-hampton', 'commercial-floor-drain-cabling-morrow', 'septic-cleanout-installed-jonesboro', 'sewer-camera-inspection-3']}
        />

        {/* Customer Reviews */}
        <ServiceReviews service="hydro-jetting" />

        {/* FAQ Section */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaQuestion className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="w-full mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-semibold">Hydro Jetting Near You</h2>
          </div>
          <p className="text-lg mb-4">We hydro jet drain, sewer and septic lines across South Metro Atlanta, including:</p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-lg">
            {serviceAreaTowns.map((town) => (
              <li key={town} className="flex items-center"><FaCheckCircle className="text-theme-3 mr-2 flex-shrink-0" />{town}</li>
            ))}
          </ul>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <CTACall
            headerText="Need a line jetted?"
            buttonText="Call us at 844 PLUMB-ALL"
          />
          <p className="text-center mt-4">
            Or <Link href="/contact" className="text-theme-3 hover:underline">contact us online</Link> to schedule service.
          </p>
        </div>
      </div>
    </div>
  );
}
