import React, { useState} from "react";
import "./hire.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Loading from "../../components/Loading/Loading";
import Designer from "../../components/Designer/Designer";

export default function Hire() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if(loading){
    return <Loading />;
  }
  else{
    return (
    <div className="hire">
      <Navbar />
      <TitleHeader input={"Hire Designers"} />
      <div className="bottom__container">
        <div className="hire__container">
            <Designer />
            <Designer />
            <Designer />
        </div>
      </div>
      <Footer />
    </div>
  );
  }
}
