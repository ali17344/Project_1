import React from 'react';
import img14 from "../img/14.png"
import img15 from "../img/15.png"
import img16 from "../img/16.svg"
import img from "../img/1.png"
import "./style.css"
import { Link } from 'react-router-dom';
const End = () => {
    return (
        <div>
             <div className='intro-title-info-end'>
                        <div className='intro-title-info-end intro-title-info-end2'>
                            <h3 className="intro-title-info-h3 intro-title-info-h3-6">Гарантия качества мебели от NIKASON BRAND</h3>
                            <p className='intro-title-info-p1 intro-title-info-p1-2 ' >На каждое изделие ставим авторский логотип (клеймо) как знак качества и узнаваемости мастера. Таким образом мастер несёт ответственность за каждое изделие помеченное печатью. Есть гарантия на 12 месяцев. </p>
                            <img src={img} alt="" className='intro-title-end-img' />
                        </div>
                    </div>
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
                    <a><img src={img16} alt="" /></a>
                    <a><img src={img14} alt="" /></a>
                    <a><img src={img15} alt="" /></a>
                   
                </footer>
        </div>
    );
}

export default End;
