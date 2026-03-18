'use client'

import React from 'react';
import { FaStar, FaStarHalfAlt, FaGoogle } from 'react-icons/fa';

export default function GoogleReviewBadge() {
  return (
    <a
      href="https://g.page/r/Cbrr7EyVgUNcEBA"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition"
    >
      <FaGoogle className="text-blue-500 text-xl" />
      <div className="flex items-center gap-1 text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <span className="text-gray-700 font-semibold text-sm">4.8</span>
      <span className="text-gray-500 text-sm">on Google</span>
    </a>
  );
}
