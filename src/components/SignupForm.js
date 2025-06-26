import React from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        }
    );

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true); // Assuming setIsLoggedIn is a function to update the login state
        toast.success("Account Created Successfully");
        navigate("/dashboard"); // Redirect to dashboard or another page
        // Reset form after submission
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        
    }

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return(
        <div>
            {/* Student - Instructor tab */}
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                        <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            ></input>
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            ></input>
                    </label>

                    <label>
                        <p>Email Address<sup>*</sup></p>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            required
                        ></input>
                    </label>

                    <label>
                        <p>Password<sup>*</sup></p>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            required
                        ></input>
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
                    </label>

                    <lable>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        required
                        ></input>
                        <span>
                                    {showConfirmPassword ? (
                                    <IoMdEye
                                        onClick={() => setShowConfirmPassword(false)}
                                        className="cursor-pointer"
                                    />
                                    ) : (
                                    <IoMdEyeOff
                                        onClick={() => setShowConfirmPassword(true)}
                                        className="cursor-pointer"
                                    />
                                    )}
                        </span>
                    </lable>
                </div>

                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;