import React, { useState, useContext } from "react";
import "./login.scss";
import Logo from "../../assets/Logo";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = {
      email,
      password,
    };

    try {
        await login(inputs);
        navigate("/");
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className="login">
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
          <div className="top__text">Sign in to Dribbble</div>
          <div className="input__container">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="input__field"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input__field"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="forgot__password">Forgot password? </span>
          </div>
          <button onClick={handleSubmit}>Sign In</button>
          <Link to="/register" className="link">
            <span className="new__account">Create an Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
