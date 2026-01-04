import React from "react";
import forbiddenImg from "../../assets/forbidden.png";

import { Link } from "react-router";


const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 text-center space-y-6 md:space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary">
        Access Denied
      </h1>
      <img
        src={forbiddenImg}
        alt="Forbidden"
        className="w-56 md:w-72 lg:w-80 object-contain"
      />
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <Link to="/">
          <button className="btn btn-primary ">Go Home</button>
        </Link>
        <Link to="/dashboard">
          <button className="btn btn-secondary">Go Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
