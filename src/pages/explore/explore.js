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
        console.log(this.props);
        this.state = {}
    }

    keyPressRoute = (e) => {
        if(e.key === 'Enter'){this.props.history.push('/results')}
    }

    render() {
        return (
            <div id="explorePage">
                <NavBarAlt 
                    onSearch={this.props.onSearch}
                    onKeyPress={this.props.onKeyPress}
                    keyPressRoute={this.keyPressRoute}
                    />
                <div id="exploreDiv">
                    <p className="comingSoon">Coming Soon</p>
                </div>
            </div>
        )
    }
};

export default withRouter(Explore);