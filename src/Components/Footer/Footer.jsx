import React from "react";
import {
  FaFacebookF,
  
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content pt-12 pb-6 poppins-font">
      <div className="container mx-auto flex flex-col w-11/12 md:flex-row justify-between gap-10 md:gap-6">
        {/* Brand / Logo */}
        <div className="flex flex-col gap-3 md:w-1/4">
          <h1 className="text-3xl font-bold fredoka-font text-accent">
            Travel<span className="text-secondary">Ease</span>
          </h1>
          <p className="text-gray-400">
            Premium vehicle booking & trip management platform. Comfort,
            convenience, and style at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <h2 className="font-semibold text-secondary mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:text-accent transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/allVehicles"
                className="hover:text-accent transition-colors"
              >
                All Vehicles
              </a>
            </li>
           
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-accent transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <h2 className="font-semibold text-secondary mb-2">Contact</h2>
          <p className="flex items-center gap-2 text-gray-400">
            <FaEnvelope className="text-accent" /> travelease@support.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FaPhoneAlt className="text-accent" /> +880 1234 567890
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="text-accent" /> Dhaka, Bangladesh
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <h2 className="font-semibold text-secondary mb-2">Follow Us</h2>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-base-200 text-gray-400 hover:bg-accent hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-base-200 text-gray-400 hover:bg-accent hover:text-white transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-base-200 text-gray-400 hover:bg-accent hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-base-200 text-gray-400 hover:bg-accent hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-base-100 pt-4 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
        <span>&copy; {new Date().getFullYear()} TravelEase. All rights reserved.</span>
        <span className="hidden md:inline">|</span>
        <a
          href="/privacy-policy"
          className="hover:text-accent transition-colors"
        >
          Privacy Policy
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="/terms-and-conditions"
          className="hover:text-accent transition-colors"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
