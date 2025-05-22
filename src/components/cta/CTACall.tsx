'use client'

import React from 'react';

export default function CTACall({
  headerText,
  buttonText
}: {
  headerText?: string;
  buttonText?: string;
}) {
  return (
    <div className="w-full text-center mb-8">
      <p className="text-xl mb-4">{headerText}</p>
      <a
        href="tel:+17709413877"
        className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition"
      >
        {buttonText}
      </a>
    </div>
  );
}
