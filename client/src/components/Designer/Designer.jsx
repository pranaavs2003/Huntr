import React from 'react';
import "./designer.scss";

export default function Designer() {
  return (
    <div className='designer'>
        <div className="top__container">
            <div className="left__container">
                <div className="icon__container">
                    <img src="https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png" alt="desc-pic" className='designer__pic'/>
                </div>
                <div className="text__container">
                    <div className="top__text">Olga Yan</div>
                    <div className="bottom__text">
                        <span className="country">Ukraine</span>
                        <span className="separator"></span>
                        <span className="price">$50-60K (USD)</span>
                    </div>
                </div>
            </div>
            <div className="right__container">
                <button className='view__button'>View Profile</button>
                <button className='save__button'>Save</button>
            </div>
        </div>
        <div className="middle__container">
            <div className="post__img"></div>
            <div className="post__img"></div>
            <div className="post__img"></div>
            <div className="post__img"></div>
        </div>
        <div className="bottom__container">
            <div className="more__text">View more details</div>
        </div>
    </div>
  );
}
