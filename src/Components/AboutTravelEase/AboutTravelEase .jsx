import React from "react";
import AboutImg from "../../assets/about.jpg";
import { Link } from "react-router";

const AboutTravelEase = () => {
  return (
    <section className="bg-base-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        {/* Image */}
        <div className="md:w-1/2 relative">
          <img
            src={AboutImg}
            alt="About TravelEase"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          {/* Optional subtle overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent rounded-2xl"></div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center gap-5">
          <h2 className="text-4xl fredoka-font font-bold text-accent">
            About Travel<span className="text-secondary">Ease</span>
          </h2>
          <p className="text-base-content text-lg poppins-font leading-relaxed">
            TravelEase is your trusted platform for hassle-free vehicle booking.
            Connect with verified owners, explore a wide range of vehicles, and
            enjoy smooth trips anywhere in Bangladesh. Your journey, simplified
            and secure.
          </p>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="self-start btn rounded-full px-6 py-3 border-2 border-secondary text-secondary font-semibold transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-lg"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTravelEase;
