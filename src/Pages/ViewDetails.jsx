import React, { use, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { format } from "date-fns";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

import useAxios from "../Router/hooks/useAxios";


const ViewDetails = () => {
  const axiosInstance = useAxios();
  const loadedVehicle = useLoaderData();
  const [vehicle, setVehicle] = useState(loadedVehicle);
  const bookingModalRef = useRef(null);
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleBookingModalOpen = () => {
    bookingModalRef.current.showModal();
  };
    


 const handleBookingSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  const email = form.email.value;
  const days = form.days.value;
  const carName = form.carName.value;

  const newBooking = {
    vehicleId: _id,
    vehicleName: carName,
    userEmail: email,
    bookFor: days,
  };

  try {

    const { data } = await axiosInstance.post("/bookings", newBooking);

    

    bookingModalRef.current.close();

  
    setVehicle((prev) => ({ ...prev, availability: "Booked" }));

   
    Swal.fire({
      title: "Success!",
      text: `${carName} is booked successfully for ${days} days.`,
      icon: "success",
      button: "OK",
    });
  } catch (error) {
    console.error("Booking failed", error);

    // Show error message
    Swal.fire({
      title: "Error!",
      text: "Failed to book the vehicle. Please try again.",
      icon: "error",
      button: "OK",
    });
  }
};

  const {
    _id,
    vehicleName,
    owner,
    userEmail,
    category,
    pricePerDay,
    location:vehicleLocation,
    availability,
    description,
    coverImage,
    fuelType,
    seatCapacity,
    createdAt,
  } = vehicle;

  const formattedDate = createdAt
    ? format(new Date(createdAt), "dd MMM yyyy")
    : "N/A";

  const isBooked = availability.toLowerCase() === "booked";

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="w-11/12 grow container mx-auto p-5">
        <h2 className="text-3xl md:text-4xl font-bold text-accent fredoka-font mb-8 text-center">
          Vehicle <span className="text-secondary">Details</span>
        </h2>

        <div className="bg-base-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-6 p-6">
          {/* Vehicle Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={coverImage}
              alt={vehicleName}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Vehicle Info */}
          <div className="md:w-1/2 flex flex-col justify-between p-4 md:p-6 poppins-font">
            <div>
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-accent fredoka-font mb-3">
                {vehicleName}
              </h1>

              {/* Category & Fuel Type */}
              <div className="flex justify-between mb-4">
                <span className="badge bg-secondary text-secondary-content px-4 py-2">
                  {category}
                </span>
                <span className="text-warning font-medium capitalize">
                  {fuelType}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 mb-6">
                <FaMapMarkerAlt className="text-accent" />
                <span className="font-medium">{vehicleLocation}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
                {description}
              </p>

              {/* Owner & Email */}
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                  <span className="font-semibold">Owner:</span> {owner}
                </div>
                <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                  <FaEnvelope className="text-accent" />
                  <span className="font-semibold">{userEmail}</span>
                </div>
              </div>

              {/* Price, Seats, Added, Availability */}
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                  <span className="font-semibold">Price/day:</span>
                  <span className="text-secondary font-bold">
                    ৳{pricePerDay}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                  <FaUsers className="text-accent" />
                  <span className="font-semibold">{seatCapacity} Seats</span>
                </div>
                <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                  <FaCalendarAlt className="text-accent" />
                  <span className="font-semibold">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                  <span className="font-semibold">Availability:</span>
                  <span
                    className={`font-semibold ${
                      isBooked ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {availability}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-between flex-wrap gap-4">
              <button
                onClick={handleBookingModalOpen}
                className={`btn btn-sm text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 ${
                  isBooked
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-linear-to-r from-primary via-accent to-secondary shadow-md hover:shadow-lg hover:-translate-y-1"
                }`}
                disabled={isBooked}
              >
                {isBooked ? "Booked" : "Book Now"}
              </button>

              <button
                onClick={()=>{
                  navigate("/allVehicles")
                }}
                className="btn btn-sm border-2 border-secondary text-secondary font-semibold rounded-full px-6 py-2 transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-md"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        <dialog
          ref={bookingModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center text-accent">
              Book The Vehicle
            </h3>

            <form onSubmit={handleBookingSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="input w-full"
                  defaultValue={user.displayName}
                />
                <label className="label">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="input w-full"
                  defaultValue={user.email}
                  readOnly
                />

                <label className="label">Vehicle Name</label>
                <input
                  type="text"
                  className="input w-full"
                  name="carName"
                  defaultValue={vehicleName}
                  required
                  readOnly
                />

                <label className="label">Book For</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Days"
                  name="days"
                  required
                  min={1}
                  step={1}
                />

                <button className="btn btn-sm text-white font-semibold rounded-full px-6 py-2 transition-all duration-300mt-4 bg-linear-to-r from-primary via-accent to-secondary shadow-md ">
                  Book Now
                </button>
              </fieldset>
            </form>

            <div className="">
              <form method="dialog">
                <button className="btn w-full mt-4">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ViewDetails;
