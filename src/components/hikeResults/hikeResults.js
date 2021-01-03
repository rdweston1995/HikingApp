import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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