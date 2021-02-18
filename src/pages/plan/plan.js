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
        // this.handleKeypress = this.handleKeypress.bind(this);

        this.state = {
            
        };
    }

    onResultsSearch = async () => {
        console.log("test");
    }

    handleKeypress = e => {
        console.log(e.key);
        if(e.key === 'Enter'){
            console.log("You hit enter");
        }
    }
    render() {
        return (
            <div id="planPage">
                <NavBarAlt 
                    history={this.state.history}
                    onSearch={this.onResultsSearch}
                    onKeyPress={this.handleKeypress}
                    />
                <div id="planDiv">
                    <p className="comingSoon">Coming Soon</p>
                </div>
            </div>
        )
    }
};

export default withRouter(Plan);