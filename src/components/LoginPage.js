import React, { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const LoginPage = () => {
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

  return (
    <div>
      <form>
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
        <button>Sign In</button>
      </form>
    </div>
  );
};
