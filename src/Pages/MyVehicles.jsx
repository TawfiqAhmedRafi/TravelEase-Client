import React, { useEffect, useState, use } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { AuthContext } from "../Context/AuthContext";
import UpdateVehicleCard from "../Components/Update/UpdateVehicleCard";

import useAxios from "../Router/hooks/useAxios";

const MyVehicles = () => {
    const axiosInstance = useAxios();
  const { user } = use(AuthContext);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchMyVehicles = async () => {
      try {
       axiosInstance.get(`/vehicles?email=${user.email}`)
       .then(data=>{
        setVehicles(data.data);
       })
      } catch (err) {
        console.error("Failed to fetch my vehicles:", err);
      }
    };

    fetchMyVehicles();
  }, [user?.email,axiosInstance]);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="py-5 md:py-10 px-5 md:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-5 poppins-font">
          My <span className="text-secondary">Vehicles</span>
        </h2>

        {vehicles.length === 0 ? (
          <p className="text-center text-neutral">You haven't added any vehicles yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {vehicles.map((vehicle) => (
              <UpdateVehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyVehicles;
