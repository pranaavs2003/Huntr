import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./designer.scss";

export default function Designer({ data }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/posts/gettopfourposts/" + data?.username
      );
      setPosts(res.data);
      console.log(res.data);
    };
    getPosts();
  }, []);

  return (
    <div className="designer">
      <div className="top__container">
        <div className="left__container">
          <div className="icon__container">
            <img src={data?.image} alt="desc-pic" className="designer__pic" />
          </div>
          <div className="text__container">
            <div className="top__text">
              <Link className="link" to={"/profile/" + data?.username}>
                {data?.username}
              </Link>
            </div>
            <div className="bottom__text">
              <span className="country">{data?.country}</span>
              <span className="separator"></span>
              <span className="price">{data?.price}</span>
            </div>
          </div>
        </div>
        <div className="right__container">
          <Link className="link" to={"/profile/" + data?.username}>
            <button className="view__button">View Profile</button>
          </Link>
          <button className="save__button">Hire</button>
        </div>
      </div>
      <div className="middle__container">
        {posts.map((item) => (
          <img className="post__img" src={item?.image} />
        ))}
      </div>
      <div className="bottom__container">
        <Link className="link" to={"/profile/" + data?.username}>
          <div className="more__text">View more details</div>
        </Link>
      </div>
    </div>
  );
}
