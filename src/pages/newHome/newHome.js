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
    render(){
        return(
            <>
                <NavBar />
                <Search />
            </>
        );
    };
}

export default Home;