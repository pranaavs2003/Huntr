import React from "react";
import "./posts.scss";
import Post from "../Post/Post";

export default function Posts({ data }) {
  return (
    <div className="posts">
      <div className="top__bar">
        <select name="Creative Fields" className="drop__down">
          <option className="option" value="default">
            Creative Fields
          </option>
          <option className="option" value="architecture">
            Architecture
          </option>
          <option className="option" value="artDesign">
            Art Direction
          </option>
          <option className="option" value="graphicDesign">
            Graphic Design
          </option>
          <option className="option" value="illustrator">
            Illustration
          </option>
          <option className="option" value="uiux">
            UI/UX
          </option>
        </select>
        <select name="Tools" className="drop__down">
          <option className="option" value="default">
            Tools
          </option>
          <option className="option" value="photoshop">
            Adobe Photoshop
          </option>
          <option className="option" value="illustrator">
            Adobe Illustrator
          </option>
          <option className="option" value="inDesign">
            Adobe InDesign
          </option>
          <option className="option" value="afterEffects">
            Adobe After Effects
          </option>
          <option className="option" value="lightroom">
            Adobe Lightroom
          </option>
        </select>
        <select name="Sort" className="drop__down">
          <option className="option" value="default">
            Sort
          </option>
          <option className="option" value="new">
            New
          </option>
          <option className="option" value="popularity">
            Popularity
          </option>
        </select>
      </div>
      <div className="posts__container">
        {data.map((item) => (
          <Post postData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
