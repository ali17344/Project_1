import React from 'react';
import { Link } from 'react-router-dom';
import img16 from "./16.svg"
import img15 from "./15.png"
import img14 from "./14.png"
const Footer = () => {
    return (
        <div>
                <footer className='footer'>
                    <p className='footer-p'>ИП Колодезников-Матчитов Н.И.</p>
                    <p className='footer-p'>ИНН 143515646663</p>
                    <Link to={`/master_classes`} className='Link'>
                    <p className='footer-p1'>Мастер-классы</p>
                    </Link>
                    <Link to={`/custom_made_furniture`} className='Link'>
                    <p className=' footer-p1'>Мебель на заказ</p>
                    </Link>
                    <Link to={`/`} className='Link'>
                <p>Главная</p>
                 </Link>
                 <Link to={`/about_us`} className='Link'>
                    <p className='footer-p2'>О нас</p>
                 </Link>
                    <a><img src={img16} alt="" /></a>
                    <a><img src={img14} alt="" /></a>
                    <a><img src={img15} alt="" /></a>
                   
                </footer>
        </div>
    );
}

export default Footer;
