import React from 'react';
import "./style.css"
import img from "../img/16.png"
import img2 from "../img/17.png"
import img3 from "../img/18.png"
import img4 from "../img/19.png"
import img5 from "../img/20.svg"
import { Link } from 'react-router-dom';
const End = () => {
    return (
        <div>
            <h3 className="h3-end-start">Мастер-классы по столярному делу</h3>
            <div className="col-6">
                <img src={img} alt="" />
                <p>Консольный столик</p>
            </div>
            <div className="col-6">
                <img src={img2} alt="" />
                <p>Столярное дело для начинающих</p>
            </div>
            <div className="col-6">
                <h3 className="h3-end">Руководство по редизайну деревянной мебели</h3>
                <p className="p-end">Здесь мы собрали всю информацию от подбора инстурментов и материалов до сборки мебели и фурнитуры. Чтобы вы самостоятельно могли разобраться с нюансами работы со старой мебелью из дерева. Наше руководство непременно станет вашей настольной книгой по реставрации мебели.</p>
                <button className="btn-end"><a href="/about_us" className='Link'>Подробнее</a></button>
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
                    <a ><img src={img3} alt="" /></a>
                    <a><img src={img4} alt="" /></a>
                    <a><img src={img5} alt="" /></a>
                   
            </footer>
        </div>
    );
}

export default End;
