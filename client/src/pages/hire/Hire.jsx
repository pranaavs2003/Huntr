import React, { useState, useEffect } from "react";
import "./hire.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Loading from "../../components/Loading/Loading";
import Designer from "../../components/Designer/Designer";
import axios from "axios";

export default function Hire() {
  const [loading, setLoading] = useState(true);
  const [designers, setDesigners] = useState([]);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    const getDesigners = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/user/getdesignerdetails"
      );
      setDesigners(res.data);
      console.log(res.data);
    };
    getDesigners();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="hire">
        <Navbar />
        <TitleHeader input={"Hire Designers"} />
        <div className="bottom__container">
          <div className="hire__container">
            {designers.map((item) => (
              <Designer key={item.id} data={item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
