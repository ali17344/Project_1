import React from 'react';
import { Link } from 'react-router-dom';
import img from "../img/11.svg"
import img2 from "../img/12.png"
import img3 from "../img/13.png"
import "./style.css"
const End = () => {
    return (
        <div>
            <h3 className="h3-center-center-h3 h9" >Оставьте заявку и мы с вами свяжемся</h3>
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
                    <a ><img src={img} alt="" /></a>
                    <a><img src={img2} alt="" /></a>
                    <a><img src={img3} alt="" /></a>
                   
            </footer>
        </div>
    );
}

export default End;
