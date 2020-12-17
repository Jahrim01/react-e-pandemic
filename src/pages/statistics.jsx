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
        
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        
        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state

        return (
            <div data-aos="zoom-in" data-aos-duration="1000" className={styles.container}>
                <Cards data={data} />
                <Countries handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default Statistics