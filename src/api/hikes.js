// https://www.hikingproject.com/data
const axios = require("axios");

class Hikes {
    async basicHikingData(lat, lng, maxDistance, maxResults, minLength, minStars) {
        return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${maxDistance}&maxResults=${maxResults}&minLength=${minLength}&minStars=${minStars}&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`).then((res) => {
            return res.data.trails;
        }).catch((err) => {
            console.log(err);
        });
    }
}

module.exports = Hikes;