import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Navbar() {
  const { logout, currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left__container">
        <Link className="link" to="/">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1664872595/DBMS/logo_option_3-_font_i2l0om.png"
            alt="logo"
            className="logo__img"
          />
        </Link>
        <span className="nav__item">Inspiration</span>
        <span className="nav__item">Discover</span>
        <span className="nav__item">Hire Designers</span>
      </div>
      <div className="right__container">
        {currentUser && (
          <img
            src={
              currentUser.image ||
              "https://www.nipponpaint.com.mm/wp-content/uploads/2021/11/1632127421146-1468281_profile-icon-png-transparent-profile-picture-icon-png.jpg"
            }
            alt="profile-img"
            className="profile__image"
          />
        )}
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
