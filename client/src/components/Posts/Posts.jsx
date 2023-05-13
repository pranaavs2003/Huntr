import React from "react";
import "./posts.scss";
import Post from "../Post/Post";

export default function Posts({ data }) {
  return (
    <div className="posts">
      <div className="posts__container">
        {data.map((item) => (
          <Post postData={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
