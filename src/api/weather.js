const weather = require("weather-js");

function weathertest(location, dT) {
    console.log('test');
    // console.log(location);
    // console.log(degreeType);
    // weatherjs.find({search: location, degreeType: dT}, function(err, result){
    //     if(err) console.log(err);
    //     console.log(result, null, 2);
    // //     // return {result};
    // });
    weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
      
        console.log(JSON.stringify(result, null, 2));
      });
}

export default weather;