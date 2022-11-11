import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./inspiration.scss";
import Navbar from "../../components/Navbar/Navbar";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Posts from "../../components/Posts/Posts";
import Footer from "../../components/Footer/Footer";
import { SyncLoader } from "react-spinners";

export default function Inspiration() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("graphicdesign");
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const url =
          "http://localhost:3001/api/posts/getpostsbycategory/" + category;
        const res = await axios.get(url);
        setPosts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [category]);

  return (
    <div className="inspiration">
      <Navbar />
      <TitleHeader input="Inspiration" />
      {loading ? (
        <div className="loader__container">
          <SyncLoader color="#0b0b0b" className="loader" />
        </div>
      ) : (
        <div className="inspiration__container">
          <div className="top__container">
            <div className="category__container">
              <div
                className={
                  category === "graphicdesign"
                    ? "category__item__active"
                    : "category__item"
                }
                onClick={() => setCategory("graphicdesign")}
              >
                Graphic Design
              </div>
              <div
                className={
                  category === "illustration"
                    ? "category__item__active"
                    : "category__item"
                }
                onClick={() => setCategory("illustration")}
              >
                Illustration
              </div>
              <div
                className={
                  category === "productdesign"
                    ? "category__item__active"
                    : "category__item"
                }
                onClick={() => setCategory("productdesign")}
              >
                Product Design
              </div>
              <div
                className={
                  category === "typography"
                    ? "category__item__active"
                    : "category__item"
                }
                onClick={() => setCategory("typography")}
              >
                Typography
              </div>
              <div
                className={
                  category === "webdesign"
                    ? "category__item__active"
                    : "category__item"
                }
                onClick={() => setCategory("webdesign")}
              >
                Web Design
              </div>
              <div
                className={
                  category === "mobile"
                    ? "category__item__active"
                    : "category__item"
                }
                onClick={() => setCategory("mobile")}
              >
                Mobile
              </div>
            </div>
          </div>
          <div className="bottom__contianer">
            <Posts data={posts} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
