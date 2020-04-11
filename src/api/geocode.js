const axios = require("axios");

class Geocode {
    async getLatLng(location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.GOOGLE_API_KEY}`).then((res) => {
            return res.data.results;
        }).catch((err) => {
            console.log(err);
        });
    }
}

module.exports = Geocode;