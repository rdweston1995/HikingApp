//Node imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import "./navBar.css";

function navBar() {
    return(
        <Row id="navBar" className="navBar">
            <Col>
                <p>Explore</p>
                <p>Plan</p>
                <p>History</p>
            </Col>
            <Col xs={6}>
                <p>Logo</p>
            </Col>
            <Col>
                <p>Help</p>
                <p>Sign Up</p>
                <p>Log In</p>
            </Col>      
        </Row>
    );
}

export default navBar;