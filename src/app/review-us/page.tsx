import React from 'react';
import BannerHeader from "@/components/BannerHeader";
import HeroImage from '../../../public/images/our-team.jpg';
import ReviewForm from "@/components/ReviewForm";

export default function ReviewUs() {

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <BannerHeader
        image={HeroImage}
        altText="Review Us"
        title="Review Our Service"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="w-full mb-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Feedback Matters</h2>
          <p className="text-xl max-w-4xl mx-auto">
            Thank you for choosing Plumb-All! We value your feedback and would appreciate if you could take a moment to rate our service.
          </p>
        </div>

        {/* Review Form Component */}
        <ReviewForm />
      </div>
    </div>
  );
}
