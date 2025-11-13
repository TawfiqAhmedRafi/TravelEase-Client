import React, { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import VehicleCard from "../Components/VehicleCard/VehicleCard";
import useAxios from "../Router/hooks/useAxios";


const categories = ["All", "SUV", "Sedan", "Sports", "Electric"];

const AllVehiclesPage = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    sortBy: "pricePerDay",
    order: "asc",
  });

  
  useEffect(() => {
    const fetchVehicles = async () => {
      const params = new URLSearchParams(filters);
      axiosInstance.get(`/vehicles?${params}`)
      .then(data =>{
        setVehicles(data.data);
      })
    };
    fetchVehicles();
  }, [filters,axiosInstance]);
  
  const handleCategoryClick = (meow) => {
  setFilters((prev) => ({
    ...prev,
    category: meow === "All" ? "" : meow,
  }));
};

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="py-5 md:py-10 px-5 md:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-5 poppins-font">
          All <span className="text-secondary">Vehicles</span>
        </h2>

        {/* Category Pills with LayoutGroup */}


<LayoutGroup>
  <div className="flex justify-center gap-4 mb-6 flex-wrap">
    {categories.map((meow) => (
      <motion.button
  key={meow}
  onClick={() => handleCategoryClick(meow)}
  className={`relative px-6 py-2 rounded-full font-semibold transition-all poppins-font ${
    (meow === "All" && filters.category === "") || filters.category === meow
      ? "text-base-100 bg-primary"
      : "text-neutral bg-base-100 hover:bg-base-300"
  }`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {meow}
  {((meow === "All" && filters.category === "") || filters.category === meow) && (
    <motion.div
      layoutId="underline"
      className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full"
    />
  )}
</motion.button>
    ))}
  </div>
</LayoutGroup>


        {/* Other Filters */}
       <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 justify-center items-stretch bg-base-200 p-6 rounded-2xl shadow-lg border border-base-300">
  {/* Location Filter */}
  <motion.input
    whileHover={{ scale: 1.03 }}
    whileFocus={{ scale: 1.03, borderColor: "#D4AF37" }}
    type="text"
    name="location"
    placeholder="Search by location"
    value={filters.location}
    onChange={handleFilterChange}
    className="flex-1 min-w-[200px] p-3 rounded-xl border border-base-300 bg-base-100 text-neutral font-medium focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
  />

  {/* Sort By */}
  <motion.select
    whileHover={{ scale: 1.05 }}
    whileFocus={{ scale: 1.05, borderColor: "#D4AF37" }}
    name="sortBy"
    value={filters.sortBy}
    onChange={handleFilterChange}
    className="flex-1 min-w-[150px] p-3 rounded-xl border border-base-300 bg-base-100 text-neutral font-semibold focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
  >
    <option value="pricePerDay">Price</option>
    <option value="createdAt">Newest</option>
  </motion.select>

  {/* Order */}
  <motion.select
    whileHover={{ scale: 1.05 }}
    whileFocus={{ scale: 1.05, borderColor: "#D4AF37" }}
    name="order"
    value={filters.order}
    onChange={handleFilterChange}
    className="flex-1 min-w-[150px] p-3 rounded-xl border border-base-300 bg-base-100 text-neutral font-semibold focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
  >
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </motion.select>
</div>


        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AllVehiclesPage;
