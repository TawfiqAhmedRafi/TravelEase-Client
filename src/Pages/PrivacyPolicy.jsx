import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Privacy Policy
        </h1>

        <p className="text-base-content/80 mb-8">
          At <span className="font-semibold">TravelEase</span>, your privacy is
          important to us. This Privacy Policy explains how we collect, use, and
          protect your information when you use our platform.
        </p>

        <section className="space-y-6 text-base-content/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Personal details such as name, email, and contact information</li>
              <li>Account-related information during registration</li>
              <li>Booking and usage data within the platform</li>
              <li>Basic technical data like device or browser type</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>To provide and manage platform services</li>
              <li>To process bookings and requests</li>
              <li>To improve user experience and platform performance</li>
              <li>To communicate important updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              3. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your data
              from unauthorized access, misuse, or loss.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              4. Data Sharing
            </h2>
            <p>
              TravelEase does not sell or rent personal data. Information may be
              shared only when required for service fulfillment or legal
              obligations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              5. Cookies
            </h2>
            <p>
              We may use cookies to enhance platform functionality and analyze
              usage. You can control cookie settings through your browser.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              6. User Rights
            </h2>
            <p>
              Users may request access, updates, or deletion of their personal
              data by contacting us.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
