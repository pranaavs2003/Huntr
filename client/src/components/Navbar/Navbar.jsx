import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Navbar() {
  const { logout, currentUser } = useContext(AuthContext);

  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", (e) => setY(window.pageYOffset));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => console.log("Scrolling"));
    };
  }, [y]);

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: `rgb(${255 - Math.abs(80 - y) * 0.4 + 50},${
          255 - Math.abs(80 - y) * 0.4 + 50
        },${255 - Math.abs(80 - y) * 0.4 + 50},${1 - y / 80})`,
      }}
    >
      <div className="left__container">
        <Link className="link" to="/">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1664872595/DBMS/logo_option_3-_font_i2l0om.png"
            alt="logo"
            className="logo__img"
          />
        </Link>
        <span className="nav__item">
          <Link to="/inspiration" className="link">
            Inspiration
          </Link>
        </span>
        <span className="nav__item">
          <Link className="link" to="/discover">
            Discover
          </Link>
        </span>
        <span className="nav__item">
          <Link to="/hire" className="link">
            Hire Designers
          </Link>
        </span>
      </div>
      <div className="right__container">
        <Link to="/profile">
          {currentUser && (
            <img
              src={
                currentUser.image ||
                "https://res.cloudinary.com/dbzzj25vc/image/upload/v1667412960/DBMS/icon1_kuwb4m.jpg"
              }
              alt="profile-img"
              className="profile__image"
            />
          )}
        </Link>
        <span className="nav__item">
          <Link to="/login" className="link">
            {currentUser ? <ExitToAppIcon onClick={logout} /> : "Sign in"}
          </Link>
        </span>
        <Link className="link" to={currentUser ? "/new" : "/login"}>
          <button className="share__button">Share your work</button>
        </Link>
      </div>
    </div>
  );
}
