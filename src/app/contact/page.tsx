'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaTools, FaThumbsUp, FaHandshake } from 'react-icons/fa';
import CTACall from '@/components/cta/CTACall';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/our-team.jpg"
          alt="Our Team"
          fill
          className="object-cover object-center w-full"
          priority
        />
        <div className="absolute inset-0 background-theme-4/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">We&#39;re Here For You</h2>
          <p className="text-xl max-w-4xl mx-auto">
            At Plumb-All, our customers come first. We strive to keep you informed throughout every project and rely on your feedback to ensure we&#39;re delivering the highest quality service.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mb-4">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="mb-4">Need immediate assistance? Our team is ready to help!</p>
            <a
              href="tel:+17709413877"
              className="inline-block font-bold background-theme-1 text-white px-6 py-3 rounded shadow hover:background-theme-2 transition"
            >
              (770) 914-3877
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mb-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="mb-4">Stop by our office to discuss your plumbing needs in person.</p>
            <a href="https://maps.app.goo.gl/8mTosyJKhr3b8hn59" className="inline-block font-bold background-theme-1 text-white px-6 py-3 rounded shadow hover:background-theme-2 transition">
              <address className="not-italic">
                218 N McDonough St<br />
                Jonesboro, GA
              </address>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full background-theme-3 flex items-center justify-center text-white mb-4">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <p className="mb-4">We&#39;re available during these hours for scheduled appointments:</p>
            <p className="text-theme-3 font-bold">
              Monday – Friday<br />
              8AM – 4PM
            </p>
          </div>
        </div>

        {/* Our Commitments */}
        <div className="w-full mb-16 bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commitments to You</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaTools className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Solutions</h3>
              <p className="text-center">
                Our licensed technicians have the expertise to diagnose and solve any plumbing or septic issue, ensuring quality workmanship on every job.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaThumbsUp className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-center">
                We prioritize your satisfaction above all else. No project is complete until you&#39;re happy with the results and your expectations have been exceeded.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-theme-3">
                <FaHandshake className="text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Communication</h3>
              <p className="text-center">
                We keep you informed throughout the entire process, from initial diagnosis to project completion, ensuring you understand every step.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <p className="mb-6">
              Have a question or need to schedule a service? Fill out the form below and we&#39;ll get back to you within 24 hours.
            </p>
            <ContactForm onDarkBackground={true} />
          </div>

          <div>
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/vans.jpg"
                alt="Plumb-All Service Vans"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6">
              For urgent plumbing issues or to speak directly with our team, give us a call. We&#39;re ready to help with all your plumbing and septic needs.
            </p>
            <CTACall
              headerText="Our team is standing by to assist you"
              buttonText="Call (770) 697-0105"
            />
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-theme-3" />
                Email Us
              </h4>
              <p>For non-urgent inquiries: <a href="mailto:info@plumb-all.com" className="text-theme-3 hover:underline">info@plumb-all.com</a></p>
            </div>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="w-full text-center mb-12 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Want to Learn More About Our Process?</h3>
          <p className="mb-6 max-w-3xl mx-auto">
            Discover how we approach each project with meticulous attention to detail and a commitment to excellence. Our systematic process ensures quality results every time.
          </p>
          <Link
            href="/about-our-process"
            className="inline-block background-theme-1 text-white px-6 py-3 rounded shadow hover:background-theme-2 transition"
          >
            Explore Our Process
          </Link>
        </div>
      </div>
    </div>
  );
}
