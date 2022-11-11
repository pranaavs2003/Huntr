import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
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
  const [userData, setUserData] = useState({});
  const [saved, setSaved] = useState([]);
  const [section, setSection] = useState("works");
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const [image, setImage] = useState(null);
  const [requests, setRequests] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { search } = useLocation();
  const location = useParams();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const follow = async () => {
    console.log("followed executed");
    setIsFollowing(!isFollowing);
    try {
      const input = {
        followerid: currentUser.id,
        followingid: userData.userid,
      };
      await axios.post("http://localhost:3001/api/user/follow", input);
    } catch (err) {
      console.log(err);
    }
  };

  const unfollow = async () => {
    console.log("Unfollow executed");
    setIsFollowing(!isFollowing);
    try {
      const input = {
        followerid: currentUser.id,
        followingid: userData.userid,
      };
      await axios.post("http://localhost:3001/api/user/unfollow", input);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/posts/getuserposts/" +
            (location.username || currentUser.username)
        );
        setPosts(res.data);
        const res1 = await axios.get(
          "http://localhost:3001/api/user/getuseruname/" + location.username
        );
        setImage(res1.data[0]?.image);
      } catch (err) {
        console.log(err);
      }
    };

    const checkFollow = async () => {
      try {
        if (userData) {
          const input = {
            followerid: currentUser.id,
            followingid: 20,
          };
          console.log(input);
          const res = await axios.post(
            "http://localhost:3001/api/user/isfollowing",
            input
          );

          setIsFollowing(res.data.length === 0 ? false : true);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const getFollowers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/user/getfollowers/" + currentUser.id
        );
        setFollowers(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getRequests = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/user/getrequests/" + currentUser.id
        );
        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getSaved = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/posts/getsavedposts/" + currentUser.id
        );
        setSaved(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getUserData = async () => {
      try {
        if ("username" in location) {
          const res = await axios.get(
            "http://localhost:3001/api/user/getuserdata/" + location.username
          );
          setUserData(res.data[0]);
        } else {
          const res = await axios.get(
            "http://localhost:3001/api/user/getuserdata/" + currentUser.username
          );
          setUserData(res.data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
    getUserData();
    getSaved();
    checkFollow();
    getFollowers();
    getRequests();
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
                  src={
                    userData?.username === currentUser.username
                      ? currentUser?.image
                      : image
                  }
                  alt="profile-img"
                  className="profile__img"
                />
              </div>
              <div className="username">{userData.username}</div>
              <div className="position">{userData.jobrole}</div>
              <div className="location">
                <FmdGoodIcon className="location__icon" />
                <span className="location__text">{userData.country}</span>
              </div>
              {userData?.username !== currentUser.username && (
                <>
                  <div
                    className="follow__button button"
                    onClick={() => {
                      !isFollowing ? follow() : unfollow();
                    }}
                  >
                    <MailIcon />
                    <span className="button__text">
                      {isFollowing ? "following" : "Follow"}
                    </span>
                  </div>
                  <div className="message__button button">
                    <AddCircleOutlineIcon />
                    <span className="button__text">Hire me</span>
                  </div>
                </>
              )}
              <div className="userdata__container">
                <div className="userdata">
                  <div className="data__title">Project Views</div>
                  <div className="count">{userData.projectviews}</div>
                </div>
                <div className="userdata">
                  <div className="data__title">Appreciations</div>
                  <div className="count">{userData.appreciations}</div>
                </div>
                <div className="userdata">
                  <div className="data__title">Followers</div>
                  <div className="count">{userData.followers}</div>
                </div>
                <div className="userdata">
                  <div className="data__title">Following</div>
                  <div className="count">{userData.following}</div>
                </div>
              </div>
              <div className="about">
                <div className="about__title">ABOUT</div>
                <div className="about__content">{userData.about}</div>
              </div>
              <div className="links__container">
                <div className="links__title">LINKS</div>
                <div className="icon__container">
                  <a href={userData.instagramlink} className="link">
                    <InstagramIcon className="icon" />
                  </a>
                  <a href={userData.pinterestlink} className="link">
                    <PinterestIcon className="icon" />
                  </a>
                  <a href={userData.behencelink} className="link">
                    <InterestsIcon className="icon" />
                  </a>
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
                {userData?.username === currentUser.username
                  ? "Your Works"
                  : "My Works"}
              </div>

              {userData?.username === currentUser.username && (
                <>
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
                      section === "following"
                        ? "text__item__active"
                        : "text__item"
                    }
                    onClick={() => setSection("following")}
                  >
                    Following
                  </div>
                  <div
                    className={
                      section === "requests"
                        ? "text__item__active"
                        : "text__item"
                    }
                    onClick={() =>
                      requests.length !== 0 && setSection("requests")
                    }
                  >
                    Requests
                  </div>
                </>
              )}
            </div>
            <div className="post__container">
              {section === "works" &&
                posts.map((item) => (
                  <ProfilePost postData={item} key={item.id} />
                ))}
              {section === "saved" &&
                saved.map((item) => (
                  <ProfilePost postData={item} key={item.id} />
                ))}
              {section === "following" &&
                followers.map((item) => (
                  <FollowContainer key={item.id} data={item} />
                ))}
              {section === "requests" &&
                requests.map((item) => (
                  <RequestContainer key={item.requestid} data={item} />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
