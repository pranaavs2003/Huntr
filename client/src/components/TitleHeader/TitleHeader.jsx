import React from "react";
import "./titleHeader.scss";

export default function TitleHeader({input}) {
  return(
    <div className="titleheader">
        <div className="header__container">{input}</div>
    </div>
  );
}
