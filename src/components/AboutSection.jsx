import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Cleaning Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              Our professional cleaning team is dedicated to making your space spotless. 
              We use eco-friendly products and proven techniques to deliver exceptional results.
            </p>
            <Link to="/about" className="text-blue-600 font-medium hover:underline">
              Learn more about us →
            </Link>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
