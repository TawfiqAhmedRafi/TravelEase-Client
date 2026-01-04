import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router";
import useAxios from "../Router/hooks/useAxios";
import axios from "axios";

const Register = () => {
  const { createUser, setUser, googleSignIn, updateUser } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoFile = form.photo.files[0]; 

    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    // Password validations
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!uppercasePattern.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!lowercasePattern.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }

    try {

      const res = await createUser(email, password);
      const user = res.user;

      let photoURL = "";
      if (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        const imageRes = await axios.post(image_API_URL, formData);
        photoURL = imageRes.data.data.url;
      }
e
      await updateUser({ displayName: name, photoURL });

      setUser({ ...user, displayName: name, photoURL });

  
      const newUser = {
        name,
        email,
        image: photoURL,
      };

      await axiosInstance.post("/users", newUser);

      toast.success("Sign-up successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Sign-up failed!");
    }
  };

  const handleGoogle = () => {
    return googleSignIn()
      .then(async (res) => {
        const user = res.user;

        const newUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };

        try {
          await axiosInstance.post("/users", newUser);
        } catch (error) {
          console.error("Failed to save user", error);
          toast.error("Failed to save user info.");
        }

        setUser(user);
        toast.success("Google sign-up successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="hero bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-2 py-5">
              <h2 className="text-2xl font-semibold text-center">
                Register your account
              </h2>
              <form onSubmit={handleSubmit} className="card-body">
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name"
                    required
                  />

                  {/* Photo */}
                  <label className="label">Photo</label>
                  <input
                    name="photo"
                    type="file"
                    className="file-input file-input-bordered w-full"
                    required
                  />

                  {/* Email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  {/* Password */}
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
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="text-accent text-sm mt-1">{passwordError}</p>
                  )}

                  <button type="submit" className="btn btn-primary mt-4">
                    Register
                  </button>
                </fieldset>

                <button
                  type="button"
                  onClick={handleGoogle}
                  className="btn btn-secondary btn-outline w-full mt-3"
                >
                  <FcGoogle size={24} /> Sign Up with Google
                </button>

                <p className="mt-2">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-secondary underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-5 md:px-8">
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
