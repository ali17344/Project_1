import React from 'react';
import img from "../img/1.png"
import img2 from "../img/2.png"
import { Link } from 'react-router-dom'
import "./style.css"
const Start = () => {
    return (
        <div>
            
            <h3 className="h3-center-start">История создания мастерской</h3>
            <h3 className="h3-center-start">NIKASON BRAND</h3>
            <img src={img2} alt="" className='img-start-end'/>
        </div>
    );
}

export default Start;
