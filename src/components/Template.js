import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frame from '../assets/frame.png'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div>
      {/* making the common template that is used in login as well as on logout page */}
      <div>
        {/* heading */}
        <h1>{title}</h1>

        {/* descriptions */}
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {/* form */}
        {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>
            <p>Sign in with Google</p>
        </button>
      </div>

      {/* image with filter behind */}
      <div>
        <img src={frame} alt="frame" width={558} height={504} loading="lazy" />
        <img src={image} alt="students" width={558} height={504} loading="lazy" />
      </div>
    
    </div>
  );
};

export default Template;
