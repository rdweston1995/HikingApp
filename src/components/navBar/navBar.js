//Node imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import "./navBar.css";

function navBar() {
    return(
        <Row id="navBar" className="navBar">
            <Col className="colLeft">
                <div className="testDiv">test</div>
                <div className="testDiv">test</div>
                <div className="testDiv">test</div>
            </Col>
            <Col xs={6} className="navBarLogo">
                <div className="navBarLogoDiv">Test</div>
            </Col>
            <Col>
                <div className="testDiv">Test</div>
                <div className="testDiv">Test</div>
                <div className="testDiv">Test</div>
            </Col>      
        </Row>
    );
}

export default navBar;