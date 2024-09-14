import React from 'react';
import Start from './section/start/Start';
import Center from './section/center/Center';
import End from './section/end/End';

const AboutUs = () => {
    return (
        <div className='flex'>
            <Start />
            <Center />
            <End />
        </div>
    );
}

export default AboutUs;
