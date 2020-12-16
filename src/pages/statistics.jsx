import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../App.module.scss';
import { Cards, Chart, Countries } from "../components";
import { fetchData } from "../api";

AOS.init();

class statistics extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData  });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country });
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

export default statistics