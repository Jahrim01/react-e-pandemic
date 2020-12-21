import React from 'react';
import AOS from 'aos';
import { Cards, Chart, Countries } from "../components";
import { fetchData } from "../api";

import 'aos/dist/aos.css';
import styles from './Statistics.module.scss';

AOS.init();

class Statistics extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const data = await fetchData();
        setTimeout(() => {
            this.setState({ data });
        }, 4000);
        
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        
        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state

        return (
            <div className={styles.container}>
                <Cards data-aos="zoom-in" data-aos-duration="2000" data={data} />
                <Countries data-aos="zoom-in" data-aos-duration="2000" handleCountryChange={this.handleCountryChange} /> 
                <Chart data-aos="zoom-in" data-aos-duration="2000" data={data} country={country} />
                <br/>
            </div>
        )
    }
}

export default Statistics