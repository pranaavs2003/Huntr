import React, {useState} from 'react';
import "./hireForm.scss";
import { SyncLoader } from "react-spinners";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import Loading from '../../components/Loading/Loading';

export default function HireForm() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);

if(!loading){
  return (
    <div className='hireform'>
        <Navbar />
        <TitleHeader input={"Hire a Designer"} />
        <div className="form">
            <div className="form__container">
                <div className="form__item">
                    <div className="label">Title</div>
                    <input type="text" placeholder='' className='input__box' />
                </div>
                <div className="form__item">
                    <div className="label">Description</div>
                    <textarea placeholder='' className='input__box' cols="30" rows="10"></textarea>
                </div>
                <div className="form__item">
                    <div className="label">Reference Image</div>
                    <input type="text" placeholder='' className='input__box'/>
                </div>
                <div className="form__item">
                    <div className="label">Email</div>
                    <input type="text" placeholder='' className='input__box'/>
                </div>
                <div className="form__item">
                    <div className="label">Contact Number</div>
                    <input type="text" placeholder='' className='input__box'/>
                </div>
                <button className='submit__button' >Submit</button>
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
