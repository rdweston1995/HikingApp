const axios = require("axios");

function Weather(location, lat , lon) {
  //API call 1
    // axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`).then((res) => {
    //   console.log(res.data);
    // }).catch((err) => {
    //   console.log(err);
    // });

  //API call 2
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  });
}

export default Weather;