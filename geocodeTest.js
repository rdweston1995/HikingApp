// const geocode = require("react-geocode");
const axios = require("axios");

// geocode.setApiKey("AIzaSyADTa33SpEuErTRKXJ8UWucpoEUOnYV6wg");

// geocode.fromAddress("Space Needle").then(
//     res => {
//         const { lat, long } = res.results[0].geometry.location;
//         console.log(lat, long);
//     }, err => {
//         console.log(err);
//     }
// )

// let location = "Seattle";


// let url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyADTa33SpEuErTRKXJ8UWucpoEUOnYV6wg"
// let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyADTa33SpEuErTRKXJ8UWucpoEUOnYV6wg`;

// axios.get(url).then((res) =>{ 
//     console.log(res.data.results[0]);
// }).catch((err) => {
//     console.log(err);
// });

// async function getLatLon(location){
//     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyADTa33SpEuErTRKXJ8UWucpoEUOnYV6wg`).then((res) => {
//         return res.data.results[0].
//     });
// }

class Geocode {
    async getLatLon(location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyADTa33SpEuErTRKXJ8UWucpoEUOnYV6wg`).then((res) => {
            return res.data.results;
        }).catch((err) => {
            console.log(err);
        });


    }
}

module.exports = Geocode;