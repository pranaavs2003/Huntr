import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./category.scss";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import values from '../../assets/valuemapping';
import Posts from '../../components/Posts/Posts';
import NoPosts from '../../components/NoPosts/NoPosts';
import axios from 'axios';

export default function Category() {
    const [title, setTitle] = useState("Graphic Design");
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    const fetchTitle = () => {
        const val = values.filter( (item) => {return item.unformatted === window.location.pathname.split('/')[2]} );
        setTitle(val[0].formatted);
    };


    useEffect(() => {
    const getPosts = async () => {
        fetchTitle();
        try {
        const url = "http://localhost:3001/api/posts/getpostsbycategory/"+window.location.pathname.split('/')[2];
        const res = await axios.get(url);
        setPosts(res.data);
        //console.log(res.data);
        } catch (err) {
        console.log(err);
        }
    };
    getPosts();
    }, [search]);
  
    return (
    <div className='category'>
        <Navbar />
        <TitleHeader input={title} />
        {(posts.length === 0) 
        ? 
        <NoPosts/>
        :
        <Posts data={posts} />
        }
        <Footer />
    </div>
  );
}
