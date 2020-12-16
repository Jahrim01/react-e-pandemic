import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../App.module.scss';
import { Cards, Chart, Countries, Navigation } from "../components";
import { fetchData } from "../api";

AOS.init();

class statistics extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData  })
    }
    render() {
        const { data } = this.state

        return (
            <div data-aos="zoom-in" data-aos-duration="1000" className={styles.container}>
                <Cards data={data}></Cards>
                <Countries></Countries>
                <Chart></Chart>
            </div>
        )
    }
}

export default statistics