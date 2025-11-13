import React, { useEffect, useState, use } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const MyBookings = () => {
  const { user } = use(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/my-bookings-details?email=${user.email}`
        );
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-base-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="py-10 px-5 md:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-8 poppins-font">
          My <span className="text-secondary">Bookings</span>
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500 poppins-font">
            You have no bookings yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking) => (
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
                  <h3 className="text-xl font-semibold text-primary poppins-font">
                    {booking.vehicleInfo.vehicleName}
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
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Owner:</strong> {booking.vehicleInfo.owner}
                  </p>
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Owner Email:</strong>{" "}
                    {booking.vehicleInfo.userEmail}
                  </p>
                  <p className="text-sm text-neutral-content poppins-font">
                    <strong>Username:</strong> {user.displayName}
                  </p>

                  <p
                    className={`font-semibold mt-2 ${
                      booking.status === "Booked"
                        ? "text-info"
                        : booking.status === "Completed"
                        ? "text-success"
                        : "text-error"
                    } poppins-font`}
                  >
                    Status: {booking.status}
                  </p>
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
