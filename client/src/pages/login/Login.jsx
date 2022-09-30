import React from "react";
import "./login.scss";
import Logo from "../../assets/Logo";
import {Link} from "react-router-dom";

export default function Login() {
  return(
    <div className="login">
        <div className="left__container">
            <div className="logo">
                <Logo/>
            </div>
            <div className="text__container">
                <span className="text__line">Discover the world’s top Designers & Creatives.</span>
            </div>
        </div>
        <div className="right__container">
            <div className="login__container">
                {/* <Logo className="logo__image" /> */}
                <div className="top__text">Sign in to Dribbble</div>
                <div className="input__container">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="input__field" />
                    <label htmlFor="password">Password</label>
                    <input type="password" className="input__field" />
                    <span className="forgot__password">Forgot password? </span>
                </div>
                <button>Sign In</button>
                <Link to="/register" className="link"><span className="new__account">Create an Account</span></Link>
            </div>
        </div>
    </div>
  );
}
