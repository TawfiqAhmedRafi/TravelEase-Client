import React, { useEffect, useState } from "react";
import { FaCar, FaCalendarCheck } from "react-icons/fa";
import useAxios from "../Router/hooks/useAxios";

const Statistics = () => {
  const axiosInstance = useAxios();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axiosInstance.get("/stats").then((res) => {
      setStats(res.data);
    });
  }, [axiosInstance]);

  if (!stats) return null;

  return (
    <section className="bg-base-100 py-16">
      <div className="container mx-auto w-11/12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold fredoka-font">
            Travel<span className="text-secondary">Ease</span> in Numbers
          </h2>
          <p className="mt-4 text-gray-400">
            Real-time platform activity powered by our system
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-base-200 rounded-2xl p-8 text-center shadow transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <FaCar className="text-4xl text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold">{stats.totalVehicles}+</h3>
            <p className="text-gray-400 mt-2">Total Vehicles</p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 text-center shadow transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <FaCalendarCheck className="text-4xl text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold">{stats.totalBookings}+</h3>
            <p className="text-gray-400 mt-2">Total Bookings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
