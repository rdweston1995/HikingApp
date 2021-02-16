//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import {withRouter} from "react-router-dom";

//Component
import NavBar from "./../../components/navBar/navBar";
import HikeDiv from "./../../components/hikeDiv/hikeDiv";
import HikeResults from "./../../components/hikeResults/hikeResults";
import HikeInfo from "./../../components/hikeInfo/hikeInfo";


//CSS
import "./results.css";

class Results extends React.Component{
    constructor(props) {
        super(props);
    }

    hikeOnClick = (hike) => {
        
        this.setState({displayedHike: hike});
        this.setState({displayedHikeBigImg: hike.imgMedium});
        // this.setState({displayWeather: Weather(this.state.displayedHike)});
        // Weather(this.state.displayedHike.location, this.state.displayedHike.latitude, this.state.displayedHike.longitude);
        console.log(this.state.displayedHike);
    }

    hikeImgShow = () => {this.setState({displayBigImg: true})}


    render() {
        return(
            <div className="resultsPage hikeDiv">
                {/* <NavBar /> */}
                <Row className="hikeResultsDiv">
                    <Col xs lg="3" className='hikeNameCol'>
                        {this.state.hikes.map(hike => 
                            <HikeResults
                                className="hikeNameResults"
                                name={hike.name}
                                location={hike.location}
                                onClick={() => this.hikeOnClick(hike)}
                                key={hike.id} />
                        )}
                    </Col>
                    <Col xs lg="9" className="hikeInfoCol">
                        <HikeInfo hike={this.state.displayedHike} imgClick={this.hikeImgShow} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Results;