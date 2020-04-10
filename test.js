const geocode = require("./geocodeTest.js");
const axiosTest = require("./axiosTest.js");

new geocode().getLatLon("Seattle").then((data) => {
    // console.log(data[0].formatted_address);
    console.log(data[0].formatted_address);
    console.log(data[0].geometry.location);
    // console.log(data[0].geometry.location.lat.toFixed(4));
    // console.log(data[0].geometry.location.lng.toFixed(4));

    new axiosTest().hikingData(data[0].geometry.location.lat.toFixed(4), data[0].geometry.location.lng.toFixed(4)).then((results) => {
        console.log(results);
    });
})