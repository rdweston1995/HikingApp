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
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    componentDidMount = () => {
        // console.log();
        if(localStorage && localStorage.getItem('hikes')) {
            this.setState({hikes: JSON.parse(localStorage.getItem('hikes'))});
            console.log(this.state.hikes);
        }
    }

    componentWillUnmount = () => {
        // console.log(this.state);
    }

    render() {
        return(
            <div className="resultsDiv">
                <NavBar />
            </div>
        )
    }
}

export default Results;