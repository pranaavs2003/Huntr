import React, { useState } from "react";
import "./followContainer.scss";

export default function FollowContainer() {
  const [isFollowing, setIsFollowing] = useState(true);
  return (
    <div className="followContainer">
      <div className="left__container">
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png"
          alt="profile-img"
          className="profile__img"
        />
      </div>
      <div className="middle__container">
        <div className="username">Olga Yan</div>
        <div className="position">Graphic Designer / Logomaker</div>
      </div>
      <div className="right__container">
        <button
          className={
            isFollowing
              ? "follow__button__active button"
              : "follow__button button"
          }
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? "following" : "follow"}
        </button>
      </div>
    </div>
  );
}
