import React from "react";
import errorImg from "../assets/404.png";
import { Link } from "react-router";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
const ErrorPage = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 my-5">
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
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ErrorPage;
