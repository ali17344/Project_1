import React from 'react';
import img from "../img/3.png"
import img2 from "../img/4.png"
import img3 from "../img/5.png"
import img4 from "../img/6.png"
import img5 from "../img/7.png"
import img6 from "../img/8.png"
import img7 from "../img/9.png"
import img8 from "../img/10.png"
import './style.css' 

const Center = () => {
    return (
        <div>
            <h3 className="h3-center  h3-center-center">Портфолио</h3>
            <img src={img} alt="" className='center-start-img'/>
            <div className="img-center">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            </div>
            <h3 className="h3-center h3-center-center">Этапы производства</h3>
            <div className="info-center">
                <div className="info-title-center">
                    1
                    <p className='intro-title-center-p'>Встреча с клиентом</p>
                </div>
                <hr className="info-title-center-hr hr2" />
                <div className="info-title-center info-title-center2">
                    2
                    <p className='intro-title-center-p'>Подписание договора, внесение предоплаты</p>
                </div>
                <div className="info-title-center info-title-center3">
                    3
                    <p className='intro-title-center-p'>Выезд к клиенту на замер (при необходимости)</p>
                </div>
                <hr className='info-title-center-hr'/>
                <div className="info-title-center ">
                    4
                    <p className='intro-title-center-p'>Составление проекта</p>
                </div>
                <hr className="info-title-center-hr hr3" />
                <div className="info-title-center info-title-center2">
                    5
                    <p className='intro-title-center-p'>Изготовление и согласование всех стадий с клиентом</p>
                </div>
                <div className="info-title-center info-title-center3">
                    6
                    <p className='intro-title-center-p intro-title-center-p2'>Доставка и монтаж изделия (при необходимости)</p>
                </div>
            </div>
        </div>
    );
}

export default Center;
