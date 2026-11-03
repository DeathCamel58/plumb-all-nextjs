import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { septicTowns } from '@/lib/septicTowns';

const towns = [
  'Jonesboro',
  'Fayetteville',
  'Peachtree City',
  'Tyrone',
  'McDonough',
  'Stockbridge',
  'Hampton',
  'Ellenwood',
  'Locust Grove',
  'Griffin',
  'Newnan',
];

export default function SepticServiceAreas({ current }: { current?: string }) {
  return (
    <div className="w-full mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full background-theme-3 flex items-center justify-center text-white mr-4">
          <FaMapMarkerAlt className="text-2xl" />
        </div>
        <h2 className="text-3xl font-semibold">Septic Service Areas</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-6 text-lg text-center">
          Plumb-All provides septic service across South Metro Atlanta, including:
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          {towns.map((town) => {
            const page = septicTowns.find((t) => t.name === town);
            return (
              <li key={town} className="p-2 font-semibold">
                {page && page.slug !== current ? (
                  <Link href={`/septic-service/${page.slug}`} className="text-theme-3 hover:underline">{town}, GA</Link>
                ) : (
                  `${town}, GA`
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
