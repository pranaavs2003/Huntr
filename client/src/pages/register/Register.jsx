import React from "react";
import "./register.scss";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="left__container">
        <div className="logo">
          <Logo />
        </div>
        <div className="text__container">
          <span className="text__line">
            Discover the world’s top Designers & Creatives.
          </span>
        </div>
      </div>
      <div className="right__container">
        <div className="login__container">
          {/* <Logo className="logo__image" /> */}
          <div className="top__text">Sign up to Dribbble</div>
          <div className="input__container">
            <label htmlFor="text">Username</label>
            <input type="text" className="input__field" />
            <label htmlFor="email">Email Address</label>
            <input type="email" className="input__field" />
            <label htmlFor="password">Password</label>
            <input type="password" className="input__field" />
            <span className="forgot__password">Forgot password? </span>
          </div>
          <button>Sign up</button>
          <Link to="/login" className="link">
            <span className="new__account">Already have an Account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
