import React, { useEffect, useState } from "react";
import "./discover.scss";
import Navbar from "../../components/Navbar/Navbar";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Discover() {
  const tempData = {
    image:
      "https://images.pexels.com/photos/1534925/pexels-photo-1534925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Test Post",
    creator: "Test Creator",
    likecount: 89,
    viewcount: 69,
  };

  const developerData = [
    {
      username: "DutchScot",
      location: "London, United Kingdom",
      appreciations: 0,
      followers: 0,
      projectviews: 0,
      image:
        "https://mir-s3-cdn-cf.behance.net/user/138/467295111864647.6239a297ae207.jpg",
      image1:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ef93a1111209065.5ffdbf24b31c3.jpg",
      image2:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f531e8151980069.631613bee3e95.jpg",
      image3:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/451b81155496617.635606e679515.jpg",
    },
    {
      username: "test",
      location: "Belarus",
      appreciations: 0,
      followers: 3,
      projectviews: 6,
      image:
        "https://mir-s3-cdn-cf.behance.net/user/138/27ff8d42861705.6266a197a3740.png",
      image1:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/41df91153741833.633524df721e4.jpg",
      image2:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2058b140269499.62407b94cd6d7.jpg",
      image3:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6ae6a148416427.6331cdd8b6d8e.png",
    },
  ];

  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [cat3, setCat3] = useState([]);
  const [cat4, setCat4] = useState([]);

  useEffect(() => {
    const getCat1 = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/posts/getpostsbycategory/graphicdesign"
      );
      setCat1(res.data);
      //console.log(res.data);
    };
    const getCat2 = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/posts/getpostsbycategory/productdesign"
      );
      setCat2(res.data);
      //console.log(res.data);
    };
    const getCat3 = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/posts/getpostsbycategory/webdesign"
      );
      setCat3(res.data);
      //console.log(res.data);
    };
    const getCat4 = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/posts/getpostsbycategory/typography"
      );
      setCat4(res.data);
      //console.log(res.data);
    };
    getCat1();
    getCat2();
    getCat3();
    getCat4();
  }, []);

  // const [width, setWidth] = useState(0);
  // const carousel = useRef();
  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //   console.log(width);
  // }, []);

  return (
    <div className="discover">
      <Navbar />
      <TitleHeader input="Discover" />
      <div className="gd__category first">
        <div className="container__title">
          <Link to="/category/graphicdesign" className="link">
            Graphic Design
          </Link>
        </div>
        <motion.div
          className="post__container"
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          {cat1.map((item) => (
            <Post postData={item} />
          ))}
        </motion.div>
      </div>
      <div className="gd__category">
        <div className="container__title">
          <Link to="/category/productdesign" className="link">
            Product Design
          </Link>
        </div>
        <motion.div
          className="post__container"
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          {cat2.map((item) => (
            <Post postData={item} />
          ))}
        </motion.div>
      </div>
      <div className="gd__category">
        <div className="container__title">
          <Link to="/category/typography" className="link">
            Typography
          </Link>
        </div>
        <motion.div
          className="post__container"
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          {cat4.map((item) => (
            <Post postData={item} />
          ))}
        </motion.div>
      </div>
      <div className="top__profile">
        <div className="container__title">Top Designers</div>
        <div className="stupid__ass__container">
          <div className="profile__container">
            {developerData.map((item) => (
              <MiniProfile postData={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
