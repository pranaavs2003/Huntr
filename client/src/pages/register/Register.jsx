import React, { useState } from "react";
import "./register.scss";
import Logo from "../../assets/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/register",
        data
      );
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

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
            <input
              type="text"
              className="input__field"
              onChange={(e) => setUsername(e.target.value)}
            />
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
          <button onClick={handleSubmit}>Sign up</button>
          <Link to="/login" className="link">
            <span className="new__account">Already have an Account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
