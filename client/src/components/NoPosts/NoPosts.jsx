import React from "react";
import "./noposts.scss";

export default function NoPosts() {
  return(
    <div className="noposts">
        <div className="container">
            <img src="https://cdn.dribbble.com/users/2519905/screenshots/6181179/media/274591617dd1b6849b3140f770da9383.jpg?compress=1&resize=800x600&vertical=top" alt="no-posts" />
            <div className="text__container">No posts to show!</div>
        </div>
    </div>
  );
}
