import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Terms & Conditions
        </h1>

        <p className="text-base-content/80 mb-8">
          Welcome to <span className="font-semibold">TravelEase</span>. By using
          this platform, you agree to the following Terms & Conditions.
        </p>

        <section className="space-y-6 text-base-content/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              1. Platform Usage
            </h2>
            <p>
              TravelEase provides a digital platform to explore and manage
              travel-related services. Users must use the platform responsibly
              and lawfully.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              2. User Accounts
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Users are responsible for account security</li>
              <li>Information must be accurate and up to date</li>
              <li>Misuse may result in account suspension</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              3. Bookings & Services
            </h2>
            <p>
              TravelEase acts as a facilitator. Service availability, pricing,
              and fulfillment are managed by third-party providers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              4. Payments
            </h2>
            <p>
              Payments must be completed through approved methods. Refunds and
              cancellations depend on provider-specific policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              5. User Conduct
            </h2>
            <p>
              Users must not misuse the platform, submit false information, or
              attempt unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              6. Intellectual Property
            </h2>
            <p>
              All content, branding, and design elements belong to TravelEase and
              may not be reused without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              TravelEase is not liable for losses caused by third-party services,
              technical issues, or user decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondary mb-2">
              8. Policy Updates
            </h2>
            <p>
              These terms may be updated at any time. Continued use of the
              platform indicates acceptance of revised terms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
