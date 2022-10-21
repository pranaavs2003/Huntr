import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="link" to="/category/graphicdesign">
            <div className="category__item">Graphic Design</div>
          </Link>
          <Link className="link" to="/category/illustration">
            <div className="category__item">Illustration</div>
          </Link>
          <Link className="link" to="/category/mobile">
            <div className="category__item">Mobile</div>
          </Link>
          <Link className="link" to="/category/print">
            <div className="category__item">Print</div>
          </Link>
          <Link className="link" to="/category/productdesign">
            <div className="category__item">Product Design</div>
          </Link>
          <Link className="link" to="/category/typography">
            <div className="category__item">Typography</div>
          </Link>
          <Link className="link" to="/category/webdesign">
            <div className="category__item">Web Design</div>
          </Link>
        </div>
        <div className="main__text">
          Explore the world’s leading design portfolios
        </div>
        <div className="sub__text">
          Millions of designers and agencies around the world showcase their
          portfolio work on Huntr - the home to the world’s best design and
          creative professionals.
        </div>
      </div>
    </div>
  );
}
