//Node Imports
import React from "react";

import NavBar from "./../../components/navBar/navBar";

//CSS
import "./explore.css";

class Explore extends React.Component {
    render() {
        return (
            <div id="explorePage">
                <NavBar />
                <div id="exploreDiv">
                    <p>testExplore</p>
                </div>
            </div>
        )
    }
};

export default Explore;