//Node imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//CSS
import "./navBar.css";

function navBar(props) {
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
                <Button className="navBarBtn loginBtn" onClick={(e) => props.loginHandleShow()}>Login</Button>
                <Button className="navBarBtn signUpBtn" onClick={(e) => props.accountSignUpShow()}>Sign Up</Button>
            </Col>      
        </Row>
    );
}

export default navBar;