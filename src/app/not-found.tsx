import Link from "next/link";
import { FaHome } from 'react-icons/fa';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Plumb-All: Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          We&#39;re sorry, but the page you are looking for doesn&#39;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block background-theme-1 text-white px-6 py-3 rounded-lg hover:background-theme-2 transition text-lg font-semibold"
        >
          <FaHome className="inline-block mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
