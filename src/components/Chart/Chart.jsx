import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchApi();
  }, []);

  const lineChart = dailyData?.dates?.length ? (
    <Line
      datasetIdKey="id"
      data={{
        labels: dailyData.dates,
        datasets: [
          {
            id: 1,
            label: "Infected",
            data: dailyData.confirmed,
            borderColor: "rgb(53, 255, 150)",
            backgroundColor: "rgba(53, 255, 150, 0.5)",
          },
          {
            id: 2,
            label: "Recovered",
            data: dailyData.recovered,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
          {
            id: 3,
            label: "Deaths",
            data: dailyData.deaths,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      }}
    />
  ) : null;
  console.log(confirmed, recovered, deaths);
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: " people",
            backgroundColor: [
              " rgba(0,0,255,0.5)",
              " rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, Text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      {country !== "global" ? barChart : lineChart}
    </div>
  );
};

export default Chart;
