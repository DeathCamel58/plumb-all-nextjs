'use client';

import React, { useState, useRef, FormEvent } from 'react';
import { FaStar, FaGoogle, FaFacebook, FaYelp } from 'react-icons/fa';
import { RecaptchaWrapper, getRecaptchaToken } from "@/components/RecaptchaWrapper";

const reviewLinks = [
  {
    name: 'Yelp',
    link: 'https://www.yelp.com/writeareview/biz/Y8KVQW_mcz6cC7j_heiG1g?return_url=%2Fbiz%2FY8KVQW_mcz6cC7j_heiG1g',
    faIcon: FaYelp,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/plumball.jonesboro/reviews',
    faIcon: FaFacebook,
  },
  {
    name: 'Google',
    link: 'https://search.google.com/local/writereview?placeid=ChIJA0IpU9H59IgRuuvsTJWBQ1w',
    faIcon: FaGoogle,
  }
]

// Form data interface
interface FeedbackFormData {
  recaptchaToken: string;
  name: string;
  phone: string;
  message: string;
  website: string; // Honeypot
}

export default function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  // Blocks repeat clicks right away, before the sending state re-renders
  const inFlight = useRef(false);
  const [formData, setFormData] = useState<FeedbackFormData>({
    recaptchaToken: '',
    name: "",
    phone: "",
    message: "",
    website: "", // Honeypot
  });

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot
    if (formData.website) return;

    // One submission at a time, so repeat clicks don't send it twice
    if (inFlight.current) return;
    inFlight.current = true;
    setSending(true);
    setFailed(false);

    try {
      // Get a fresh recaptcha token now: tokens expire two minutes after they're made
      const recaptchaToken = await getRecaptchaToken('feedback_form');

      // Update formData with the recaptcha token
      const submissionData = {
        ...formData,
        recaptchaToken
      };

      const response = await fetch("https://integration.plumb-all.com/website/negativeFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      if (!response.ok) {
        throw new Error(`Feedback form returned ${response.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission failed", err);
      setFailed(true);
      inFlight.current = false;
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Star Rating Section */}
      <div className="w-full mb-16 text-center">
        <h3 className="text-2xl font-bold mb-6">How would you rate our service?</h3>
        <div className="flex justify-center space-x-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="text-5xl focus:outline-none"
            >
              <FaStar
                className={`transition-colors ${
                  star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Conditional Content Based on Rating */}
      {rating > 0 && (
        <div className="w-full">
          {rating >= 5 ? (
            // Good Rating Content (5 stars)
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Thank You for Your Positive Feedback!</h3>
              <p className="text-xl mb-8">
                We&#39;re thrilled that you had a great experience with us. Would you mind sharing your experience on one of these platforms?
              </p>
              <div className="flex justify-center space-x-6">
                {reviewLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:text-blue-600 transition-colors"
                  >
                    <link.faIcon className="text-4xl mb-2" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            // Poor Rating Content (1-3 stars)
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">We&#39;d Like to Make Things Right</h3>
              <p className="text-lg mb-8 text-center">
                We&#39;re sorry to hear that your experience wasn&#39;t a five star experience. Please let us know how we can improve.
              </p>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
                  <p className="font-bold">Thank you for your feedback!</p>
                  <p>We appreciate you taking the time to share your experience with us. We&#39;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <RecaptchaWrapper action="feedback_form" />

                  {/* Honeypot field */}
                  <div className="hidden">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="(123) 456-7890"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Feedback *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="Please tell us how we can improve..."
                    />
                  </div>

                  {failed ? (
                    <p role="alert" className="text-sm text-red-700">
                      Sorry, your feedback didn&rsquo;t go through. Please try again, or call us at{" "}
                      <a href="tel:+17709143877" className="underline font-semibold">(770) 914-3877</a>.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-block background-theme-1 text-white px-6 py-3 rounded shadow hover:background-theme-2 transition disabled:opacity-60 disabled:cursor-wait"
                  >
                    {sending ? "Sending…" : "Submit Feedback"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
