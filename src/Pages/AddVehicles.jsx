import React, { use,  useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import useAxios from "../Router/hooks/useAxios";


const AddVehicles = () => {
    const {user} = use(AuthContext)
    const axiosInstance = useAxios()
  const [vehicle, setVehicle] = useState({
    vehicleName: "",
    category: "",
    pricePerDay: "",
    location: "",
    availability: "Available",
    fuelType: "",
    seatCapacity: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate required fields
  if (!vehicle.vehicleName || !vehicle.category || !vehicle.pricePerDay) {
    toast.error("Please fill in all required fields");
    return;
  }

  try {
    // POST request using Axios
    const { data } = await axiosInstance.post("/vehicles", {
      ...vehicle,
      owner: user.displayName,
    pricePerDay: parseFloat(vehicle.pricePerDay),
      userEmail: user.email,
      createdAt: new Date(),
    });

    Swal.fire({
      title: "Success!",
      text: "Vehicle added successfully!",
      icon: "success",
      confirmButtonColor: "#D4AF37",
      confirmButtonText: "OK",
    });

    // Reset vehicle form
    setVehicle({
      vehicleName: "",
      category: "",
      pricePerDay: "",
      location: "",
      availability: "Available",
      fuelType: "",
      seatCapacity: "",
      description: "",
      coverImage: "",
    });
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.error || "Failed to add vehicle");
  }
};
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="py-10 px-5 md:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-8 poppins-font">
          Add <span className="text-secondary">Vehicle</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-base-200 p-6 rounded-2xl shadow-lg border border-base-300 max-w-3xl mx-auto"
        >
          <input
            type="text"
            name="vehicleName"
            placeholder="Vehicle Name"
            value={vehicle.vehicleName}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <select
            name="category"
            value={vehicle.category}
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
            type="number"
            name="pricePerDay"
            placeholder="Price Per Day"
            value={vehicle.pricePerDay}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={vehicle.location}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <input
            type="text"
            name="fuelType"
            placeholder="Fuel Type"
            value={vehicle.fuelType}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <input
            type="number"
            name="seatCapacity"
            placeholder="Seat Capacity"
            value={vehicle.seatCapacity}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <input
            type="text"
            name="coverImage"
            placeholder="Cover Image URL"
            value={vehicle.coverImage}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={vehicle.description}
            onChange={handleChange}
            className="p-3 rounded-xl border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <button
            type="submit"
            className="bg-primary text-base-100 font-semibold py-3 rounded-xl hover:bg-secondary hover:text-white transition-all"
          >
            Add Vehicle
          </button>
        </form>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AddVehicles;
