//  https://www.hikingproject.com/data
const axios = require("axios");

class axiosTest {
    async hikingData(lat, lng) {
        return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=10&key=${process.env.HIKING_PROJECT_KEY}`).then((res) => {
            // console.log(res);
            return res.data.trails;
        }).catch((err) => {
            console.log(err);
        })

    }
}

module.exports = axiosTest;