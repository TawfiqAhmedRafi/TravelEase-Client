import React, { use, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const ForgetPass = () => {
    const { passwordReset } = use(AuthContext);
     const location = useLocation();
     const passedEmail = location.state?.email || "";
       const [email, setEmail] = useState(passedEmail);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent! ");
        setSuccess(true)
        
       
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      })
      .finally(() => {
        setLoading(false)
        setEmail("");
    });
     
  };
    return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className="hero bg-base-100 min-h-screen md:min-h-[80vh]">
          <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl p-2">

              <h1 className="text-3xl font-semibold text-center my-2 text-primary">
                Reset Your Password
              </h1>
              <form onSubmit={handleReset} className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-secondary mt-4"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Reset Password"}
                  </button>
                  {success && (
  <Link to="/auth/login" className="btn btn-primary mt-2 w-full text-center">
    Back to Login Page
  </Link>
)}
                
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    );
};

export default ForgetPass;