//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import loadImages from "../loadImages/loadImages";

//CSS
import "./hikeInfo.css";


    /**
     * Change font
     * test out bigger font-size for the h2 and h3
     * Find images for the difficulty rating and build a function to check difficult and display correct image
     * Overall change everything lets be real
     * Figure out picture display thats not even passed as a prop currently
     * Line up h2 and h3 for whatever reason they are not in line ocd triggering
     * link to google maps with the lat and long provided
     * Provide the weather at trail head
     * Change this to a class to do a componentDidMount to load weather
     */


class hikeInfo extends React.Component {
    constructor(props){
        super(...arguments);
        this.state={}
    }
    render(){
        return (
            <div className="hikeInfo">
                <div className="hikeBasicInfo">
                    <h2 className="hikeInfoName font">{this.props.hike.name}</h2>
                    <h3 className="hikeInfoLoc font">{this.props.hike.location}</h3>
                    <div className="hikeStats">
                        <Row>
                            {/* <p className="hikeInfoDiff font">{props.hike.difficulty}</p> */}
                            <img className="difficultyImg" src={loadImages[this.props.hike.difficulty]} width="30px" height="35px"/>
                            <p className="hikeInfoStars font">{this.props.hike.stars} / 5 stars</p>
                        </Row>
                        <Row>
                            <p className="hikeInfoLeng font">Lenght: {this.props.hike.length} miles</p>
                            <p className="hikeInfoAscent font">Ascent: {this.props.hike.ascent}ft</p>
                            <p className="hikeInfoHiLo font">Low: {this.props.hike.low}ft - High: {this.props.hike.high}ft</p>
                        </Row>
                    </div>
                </div>
                <div className="hikeImgSmll">
                    <img className="hikingPic" src={this.props.hike.imgSmallMed} alt="Photo" height="75%" onClick={() => this.props.imgClick()}/>
                </div>
                <div className="hikeSummary">
                    <h3 className="hikeSummaryTitle font bottomBorder">Description: </h3>
                    <p className="hikeInfoSum font">{this.props.hike.summary}</p>
                </div>
                <div className="hikeRecentReports">
                    <h3 className="hikeRecentReportsTitle font bottomBorder">Recent Trip Reports:</h3>
                    {/* <p className="hikeReportDate font">{props.hike.conditionDate.substring(0,10)}</p> */}
                    <p className="hikeReportStatus font">{this.props.hike.conditionStatus}</p>
                    <p className="hikeReportDetails font">{this.props.hike.conditionDetails}</p>
                </div>
                <div className="hikeWeather">
                    {/* <p>{props.weather.current.clouds}</p> */}
                </div>
                <div className="hikingProjectLink">
                    <a className="hikeInfoUrl font" href={this.props.hike.url} target="_blank" rel="noopener noreferrer">HikingProject page</a>  
                </div>
            </div>
        );
    }
}

export default hikeInfo;