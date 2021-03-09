import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    //destructure the data from res. Can just use data instead of res.data
    // then further destructure everything inside data
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);

    // before all the destructuring, these would be res.data.confirmed, etc.
    // const modifiedData = {
    //   confirmed: confirmed,
    //   recovered: recovered,
    //   deaths: deaths,
    //   lastUpdate: lastUpdate
    // };

    // since the key and value are both the same above, we can remove the value to simplify the object.
    // const modifiedData = {
    //   confirmed,
    //   recovered,
    //   deaths,
    //   lastUpdate
    // };

    //return the data.
    // return modifiedData;

    //return the data without storing in a variable
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };
  } catch (err) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return modifiedData;
  } catch (err) {}
};
