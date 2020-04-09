const axios = require("axios");

const axiosObj = {
    key: '200723231-608d19aa9a3f132e824907a2db30d730',
    lat: '47.4165',
    lon: '-122.1741'
}
// let url = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200723231-608d19aa9a3f132e824907a2db30d730";
// let url = `https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${axiosObj.key}`;
let url = `https://www.hikingproject.com/data/get-trails?lat=${axiosObj.lat}&lon=${axiosObj.lon}&maxDistance=10&key=${axiosObj.key}`;
// console.log(url);
axios.get(url).then((res) => {
    // console.log(res.data);
    console.log(res.data.trails.length);
    for(let i = 0; i < res.data.trails.length; i++) {
        console.log(res.data.trails[i].name);
    }
}).catch((err) => {
    console.log(err);
})