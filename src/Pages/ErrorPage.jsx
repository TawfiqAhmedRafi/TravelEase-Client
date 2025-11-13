import React from 'react';
import errorImg from '../assets/404.png'
import { Link } from "react-router";
const ErrorPage = () => {
    return (
        <div  className="flex flex-col items-center justify-center flex-1 text-center px-4 my-5">
        <img
          src={errorImg}
          alt="Error"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
        <div className="mt-5">
          <Link to={`/`} className="btn btn-secondary">
            Back to Home
          </Link>
        </div> 
        </div>
    );
};

export default ErrorPage;