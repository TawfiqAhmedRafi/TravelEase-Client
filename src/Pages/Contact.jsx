import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you! Your message has been sent.",
      timer: 2000,
      showConfirmButton: false,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-base-100  py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Contact <span className="text-secondary">Us</span></h2>
          <p className="text-base-content/80">
            Have questions or need support? Our team at{" "}
            <span className="font-semibold">TravelEase</span> is here to help.
            Fill out the form, or use the contact information below.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3 text-base-content/80">
              <FaEnvelope className="text-accent w-5 h-5" />
              <span>travelease@support.com</span>
            </div>
            <div className="flex items-center gap-3 text-base-content/80">
              <FaPhoneAlt className="text-accent w-5 h-5" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-3 text-base-content/80">
              <FaMapMarkerAlt className="text-accent w-5 h-5" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-base-200 p-8 rounded-2xl shadow-md"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input input-bordered input-primary w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input input-bordered input-primary w-full"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="textarea textarea-primary w-full"
            rows="6"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default Contact;
