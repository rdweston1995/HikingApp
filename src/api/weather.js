const axios = require("axios");

function Weather(location) {
  // console.log(process.env.REACT_APP_OPEN_WEATHER_KEY);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
}

export default Weather;