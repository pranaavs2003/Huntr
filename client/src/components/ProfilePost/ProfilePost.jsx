import React from 'react';
import "./profilePost.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProfilePost({postData}) {
    return (
    <div className='profilePost' >
        <div className="top__container">
            <img src={postData.image} alt="post-img" className='post__image'/>
        </div>
        <div className="bottom__container">
            <div className="like container">
                <ThumbUpIcon className='icon like__icon' />
                <span className="count">{postData.likecount}</span>
            </div>
            <div className="view container">
                <VisibilityIcon className='icon view__icon' />
                <span className="count">{postData.viewcount}</span>
            </div>
        </div>
    </div>
  )
}
