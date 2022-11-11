import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./post.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

export default function Post({ postData }) {
  const [isLike, setIsLike] = useState(false);
  const [isView, setIsView] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const setLike = async () => {
    if (currentUser) {
      setIsLike(!isLike);
      try {
        if (!isLike)
          await axios.post("http://localhost:3001/api/posts/likepost", {
            id: postData?.id,
          });
        if (isLike)
          await axios.post("http://localhost:3001/api/posts/unlikepost", {
            id: postData?.id,
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const setView = async () => {
    setIsView(true);
    try {
      if (!isView)
        await axios.post("http://localhost:3001/api/posts/viewpost", {
          id: postData?.id,
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link className="link" to={"/post/" + postData?.id}>
      <div className="post">
        <img
          src={postData?.image}
          className="post__image"
          alt="post-img"
          onClick={setView}
        />
        <div className="detail__container">
          <div className="left__container">
            <div className="top__text">{postData?.title}</div>
            <div className="bottom__text">
              <Link to={"/profile/" + postData?.creator} className="link">
                {postData?.creator}
              </Link>
            </div>
          </div>
          <div className="right__container">
            <div className="button__container">
              <ThumbUpIcon
                className={
                  isLike ? "icon like__icon like__active" : "icon like__icon"
                }
                onClick={setLike}
              />
              <span className="count">
                {isLike ? postData?.likecount + 1 : postData?.likecount}
              </span>
            </div>
            <div className="button__container">
              <VisibilityIcon
                className={
                  isView ? "icon view__icon view__active" : "icon view__icon"
                }
              />
              <span className="count">
                {isView ? postData?.viewcount + 1 : postData?.viewcount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
