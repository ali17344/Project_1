import React from 'react';
import { Link } from 'react-router-dom';
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img34 from "../img/3.02.png"
import img4 from "../img/4.png"
import img42 from "../img/4.02.png"
import img5 from "../img/5.png"
import img52 from "../img/5.02.png"
import img6 from "../img/6.png"
import img62 from "../img/6.02.png"
import "./style.css"
const Start = () => {
    return (
        <div>

            <div className='img-start'>
                <img src={img2} alt="" />
                <div>
                <h3 className='start-h3'>Нам доверяют мебель с историей в 120 лет</h3>
                <button className="btn">Смотреть мастер-классы</button>
                </div>
            </div>
            <h3 className="h3-center-center-h3 h9">Наши работы</h3>
            <div className="container-img">
                <div className="item">
                    <img src={img3} alt="" />
                    <p>До</p>
                </div>
                <div className="item">
                    <img src={img34} alt="" />
                    <p>После</p>
                </div>
                <div className="item">
                    <img src={img4} alt="" />
                    <p>До</p>
                </div>
                <div className="item">
                    <img src={img42} alt="" />
                    <p>После</p>
                </div>
            </div>
            <div className="container-img">
                <div className="item">
                    <img src={img5} alt="" />
                    <p>До</p>
                </div>
                <div className="item">
                    <img src={img52} alt="" />
                    <p>После</p>
                </div>
                <div className="item">
                    <img src={img6} alt="" />
                    <p>До</p>
                </div>
                <div className="item">
                    <img src={img62} alt="" />
                    <p>После</p>
                </div>
            </div>
            <button className='btn2'>Смотреть больше примеров</button>
        </div>
    );
}

export default Start;
