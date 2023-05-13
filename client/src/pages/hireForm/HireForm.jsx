import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./hireForm.scss";
import { Link, useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Loading from "../../components/Loading/Loading";
import { setRef } from "@mui/material";
import axios from "axios";

export default function HireForm() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  const location = useParams();
  //console.log(location);
  const username = location.username;
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const [id, setId] = useState(null);
  const [hid, setHid] = useState(currentUser.id);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [refimg, setImg] = useState("");
  const [email, setEmail] = useState("");
  const [cno, setCno] = useState("");

  useEffect(() => {
    const getId = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/user/getuseruname/" + username
      );
      const id = res.data[0].id;
      setId(id);
      //console.log(id);
    };
    getId();
  }, [title]);

  const postData = async () => {
    try {
      const data = {
        userid: id,
        title: title,
        description: desc,
        refimage: refimg,
        hirerid: 20,
        status: 0,
      };
      console.log(data);
      await axios.post("http://localhost:3001/api/table/createrequest", data);
      console.log("Form Submitted Successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  if (!loading) {
    return (
      <div className="hireform">
        <Navbar />
        <TitleHeader input={"Hire a Designer"} />
        <div className="form">
          <div className="form__container">
            <div className="form__item">
              <div className="label">Title</div>
              <input
                type="text"
                placeholder=""
                className="input__box"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form__item">
              <div className="label">Description</div>
              <textarea
                placeholder=""
                className="input__box"
                cols="30"
                rows="10"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="form__item">
              <div className="label">Reference Image</div>
              <input
                type="text"
                placeholder=""
                className="input__box"
                onChange={(e) => setRef(e.target.value)}
              />
            </div>
            <div className="form__item">
              <div className="label">Email</div>
              <input
                type="text"
                placeholder=""
                className="input__box"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__item">
              <div className="label">Contact Number</div>
              <input
                type="text"
                placeholder=""
                className="input__box"
                onChange={(e) => setCno(e.target.value)}
              />
            </div>
            <Link className="link" to={"/profile/" + location?.username}>
              <button className="submit__button" onClick={() => postData()}>
                Submit
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Loading />;
  }
}
