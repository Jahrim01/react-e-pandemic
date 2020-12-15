import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.scss';

AOS.init();

const homePage = () => {

    return (
        <div className="home">
            <div data-aos="fade-right" data-aos-duration="1000" className="info">
                <h2>ANDRIANALIZANDRY</h2>
                <h3>Mirija Valisoa</h3>
                <h3 className="cursus">ESSIA 5 | N°19</h3>
            </div>
        </div>
    )
}

export default homePage