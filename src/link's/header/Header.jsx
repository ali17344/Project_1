import React from 'react';
import img from "./1.png"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
              <header>
            <div className='header'>
                <Link to="/master_classes" className='Link Link1'>
                <p>Мастер-классы</p>
                </Link>
                <Link to="/custom_made_furniture" className='Link Link1'>
                <p>Мебель на заказ</p>
                </Link>
                <img src={img} alt="" />
                <Link to="/" className='Link Link1'>
                <p>Главная</p>
                </Link>
                <Link to="/about_us" className='Link Link1'>
                <p>О нас</p>
                </Link>
            </div>
            </header>
        </div>
    );
}

export default Header;
