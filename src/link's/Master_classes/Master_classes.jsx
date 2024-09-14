import React from 'react';
import Start from './section/start/Start';
import "./page2.css"
import Center from './section/center/Center';
import End from './section/end/End';
const MasterClasses = () => {
    return (
        <div className='flex'>
            <Start />
            <Center />
            <End />
        </div>
    );
}

export default MasterClasses;
