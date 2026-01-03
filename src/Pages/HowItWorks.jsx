import React from "react";
import { FaSearch, FaCalendarCheck, FaRoad } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-accent" />,
    title: "Browse & Select",
    description:
      "Explore available vehicles based on your location, trip dates, and preferences. View detailed photos, features, and pricing before making a choice.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-accent" />,
    title: "Book Instantly",
    description:
      "Choose your travel dates and confirm your booking in just a few clicks. No waiting, no hidden steps — instant confirmation.",
  },
  {
    icon: <FaRoad className="text-3xl text-accent" />,
    title: "Enjoy the Journey",
    description:
      "Pick up your vehicle and enjoy a smooth, comfortable trip. Travel with confidence knowing everything is managed in one place.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-base-100 py-10">
      <div className="container mx-auto w-11/12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold fredoka-font">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Booking with TravelEase is simple, transparent, and designed for a
            stress-free travel experience.
          </p>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <span className="inline-block mb-2 text-sm text-secondary font-semibold">
                Step {index + 1}
              </span>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
