import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./profile.scss";
//Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import Loading from "../../components/Loading/Loading";
import FollowContainer from "../../components/FollowContianer/FollowContainer";
import RequestContainer from "../../components/RequestContainer/RequestContainer";
//Icons
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailIcon from "@mui/icons-material/Mail";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InterestsIcon from "@mui/icons-material/Interests";

export default function Profile() {
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState("works");
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/posts/getposts");
        setPosts(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [search]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="profile">
        <Navbar style={{ position: "sticky" }} />
        <div className="top__container">
          <img
            src="https://i.shgcdn.com/6fbe8c0c-09a5-45ee-9441-fda229cdbd37/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            className="banner__img"
            alt="profile-img"
          />
        </div>
        <div className="bottom__container">
          <div className="left__container">
            <div className="detail__container">
              <div className="logo">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png"
                  alt="profile-img"
                  className="profile__img"
                />
              </div>
              <div className="username">Olga Yan</div>
              <div className="position">Graphic Designer / Logomaker</div>
              <div className="location">
                <FmdGoodIcon className="location__icon" />
                <span className="location__text">Belarus</span>
              </div>
              <div className="follow__button button">
                <MailIcon />
                <span className="button__text">Follow</span>
              </div>
              <div className="message__button button">
                <AddCircleOutlineIcon />
                <span className="button__text">Hire me</span>
              </div>
              <div className="userdata__container">
                <div className="userdata">
                  <div className="data__title">Project Views</div>
                  <div className="count">19534</div>
                </div>
                <div className="userdata">
                  <div className="data__title">Appreciations</div>
                  <div className="count">1254</div>
                </div>
                <div className="userdata">
                  <div className="data__title">Followers</div>
                  <div className="count">345</div>
                </div>
                <div className="userdata">
                  <div className="data__title">Following</div>
                  <div className="count">69</div>
                </div>
              </div>
              <div className="about">
                <div className="about__title">ABOUT</div>
                <div className="about__content">
                  I am a graphic designer, mainly focused on brand identity
                  design and logo design, but I am open to any kind of graphic
                  design projects. Also, I like layout - this is my hobby and
                  big love. I know how to create simple, clean and effortlessly
                  smart design.
                </div>
              </div>
              <div className="links__container">
                <div className="links__title">LINKS</div>
                <div className="icon__container">
                  <InstagramIcon className="icon" />
                  <PinterestIcon className="icon" />
                  <InterestsIcon className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="right__container">
            <div className="text__container">
              <div
                className={
                  section === "works" ? "text__item__active" : "text__item"
                }
                onClick={() => setSection("works")}
              >
                Your works
              </div>
              <div
                className={
                  section === "saved" ? "text__item__active" : "text__item"
                }
                onClick={() => setSection("saved")}
              >
                Saved
              </div>
              <div
                className={
                  section === "following" ? "text__item__active" : "text__item"
                }
                onClick={() => setSection("following")}
              >
                Following
              </div>
              <div
                className={
                  section === "requests" ? "text__item__active" : "text__item"
                }
                onClick={() => setSection("requests")}
              >
                Requests
              </div>
            </div>
            <div className="post__container">
              {(section === "works" || section === "saved") &&
                posts.map((item) => <ProfilePost postData={item} />)}
              {section === "following" &&
                posts.map((item) => <FollowContainer />)}
              {section === "requests" && <RequestContainer />}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
