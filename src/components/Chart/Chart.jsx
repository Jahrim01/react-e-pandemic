import React, { useEffect, useState} from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.scss";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData[0]
        ? (
            <Line
            data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infectés',
                borderColor: '#FF5733',
                backgroundColor: 'rgba(255, 87, 51, 0.5)',
                fill: true,
            }, {
                data: dailyData.map((data) => data.recovered),
                label: 'Rétablis',
                borderColor: '#42B005',
                backgroundColor: 'rgba(66, 176, 5, 0.5)',
                fill: true,
            }, {
                data: dailyData.map((data) => data.deaths),
                label: 'morts',
                borderColor: 'purple',
                backgroundColor: 'rgba(117, 3, 98, 0.5)',
                fill: true,
            }],
           }} 
            />)
        : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels: ['Infectés', 'Rétablis', 'Morts'],
                    datasets: [{
                        label: 'Population',
                        backgroundColor: [
                            'rgb(255, 87, 51, 0.5)',
                            'rgb(10, 172, 4, 0.5)',
                            'rgb(117, 3, 98, 0.5)'
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                   }}
                options={{
                    legend: {display: false},
                    title: {display: true, text:`Données courrantes pour : ${country}`},
                }}
            />
        )
        : null
    );

    return (
       <div className={styles.container}>
           {country ? barChart : lineChart}
       </div>
    );
}

export default Chart