import React, { useState, useEffect } from "react";
import "./requestContainer.scss";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import axios from "axios";

export default function RequestContainer({ data }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/user/getuser/" + data.userid
      );
      setUser(res.data[0]);
    };
    getUser();
  }, []);

  return (
    <div className="requestContainer">
      {
        <>
          <div className="top__container">
            <div className="user__container">
              <div className="left__container">
                <img
                  src={user?.image}
                  alt="profile-img"
                  className="profile__img"
                />
              </div>
              <div className="middle__container">
                <div className="username">{user?.username}</div>
              </div>
            </div>
          </div>
          <div className="bottom__container">
            <div className="title">{data?.title}</div>
            <div className="title__text">Description</div>
            <div className="description">{data?.description}</div>
            <div className="title__text">Reference Images</div>
            <div className="reference__image">
              <img src={data?.refimage} alt="ref-img" />
            </div>
            <div className="right__container">
              <button className="accept button">Accept</button>
              <button className="reject button">Reject</button>
            </div>
          </div>
        </>
      }
    </div>
  );
}
