import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import "./hikeResults.css";

function hikeResults(props) {
    return(
        <Row className={props.className}>
            {props.hikes.map(hike => 
                <Row>
                    <Col><p>{hike.name}</p></Col>
                    <Col><p>{hike.location}</p></Col>
                </Row>)}
            {/* <Col>
                {props.hikes.map(hike => 
                    <p>{hike.name}</p>)}
            </Col>
            <Col>
                {props.hikes.map(hike => 
                    <p>{hike.location}</p>)}
            </Col> */}
        </Row>
    );
}

export default hikeResults;