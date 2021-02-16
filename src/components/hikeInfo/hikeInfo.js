//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import loadImages from "../loadImages/loadImages";

//CSS
import "./hikeInfo.css";

function hikeInfo(props) {
    /**
     * Change font
     * test out bigger font-size for the h2 and h3
     * Find images for the difficulty rating and build a function to check difficult and display correct image
     * Overall change everything lets be real
     * Figure out picture display thats not even passed as a prop currently
     * Line up h2 and h3 for whatever reason they are not in line ocd triggering
     * link to google maps with the lat and long provided
     * Provide the weather at trail head
     */
    return(
        <div className="hikeInfo">
            {/* <h2 className="hikeInfoName">{props.hike.name}</h2>
            <h3 className="hikeInfoLoc">{props.hike.location}</h3>
            <div className="hikeStats">
                <p className="hikeInfoDiff">{props.hike.difficulty}</p>
                <p className="hikeInfoLeng">{props.hike.length} miles</p>
                <p className="hikeInfoAscent">Low: {props.hike.low}ft - High: {props.hike.high}ft</p>
                <p className="hikeInfoAscent">{props.hike.ascent}</p>
                <p className="hikeInfoStars">{props.hike.stars} / 5 stars</p>
                <p>Most recent trip reports</p>
                <p className="hikeInfoDate">{props.hike.conditionDate}</p>
                <p className="hikeInfoDetails">{props.hike.conditionDetails}</p>
                <p className="hikeInfoStatus">{props.hike.conditionStatus}</p>
            </div>
            <p className="hikeInfoSum">{props.hike.summary}</p>
            <a className="hikeInfoUrl" href={props.hike.url} target="_blank" rel="noopener noreferrer">HikingProject hike page</a>
            <img src={props.hike.imgSmallMed} alt="Photo of the hike"/> */}
            <div className="hikeBasicInfo">
                <h2 className="hikeInfoName font">{props.hike.name}</h2>
                <h3 className="hikeInfoLoc font">{props.hike.location}</h3>
                <div className="hikeStats">
                    <Row>
                        {/* <p className="hikeInfoDiff font">{props.hike.difficulty}</p> */}
                        <img className="difficultyImg" src={loadImages[props.hike.difficulty]} width="30px" height="35px"/>
                        <p className="hikeInfoStars font">{props.hike.stars} / 5 stars</p>
                    </Row>
                    <Row>
                        <p className="hikeInfoLeng font">Lenght: {props.hike.length} miles</p>
                        <p className="hikeInfoAscent font">Ascent: {props.hike.ascent}ft</p>
                        <p className="hikeInfoHiLo font">Low: {props.hike.low}ft - High: {props.hike.high}ft</p>
                    </Row>
                </div>
            </div>
            <div className="hikeImgSmll">
                <img className="hikingPic" src={props.hike.imgSmallMed} alt="Photo" height="75%" onClick={() => props.imgClick()}/>
            </div>
            <div className="hikeSummary">
                <h3 className="hikeSummaryTitle font bottomBorder">Description: </h3>
                <p className="hikeInfoSum font">{props.hike.summary}</p>
            </div>
            <div className="hikeRecentReports">
                <h3 className="hikeRecentReportsTitle font bottomBorder">Recent Trip Reports:</h3>
                {/* <p className="hikeReportDate font">{props.hike.conditionDate.substring(0,10)}</p> */}
                <p className="hikeReportStatus font">{props.hike.conditionStatus}</p>
                <p className="hikeReportDetails font">{props.hike.conditionDetails}</p>
            </div>
            <div className="hikingProjectLink">
                <a className="hikeInfoUrl font" href={props.hike.url} target="_blank" rel="noopener noreferrer">HikingProject page</a>  
            </div>

        </div>
    );
};

export default hikeInfo;