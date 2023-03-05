import React from "react";
import { Card,Typography,Grid, CardContent } from "@mui/material";
import styles from './Cards.module.css';   
import CountUp from "react-countup";

const Cards =({data}) =>{
  if (!data){
    return 'loding...   '
  }
  const {confirmed,deaths,recovered,lastChecked} = data;
    return(
        <div className={styles.container}>
           <Grid container spacing={3} justifyContent="center" columnGap={1}>
            <Grid item component ={Card} xs={3} className ={`${styles.card} ${styles.Infected}`}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed} duration={1.5} separator={","}/>
                    </Typography>
                    <Typography color= "textSecondary">{new Date(lastChecked).toDateString()}</Typography>
                    <Typography variant="body2"> Number of acive cases of COVID-19</Typography>
                </CardContent>

            </Grid>
           <Grid item component={Card} xs={3} className ={`${styles.card} ${styles.Recovered}`}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">{recovered}</Typography>
                    <Typography color= "textSecondary">{new Date(lastChecked).toDateString()}</Typography>
                    <Typography variant="body2"> Number of Recovered cases of COVID-19</Typography>
                </CardContent>

            </Grid>
            <Grid item component={Card} xs={3} className ={`${styles.card} ${styles.Deaths}`}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths} duration={2.5} separator={","}/>
                    </Typography>
                    <Typography color= "textSecondary">{new Date(lastChecked).toDateString()}</Typography>
                    <Typography variant="body2"> Number of Deaths by COVID-19</Typography>
                </CardContent>

            </Grid>
           </Grid>
        </div>
    )
}

export default Cards;