import React from "react";

import "./hikeInfo.css";

function hikeInfo(props) {
    return(
        <div className="hikeInfo">
            <p>{props.hike.name}</p>
            <p>{props.hike.location}</p>
            <p>{props.hike.difficulty}</p>
            <p>{props.hike.low} - {props.hike.high}</p>
            <p>{props.hike.length}</p>
            <p>{props.hike.stars}</p>
            <p>{props.hike.summary}</p>
            <p>{props.hike.url}</p>
            <p>{props.hike.conditionDate}</p>
            <p>{props.hike.conditionDetails}</p>
            <p>{props.hike.conditionStatus}</p>
        </div>
    );
};

export default hikeInfo;