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
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  });
}

export default Weather;