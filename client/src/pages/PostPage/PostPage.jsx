import React from "react";
import "./postPage.scss";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../components/Navbar/Navbar";

export default function PostPage() {
  return (
    <div className="total__container">
      <Navbar />
      <div className="postPage">
        <div className="post__container">
          <div className="top__container">
            <div className="left__container">
              <div className="img__container">
                <Link className="link" to="/profile">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png"
                    alt="profile-img"
                    className="profile__img"
                  />
                </Link>
              </div>
              <div className="text__container">
                <div className="post__title">TYPE OF IMAGE</div>
                <div className="post__creator">
                  <Link className="link" to="/profile">
                    Marta Cerda
                  </Link>
                </div>
              </div>
            </div>
            <div className="right__container">
              <div className="view__tag tag">
                <ThumbUpIcon className="icon" />
                <span className="count">69</span>
              </div>
              <div className="like__tag tag">
                <VisibilityIcon className="icon" />
                <span className="count">420</span>
              </div>
            </div>
          </div>
          <div className="bottom__container">
            <div className="post__box">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/41df91153741833.633524df721e4.jpg"
                alt="post-img"
                className="post__img"
              />
            </div>
            <div className="sidebar">
              <div className="sidebar__item">
                <Link className="link" to="/profile">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png"
                    alt="profile-icon"
                    className="profile__img"
                  />
                </Link>
              </div>
              <div className="sidebar__item">
                <FavoriteIcon className="icon" />
              </div>
              <div className="sidebar__item">
                <BookmarkIcon className="icon" />
              </div>
              <div className="sidebar__item">
                <AddIcon className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
