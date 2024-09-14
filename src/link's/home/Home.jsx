import React from 'react';
import "./style.css"
import Start from './section/start/Start';
import Center from './section/center/Center';
import End from './section/end/End';
const Home = () => {
    return (
        <div className='flex'>
            <Start />
            <Center />
            <End />      
        </div>
    );
}

export default Home;