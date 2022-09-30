import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <img
        src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1664557989/DBMS/6d6c8e116869629.606b2955915c2_aiygjr.jpg"
        alt="header-img"
        className="header__image"
      />
      <div className="header__container">
        <div className="category__container">
          <div className="category__item">Animation</div>
          <div className="category__item">Illustration</div>
          <div className="category__item">Mobile</div>
          <div className="category__item">Print</div>
          <div className="category__item">Product Design</div>
          <div className="category__item">Typography</div>
          <div className="category__item">Web Design</div>
        </div>
        <div className="main__text">
          Explore the world’s leading design portfolios
        </div>
        <div className="sub__text">
          Millions of designers and agencies around the world showcase their
          portfolio work on Dribbble - the home to the world’s best design and
          creative professionals.
        </div>
      </div>
    </div>
  );
}
