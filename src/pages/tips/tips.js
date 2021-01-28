//Node Imports
import React from "react";

import NavBar from "./../../components/navBar/navBar";

//CSS
import "./tips.css";

class Tips extends React.Component {
    render() {
        return (
            <div id="tipsPage">
                <NavBar />
                <div id="tipsDiv">
                    <p>testtest</p>
                </div>
            </div>
        )
    }
}

export default Tips;