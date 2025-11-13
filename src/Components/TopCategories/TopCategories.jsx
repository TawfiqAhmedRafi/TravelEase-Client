import React from "react";

const topCategories = [
  {
    id: 1,
    name: "Toyota Corolla",
    category: "Sedan",
    seatCapacity: 5,
    pricePerDay: 4500,
    image: "https://i.ibb.co.com/VYVgKmP1/Untitled-17.png",
  },
  {
    id: 2,
    name: "Honda Civic",
    category: "Sedan",
    seatCapacity: 5,
    pricePerDay: 4300,
    image: "https://i.ibb.co.com/6JWR4X9Z/Untitled-16.png",
  },
  {
    id: 3,
    name: "Nissan Leaf",
    category: "Electric",
    seatCapacity: 5,
    pricePerDay: 7000,
    image: "https://i.ibb.co.com/wrQQSGFK/Untitled-15.png",
  },
  {
    id: 4,
    name: "Suzuki Swift",
    category: "Hatchback",
    seatCapacity: 4,
    pricePerDay: 3000,
    image: "https://i.ibb.co.com/4ZsryjW7/Untitled-14.png",
  },
  {
    id: 5,
    name: "Toyota Hiace",
    category: "Van",
    seatCapacity: 12,
    pricePerDay: 9000,
    image: "https://i.ibb.co.com/vxLg3Vc3/Untitled-13.png",
  },
  {
    id: 6,
    name: "Tesla Model 3",
    category: "Electric",
    seatCapacity: 5,
    pricePerDay: 15000,
    image: "https://i.ibb.co/Mk603Y7n/Untitled-12.png",
  },
  {
    id: 7,
    name: "Mitsubishi Pajero",
    category: "SUV",
    seatCapacity: 7,
    pricePerDay: 13000,
    image: "https://i.ibb.co.com/ymRMz5dR/Untitled-11.png",
  },
  {
    id: 8,
    name: "Honda CR-V",
    category: "SUV",
    seatCapacity: 5,
    pricePerDay: 11500,
    image: "https://i.ibb.co/40Vxb8V/Untitled-10.png",
  },
  {
    id: 9,
    name: "Tesla Model X",
    category: "Electric",
    seatCapacity: 5,
    pricePerDay: 20000,
    image: "https://i.ibb.co/4wZ6c5BP/Untitled-5.png",
  }
];


  const TopCategories = () => {
  const duplicated = [...topCategories, ...topCategories];

  return (
    
    <div className="w-full py-12 bg-linear-to-b from-base-100 to-base-100">
      <h2 className="text-3xl font-bold text-center mb-10 fredoka-font text-primary">
        Top Categories
      </h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-slide whitespace-nowrap">
          {duplicated.map((vehicle, index) => (
            <div
              key={index}
              className="inline-flex flex-none w-80 md:w-96 p-4 m-2 rounded-xl shadow-xl bg-linear-to-r from-primary/20 via-accent/10 to-secondary/20 flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 flex justify-center items-center  rounded-lg p-2">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-52 md:h-40 object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center">
                <h3 className="text-xl font-bold fredoka-font text-primary">{vehicle.name}</h3>
                <p className="text-secondary font-medium">{vehicle.category}</p>
                <p className="text-gray-600 mt-1 ">
                  Seats: <span className="font-semibold text-info">{vehicle.seatCapacity}</span> | 
                  Price: <span className="font-semibold text-">৳{vehicle.pricePerDay}/day</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

     <style jsx>{`
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
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

