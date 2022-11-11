import React, { useState, useRef, useEffect } from "react";
import "./postPage.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";

export default function PostPage() {
  const location = useParams();
  //console.log("🌍", location);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [isLike, setLike] = useState(false);
  const [isSave, setSave] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const savePost = () => {
    setSave(!isSave);
  };

  const likePost = () => {
    setLike(!isLike);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postData = await axios.get(
          "http://localhost:3001/api/posts/getpost/" + location.id
        );
        setPost(postData.data[0]);
        console.log(
          "http://localhost:3001/api/user/getuseruname/" +
            postData.data[0].creator
        );
        const userData = await axios.get(
          "http://localhost:3001/api/user/getuseruname/" +
            postData.data[0].creator
        );
        setUser(userData.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
    console.log(post);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
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
                      src={user?.image}
                      alt="profile-img"
                      className="profile__img"
                    />
                  </Link>
                </div>
                <div className="text__container">
                  <div className="post__title">{post?.title}</div>
                  <div className="post__creator">
                    <Link className="link" to={"/profile/" + post?.creator}>
                      {post?.creator}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right__container">
                <div className="view__tag tag">
                  <ThumbUpIcon className="icon" />
                  <span className="count">{post?.likecount}</span>
                </div>
                <div className="like__tag tag">
                  <VisibilityIcon className="icon" />
                  <span className="count">{post?.viewcount}</span>
                </div>
              </div>
            </div>
            <div className="bottom__container">
              <div className="post__box">
                <img src={post?.image} alt="post-img" className="post__img" />
              </div>
              <div className="sidebar">
                <div className="sidebar__item">
                  <Link className="link" to="/profile">
                    <img
                      src={user?.image}
                      alt="profile-icon"
                      className="profile__img"
                    />
                  </Link>
                </div>
                <div className="sidebar__item">
                  <FavoriteIcon
                    className={isLike ? "icon favorite__active" : "icon"}
                    onClick={() => likePost()}
                  />
                </div>
                <div className="sidebar__item">
                  <Link className="link" to={"/profile/" + user?.username}>
                    <AddIcon className="icon" />
                  </Link>
                </div>
                <div className="sidebar__item">
                  <BookmarkIcon
                    className={isSave ? "icon save__active" : "icon"}
                    onClick={() => savePost()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
