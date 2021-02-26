//Node Imports
import React from "react";
import {withRouter} from "react-router-dom";

// import NavBar from "./../../components/navBar/navBar";
import NavBarAlt from "./../../components/navBarPages/navBarAlt";

//CSS
import "./explore.css";

class Explore extends React.Component {
    constructor(props) {
        super(...arguments);
    }
    render() {
        return (
            <div id="explorePage">
                <NavBarAlt 
                    onSearch={this.props.onSearch}
                    onKeyPress={this.props.onKeyPress}/>
                <div id="exploreDiv">
                    <p className="comingSoon">Coming Soon</p>
                </div>
            </div>
        )
    }
};

export default withRouter(Explore);