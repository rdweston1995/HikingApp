import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import "./hikeResults.css";

function hikeResults(props) {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.location}</p>
        </div>
    );
}

export default hikeResults;