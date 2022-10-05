import React from "react";
import "./new.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Add from "../../components/Add/Add";

export default function New() {
  return(
    <div className="new">
        <Navbar/>
        <Add />
        <Footer/>
    </div>
  );
}
