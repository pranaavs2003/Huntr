import React, {useState} from 'react';
import "./userForm.scss";
import { SyncLoader } from "react-spinners";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import Loading from '../../components/Loading/Loading';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserForm() {
  const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [country, setCountry] = useState("");
    const [role, setRole] = useState("");
    const [about, setAbout] = useState("");
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [link3, setLink3] = useState("");
    const [plink, setPlink] = useState("");

    useEffect(()=>{
        const print = () => console.log(fname);
        print();
    }, [fname]);


    if(!loading){
      return (
        <div className='userform'>
            <Navbar />
            <TitleHeader input={"Enter Your Details"} />
            <div className="form">
                <div className="form__container">
                    <div className="form__item">
                        <div className="label">First Name</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">Last Name</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">Country</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">Job Role</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">About</div>
                        <textarea placeholder='' className='input__box' cols="30" rows="10" onChange={(e) => setAbout(e.target.value)} ></textarea>
                    </div>
                    <div className="form__item">
                        <div className="label">Instagram Profile Link</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setLink1(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">Pinterest Profile Link</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setLink2(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">Behence Profile Link</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setLink3(e.target.value)} />
                    </div>
                    <div className="form__item">
                        <div className="label">Profile Picture URL</div>
                        <input type="text" placeholder='' className='input__box' onChange={(e) => setPlink(e.target.value)} />
                    </div>
                    <div className="button__container">
                    <Link className='link' to={"/"}><button className='submit__button button' >Submit</button></Link>
                      <Link className='link' to={"/"}><button className='skip__button button' >Skip</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
      );
    }
    else{
        return(<Loading />);
    }
}
