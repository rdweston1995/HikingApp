//Node Imports
import React from "react";

import NavBar from "./../../components/navBar/navBar";

//CSS
import "./plan.css";

class Plan extends React.Component {
    render() {
        return (
            <div id="planPage">
                <NavBar />
                <div id="planDiv">
                    <p>testPlan</p>
                </div>
            </div>
        )
    }
};

export default Plan;