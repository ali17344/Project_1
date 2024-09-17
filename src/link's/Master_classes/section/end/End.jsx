import React from 'react';
import "./style.css"
import img from "../img/16.png"
import img2 from "../img/17.png"
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
        </div>
    );
}

export default End;
