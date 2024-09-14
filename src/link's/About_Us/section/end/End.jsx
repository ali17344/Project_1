import React from 'react';
import "./style.css"
import img16 from "../../../home/section/img/16.svg"
import img15 from "../../../home/section/img/15.png"
import img14 from "../../../home/section/img/14.png"
import { Link } from 'react-router-dom';
const End = () => {
    return (
        <div>
            <h3 className="h3-center-center-h3 h4">Оставьте заявку и мы с вами свяжемся</h3>
            <button className="btn2 btn3">Оставить заявку</button>
            <footer className='footer'>
                    <p className='footer-p'>ИП Колодезников-Матчитов Н.И.</p>
                    <p className='footer-p'>ИНН 143515646663</p>
                    <Link to={`/master_classes`} className='Link'>
                    <p className='footer-p1'>Мастер-классы</p>
                    </Link>
                    <Link to={`/custom-made_furniture`} className='Link'>
                    <p className=' footer-p1'>Мебель на заказ</p>
                    </Link>
                    <Link to={`/`} className='Link'>
                <p>Главная</p>
                 </Link>
                 <Link to={`/about_us`} className='Link'>
                    <p className='footer-p2'>О нас</p>
                 </Link>
                    <img src={img16} alt="" />
                    <img src={img14} alt="" />
                    <img src={img15} alt="" />
                   
                </footer>
        </div>
    );
}

export default End;
