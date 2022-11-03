import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/posts/getposts");
        setPosts(res.data);
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [search]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="home">
        <Navbar />
        <Header />
        <Posts data={posts} />
        <Footer />
      </div>
    );
  }
}
