import React from "react";

import "./hikeInfo.css";

function hikeInfo(props) {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.location}</p>
            <p>{props.difficulty}</p>
            <p>{props.low} - {props.high}</p>
            <p>{props.length}</p>
            <p>{props.stars}</p>
            <p>{props.summary}</p>
            <p>{props.url}</p>
            <p>{props.conditionDate}</p>
            <p>{props.conditionDetails}</p>
            <p>{props.conditionStatus}</p>
        </div>
    );
};

export default hikeInfo;