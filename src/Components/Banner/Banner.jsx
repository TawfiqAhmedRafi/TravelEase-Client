import React from 'react';
import BannerImg from "../../assets/banner.png";
import { Link } from 'react-router';

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      {/* Banner Image */}
      <img
        src={BannerImg}
        alt="TravelSease Banner"
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl p-5 md:p-10 text-left">
          <h1 className="text-3xl md:text-5xl font-bold fredoka-font text-accent mb-4">
            Welcome to Travel<span className="text-secondary">Ease</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            Discover your next ride effortlessly. Book your vehicle and enjoy a seamless travel experience.
          </p>
         <Link
  to="/allVehicles"
  className="btn rounded-full px-6 py-3 bg-linear-to-r from-primary via-accent to-secondary text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300 focus:outline-none"
>
  Explore Vehicles
</Link>

        </div>
      </div>

      {/* Optional subtle overlay gradient to enhance text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent rounded-xl pointer-events-none"></div>
    </section>
  );
};

export default Banner;
