import React from 'react';
import Link from 'next/link';

const linkClass = 'hover:text-theme-3 transition';

export default function TrustStrip() {
  const items: React.ReactNode[] = [
    <a key="reviews" href="https://g.page/r/Cbrr7EyVgUNcEBA" target="_blank" rel="noopener noreferrer" className={linkClass}>
      4.6<span className="text-yellow-400">★</span> · 334 reviews
    </a>,
    <a key="expertise" href="https://www.expertise.com/ga/fayetteville/plumbing" target="_blank" rel="noopener noreferrer" className={linkClass}>
      Expertise 2026
    </a>,
    <a key="phcc" href="https://phccga.memberclicks.net/index.php?option=com_community&view=profile&userid=2007416173&directory_search_id=2001417#/profile" target="_blank" rel="noopener noreferrer" className={linkClass}>
      PHCC
    </a>,
    'Master & Journeyman',
    'Since 2003',
    <Link key="wisetack" href="/financing" className={linkClass}>Wisetack</Link>,
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 lg:gap-x-0 text-sm md:text-base font-semibold text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="whitespace-nowrap">
            {i > 0 && <span className="hidden lg:inline mx-3 text-gray-300" aria-hidden="true">|</span>}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
