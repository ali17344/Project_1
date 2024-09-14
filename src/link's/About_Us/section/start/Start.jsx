import React from 'react';
import img from "../img/1.png"
import img2 from "../img/2.png"
import { Link } from 'react-router-dom'
import "./style.css"
const Start = () => {
    return (
        <div>
            <header>
                <div className='header'>
                    <Link to={`/master_classes`} className='Link Link1'>
                <p>Мастер-классы</p>
                    </Link>
                    <Link to={`/custom-made_furniture`} className='Link Link1'>
                <p>Мебель на заказ</p>
                    </Link>      
                <img src={img}  alt="" />
                <Link to={`/`} className='Link Link1'>
                <p>Главная</p>
                 </Link>
                 <Link to={`/about_us`} className='Link Link1'>
                <p>О нас</p>
                 </Link>
                </div>
            </header>
            <h3 className="h3-center-start">История создания мастерской</h3>
            <h3 className="h3-center-start">NIKASON BRAND</h3>
            <img src={img2} alt="" className='img-start-end'/>
        </div>
    );
}

export default Start;
