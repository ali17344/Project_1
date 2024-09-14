import React from 'react';
import "./style.css"
import img from "../img/7.png"
import img2 from "../img/8.png"
import img3 from "../img/9.png"
import img4 from "../img/10.png"
import img5 from "../img/11.png"
import img6 from "../img/12.png"
import img7 from "../img/13.png"
import img8 from "../img/14.png"
import img9 from "../img/15.png"
const Center = () => {
    return (
        <div>
            <h3 className="h3-center-center-h3 h9">Какие техники изучите на МК</h3>
                <div className="number">1 
                    <p>Снятие старой краски</p>
                </div>
                <div className="number">2
                    <p>Устранение царапин и мелких дефектов</p>
                </div>
                <div className="number">3
                    <p>Ремонт маленьких и  больших сколов</p>
                </div>
                <div className="number">4
                    <p>Ремонт поломанной и расклеившейся мебели</p>
                </div>
                <div className="number">5
                    <p>Замена старых поврежденных деталей</p>
                </div>
                <div className="number">6
                    <p>Приемы и идеи декора. Улучшение дизайна старой мебели</p>
                </div>
                <div className="number">7
                    <p>Покраска изделия</p>
                </div>
            <img src={img} alt="" className='img-center-decor'/>
            <h3 className='h3-center-end'>Подари вторую жизнь старой мебели и сохрани историю вашей семьи</h3>
            <h3 className="h3-center-center-h3">Мастер-классы по реставрации мебели</h3>
            <div className="box">
                <div className="item">
                    <img src={img2} alt="" />
                    <p>Буфет</p>
                </div>
                <div className="item">
                    <img src={img3} alt="" />
                    <p>Сундук</p>
                </div>
                <div className="item">
                    <img src={img4} alt="" />
                    <p>Комод</p>
                </div>
                <div className="item">
                    <img src={img5} alt="" />
                    <p>Советское кресло</p>
                </div>
            </div>
            <div className="box">

                <div className="item">
                    <img src={img6} alt="" />
                    <p>Стол</p>
                </div>
                <div className="item">
                    <img src={img7} alt="" />
                    <p>Стул</p>
                </div>
                <div className="item">
                    <img src={img8} alt="" />
                    <p>Обивка стула</p>
                </div>
                <div className="item">
                    <img src={img9} alt="" />
                    <p>Ремонт стула</p>
                </div>
            </div>
        </div>
    );
}

export default Center;
