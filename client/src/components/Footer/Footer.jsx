import React from "react";
import "./footer.scss";

export default function Footer() {
  return( 
    <div className="footer">
        <div className="right__container">
        © 2022 Dribbble. All rights reserved.
        </div>
        <div className="left__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png" alt="logo" />
        </div>
    </div>
  );
}
