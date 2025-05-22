'use client'

import React from 'react'
import Link from 'next/link'

const footerMenuItems = [
  { label: 'Home', url: '/' },
  { label: 'Services', url: '/services' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
  { label: 'Blog', url: '/news' },
]

const Footer = () => {
  return (
    <footer className="background-theme-4 text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6 justify-items-center">
            {footerMenuItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="text-sm text-theme-0 hover:text-theme-1 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-2 justify-items-center">
            <a
              href="tel:+17709143877"
              className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition"
            >
              (770) 914-3877
            </a>

            <p className="text-sm">
              Tel:{' '}
              <a href="tel:+17709143877" className="text-theme-0 hover:text-theme-1 hover:underline transition">
                (770) 914-3877
              </a>
              <br />
              Email:{' '}
              <a href="mailto:info@plumb-all.com" className="text-theme-0 hover:text-theme-1 hover:underline transition">
                info@plumb-all.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Need Help Quickly?</h5>
          <p className="text-sm">
            With many plumbing crews out in the field, we can get to your location quickly,
            so that you can get your problem fixed ASAP.
            <br />
            We&#39;re located in{' '}
            <Link href="/expert-plumbing-services-in-atlanta-ga/" className="text-theme-0 hover:text-theme-1 hover:underline">
              Jonesboro, Georgia
            </Link>
            , so we&#39;re always nearby.{' '}
            <Link href="/privacy-policy/" className="text-theme-0 hover:text-theme-1 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs">
        ©2003–{new Date().getFullYear()} - Plumb-All LLC.
      </div>
    </footer>
  )
}

export default Footer
