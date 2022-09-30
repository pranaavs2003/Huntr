import React from "react";
import "./post.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Post({ postData }) {
  return (
    <div className="post">
      <img src={postData.imageURL} className="post__image" />
      <div className="detail__container">
        <div className="left__container">
          <div className="top__text">{postData.title}</div>
          <div className="bottom__text">{postData.creator}</div>
        </div>
        <div className="right__container">
          <div className="button__container">
            <ThumbUpIcon className="icon" />
            <span className="count">71</span>
          </div>
          <div className="button__container">
            <VisibilityIcon className="icon" />
            <span className="count">257</span>
          </div>
        </div>
      </div>
    </div>
  );
}
