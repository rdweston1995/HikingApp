//Node imports
import React from "react";

//Component
import NavBar from "./../../components/navBar/navBar";
import Search from "./../../components/search/search";

//CSS
import "./newHome.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class Home extends React.Component{
    onSearch = () => {
        let lat = '', lng = '', maxDistance = '30', maxResults = '10', minLength = '0', minStars = '0';

        new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
            lat = data.geometry.location.lat;
            lng = data.geometry.location.lng;
            new Hikes().basicHikingData(lat, lng).then((returnedHikes) => {
                console.log(returnedHikes);
                // this.setState({hikes: returnedHikes});
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        return(
            <>
                <NavBar />
                <Search 
                    onSearch={this.onSearch}
                />
            </>
        );
    };
}

export default Home;