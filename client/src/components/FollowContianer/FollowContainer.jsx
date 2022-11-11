import React, { useState, useContext } from "react";
import "./followContainer.scss";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

export default function FollowContainer({ data }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const { currentUser } = useContext(AuthContext);
  //console.log(data);

  const unfollow = async () => {
    console.log("Unfollow executed");
    try {
      const input = {
        followerid: currentUser.id,
        followingid: data.id,
      };
      await axios.post("http://localhost:3001/api/user/unfollow", input);
    } catch (err) {
      console.log(err);
    }
  };

  const follow = async () => {
    console.log("followed executed");
    try {
      const input = {
        followerid: currentUser.id,
        followingid: data.id,
      };
      await axios.post("http://localhost:3001/api/user/follow", input);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="followContainer">
      <div className="left__container">
        <img src={data.image} alt="profile-img" className="profile__img" />
      </div>
      <div className="middle__container">
        <div className="username">{data.username}</div>
        <div className="position">Graphic Designer / Logomaker</div>
      </div>
      <div className="right__container">
        <div onClick={() => setIsFollowing(!isFollowing)}>
          <button
            onClick={() => {
              !isFollowing ? follow() : unfollow();
            }}
            className={
              isFollowing
                ? "follow__button__active button"
                : "follow__button button"
            }
          >
            {isFollowing ? "following" : "follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
