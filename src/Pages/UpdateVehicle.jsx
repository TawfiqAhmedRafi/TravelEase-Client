import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { toast } from "react-toastify";

import useAxios from "../Router/hooks/useAxios";
import LoadingPage from "./LoadingPage";

const UpdateVehicle = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        axiosInstance.get(`/vehicles/${id}`).then((data) => {
          setVehicle(data.data);
        });
      } catch (err) {
        console.error(err);
        toast.error(err.message || "Failed to fetch vehicle data");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [id, axiosInstance]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!vehicle) return;

    try {
      const updatedData = {
        vehicleName: vehicle.vehicleName,
        category: vehicle.category,
        fuelType: vehicle.fuelType,
        pricePerDay: parseFloat(vehicle.pricePerDay),
        location: vehicle.location,
        description: vehicle.description,
        coverImage: vehicle.coverImage,
        seatCapacity: vehicle.seatCapacity, 
      };

     
      const { data } = await axiosInstance.patch(
        `/vehicles/${id}`,
        updatedData
      );

      toast.success("Vehicle updated successfully!");
      navigate("/myVehicles");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Something went wrong");
    }
  };
  if (loading) return <LoadingPage></LoadingPage>;
  if (!vehicle)
    return <div className="text-center py-20">Vehicle not found.</div>;

  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <main className="py-10 px-5 md:px-20">
        <h2 className="text-3xl font-semibold text-primary mb-6 poppins-font">
          Update Vehicle
        </h2>

        <form
          onSubmit={handleUpdate}
          className="bg-base-200 p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="vehicleName"
            value={vehicle.vehicleName || ""}
            onChange={handleChange}
            placeholder="Vehicle Name"
            className="input input-bordered w-full"
          />
          <select
            name="category"
            value={vehicle.category || ""}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select Category</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Sports">Sports</option>
            <option value="Electric">Electric</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Van">Van</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <input
            type="text"
            name="fuelType"
            value={vehicle.fuelType || ""}
            onChange={handleChange}
            placeholder="Fuel Type"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="pricePerDay"
            value={vehicle.pricePerDay || ""}
            onChange={handleChange}
            placeholder="Price Per Day"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="location"
            value={vehicle.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="seatCapacity"
            value={vehicle.seatCapacity || ""}
            onChange={handleChange}
            placeholder="Seating Capacity"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="coverImage"
            value={vehicle.coverImage || ""}
            onChange={handleChange}
            placeholder="Cover Image URL"
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            value={vehicle.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />

          <button type="submit" className="btn btn-success mt-4">
            Save Updates
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateVehicle;
