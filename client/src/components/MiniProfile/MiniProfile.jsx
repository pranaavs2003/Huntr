import React from "react";
import "./miniProfile.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function MiniProfile() {
  return(
    <div className="miniProfile">
        <div className="top__container">
            <div className="image__container">
                <span className="img__item">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9b05b4155904287.635e2bbecaa59.jpg" alt="img-item" />
                </span>
                <span className="img__item">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9b05b4155904287.635e2bbecaa59.jpg" alt="img-item" />
                </span>
                <span className="img__item">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9b05b4155904287.635e2bbecaa59.jpg" alt="img-item" />
                </span>
            </div>
        </div>
        <div className="middle__container">
            <div className="profile__img">
                <img src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png" alt="profile-img" />
            </div>
            <div className="username">Simin Xu</div>
            <div className="location">
                <LocationOnIcon className="icon" />
                <span className="location__text">Ningbo, China</span>
            </div>
        </div>
        <div className="bottom__container">
            <div className="data__container">
                <div className="data__item">
                    <div className="data__count">16.5k</div>
                    <div className="data__title">Appreciations</div>
                </div>
                <div className="separator"></div>
                <div className="data__item">
                    <div className="data__count">8.6k</div>
                    <div className="data__title">Followers</div>
                </div>
                <div className="separator"></div>
                <div className="data__item">
                    <div className="data__count">156.7k</div>
                    <div className="data__title">Project Views</div>
                </div>
            </div>
            <div className="button__container">
                <div className="follow__button button">
                    <AddCircleOutlineIcon className="icon"/>
                    <span className="button__text">Follow</span>
                </div>
                <div className="view__button button">
                    <RemoveRedEyeIcon className="icon"/>
                    <span className="button__text">View</span>
                </div>
            </div>
        </div>
    </div>
  );
}
