import React from "react";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxios from "../../Router/hooks/useAxios";

const UpdateVehicleCard = ({ vehicle, removeVehicle }) => {
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const {
    _id,
    vehicleName,
    category,
    fuelType,
    pricePerDay,
    location,
    availability,
    coverImage,
    seatCapacity,
    owner,
    description,
    createdAt,
  } = vehicle;

  const formattedDate = createdAt
    ? format(new Date(createdAt), "dd MMM yyyy")
    : "N/A";

  const isBooked = availability.toLowerCase() === "booked";

  const handleUpdate = () => {
    navigate(`/update-vehicle/${_id}`);
  };
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently delete the vehicle!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/vehicles/${_id}`);
          toast.success("Vehicle deleted successfully!");

          if (removeVehicle) removeVehicle(_id);
        } catch (err) {
          console.error(err);
          toast.error(err.response?.data?.error || "Failed to delete vehicle");
        }
      }
    });
  };

  return (
    <div
      className="
        card relative overflow-hidden 
        bg-base-200 text-base-content 
        rounded-2xl shadow-md 
        transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
        border border-base-300
      "
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-linear-to-r from-primary/80 via-secondary/70 to-accent/70 rounded-2xl pointer-events-none"></div>

      {/* Image */}
      <figure className="relative">
        <img
          src={coverImage}
          alt={vehicleName}
          className="h-56 w-full object-cover rounded-t-2xl"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs rounded-full ${
            isBooked
              ? "bg-warning/90 text-base-100"
              : "bg-success/90 text-white"
          }`}
        >
          {availability}
        </span>
      </figure>

      {/* Body */}
      <div className="card-body poppins-font">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold fredoka-font text-accent">
            {vehicleName}
          </h2>
          <span className="badge bg-secondary text-secondary-content border-none">
            {category}
          </span>
        </div>

        <p className="text-sm text-warning -mt-1 capitalize">{fuelType}</p>

        <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 dark:text-gray-300">
          <FaMapMarkerAlt className="text-accent" />
          <span>{location}</span>
        </div>

        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-bold text-secondary">৳{pricePerDay}/day</p>
          <div className="flex items-center gap-1 dark:text-gray-300 text-info">
            <FaUsers /> <span>{seatCapacity}</span>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <span>Owner: {owner}</span>
          <span>Added: {formattedDate}</span>
        </div>

        {/* Buttons */}
        <div className="card-actions justify-between mt-3 gap-2">
          <button className="btn w-full bg-linear-to-r from-primary via-accent to-secondary hover:brightness-110 shadow-md hover:shadow-lg border-none text-white">
            <Link
              to={`/vehicles/${_id}`}
              className="text-secondary font-semibold hover:underline hover:text-white transition-colors duration-200 cursor-pointer"
            >
              View More
            </Link>
          </button>

          <div className="flex w-full gap-2">
            <button
              onClick={handleUpdate}
              className="w-[49%] btn bg-success text-white border-none hover:brightness-110 shadow-md hover:shadow-lg"
            >
              Update vehicle
            </button>
            <button
              onClick={handleDelete}
              className="w-[49%] btn bg-error text-white border-none hover:brightness-110 shadow-md hover:shadow-lg"
            >
              Delete vehicle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehicleCard;
