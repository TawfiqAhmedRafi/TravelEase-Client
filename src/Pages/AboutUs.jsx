import React, { useState } from "react";
import { motion as MOTION, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Our Story", "Our Mission", "Our Impact", "Trust & Policies"];

  const tabContents = [
    <>
      <p className="mb-4">
        TravelEase was built to simplify how people discover, compare, and book
        travel-related services. Planning trips often involves scattered
        information, unclear pricing, and unreliable providers — we wanted to
        fix that.
      </p>
      <p className="mb-4">
        What started as an idea to organize travel services into a single,
        structured platform has evolved into a user-focused system designed for
        clarity, convenience, and trust.
      </p>
      <p className="mb-4">
        From browsing options to managing bookings, TravelEase focuses on making
        every step smooth, transparent, and efficient — without unnecessary
        complexity.
      </p>
    </>,
    <>
      <p className="mb-4">
        Our mission is to make travel planning simple, reliable, and accessible
        through thoughtful design and smart technology. We aim to remove
        confusion by providing clear information, verified listings, and
        user-friendly tools.
      </p>
      <p className="mb-4">
        Every feature is built with user trust in mind — from service discovery
        to booking management. We prioritize transparency, usability, and
        consistent experience across the platform.
      </p>
      <p className="mb-4">
        By continuously improving based on real user feedback, TravelEase
        strives to create a platform where travel planning feels effortless and
        well-guided.
      </p>
    </>,
    <>
      <p className="mb-4">
        TravelEase connects users with reliable travel services, helping them
        make informed decisions with confidence. Our impact is reflected through
        smoother bookings, better comparisons, and reduced planning time.
      </p>
      <p className="mb-4">
        Service providers gain structured visibility, while users benefit from
        clarity and control. Each successful booking strengthens trust within
        the TravelEase ecosystem.
      </p>
      <p className="mb-4">
        As the platform grows, we remain focused on long-term value — prioritizing
        quality experiences over quantity.
      </p>
    </>,
    <>
      <p className="mb-4">
        Trust is a core principle at TravelEase. We follow clear policies to
        ensure fairness, transparency, and safety for all users and service
        providers.
      </p>
      <p className="mb-4">
        Listings are monitored, user activity is moderated, and data privacy is
        treated with high importance. We follow responsible data handling
        practices to protect user information.
      </p>
      <p className="mb-4">
        Our terms, guidelines, and policies are designed to provide clarity and
        confidence — so users always understand how the platform works and what
        to expect.
      </p>
    </>,
  ];

  return (
    <div className="bg-base-100 rounded-2xl md:p-14 p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl poppins-font font-bold ">About Travel<span className="text-secondary">Ease</span></h2>
        <p className="text-sm mt-4 text-base-content">
          A modern travel platform designed to simplify discovery, booking, and
          management — transparent, reliable, and user-focused.
        </p>
      </div>

      <div className="border-t my-8 border-base-300"></div>

      {/* Tabs */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <MOTION.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                activeTab === index
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-base-content/70 hover:text-secondary"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </MOTION.button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 text-base-content/80 leading-relaxed">
          <AnimatePresence mode="wait">
            <MOTION.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="mt-6"
            >
              {tabContents[activeTab]}
            </MOTION.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
