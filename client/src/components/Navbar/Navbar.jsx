import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Navbar() {
  const { logout, currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png"
          alt="logo"
          className="logo__img"
        />
        <span className="nav__item">Inspiration</span>
        <span className="nav__item">Discover</span>
        <span className="nav__item">Hire Designers</span>
      </div>
      <div className="right__container">
        {currentUser && 
          <img src={currentUser.image || "https://www.nipponpaint.com.mm/wp-content/uploads/2021/11/1632127421146-1468281_profile-icon-png-transparent-profile-picture-icon-png.jpg"} alt="profile-img" className="profile__image" />}
        <span className="nav__item"><Link to="/login" className="link">{currentUser ? <ExitToAppIcon onClick={logout} /> : "Sign in"}</Link></span>
        <button className="share__button">Share your work</button>
      </div>
    </div>
  );
}
