const axios = require("axios");

class Geocode {
    async getLatLng(location) {
        // let url = 
        // return `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GoogleAPIKey}`;
        console.log(process.env.HOME);
        console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_API_KEY}`);
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_API_KEY}`).then((res) => {
            return res.data.results;
        }).catch((err) => {
            console.log(err);
        });
    }
}

module.exports = Geocode;