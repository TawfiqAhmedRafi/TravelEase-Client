import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-base-200/80 backdrop-blur rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-64">
      
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.userImage || "/avatar.png"}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover border border-base-300"
        />
        <h3 className="text-sm md:text-base font-semibold text-secondary">
          {review.userName}
        </h3>
      </div>

      {/* Review Content */}
      <p className="text-gray-400 italic flex-1 mb-4 line-clamp-4">
        "{review.comment}"
      </p>

      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
