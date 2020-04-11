//  https://www.hikingproject.com/data
const axios = require("axios");

class axiosTest {
    async hikingData(lat, lng, maxDist, maxRes, sort, minLen, minStar) {
        let maxDistance = maxDist || 30;
        let maxResults = maxRes || 10;
        let minLength = minLen || 0;
        let minStars = minStar || 0;
        // console.log(maxDistance + "\t" + maxResults + "\t" + minLength + "\t" + minStars);

        return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=${maxDistance}&maxResults=${maxResults}&minLength=${minLength}&minStars=${minStars}&key=${process.env.HIKING_PROJECT_KEY}`).then((res) => {
            console.log(res);
            return res.data.trails;
        }).catch((err) => {
            console.log(err);
        })

    }
}

module.exports = axiosTest;