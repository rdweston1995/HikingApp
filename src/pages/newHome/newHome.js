//Node imports
import React from "react";

//Component
import NavBar from "./../../components/navBar/navBar";

//CSS
import "./newHome.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class Home extends React.Component{
    render(){
        return(
            <>
                <NavBar />
            </>
        );
    };
}

export default Home;