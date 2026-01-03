import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { toast } from "react-toastify";
import useAxiosSecure from "../Router/hooks/useAxiosSecure";
import useAuth from "../Router/hooks/useAuth";

const AddReview = ({ vehicleId }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !comment.trim()) {
      return toast.error("Please provide rating and review");
    }

    const reviewData = {
      vehicleId,
      rating,
      comment,
      userName: user?.displayName || "Anonymous User",
      
    };

    try {
      setLoading(true);
      await axiosSecure.post("/reviews", reviewData);
      toast.success("Review submitted successfully");
      setRating(0);
      setComment("");
    } catch (error) {
        console.log(error)
      toast.error("Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-100 rounded-2xl p-8 shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">
        Leave a <span className="text-secondary">Review</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <label className="block mb-2 font-medium">Your Rating</label>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => {
              const value = i + 1;
              return (
                <button
                  type="button"
                  key={value}
                  onClick={() => setRating(value)}
                  onMouseEnter={() => setHover(value)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none"
                >
                  <FaStar
                    className={`text-2xl ${
                      value <= (hover || rating)
                        ? "text-secondary"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block mb-2 font-medium">Your Experience</label>
          <textarea
            className="textarea textarea-bordered w-full h-28"
            placeholder="Share your honest experience with the vehicle and booking process..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-secondary w-full"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
