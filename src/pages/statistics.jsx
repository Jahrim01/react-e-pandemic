import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.scss';

AOS.init();

const statistics = () => {

    return (
        <div data-aos="flip-right" data-aos-duration="2000" className="stats">
            <h1>Ato ny stat du covid</h1>
            <p>mampiasa chart.js</p>
        </div>
    )
}

export default statistics