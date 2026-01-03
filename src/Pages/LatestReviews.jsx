import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import useAxiosSecure from "../Router/hooks/useAxiosSecure";
import ReviewCard from "./ReviewCard";

const ReviewCardSkeleton = () => (
  <div className="bg-base-200/80 backdrop-blur rounded-2xl p-6 shadow-md h-64 flex flex-col justify-between animate-pulse">
    
    {/* User Info Skeleton */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-base-300" />
      <div className="h-4 w-32 bg-base-300 rounded" />
    </div>

    {/* Comment Skeleton */}
    <div className="flex-1 mb-4 space-y-2">
      <div className="h-3 bg-base-300 rounded w-full" />
      <div className="h-3 bg-base-300 rounded w-11/12" />
      <div className="h-3 bg-base-300 rounded w-10/12" />
    </div>

    {/* Rating Skeleton */}
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-4 h-4 rounded bg-base-300" />
      ))}
    </div>
  </div>
);

const LatestReviews = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latestReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-reviews");
      return res.data; // array of reviews
    },
  });

  if (isError)
    return (
      <div className="text-center py-10 text-error">Failed to load reviews</div>
    );

  return (
    <div className="py-10 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold  fredoka-font">
          What Our <span className="text-secondary">Customers</span> Are Saying
        </h2>
        <p className="text-gray-400 mt-2">
          Real experiences from travelers who booked vehicles and trips with
          TravelEase.
        </p>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 50,
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <SwiperSlide key={`skeleton-${i}`}>
                <ReviewCardSkeleton />
              </SwiperSlide>
            ))
          : data.map((review) => (
              <SwiperSlide key={review._id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default LatestReviews;
