import React, { useEffect, useState } from "react";
import useAxios from "../Router/hooks/useAxios";

const FeaturedOwners = () => {
  const axiosInstance = useAxios();
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/featured-owners")
      .then((res) => setOwners(res.data))
      .catch((err) => console.error("Failed to fetch featured owners:", err))
      .finally(() => setLoading(false));
  }, [axiosInstance]);

  if (loading) return <p className="text-center py-10">Loading featured owners...</p>;
  if (owners.length === 0) return <p className="text-center py-10">No featured owners yet.</p>;

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto w-11/12">
        <h2 className="text-4xl font-bold fredoka-font text-center mb-12">
          Featured <span className="text-secondary">Owners</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {owners.map((owner) => (
            <div
              key={owner.ownerName}
              className="bg-base-200 rounded-2xl p-6 flex flex-col items-center shadow transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={owner.ownerImage}
                alt={owner.ownerName}
                className="w-24 h-24 rounded-full border-2 border-secondary object-cover mb-4"
              />
              <h3 className="font-semibold text-lg text-center">{owner.ownerName}</h3>
              <p className="text-gray-400 text-sm mt-1 text-center">{owner.vehicleCategory}</p>
              <p className="text-gray-500 text-xs mt-1">{owner.totalVehicles} vehicles</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOwners;
