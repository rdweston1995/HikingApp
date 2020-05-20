//Node Imports
import React from "react";

//Component
import NavBar from "./../../components/navBar/navBar";
import HikeDiv from "./../../components/hikeDiv/hikeDiv";

//CSS
import "./results.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class Results extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            hikes: []
        }
    }

    componentDidMount = () => {
        // console.log();
        // if(localStorage && localStorage.getItem('hikes')) {
        //     // this.setState({hikes: JSON.parse(localStorage.getItem('hikes'))});
        //     // console.log(this.state.hikes);
        //     console.log(localStorage.getItem('hikes'));

        // }
        console.log(this.state);
    }

    componentWillUnmount = () => {
        // console.log(this.state);
    }

    render() {
        return(
            <div className="resultsDiv">
                <NavBar />
                <div className="hikeDiv">
                    {this.state.hikes.map(hike => 
                        <HikeDiv
                            name={hike.name}
                            key={hike.name}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Results;