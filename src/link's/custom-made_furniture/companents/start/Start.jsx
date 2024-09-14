import React from 'react';
import img from "../img/1.png"
import img2 from "../img/2.png"
import { Link } from 'react-router-dom';
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
            <img src={img2} alt="" />
            <p className='p-start'>Воплотим вашу любую задумку в реальность</p>
            <h3 className="h3-start">Столярная мастерская </h3>
            <h3 className="h3-start">NIKASON BRAND</h3>
            <button className="btn-start">Заказать мебель</button>
            <h3 className="h3-center">Почему выбирают нас</h3>
            <div className="blok">
                <div className="item">
                    <p className='p-center'>Давно на рынке</p>
                    <hr className='hr'/>
                    <p className='p-center2'>Опыт работы на рынке больше 10 лет</p>
                </div>
                <div className="item">
                    <p className='p-center'>Гарантия качества</p>
                    <hr className='hr'/>
                    <p className='p-center2'>Предоставляем гарантию 12 месяцев на изделия </p>
                </div>
                <div className="item">
                    <p className='p-center'>Юридическая прозрачность</p>
                    <hr className='hr'/>
                    <p className='p-center2'>Заключаем с каждым клиентом договор</p>
                </div>
            </div>
            <div className="blok">
                <div className="item">
                    <p className='p-center'>Экологичность</p>
                    <hr className='hr'/>
                    <p className='p-center2'>Мебель из натуральной древесины, краски без токсичного состава</p>
                </div>
                <div className="item">
                    <p className='p-center'>Эксклюзивность</p>
                    <hr className='hr'/>
                    <p className='p-center2'>Каждая мебель изготовлена по индивидуальному дизайну </p>
                </div>
                <div className="item">
                    <p className='p-center'>Долговечность</p>
                    <hr className='hr'/>
                    <p className='p-center2'>Мебель из массива дерева прослужит даже вашим детям</p>
                </div>
            </div>
        </div>
    );
}

export default Start;
