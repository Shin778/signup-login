import React, { useState } from "react";
import "./SignupLogin.css";

import email_icon from "../assets/email.png";
import user_icon from "../assets/user.png";
import password_icon from "../assets/password.png";

export const SignupLogin = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon}></img>
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon}></img>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon}></img>
          <input type="password" placeholder="Password" />
        </div>
        <div className="submit-container">
          <div className={`submit ${action === "Sign Up" ? "active" : ""}`} onClick={() => setAction("Sign Up")}>
            Sign Up
          </div>
          <div className={`submit ${action === "Login" ? "active" : ""}`} onClick={() => setAction("Login")}>
            Login
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            <span>Forgot password?</span>
          </div>
        )}
      </div>
    </div>
  );
};
