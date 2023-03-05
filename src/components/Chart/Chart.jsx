import React,{useState,useEffect} from "react";
import { fetchDailyData } from "../../api";
import { Line,bar } from "react-chartjs-2";

import styles from './Chart.module.css';


    const Chart =() =>{
        const[dailyData,setDailyData] =useState([]);
    
        useEffect(() => {
            const fetchApi = async ()=>{
                const data = await fetchDailyData();
                setDailyData(data);
            }
            fetchApi();
        });
  
    const lineChart = (
        dailyData?.length
        ? (
            <Line
            datasetIdKey='id'
            data={{
              labels: ['Jun', 'Jul', 'Aug'],
              datasets: [
                {
                  id: 1,
                  label: '',
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: '',
                  data: [3, 2, 1],
                },
              ],
            }}
          />):null
    );
   
   return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;