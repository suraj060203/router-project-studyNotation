import React from "react";

const SignupPage = () => {

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

    const [showPassword, setShowPassword] = React.useState(false);

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

            <form>
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
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
                    </lable>
                </div>

                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignupPage;