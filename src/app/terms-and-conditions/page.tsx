import React from 'react';
import Link from "next/link";
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

        <h2 className="text-3xl font-semibold mb-6">SMS Terms</h2>

        <p className="mb-4">
          By providing your phone number and requesting service from Plumb-All, you agree to receive follow-up and informational text messages related to your service.
        </p>

        <p className="mb-4">
          Message frequency varies. Message and data rates may apply.
        </p>

        <p className="mb-4">
          You may opt out of text messages at any time by replying STOP. Reply HELP for assistance.
        </p>

        <p className="mb-4">
          Plumb-All sends text messages for service-related and customer support purposes only and does not send marketing or promotional SMS messages.
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
