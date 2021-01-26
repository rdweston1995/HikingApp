//Node Imports
import React from "react";

//CSS
import "./hikeResults.css";

function hikeResults(props) {
    return(
        <div className="hikeResultsNameDiv" onClick={props.onClick}>
            <p className="hikeResultsName">{props.name}</p>
            <p className="hikeResultsLocation">{props.location}</p>
        </div>
    );
}

export default hikeResults;