require('dotenv').config();
const geocode = require("./geocodeTest.js");
const axiosTest = require("./axiosTest.js");

new geocode().getLatLng("Mount Rainier National Park").then((data) => {
    // console.log(data[0].formatted_address + "\t" + data[0].geometry.location.lat.toFixed(4) + ", " + data[0].geometry.location.lng.toFixed(4));
    console.log(data);
    new axiosTest().hikingData(data[0].geometry.location.lat.toFixed(4), data[0].geometry.location.lng.toFixed(4)).then((results) => {
        for(let i = 0; i < results.length; i++){
            console.log(results[i].name);
        }
    });
});

// new axiosTest().hikingData();

