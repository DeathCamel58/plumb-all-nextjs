'use client'

import React, {useState} from 'react'
import {FaBuilding, FaCog, FaHome, FaWrench} from "react-icons/fa";
import Link from "next/link";

const tabs = [
  {
    id: 'household',
    title: 'Household',
    icon: <FaHome className="text-6xl text-theme-3 home-tabbed-icon" />,
    content: (
      <p className="text-lg">
        Our team has worked on hundreds of households, day in, and day out. By choosing us,
        you’re selecting the most friendly, dependable, and professional <Link href="/services/plumber" className="text-theme-3 hover:underline">plumbers</Link> in the Metro-Atlanta
        area. We have a quick response time because we’re local, and we are proud to stand behind the
        work we’ve done.
      </p>
    ),
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: <FaBuilding className="text-6xl text-theme-3 home-tabbed-icon" />,
    content: (
      <p className="text-lg">
        Having installed, maintained, and repaired countless grease traps, commercial water heaters,
        and floor drains, we are the most experienced team to get your facility up and running! With the
        fastest arrival times in the business, we can fix your plumbing before more issues occur, saving
        you time and money.
      </p>
    ),
  },
  {
    id: 'installation',
    title: 'Installation',
    icon: <FaWrench className="text-6xl text-theme-3 home-tabbed-icon" />,
    content: (
      <p className="text-lg">
        If you don’t have a system that you need or want, we’d love to help. We have installed
        showers, septic systems, alternative septic systems, grease traps, and much, much more. By calling
        us, you’ll get your systems installed by the best in the field.
      </p>
    ),
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    icon: <FaCog className="text-6xl text-theme-3 home-animate-spin-slow home-tabbed-icon" />,
    content: (
      <p className="text-lg">
        If you’re having troubles with systems that are in your home or property, we can work on
        them. We’ve cleaned out pipes, replaced water heaters, and helped prevent all kinds of plumbing
        and septic issues. No matter how old the system, or who installed the system, we can help!
      </p>
    ),
  },
];

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState('household');

  return (
    <section className="w-full max-w-6xl mx-auto p-4 mt-12">
      <nav className="flex flex-wrap gap-2 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded border ${
              activeTab === tab.id
                ? 'background-theme-3 text-white border-blue-600'
                : 'text-theme-3 border-theme-3 hover:bg-blue-50'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 text-center content-center">
          {tabs.find((tab) => tab.id === activeTab)?.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{tabs.find((tab) => tab.id === activeTab)?.title}</h3>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  )
}
