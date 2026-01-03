import React, { Suspense } from "react";
import LatestVehicles from "../../LatestVehicles/LatestVehicles";
import LoadingPage from "../../Pages/LoadingPage";
import Banner from "../Banner/Banner";
import TopCategories from "../TopCategories/TopCategories";
import AboutTravelEase from "../AboutTravelEase/AboutTravelEase ";
import WhyChooseTravelEase from "../../Pages/WhyChooseTravelEase";
import Statistics from "../../Pages/Statistics";
import HowItWorks from "../../Pages/HowItWorks";

const latestVehiclesPromise = fetch(
  "https://travel-ease-server-roan.vercel.app/latest-vehicles"
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <section className="pb-5 md:pb-10">
        {" "}
        <Banner></Banner>
      </section>

      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <LatestVehicles
          latestVehiclesPromise={latestVehiclesPromise}
        ></LatestVehicles>
      </Suspense>
      <section>
        <TopCategories></TopCategories>
      </section>

      <section className="py-5 md:py-8">
        <AboutTravelEase></AboutTravelEase>
      </section>
      <section >
        <WhyChooseTravelEase></WhyChooseTravelEase>
      </section>
      <section>
        <Statistics></Statistics>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
    </div>
  );
};

export default Home;
