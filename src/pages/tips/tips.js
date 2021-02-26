//Node Imports
import React from "react";

// import NavBar from "./../../components/navBar/navBar";
import NavBarAlt from "./../../components/navBarPages/navBarAlt";

//CSS
import "./tips.css";

class Tips extends React.Component {
    constructor(props){
        super(...arguments);
    }
    render() {
        return (
            <div id="tipsPage">
                <NavBarAlt 
                    onSearch={this.props.onSearch}
                    onKeyPress={this.props.onKeyPress}/>
                <div id="tipsDiv">
                    <p className="comingSoon">Coming Soon</p>
                </div>
            </div>
        )
    }
}

export default Tips;