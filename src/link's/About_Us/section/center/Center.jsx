import React from 'react';
import "../../../custom-made_furniture/companents/start/style.css"
import "../../../home/style.css"
import "./style.css"
import img from "../img/3.png"
const Center = () => {
    return (
        <div>
            <div className="blok">
                <div className="item">
                    <h3 className='blok-h3'>+10 лет</h3>
                    <p className='p-center'>На рынке по производству мебели</p>
                </div>
                <div className="item">
                    <h3 className='blok-h3'>+1500</h3>
                    <p className='p-center'>Изготовлено мебели</p>
                </div>
                <div className="item">
                    <h3 className='blok-h3'>120 лет</h3> 
                    <p className='p-center'>Самой старинной мебели для реставрации </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-6">
                        <h3 className="intro-title-h3 ">Никита Колодезников-Матчитов</h3>
                        <p className='intro-title-p2'>Основатель мастерской</p>
                        <br />
                        <p className="intro-title-p2 p3">С детства я был окружен творческими людьми, мой дедушка был строителем и мастером по дереву. Спустя много лет и мне передалась его любовь к дереву - в свободное время мастерил для себя небольшие  изделия из древесины.
                        <br />
Более десяти лет назад построил двухэтажный гараж, на втором этаже расположилась наша мастерская. Начинал производство практически “с нуля”, с каждой зарплаты понемногу откладывал на покупку инстурментов и станков. 
<br />
Постепенно начали появляться первые заказы. Несколько лет назад мы с супругой решили еще заняться ремонтом и реставрацией мебели. Эту идею предложили сами клиенты, поскольку периодически приходили с таким запросом. В основном, реставрацией занимается супруга Саргылана. Мы с ней одна сплоченная, дружная и отличная команда.  </p>
                    </div>
                </div>
            </div>
        <h3 className="h3-center-center-h3 h3">Философия мастерской NIKASON</h3>
        <p className='intro-title-p p5'>Создавать что-то по-настоящему ценное и уникальное. Дарить радость и уют в каждый дом</p>
        </div>
    );
}

export default Center;
