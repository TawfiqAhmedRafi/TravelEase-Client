import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import LoadingPage from "./LoadingPage";
import Swal from "sweetalert2";
import useAxios from "../Router/hooks/useAxios";

const MyBookings = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ticking state to re-render countdown
  const [now, setNow] = useState(new Date());

  // Fetch bookings
  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/my-bookings-details?email=${user.email}`
        );
        setBookings(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
    const interval = setInterval(fetchBookings, 15000); 
    return () => clearInterval(interval);
  }, [user, axiosInstance]);

  
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCancelBooking = async (vehicleId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
      cancelButtonText: "No, keep it",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosInstance.delete("/bookings", {
          params: {
            vehicleId,
            userEmail: user.email,
          },
        });

        toast.success(data.message);

        // Remove cancelled booking from state
        setBookings((prev) =>
          prev.filter((booking) => booking.vehicleId !== vehicleId)
        );
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.error || "Something went wrong");
      }
    } else {
      Swal.fire("Cancelled", "Your booking is safe :)", "info");
    }
  };

  // Calculate time left
  const getTimeLeft = (returnDate) => {
    const end = new Date(returnDate);
    const diff = end - now;

    if (diff <= 0) return null; // expired

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return { days, hours, minutes };
  };

  if (loading) return <LoadingPage />;

  // Only show active bookings that are not expired
  const activeBookings = bookings.filter(
    (b) => b.status === "Booked" && new Date(b.returnDate) > now
  );

  return (
    <div className="bg-base-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="py-10 px-5 md:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-8 poppins-font">
          My <span className="text-secondary">Bookings</span>
        </h2>

        {activeBookings.length === 0 ? (
          <p className="text-center text-gray-500 poppins-font">
            You have no active bookings.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeBookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-base-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                {/* Vehicle Image */}
                <img
                  src={booking.vehicleInfo.coverImage}
                  alt={booking.vehicleName}
                  className="w-full h-48 object-cover"
                />

                {/* Card Content */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-primary fredoka-font">
                    {booking.vehicleName}
                  </h3>
                  <p className="text-sm text-secondary poppins-font">
                    <strong>Category:</strong> {booking.vehicleInfo.category}
                  </p>
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Booking Date:</strong>{" "}
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Return Date:</strong>{" "}
                    {new Date(booking.returnDate).toLocaleDateString()}
                  </p>

                 
                  {(() => {
                    const timeLeft = getTimeLeft(booking.returnDate);
                    if (!timeLeft) {
                      return (
                        <p className="text-sm text-gray-400 font-semibold">
                          Booking expired
                        </p>
                      );
                    }
                    return (
                      <p className="text-sm text-error poppins-font">
                        <strong className="text-neutral-content">Time Left:</strong>{" "}
                        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                      </p>
                    );
                  })()}

                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Owner:</strong> {booking.vehicleInfo.owner}
                  </p>
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Owner Email:</strong> {booking.vehicleInfo.userEmail}
                  </p>
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Username:</strong> {user.displayName}
                  </p>
                  <button
                    onClick={() => handleCancelBooking(booking.vehicleId)}
                    className="mt-3 px-4 py-2 bg-error text-white rounded-lg hover:bg-red-700 transition-all font-semibold poppins-font"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyBookings;
