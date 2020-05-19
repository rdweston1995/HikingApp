//Node Imports
import React from "react";

//Component
import NavBar from "./../../components/navBar/navBar";

//CSS
import "./results.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class Results extends React.Component{
    render() {
        return(
            <div className="resultsDiv">
                <NavBar />
            </div>
        )
    }
}

export default Results;