import React from "react";
import { FaShieldAlt, FaUserCheck, FaCalendarCheck, FaMoneyBillWave } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-accent" />,
    title: "Safety First",
    description:
      "All vehicles are thoroughly inspected and maintained to ensure a safe and reliable journey every time.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-accent" />,
    title: "Verified Hosts",
    description:
      "Every vehicle owner and host is verified to maintain trust, authenticity, and quality service.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-accent" />,
    title: "Easy Booking",
    description:
      "Book vehicles in just a few clicks with instant confirmation and hassle-free scheduling.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-accent" />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. What you see is what you pay, with clear pricing and complete cost breakdowns.",
  },
];

const WhyChooseTravelEase = () => {
  return (
    <section className="bg-base-100 py-7 md:py-10 ">
      <div className="container mx-auto w-11/12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-base-content">
            Why Choose Travel<span className="text-secondary">Ease</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We focus on comfort, transparency, and trust to deliver a premium
            travel experience tailored for you.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTravelEase;
