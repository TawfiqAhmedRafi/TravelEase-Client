import React, {  useEffect, useState } from "react";
import LatestVehicles from "../../LatestVehicles/LatestVehicles";
import LoadingPage from "../../Pages/LoadingPage";
import Banner from "../Banner/Banner";
import TopCategories from "../TopCategories/TopCategories";
import AboutTravelEase from "../AboutTravelEase/AboutTravelEase ";
import WhyChooseTravelEase from "../../Pages/WhyChooseTravelEase";
import Statistics from "../../Pages/Statistics";
import HowItWorks from "../../Pages/HowItWorks";
import AddReview from "../../Pages/AddReview";
import LatestReviews from "../../Pages/LatestReviews";
import CTASection from "../../Pages/CTASection";
import useAxios from "../../Router/hooks/useAxios";
import FeaturedOwners from "../../Pages/FeaturedOwners ";


const Home = () => {
   const [latestVehicles, setLatestVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get("/latest-vehicles") // endpoint relative to your axios base URL
      .then((res) => {
        setLatestVehicles(res.data);
      })
      .catch((err) => console.error("Failed to fetch latest vehicles:", err))
      .finally(() => setLoading(false));
  }, [axiosInstance]);
  return (
    <div>
      <section className="pb-5 md:pb-10">
        {" "}
        <Banner></Banner>
      </section>

      {loading ? (
        <LoadingPage />
      ) : (
        <LatestVehicles latestVehicles={latestVehicles} />
      )}
      <section>
        <TopCategories></TopCategories>
      </section>
      <section>
        <FeaturedOwners></FeaturedOwners>
      </section>
      <section>
        <WhyChooseTravelEase></WhyChooseTravelEase>
      </section>
      <section className="py-5 md:py-8">
        <AboutTravelEase></AboutTravelEase>
      </section>

      <section>
        <Statistics></Statistics>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <LatestReviews></LatestReviews>
      </section>
      <section>
        <CTASection></CTASection>
      </section>
      {/* <AddReview></AddReview> */}
    </div>
  );
};

export default Home;
