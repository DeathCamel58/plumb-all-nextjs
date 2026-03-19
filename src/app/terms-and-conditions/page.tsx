import React from 'react';
import {Metadata} from "next";
import {generateMetadataDict} from "@/components/header/metadata";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Terms and Conditions';
  const description = '';
  const ogImageUrl = 'og-privacy-policy-our-team';
  const path = `/terms-and-conditions`;

  return generateMetadataDict(title, description, ogImageUrl, path);
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms and Conditions</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="mb-4">
          By accessing this website or requesting services from Plumb-All, you agree to these Terms &amp; Conditions.
        </p>

        <h2 className="text-3xl font-semibold mb-6">SMS / Text Messaging Terms</h2>

        <p className="mb-4">
          By providing your phone number and checking the SMS consent checkbox on our contact or service request form, you expressly consent to receive informational and service-related text messages from Plumb-All at the number provided. These messages may include scheduling coordination, appointment confirmations, technician arrival updates, service-related questions, estimates, and post-service follow-up.
        </p>

        <p className="mb-4">
          Message frequency varies based on your service request activity. Message and data rates may apply.
        </p>

        <p className="mb-4">
          Consent to receive SMS messages is not a condition of purchasing any service. You may opt out at any time by replying STOP to any message. After opting out, you will receive a single confirmation message and no further messages will be sent. Reply HELP for assistance, or contact us at webmaster@plumb-all.com or (phone number).
        </p>

        <p className="mb-4">
          Plumb-All does not send marketing or promotional SMS messages. Text messaging is used solely for service-related communications and customer support. Mobile phone numbers are never sold, rented, or shared with third parties for marketing purposes.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

        <p className="mb-4">
          Plumb-All<br />
          218 N McDonough St<br />
          Jonesboro, GA 30236<br />
          webmaster@plumb-all.com
        </p>
      </div>
    </div>
  );
}
