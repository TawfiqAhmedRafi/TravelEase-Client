import React, { use, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate , Link } from 'react-router';

const Register = () => {
      const { createUser, setUser,  googleSignIn ,updateUser} = use(AuthContext);
    const [showPassword,setShowPassword]=useState(false);
     const [passwordError, setPasswordError] = useState("");
     const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

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
   // console.log({ email, password, name, photo });
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => console.log(error));
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
const handleGoogle=()=>{
    return googleSignIn()
    .then((res)=>{
         const user = res.user;
         const newUser={
            name : user.displayName,
            email : user.email,
            image : user.photoURL
         }
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newUser)
        }).then(res=>res.json()).then(data=>{
            console.log("after user", data)
        })
     
      
      setUser(user);
       toast.success("Google sign-up successful!");
      navigate("/");
    })
     .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  }
    return (
         <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className=" hero bg-base-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-2 py-5">
              <h2 className="text-2xl font-semibold text-center">
                Register your account{" "}
              </h2>
              <form onSubmit={handleSubmit} className="card-body">
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name"
                    required
                  />

                  {/* PhotoURL */}
                  <label className="label">PhotoURL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="PhotoURL"
                    required
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  {/* pass */}
                  <label className="label">Password</label>
                  <div className="relative">
                     <input
                    name="password"
                    type={showPassword? 'text':'password'}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button onClick={()=>setShowPassword(!showPassword)}
                   type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary focus:outline-none">
                    {showPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
                    
                    </button>

                  </div>
                 
                  {passwordError && (
                    <p className="text-accent text-sm mt-1">{passwordError}</p>
                  )}

                  <button type="submit" className="btn btn-primary mt-4">
                    Register
                  </button>
                </fieldset>

                <button type="button" onClick={handleGoogle} className="btn btn-secondary btn-outline w-full ">
                  <FcGoogle size={24} /> Sign Up with Google
                </button>
                <p>
                  Already have an account?
                  <Link to="/auth/login" className="text-secondary underline">
                    Login
                  </Link>{" "}
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

export default Register;