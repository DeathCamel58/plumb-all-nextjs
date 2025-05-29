'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { label: 'Home', url: '/' },
  { label: 'Services', url: '/services' },
  { label: 'About', url: '/about-our-process' },
  { label: 'Financing', url: '/financing' },
  { label: 'Contact', url: '/contact' },
]

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/wide-logo.png"
            alt="Plumb-All Logo"
            width={150}
            height={25}
            className="h-auto"
            priority
          />
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link key={item.url} href={item.url} className="text-gray-700 hover:text-cyan-600 transition">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="tel:+17709143877"
              className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition"
            >
              (770) 914-3877
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.url} href={item.url} className="block text-gray-700 hover:text-cyan-600 transition">
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+17709143877"
            className="block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition text-center"
          >
            (770) 914-3877
          </a>
        </div>
      )}
    </header>
  )
}

export default Menu
