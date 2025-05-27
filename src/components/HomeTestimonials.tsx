'use client'

import React, {useEffect, useState} from 'react'
import {FaQuoteLeft, FaStar} from "react-icons/fa";

const testimonials = [
  {
    text: "Quick response. Work was done ahead of schedule. Very professional and dependable… We highly recommend them!",
    author: "Elizabeth W.",
    stars: 5,
  },
  {
    text: "Randy and Zach worked in tandem, and completed a septic fix with precision, knowledge, and, above and beyond efforts like no other.",
    author: "Lisa C.",
    stars: 5,
  },
  {
    text: "Customer service is excellent making the experience with Plumb-All enjoyable. I would recommend Plumb-All to everyone.",
    author: "Valerie C.",
    stars: 5,
  },
  {
    text: "Quality workmanship speaks for itself. A very satisfied customer",
    author: "Eleanor Donatto",
    stars: 5,
  },
  {
    text: "Stephen was excellent he did a terrific job on my leaky shower head that has been dripping for 3 days. He came in and fixed the job, he's a great handy man technician.",
    author: "Fredrick Johnson",
    stars: 5,
  },
];

export default function HomeTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white mt-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-2">Clients’ Testimonials</h2>
        <p className="text-gray-600 text-lg mb-10">Just a few words from our clients</p>

        <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 relative transition-all duration-700 min-h-48 content-center">
          <blockquote className="text-lg italic leading-relaxed">
            <FaQuoteLeft className="inline-block text-2xl mr-2 text-gray-400" />
            {testimonials[currentTestimonial].text}
          </blockquote>
          <footer className="mt-4 text-sm text-gray-300 self-end">
            — {testimonials[currentTestimonial].author}
          </footer>
          <div className="mt-2 text-yellow-400">
            {Array.from({ length: testimonials[currentTestimonial].stars }).map((_, i) => (
              <FaStar key={i} className="inline-block mr-1" />
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? "bg-blue-500" : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
