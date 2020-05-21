//Node imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//CSS
import "./navBar.css";

function navBar() {
    return(
        <Row id="navBar" className="navBar">
            <Col className="colLeft">
                <div className="testDiv">Explore</div>
                <div className="testDiv">Plan</div>
                <div className="testDiv">Tips</div>
            </Col>
            <Col xs={6} className="navBarLogo">
                <div className="navBarLogoDiv">Hiking App</div>
            </Col>
            <Col>
                <div className="testDiv">Help</div>
                {/* <div className="testDiv">Login</div> */}
                <Button className="navBarBtn loginBtn">Login</Button>
                {/* <div className="testDiv">Sign Up</div> */}
                <Button className="navBarBtn signUpBtn">Sign Up</Button>
            </Col>      
        </Row>
    );
}

export default navBar;