import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState(false);

  function submitHandler(event){
    event.preventDefault();
    // Here you would typically handle the login logic, e.g., sending a request to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ email: "", password: "" });
    // Optionally, redirect or update state to indicate successful login
    setIsLoggedIn(true); // Assuming setIsLoggedIn is a function to update the login state
    // You might also want to navigate to a different page after login
    navigate("/dashboard"); // Redirect to dashboard or another page
    toast.success("Logged In");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="login">
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter email address"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            required
            id="login"
          />
        </label>

        <label htmlFor="password">
          <p>
            Password<sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
            required
            id="password"
          />

          <span>
            {showPassword ? (
              <IoMdEye
                onClick={() => setShowPassword(false)}
                className="cursor-pointer"
              />
            ) : (
              <IoMdEyeOff
                onClick={() => setShowPassword(true)}
                className="cursor-pointer"
              />
            )}
          </span>
          <Link to="#">
            <p>Forgot Password</p>
          </Link>
        </label>
          
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
