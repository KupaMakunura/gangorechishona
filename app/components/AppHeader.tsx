// Header.js
import React from 'react';

const AppHeader = () => {
  return (
    <section className="text-center mb-8 mt-12">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        For All Your Language Learning Needs
      </h1>
      <p className="text-gray-600 text-base">
        Explore interactive lessons, personalized learning, and track your progress.
      </p>
      <p className="text-gray-600 text-base">
        Enhance your skills with interpretation and translation features.
      </p>
      <div className="mt-6">
        <a href="#" className="btn btn-primary text-white">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default AppHeader;
