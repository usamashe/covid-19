import axios from 'axios';

const url  = 'https://disease.sh/v3/covid-19';
const headers = {
    'X-RapidAPI-Key': '9e4c9a9ac4mshcbb42f5ba32c8a0p1b2040jsn8bdccd0f7fe9',
    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
}

export const fetchData = async ()=> {
    try {
        const { data } = await axios.get(`${url}/all`, { headers });
        // const { data } = await (await fetch(url, { headers })).json()
                
        const { cases: confirmed, recovered, deaths,updated: lastChecked } = data;
       
    
        return { confirmed, recovered, deaths, lastChecked};
    } catch (error) {}
}

export const fetchDailyData = async() => {
    try {
      const { data } = await axios.get(`${url}/historical/all?lastdays=all`, { headers });
     
      
      const dates = Object.keys(data.cases);
      const confirmed = Object.values(data.cases);
      const recovered = Object.values(data.recovered);
      const deaths = Object.values(data.deaths);
      
      const a = dates.map((date, index) => {
        return {
            date,
            confirmed: confirmed[index],
            recovered: recovered[index],
            deaths: deaths[index],
        }
      })
     
      return a;
    } catch (error) {
     return []
    }
  };
  