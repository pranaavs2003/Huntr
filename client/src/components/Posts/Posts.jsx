import React from "react";
import "./posts.scss";
import Post from "../Post/Post";

const postData = [
    {
        id: "1",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/41df91153741833.633524df721e4.jpg",
        title: "TYPE OF IMAGE",
        creator: "Marta Cerdà",
        likeCount: 234,
        viewCount: 532,
    },
    {   
        id: "2",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2058b140269499.62407b94cd6d7.jpg",
        title: "Brutalist Scotland",
        creator: "Kyle Lamond",
        likeCount: 1234,
        viewCount: 732,
    },
    {   
        id: "3",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3fba83127360505.614084404e211.jpg",
        title: "University of Chicago Booth Magazine",
        creator: "Sam Peet",
        likeCount: 1234,
        viewCount: 232,
    },
    {   
        id: "4",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6ae6a148416427.6331cdd8b6d8e.png",
        title: "Glassy Gradients - N°6",
        creator: "Roman Bratschi",
        likeCount: 934,
        viewCount: 1032,
    },
    {   
        id: "5",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/795a98151226387.6307e63b35400.jpg",
        title: "Nirex",
        creator: "HOOK FOOD",
        likeCount: 234,
        viewCount: 532,
    },
    {   
        id: "6",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b09faf153417345.632f4691b9995.gif",
        title: "My paintings Vol.1",
        creator: "Jose Elgueta",
        likeCount: 234,
        viewCount: 532,
    },
    {   
        id: "7",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ef93a1111209065.5ffdbf24b31c3.jpg",
        title: "Shanghai Me",
        creator: "DutchScot",
        likeCount: 234,
        viewCount: 532,
    },
    {   
        id: "8",
        imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/cafb8889716113.62f5b5b957546.png",
        title: "Juan Mora 20-22",
        creator: "Juan Mora",
        likeCount: 234,
        viewCount: 532,
    },
];

export default function Posts() {
    // console.log(postData[0]);
    postData.map( (item) => console.log(item) );
  return( 
    <div className="posts">
        <div className="top__bar">
            <select name="Creative Fields" className="drop__down">
                <option className="option" value="default">Creative Fields</option>
                <option className="option" value="architecture">Architecture</option>
                <option className="option" value="artDesign">Art Direction</option>
                <option className="option" value="graphicDesign">Graphic Design</option>
                <option className="option" value="illustrator">Illustration</option>
                <option className="option" value="uiux">UI/UX</option>
            </select>
            <select name="Tools" className="drop__down">
                <option className="option" value="default">Tools</option>
                <option className="option" value="photoshop">Adobe Photoshop</option>
                <option className="option" value="illustrator">Adobe Illustrator</option>
                <option className="option" value="inDesign">Adobe InDesign</option>
                <option className="option" value="afterEffects">Adobe After Effects</option>
                <option className="option" value="lightroom">Adobe Lightroom</option>
            </select>
            <select name="Sort" className="drop__down">
                <option className="option" value="default">Sort</option>
                <option className="option" value="new">New</option>
                <option className="option" value="popularity">Popularity</option>
            </select>
        </div>
        <div className="posts__container">
            {postData.map( (item) => <Post postData={item} key={item.id} />) }
        </div>
    </div>
  );
}
