import React from "react";
import { useNavigate } from "react-router";

const topCategories = [
  {
    id: 1,
    name: "Audi A6",
    category: "Sedan",
    seatCapacity: 5,
    pricePerDay: 18000,
    image: "https://i.ibb.co.com/kgK73SnW/Untitled-24.png",
  },
  {
    id: 2,
    name: "Tesla Model X",
    category: "Electric",
    seatCapacity: 7,
    pricePerDay: 20000,
    image: "https://i.ibb.co/4wZ6c5BP/Untitled-5.png",
  },
  {
    id: 3,
    name: "Suzuki Swift",
    category: "Hatchback",
    seatCapacity: 4,
    pricePerDay: 3000,
    image: "https://i.ibb.co.com/4ZsryjW7/Untitled-14.png",
  },
  {
    id: 4,
    name: "Toyota RAV4",
    category: "SUV",
    seatCapacity: 5,
    pricePerDay: 12000,
    image: "https://i.ibb.co/fYmLCD4W/Untitled-8.png",
  },
  {
    id: 5,
    name: "Kia Carnival",
    category: "Van",
    seatCapacity: 7,
    pricePerDay: 14000,
    image: "https://i.ibb.co.com/XrM3dXXt/Untitled-22.png",
  },
  {
    id: 6,
    name: "Ford Mustang",
    category: "Sports",
    seatCapacity: 4,
    pricePerDay: 22000,
    image: "https://i.ibb.co.com/5XQW5zDh/Untitled-19.png",
  },
];

const TopCategories = () => {
  const navigate = useNavigate();
  const duplicated = [...topCategories, ...topCategories];
  const handleCategoryClick = (category) => {
    navigate("/allVehicles", { state: { initialCategory: category } });
  };

  return (
    <div className="w-full py-12 bg-linear-to-b from-base-100 to-base-100">
      <h2 className="text-3xl font-bold text-center mb-10 fredoka-font text-primary">
        Top Categories
      </h2>
      <p className="text-center text-accent mb-6">
        Explore the top cars in each category. Click any car to see all vehicles
        of this type.
      </p>
      <div className="overflow-hidden relative">
        <div className="flex animate-slide whitespace-nowrap">
          {duplicated.map((vehicle, index) => (
            <div
              key={index}
              title={`Click to view all ${vehicle.category} vehicles`} 
              onClick={() => handleCategoryClick(vehicle.category)}
              className="inline-flex flex-none w-80 md:w-96 p-4 m-2 rounded-xl shadow-xl bg-linear-to-r from-primary/20 via-accent/10 to-secondary/20 flex-col md:flex-row cursor-pointer"
            >
              <div className="w-full md:w-1/2 flex justify-center items-center  rounded-lg p-2">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-52 md:h-40 object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold fredoka-font text-primary">
                  {vehicle.name}
                </h3>
                <p className="text-secondary font-medium">{vehicle.category}</p>
                <p className="text-gray-600 mt-1 ">
                  Seats:{" "}
                  <span className="font-semibold text-info">
                    {vehicle.seatCapacity}
                  </span>{" "}
                  | Price:{" "}
                  <span className="font-semibold text-">
                    ৳{vehicle.pricePerDay}/day
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          display: flex;
          gap: 16px;
          animation: slide 30s linear infinite;
          animation-play-state: running;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TopCategories;
