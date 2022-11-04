import React from "react";
import "./discover.scss";
import Navbar from "../../components/Navbar/Navbar";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Discover() {
  const tempData = {
    image: "https://images.pexels.com/photos/1534925/pexels-photo-1534925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Test Post",
    creator: "Test Creator",
    likecount: 89,
    viewcount: 69,
  }

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
        <div className="container__title"><Link to="/category/graphicdesign" className="link">Graphic Design</Link></div>
        <motion.div className="post__container" 
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
        </motion.div>
      </div>
      <div className="gd__category">
        <div className="container__title"><Link to="/category/productdesign" className="link">Product Design</Link></div>
        <motion.div className="post__container" 
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
        </motion.div>
      </div>
      <div className="gd__category">
        <div className="container__title"><Link to="/category/webdesign" className="link">Web Design</Link></div>
        <motion.div className="post__container" 
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
        </motion.div>
      </div>
      <div className="gd__category">
        <div className="container__title"><Link to="/category/typography" className="link">Typography</Link></div>
        <motion.div className="post__container" 
          drag="x"
          dragConstraints={{ right: 0 }}
          draggable="true"
          // ref={carousel}
        >
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
          <Post postData={tempData} />
        </motion.div>
      </div>
      <div className="top__profile">
        <div className="container__title">Top Designers</div>
        <div className="stupid__ass__container">
          <div className="profile__container">
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
            <MiniProfile />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
