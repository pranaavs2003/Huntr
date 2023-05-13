import React from "react";
import "./miniProfile.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

export default function MiniProfile({postData}) {
//   const postData = {
//     username: "DutchScot",
//     location: "London, United Kingdom",
//     appreciations: 0,
//     followers: 0,
//     projectviews: 0,
//     image: "https://mir-s3-cdn-cf.behance.net/user/138/467295111864647.6239a297ae207.jpg",
//     image1: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ef93a1111209065.5ffdbf24b31c3.jpg",
//     image2: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f531e8151980069.631613bee3e95.jpg",
//     image3: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/451b81155496617.635606e679515.jpg",
//   };

  return (
    <div className="miniProfile">
      <div className="top__container">
        <div className="image__container">
          <span className="img__item">
            <img
              src={postData.image3}
              alt="img-item"
            />
          </span>
          <span className="img__item">
            <img
              src={postData.image2}
              alt="img-item"
            />
          </span>
          <span className="img__item">
            <img
              src={postData.image1}
              alt="img-item"
            />
          </span>
        </div>
      </div>
      <div className="middle__container">
        <div className="profile__img">
          <img
            src={postData.image}
            alt="profile-img"
          />
        </div>
        <div className="username">{postData.username}</div>
        <div className="location">
          <LocationOnIcon className="icon" />
          <span className="location__text">{postData.location}</span>
        </div>
      </div>
      <div className="bottom__container">
        <div className="data__container">
          <div className="data__item">
            <div className="data__count">{postData.appreciations}</div>
            <div className="data__title">Appreciations</div>
          </div>
          <div className="separator"></div>
          <div className="data__item">
            <div className="data__count">{postData.followers}</div>
            <div className="data__title">Followers</div>
          </div>
          <div className="separator"></div>
          <div className="data__item">
            <div className="data__count">{postData.projectviews}</div>
            <div className="data__title">Project Views</div>
          </div>
        </div>
        <div className="button__container">
          <div className="follow__button button">
            <AddCircleOutlineIcon className="icon" />
            <span className="button__text">Follow</span>
          </div>
          <div className="view__button button">
            <RemoveRedEyeIcon className="icon" />
            <Link to={"/profile/"+postData.username} className="link">
                <span className="button__text">View</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
