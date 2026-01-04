import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";
import UpdateVehicleCard from "../Components/Update/UpdateVehicleCard";
import Pagination from "../Components/Pagination/Pagination";
import useAxios from "../Router/hooks/useAxios";

const MyVehicles = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 1,
    limit: 8,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;

    const fetchMyVehicles = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          email: user.email,
          page,
          limit,
        });

        const res = await axiosInstance.get(`/vehicles?${params}`);
        setVehicles(res.data.data);
        setPagination(res.data.pagination);
      } catch (err) {
        console.error("Failed to fetch vehicles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyVehicles();
  }, [user?.email, page, limit, axiosInstance]);

  const removeVehicle = (id) => {
    setVehicles((prev) => prev.filter((v) => v._id !== id));
  };

  return (
    <div>
      <main className="py-5 md:py-10 px-5 md:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary  mb-5 poppins-font">
          My <span className="text-secondary">Vehicles</span>
        </h2>

        {/* Limit Selector */}
        <div className="flex justify-end mb-4">
          <label className="mr-2 font-medium">Vehicles per page:</label>
          <select
            className="border p-1 rounded"
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value));
              setPage(1); // Reset page to 1 on limit change
            }}
          >
            {[4, 8, 12].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicles Grid */}
        {loading ? (
          <p className="text-center">Loading vehicles...</p>
        ) : vehicles.length === 0 ? (
          <p className="text-center text-neutral">
            You haven't added any vehicles yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {vehicles.map((vehicle) => (
              <UpdateVehicleCard
                key={vehicle._id}
                removeVehicle={removeVehicle}
                vehicle={vehicle}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={pagination.totalPages}
          onPageChange={setPage}
        />
      </main>
    </div>
  );
};

export default MyVehicles;
