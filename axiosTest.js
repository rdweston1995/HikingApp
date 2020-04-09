//  https://www.hikingproject.com/data

const axios = require("axios");

const axiosObj = {
    key: '200723231-608d19aa9a3f132e824907a2db30d730',
    lat: '47.4249',
    lon: '-121.433'
}

let url = `https://www.hikingproject.com/data/get-trails?lat=${axiosObj.lat}&lon=${axiosObj.lon}&maxDistance=10&key=${axiosObj.key}`;

axios.get(url).then((res) => {
    // console.log(res.data.trails.length);
    // console.log(res.data.trails[0]);
    /**
     * Name
     * Summary
     * stars
     * location
     * length
     * ascent
     * high
     * low
     * 
     */
    
    for(let i = 0; i < res.data.trails.length; i++) {
        let percentGrade = (res.data.trails[i].high / res.data.trails[i].low).toFixed(2);
        console.log(res.data.trails[i].name + " | " + res.data.trails[i].stars);
        console.log(res.data.trails[i].summary);
        console.log(res.data.trails[i].location);
        console.log(res.data.trails[i].length + " | " + res.data.trails[i].ascent + " | " + res.data.trails[i].low + " | " + res.data.trails[i].high);
        console.log("Percent Grade: " + percentGrade);
        console.log("=============================================================================");
    }
}).catch((err) => {
    console.log(err);
})