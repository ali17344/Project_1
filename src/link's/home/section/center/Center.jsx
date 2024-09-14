import React from 'react';
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"
import img7 from "../img/7.png"
import img8 from "../img/8.png"
import img9 from "../img/9.png"
import img10 from "../img/10.png"
import img11 from "../img/11.png"
import img12 from "../img/12.png"
import img13 from "../img/13.png"
import "./style.css"
const Center = () => {
    return (
        <div>
             <div className="container">
                <div className="row">
                <h3 className='intro-title-info-h3'>Более 10 лет мы производим</h3>
                </div>
                <div className='intro-title-info-div'>
                    <div className='intro-title-info-img'>
                        <img src={img3} alt="" />
                        <p>Двери</p>
                    </div>
                    <div className='intro-title-info-img'>
                        <img src={img4} alt="" />
                        <p>Столы и стулья</p>
                    </div>
                    <hr className="intro-title-info-div-hr-2" />
                    <div>
                        <img src={img5} alt="" />
                        <p>Комоды</p>
                    </div>
                    <div className='intro-title-info-img'>
                        <img src={img6} alt="" />
                        <p>Шкафы</p>
                    </div>
                    <hr className="intro-title-info-div-hr-3" />
                    <hr className="intro-title-info-div-hr-1" />

                    <div className='intro-title-info-img'>
                        <img src={img7} alt="" />
                        <p>Кровати</p>
                    </div>
                    <div className='intro-title-info-img'>
                        <img src={img8} alt="" />
                        <p>Перегородки</p>
                    </div>
                    <hr className="intro-title-info-div-hr-4" /> 
                    <div className='intro-title-info-img'>
                        <img src={img9} alt="" />
                        <p>Арки</p>
                    </div>
                    <div className='intro-title-info-img'>
                        <img src={img10} alt="" />
                        <p>Тумбы</p>
                    </div>
                </div>
                <div className="container">
                    <h3 className='intro-title-info-h3 intro-title-info-h3-2'>NIKASON BRAND это семейная мастеркая</h3>
                    <div className="row">
                     <div className="col-6">
                      <img src={img11} alt="" />
                       </div>
                       <div className="col-6" >
                         <h3 className='intro-title-info-h3-3'>Саргылана и Никита Колодезниковы-Матчитовы</h3>
                         <p className='intro-title-info-p1'>Саргылана - рестовратор-декоратор, преображает и дарит вторую жизнь старой мебели.</p>
                         <p className='intro-title-info-p1'>Никита - мастер по дереву, вся мебель делается его умелыми руками.</p>
                         <button className='intro-title-info-btn'><a href="/about_us" className='Link'>Подробнее о нас</a></button>
                      </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="intro-title-info-h3 intro-title-info-h3-5">Наши услуги</h3>
                    <div className="row">
                        <div className="col-6">
                            <img src={img12} alt="" />
                        </div>
                        <div className="col-6 col-2">
                            <h3 className='intro-title-info-h3 intro-title-info-h3-4'>Мебель на заказ</h3>
                            <p className="intro-title-info-p1">Мебель под заказ по индивидуальным размерам это гарантия отличного качества, долговечность, экологичность и эксклюзивность наших изделий.
                                <br />
                                Возможность создания своего неповторимого стиля, уникальность и неповторимость каждого изделия. </p>
                            <button className='intro-title-info-btn intro-title-info-btn2'><a href="/custom-made_furniture" className='Link'>Заказать мебель</a></button>
                        </div>
                        <div className="col-6">
                            <img src={img13} alt="" />
                        </div>
                        <div className="col-6 col-2">
                            <h3 className='intro-title-info-h3 intro-title-info-h3-4'>Мастер-классы</h3>
                            <p className="intro-title-info-p1">Что делать, если память о предках хочется сохранить, но к вашему интерьеру старая и испорченная мебель не подходит? 
                                <br />
                                Правильно, отреставрировать его и наслаждаться не только обновлённым видом мебели, но и с теплотой помнить, что эта мебель была сделана талантливыми предками. </p>
                            <button className='intro-title-info-btn intro-title-info-btn2'><a href="/master_classes"  className='Link'>Купить мастер-класс</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Center;
