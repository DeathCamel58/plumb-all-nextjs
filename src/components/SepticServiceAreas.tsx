import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const towns = [
  'Jonesboro',
  'Fayetteville',
  'Peachtree City',
  'Tyrone',
  'McDonough',
  'Stockbridge',
  'Hampton',
  'Locust Grove',
  'Griffin',
  'Newnan',
];

export default function SepticServiceAreas() {
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

        <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {towns.map((town) => (
            <li key={town} className="p-2 font-semibold">{town}, GA</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
