//Node Imports
import React from "react";
import {withRouter} from "react-router-dom";

// import NavBar from "./../../components/navBar/navBar";
import NavBarAlt from "./../../components/navBarPages/navBarAlt";

//CSS
import "./plan.css";

class Plan extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div id="planPage">
                <NavBarAlt 
                    history={this.state.history}/>
                <div id="planDiv">
                    <p className="comingSoon">Coming Soon</p>
                </div>
            </div>
        )
    }
};

export default withRouter(Plan);