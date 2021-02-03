// require('dotenv').config();

const axios = require("axios");

// class Geocode {
//     async getLatLng(location) {
//         return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`).then((res) => {
//             console.log(res);
//             return res.data.results[0];
//         }).catch((err) => {
//             console.log(err);
//         });
//     }
// }

// module.exports = Geocode;

function getLatLng(location) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`).then((res) => {
        console.log(res);
        return res.data.results[0];
    }).catch((err) => {
        console.log(err);
    });
}

export default getLatLng;

