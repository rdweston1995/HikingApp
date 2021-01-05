import React from "react";

import "./hikeInfo.css";

function hikeInfo(props) {
    return(
        <div className="hikeInfo">
            <h2 className="hikeInfoName">{props.hike.name}</h2>
            <h3 className="hikeInfoLoc">{props.hike.location}</h3>
            <p className="hikeInfoDiff">{props.hike.difficulty}</p>
            <p className="hikeInfoAscent">Low: {props.hike.low}ft - High: {props.hike.high}ft</p>
            <p className="hikeInfoLeng">{props.hike.length} miles</p>
            <p className="hikeInfoStars">{props.hike.stars} / 5 stars</p>
            <p className="hikeInfoSum">{props.hike.summary}</p>
            <p className="hikeInfoUrl">{props.hike.url}</p>
            <p className="hikeInfoDate">{props.hike.conditionDate}</p>
            <p className="hikeInfoDetails">{props.hike.conditionDetails}</p>
            <p className="hikeInfoStatus">{props.hike.conditionStatus}</p>
        </div>
    );
};

export default hikeInfo;