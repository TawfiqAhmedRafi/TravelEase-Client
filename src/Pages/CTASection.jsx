import { motion as MOTION } from "framer-motion";
import { useNavigate } from "react-router";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-base-100 py-24 px-6 poppins-font">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Start Hosting CTA */}
        <MOTION.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-base-200 text-base-content rounded-2xl p-10 shadow-xl border border-base-300 flex flex-col items-start hover:bg-base-100"
        >
          <h2 className="text-3xl font-bold mb-4 fredoka-font text-primary">
            Start Hosting Today
          </h2>

          <p className="mb-6 text-base-content/80">
            List your vehicles and start earning easily with trusted renters.
          </p>

          <button
            onClick={() => navigate("/addVehicles")}
            className="btn btn-primary px-8
             transition-all duration-300
             hover:-translate-y-1 hover:shadow-2xl
             active:translate-y-0"
          >
            Add Vehicle
          </button>
        </MOTION.div>

        {/* Book Ride CTA */}
        <MOTION.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-base-200 text-base-content rounded-2xl p-10 shadow-xl border border-base-300 flex flex-col items-start hover:bg-base-100"
        >
          <h2 className="text-3xl font-bold mb-4 fredoka-font text-secondary">
            Book Your Ride Now
          </h2>

          <p className="mb-6 text-base-content/80">
            Explore premium vehicles near you and book instantly.
          </p>

          <button
            onClick={() => navigate("/allVehicles")}
            className="btn btn-secondary px-8
             transition-all duration-300
             hover:-translate-y-1 hover:shadow-2xl
             active:translate-y-0"
          >
            Explore Vehicles
          </button>
        </MOTION.div>
      </div>
    </section>
  );
};

export default CTASection;
