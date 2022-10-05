import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./add.scss";
import ImageIcon from "@mui/icons-material/Image";
import axios from "axios";

export default function Add() {
  const [isImage, setIsImage] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [cat, setCat] = useState("");
  const activateImage = () => setIsImage(true);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const publishPost = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "http://localhost:3001/api/posts/getpostcount"
      );
      const input = {
        id: res.data.count + 1,
        title,
        creator: currentUser.username,
        image,
        category: cat,
      };
      console.log(input);
      try {
        await axios.post("http://localhost:3001/api/posts/newpost", input);
        console.log("New Post Created Successfully");
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="add__container">
        <div className="left__container">
          {isImage ? (
            <div className="url__container">
              <input
                type="text"
                className="url__input"
                placeholder="Enter Image URL here"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          ) : (
            <div className="image__container" onClick={activateImage}>
              <ImageIcon className="icon" />
              <span className="indicator">Insert Image Here</span>
            </div>
          )}

          <div className="title__container">
            <input
              type="text"
              className="title__input"
              placeholder="Enter Title here"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="description__container">
            <textarea
              name="desc"
              cols="30"
              rows="5"
              placeholder="Enter Description here"
            ></textarea>
          </div>
        </div>
        <div className="right__container">
          <div className="status__container">
            <div className="main__text">Publish</div>
            <div className="sub__container">
              <span className="key">Status:</span>
              <span className="value">Draft</span>
            </div>
            <div className="sub__container">
              <span className="key">Visibility:</span>
              <span className="value">Public</span>
            </div>
            <div className="button__container">
              <div className="draft__button">Save as a draft</div>
              <div className="publish__button" onClick={publishPost}>
                Publish
              </div>
            </div>
          </div>
          <div className="category__container">
            <div className="main__text">Category</div>

            <div className="item">
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "graphicdesign"}
                  name="cat"
                  value="graphicdesign"
                  id="graphicdesign"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="art">Graphic Design</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "webdesign"}
                  name="cat"
                  value="webdesign"
                  id="webdesign"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="science">Web Design</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "productdesign"}
                  productdesign
                  value="productdesign"
                  id="productdesign"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="technology">Product Design</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "typography"}
                  name="cat"
                  value="typography"
                  id="typography"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="cinema">Typography</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "illustration"}
                  name="cat"
                  value="illustration"
                  id="illustration"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="design">Illustration</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "animation"}
                  name="cat"
                  value="animation"
                  id="animation"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="food">Animation</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
