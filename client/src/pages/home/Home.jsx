import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return(
    <div className="home">
      <Navbar />
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
