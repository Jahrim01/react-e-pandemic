import React, { useEffect, useState} from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.scss";

const Chart = () => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const LineChart = (
        dailyData.length
        ? (
            <Line
            data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infectés',
                borderColor: '#FF5733',
                backgroundColor: 'rgba(255, 87, 51, 0.5)',
                fill: true,
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'morts',
                borderColor: 'purple',
                backgroundColor: 'rgba(117, 3, 98, 0.5)',
                fill: true,
            }, {}],
           }} 
            />)
        : null
    );

    return (
       <div className={styles.container}>
           {LineChart}
       </div>
    );
}

export default Chart