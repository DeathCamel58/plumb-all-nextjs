import React from 'react';
import Image from 'next/image';
import { FaCreditCard, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import CTACall from '@/components/cta/CTACall';
import { Metadata } from "next";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const finalTitle = 'Plumb-All: Financing';
  const description = 'The days of being worried about being able to pay up front for plumbing services are over. We offer Financing to help remove the financial burden of plumbing.';

  // Create URL for the dynamically generated OG image with title overlay
  const ogImageUrl = '/api/og?title=financing&image=/logo/plumb-all-banner.png';

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
      url: `/financing`,
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

export default function Financing() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/logo/plumb-all-banner.png"
          alt="Plumb-All Financing Banner"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Financing</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Financing Options</h2>
          <p className="text-xl max-w-4xl mx-auto">
            We understand that plumbing emergencies and upgrades can be unexpected expenses.
            That&#39;s why we offer flexible financing solutions to help you get the services you need without financial stress.
          </p>
        </div>

        {/* Financing Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mb-4">
              <FaCreditCard className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Application</h3>
            <p className="mb-4">Quick application process with instant decisions, making it easy to get the financing you need.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mb-4">
              <FaCheckCircle className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
            <p className="mb-4">Choose from a variety of payment plans with terms ranging from 3 to 60 months to fit your budget.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mb-4">
              <FaMoneyBillWave className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
            <p className="mb-4">APR rates from 0% to 35.9% based on creditworthiness, with no prepayment penalties.</p>
          </div>
        </div>

        {/* Wisetack Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <div className="md:col-span-8">
            <h2 className="text-3xl font-semibold mb-6">Wisetack Financing</h2>

            <p className="mb-4">
              To get prequalified for financing, visit <a href="https://wisetack.us/#/jq9nj5v/prequalify" className="text-theme-3 hover:underline font-medium">https://wisetack.us/#/jq9nj5v/prequalify</a>. We&#39;d love to help out with your next project!
            </p>

            <p className="mb-4">
              Financing can be a great option for homeowners who need plumbing repairs or installations but are unable to pay the full cost upfront. That&#39;s where our partnership with Wisetack comes in. We&#39;re proud to offer financing solutions that make it easy for our customers in Jonesboro, Georgia to get the plumbing services they need without breaking the bank.
            </p>

            <p className="mb-4">
              Wisetack is a trusted name in financing, and their services are specifically designed to help customers pay for home repairs and services. With Wisetack, you can apply for financing online or in person, and you&#39;ll get an answer in seconds. The process is fast, simple, and hassle-free, so you can get the plumbing services you need without delay.
            </p>

            <p className="mb-4">
              Our financing options through Wisetack include flexible payment plans with low monthly payments, competitive interest rates, and no prepayment penalties. That means you can pay off your plumbing services as quickly or as slowly as you&#39;d like, depending on your budget and needs.
            </p>

            <p className="mb-4">
              We believe that everyone should have access to high-quality plumbing services, and our partnership with Wisetack helps us make that a reality for our customers in Jonesboro, Georgia. Whether you need a simple repair or a major installation, we&#39;re here to help, and our financing options make it easy to get the services you need at a price you can afford.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <h3 className="text-2xl font-semibold mb-4">Flexible financing through Wisetack</h3>

              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Short application, instant decision</li>
                <li>Checking your options does not affect your credit score</li>
                <li>Terms from 3 to 60 months</li>
                <li>APR from 0% to 35.9%</li>
                <li>No prepayment penalties, origination fees, or compounding interest</li>
              </ul>

              <p className="mb-0">
                <strong>Example</strong>: a $2,000 purchase could cost $90.40 a month for 24 months, based on a 7.9% APR. All loans are subject to credit approval. Your terms may vary. Wisetack loans are issued by Hatch Bank. See wisetack.com/faq
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <Image
              src="/images/wisetack-iphone-1.png"
              alt="Wisetack Financing"
              height={400}
              width={400}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <p className="text-center mt-2 text-sm text-gray-500">For illustrative purposes only</p>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="w-full mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Application Process</h2>

          <p className="mb-6 text-lg">
            You can apply for Wisetack financing on any quote that we send. Follow these simple steps:
          </p>

          <ol className="list-decimal pl-5 space-y-6 mb-8">
            <li className="pl-2">
              <span className="font-medium">View Quote:</span> When you receive a quote from us, click on &#34;View Quote&#34; or tap the link.
            </li>

            <li className="pl-2">
              <span className="font-medium">See Loan Options:</span> Under the quote&#39;s total, click or tap on &#34;See Loan Options&#34;.
              <div className="my-4 flex justify-center">
                <div className="background-theme-1 text-white px-6 py-3 rounded shadow hover:background-theme-2 transition font-medium">
                  See Loan Options
                </div>
              </div>
            </li>

            <li className="pl-2">
              <span className="font-medium">Enter Phone Number:</span> Enter your mobile phone number when asked and hit &#34;Send Code&#34;.
              <div className="my-4 flex justify-center">
                <div className="border border-gray-300 rounded-lg p-6 w-72 shadow-sm">
                  <div className="text-xl font-medium mb-4 text-center">Enter your phone number</div>
                  <div className="border border-gray-300 rounded-md p-3 mb-4">
                    (555) 555-5555
                  </div>
                  <div className="background-theme-1 text-white px-4 py-3 rounded shadow font-medium text-center">
                    Send Code
                  </div>
                </div>
              </div>
            </li>

            <li className="pl-2">
              <span className="font-medium">Verify:</span> Enter the verification code sent to your phone.
            </li>

            <li className="pl-2">
              <span className="font-medium">Personal Information:</span> Fill out your name, email, date of birth, income information, and the last four digits of your social security number.
            </li>

            <li className="pl-2">
              <span className="font-medium">Address:</span> Fill in your address information.
            </li>

            <li className="pl-2">
              <span className="font-medium">Select Plan:</span> Choose from your loan options.
              <div className="my-4 flex justify-center">
                <div className="border border-gray-300 rounded-lg p-6 w-80 shadow-sm">
                  <div className="text-xl font-medium mb-4 text-center">Select a loan option</div>

                  <div className="border border-gray-200 rounded-md p-4 mb-4 hover:border-theme-3">
                    <div className="font-medium text-lg">12 months</div>
                    <div className="text-gray-600">$90.40/month</div>
                    <div className="text-sm text-gray-500">7.9% APR</div>
                  </div>

                  <div className="border border-gray-200 rounded-md p-4 mb-4 hover:border-theme-3">
                    <div className="font-medium text-lg">24 months</div>
                    <div className="text-gray-600">$50.20/month</div>
                    <div className="text-sm text-gray-500">8.9% APR</div>
                  </div>

                  <div className="border border-gray-200 rounded-md p-4 mb-4 hover:border-theme-3">
                    <div className="font-medium text-lg">36 months</div>
                    <div className="text-gray-600">$35.60/month</div>
                    <div className="text-sm text-gray-500">9.9% APR</div>
                  </div>
                </div>
              </div>
            </li>
          </ol>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-4">
              These images are for illustrative purposes only.
            </p>

            <p className="text-sm">
              *All financing is subject to credit approval. Your terms may vary. Payment options through Wisetack are provided by our <a href="https://d2PGpd04.na1.hubspotlinks.com/Ctc/X+113/d2PGpd04/VX5rcV7YDBhVW5WVVqN5mXr39W4nNzqf55B4VLN24tzvF3m2ndW69sMD-6lZ3mtN8B7cQ0mSv-5W3xxMfq2qMgmjW6CBxSn6tGVpPW1hRrZM5SjlBMVYWYMh6Xsjn3W68LHhJ7n8ffmW9clFM247gr08W2XdC9H6_f9YYW2YVN-81f_QT9W8ycgBk516pgYW5nzl5R1nP6zlW8w1h1c3zR1FmW2sbPly42Cgp-W481LHB52WZcYW5SqBqt8xS4jFW151djx4tQMKQW7Y8L5t2j4JrVN92dTNqQ9pWZW1LY7fZ5Qxl-NW3y4Q5_8YX7DJf1pYFnC04" target="_blank" rel="noreferrer noopener" className="text-theme-3 hover:underline">lending partners</a>. For example, a $1,200 purchase could cost $104.89 a month for 12 months, based on an 8.9% APR, or $400 a month for 3 months, based on a 0% APR. Offers range from 0-35.9% APR based on creditworthiness. No other financing charges or participation fees. See additional terms at <a href="https://d2PGpd04.na1.hubspotlinks.com/Ctc/X+113/d2PGpd04/VX5rcV7YDBhVW5WVVqN5mXr39W4nNzqf55B4VLN24tzvF3m2ndW69sMD-6lZ3phW3RY2RD5CgQX9W58NpJK6-XC4TW2MDB3h3KZxpGW9lPs645hhHMRW3mkJX930FpFJW5RVNsG8Sq3YtW4W6tqS2nJqZFW5s09G98kV5qMVLzrw85Tnc2_VWhjsk90d68sN8dXqJsCh_vhN5xNrQ1BCwmTVZQs0Q5FXxJsW5vW0vh5JPrfmW8p3jR-7sQt48W67DlnQ1zBjCTW4_gtYs2ct47xV5qlXM4-bs9kW7Dp2fF1nWsMmW63hqMl8g2tdHf6-bLhP04" target="_blank" rel="noreferrer noopener" className="text-theme-3 hover:underline">http://wisetack.com/faqs</a>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full text-center mb-12 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 max-w-3xl mx-auto">
            Decided that we&#39;re the right fit for you? Contact us today to discuss your plumbing needs and financing options.
          </p>
          <CTACall
            headerText=""
            buttonText="Call us at 844 PLUMB-ALL"
          />
        </div>
      </div>
    </div>
  );
}
