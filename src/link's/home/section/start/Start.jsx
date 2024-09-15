import React from 'react';
import { Link } from 'react-router-dom';
import img from "../img/1.png"
import img2 from "../img/2.png"
import "./style.css"
const Start = () => {
    return (
        <div>
            <header>
                <div className='header'>
                    <Link to={`/master_classes`} className='Link Link1'>
                <p>Мастер-классы</p>
                    </Link>
                    <Link to={`/custom-made_furniture`} className='Link  Link1'>
                <p>Мебель на заказ</p>
                    </Link> 
                <img src={img}  alt="" />
                <Link to={`/`} className='Link  Link1'>
                <p>Главная</p>
                 </Link>
                 <Link to={`/about_us`} className='Link Link1'>
                <p>О нас</p>
                 </Link>
                </div>
            </header>
            <div className='container'>
                <div className="row">
                <div className='col-6'>
                    <img src={img2} alt="" />
                </div>
                <div className='col-6'>
                    <p className='intro-title-p'>Столярная мастерская NIKASON BRAND</p>
                    <h3 className='intro-title-h3'>Изготовление и реставрация мебели</h3>
                    <p className='intro-title-p2'>Авторская мебель ручной работы, сделанная с душой и трепетом.</p>
                    <button className='intro-title-btn'><a href="/custom-made_furniture" className='Link'>Смотреть услуги</a></button>
                </div>
                </div>
            </div>
            <div className='container'>
                <h4 className='intro-title-h3 intro-info'>NIKASON BRAND это</h4>
            </div>
            <div className='container'>
                <div className="row row2">
                <div className="pow">
                <p className='intro-info-p3'>Производство авторской мебели из массива</p>
                <hr className='intro-info-hr'/>
                </div>
                <div className="pow">
                <p className='intro-info-p3'>Реставрация, редизайн, ремонт деревянной мебели</p>
                <hr className='intro-info-hr'/>
                </div>
                <div className="pow">
                <p className='intro-info-p3'>Производство мебели по индивидуальным размерам</p>
                <hr className='intro-info-hr'/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Start;
