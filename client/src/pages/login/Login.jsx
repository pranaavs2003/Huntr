import React, { useState, useContext } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ErrorBoxSmall from "../../assets/errorBoxSmall/ErrorBoxSmall";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

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
      setIsError(true);
      if (err.response.status === 404 || err.response.status === 400)
        setError("Invalid Email/Password!");
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="left__container">
        <div className="logo">
          <Link className="link" to="/">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1664872595/DBMS/logo_option_3-_font_i2l0om.png"
              alt="logo-img"
              className="Logo"
            />
          </Link>
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
          <div className="top__text">Sign in to Huntr</div>
          <form action="">
            <div className="input__container">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="input__field"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="input__field"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="forgot__password">Forgot password? </span>
            </div>
          </form>
          {isError && <ErrorBoxSmall input={error} />}
          <button onClick={handleSubmit}>Sign In</button>
          <Link to="/register" className="link">
            <span className="new__account">Create an Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
