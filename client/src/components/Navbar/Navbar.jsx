import React from "react";
import "./navbar.scss";
import {Link} from "react-router-dom";

export default function Navbar() {
  return(
    <div className="navbar">
        <div className="left__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png" alt="logo" className="logo__img"/>
            <span className="nav__item">Inspiration</span>
            <span className="nav__item">Discover</span>
            <span className="nav__item">Hire Designers</span>
        </div>
        <div className="right__container">
            <Link to="/login" className="link"><span className="nav__item">Sign in</span></Link>
            <button className="share__button">Share your work</button>
        </div>
    </div>
  );
}
