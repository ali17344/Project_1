import React from 'react';
import img from "../img/1.png"
import "./style.css"
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

        </div>
    );
}

export default End;
