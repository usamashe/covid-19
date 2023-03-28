import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchData = async (country) => {
  const changeableUrl =
    country === "global" ? `${url}/all` : `${url}/countries/${country}`;
  // let changeableUrl = url;
  // if (country) {
  //   changeableUrl = `${url}/countries/${country}`;
  // }
  try {
    const { data } = await axios.get(changeableUrl);
    // const { data } = await (await fetch(url, { headers })).json()

    const { cases: confirmed, recovered, deaths, updated: lastChecked } = data;

    return { confirmed, recovered, deaths, lastChecked };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/historical/all?lastdays=all`);

    const dates = Object.keys(data.cases);
    const confirmed = Object.values(data.cases);
    const recovered = Object.values(data.recovered);
    const deaths = Object.values(data.deaths);

    return {
      dates,
      confirmed,
      recovered,
      deaths,
    };
  } catch (error) {
    return [];
  }
};

export const countries = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    return response.data;
  } catch (error) {}
};
