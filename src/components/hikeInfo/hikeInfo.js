//Node Imports
import React from "react";

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
            <div className="testDiv1">
                <h2 className="hikeInfoName">{props.hike.name}</h2>
                <h3 className="hikeInfoLoc">{props.hike.location}</h3>
                <div className="hikeStats">
                    <p className="hikeInfoDiff">{props.hike.difficulty}</p>
                    <p className="hikeInfoLeng">{props.hike.length} miles</p>
                    <p className="hikeInfoAscent">Low: {props.hike.low}ft - High: {props.hike.high}ft</p>
                    <p className="hikeInfoAscent">{props.hike.ascent}</p>
                    <p className="hikeInfoStars">{props.hike.stars} / 5 stars</p>
                </div>
            </div>
            <div className="testDiv2">
                <img src={props.hike.imgSmallMed} alt="Photo" height="75%" onClick={() => props.imgClick()}/>
            </div>
            <div className="testDiv3">
                <p className="hikeInfoSum">{props.hike.summary}</p>
                <a className="hikeInfoUrl" href={props.hike.url} target="_blank" rel="noopener noreferrer">HikingProject hike page</a>  
            </div>
        </div>
    );
};

export default hikeInfo;