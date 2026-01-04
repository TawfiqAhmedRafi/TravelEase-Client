import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import LoadingPage from "../../Pages/LoadingPage";
import useAxiosSecure from "../../Router/hooks/useAxiosSecure";

const COLORS = ["#4ade80", "#f87171", "#22c55e", "#facc15"]; // Available/Booked/Completed/Pending

const AdminDashboard = () => {
  const isMobile = window.innerWidth < 640;
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const statsRes = await axiosSecure.get("/admin-stats");
        const bookingsRes = await axiosSecure.get("/bookings-over-time");
        const availabilityRes = await axiosSecure.get("/vehicle-availability");

        setDashboard({
          cards: {
            totalVehicles: statsRes.data.totalVehicles,
            totalBookings: statsRes.data.totalBookings,
            completed: statsRes.data.completedBookings,
            pending: statsRes.data.pendingBookings,
          },
          pieChart: availabilityRes.data,
          barChart: bookingsRes.data, 
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [axiosSecure]);
console.log(dashboard)
  if (loading) return <LoadingPage />;

  const { cards, pieChart, barChart } = dashboard;

  return (
    <div className="p-2 md:p-6 space-y-10">
      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total Vehicles" value={cards.totalVehicles} bg="bg-blue-500" />
        <Card title="Total Bookings" value={cards.totalBookings} bg="bg-indigo-500" />
        <Card title="Completed Bookings" value={cards.completed} bg="bg-green-500" />
        <Card title="Pending Bookings" value={cards.pending} bg="bg-yellow-500" />
      </div>

      {/* PIE CHART: Vehicle Availability */}
      <div className="p-4 md:p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Vehicle Availability
        </h2>
        <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
          <PieChart>
            <Pie
              data={pieChart}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={isMobile ? 60 : 100}
              innerRadius={isMobile ? 35 : 60}
              label={
                isMobile
                  ? false
                  : ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieChart.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART: Bookings Over Time */}
      <div className="p-4 md:p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Bookings Over Time
        </h2>
        <ResponsiveContainer width="100%" height={isMobile ? 220 : 300}>
          <BarChart data={barChart} margin={{ top: 10, right: 30, left: 0, bottom: isMobile ? 50 : 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              angle={isMobile ? -45 : 0}
              textAnchor={isMobile ? "end" : "middle"}
              interval={0}
            />
            <YAxis allowDecimals={false} />
            {!isMobile && <Tooltip />}
            <Bar dataKey="completed" fill="#22c55e" radius={[5, 5, 0, 0]} />
            <Bar dataKey="pending" fill="#facc15" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// CARD COMPONENT
const Card = ({ title, value, bg }) => (
  <div className={`p-5 shadow-md rounded-xl text-white flex flex-col justify-center items-center ${bg}`}>
    <p className="text-sm md:text-base">{title}</p>
    <h2 className="text-2xl md:text-3xl font-bold mt-2">{value}</h2>
  </div>
);

export default AdminDashboard;
