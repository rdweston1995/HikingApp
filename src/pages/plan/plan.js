//Node Imports
import React from "react";
import {withRouter} from "react-router-dom";

import NavBar from "./../../components/navBar/navBar";

//CSS
import "./plan.css";

class Plan extends React.Component {
    render() {
        return (
            <div id="planPage">
                <NavBar />
                <div id="planDiv">
                    <p className="comingSoon">Coming Soon</p>
                </div>
            </div>
        )
    }
};

export default withRouter(Plan);