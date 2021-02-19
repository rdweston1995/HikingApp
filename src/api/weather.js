const axios = require("axios");


/**
 * Data that I want for new object to pass
 * Convert time to UTC
 * Convert temp to f
 * Have option to convert to c
 * Check for alert
 * Current
 *    feels_like
 *    humidity
 *    sunrise
 *    sunset
 *    temp
 *    wind_speed?
 *    weather[] description
 * daily{full object}
 *    humidty
 *    temp{}
 *    weather[{}]
 *    wind_speed?
 * hourly(maybe a few hours worth)
 *    weather
 *    temp
 */
function Weather(location, lat , lon) {
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`).then((res) => {
    let weatherObj = {
      current: res.data.current,
      daily: res.data.daily,
      hourly: [res.data.hourly[0], res.data.hourly[1], res.data.hourly[2], res.data.hourly[3], res.data.hourly[4], res.data.hourly[5]]
    }
    // console.log(res.data);
    // console.log(weatherObj);
    return weatherObj;
  }).catch((err) => {
    console.log(err);
  });
}

export default Weather;