import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthProvider from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = () => {
     const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleSignIn } = use(AuthContext);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
       
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
       
        toast.success("Google sign-in successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
    return (
    <div className="bg-base-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className="hero bg-base-100 py-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shrink-0 shadow-2xl py-5">
              <h2 className="font-semibold text-2xl text-center">
                Login your account
              </h2>
              <form onSubmit={handleLogIn} className="card-body">
                <fieldset className="fieldset">
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="Email"
                    required
                  />
                  {/* password */}
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      required
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary focus:outline-none"
                    >
                      {showPassword ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                  </div>
                  <div>
                    <Link
                      to="/auth/forgetpass"
                      className="hover:underline hover:text-warning"
                      state={{ email }}
                    >
                      Forgot password?
                    </Link>
                  </div>
                  {error && <p className="text-red-600 ">{error}</p>}
                  <button className="btn btn-primary mt-4">Login</button>
                </fieldset>
                <button
                  onClick={handleGoogle}
                  className="btn btn-secondary btn-outline w-full "
                >
                  <FcGoogle size={24} /> Login with Google
                </button>
                <p>
                  Don't have an Account?{" "}
                  <Link
                    className="text-secondary underline"
                    to="/auth/register"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-5 md:px-8">
        <Footer></Footer>
      </footer>
    </div>
    );
};

export default Login;