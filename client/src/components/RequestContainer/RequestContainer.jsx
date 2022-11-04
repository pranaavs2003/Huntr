import React from "react";
import "./requestContainer.scss";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function RequestContainer() {
  return(
    <div className="requestContainer">
        <div className="top__container">
            <div className="user__container">
                <div className="left__container">
                    <img src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png" alt="profile-img" className="profile__img" />
                </div>
                <div className="middle__container">
                    <div className="username">Olga Yan</div>
                    <div className="location">
                        <FmdGoodIcon className="location__icon"/>
                        <span className="location__text">Belarus</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom__container">
            <div className="title">
                Creating a Logo for a Fin-tech Startup.
            </div>
            <div className="title__text">Description</div>
            <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia dolores, vitae, ut itaque ipsam ipsum architecto voluptates exercitationem atque praesentium consectetur delectus ipsa placeat laborum eaque fugiat nostrum officia.
            </div>
            <div className="title__text">Reference Images</div>
            <div className="reference__image">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/41df91153741833.633524df721e4.jpg" alt="ref-img" />
            </div>
            <div className="right__container">
                <button className="accept button">Accept</button>
                <button className="reject button">Reject</button>
            </div>
        </div>
    </div>
  );
}
