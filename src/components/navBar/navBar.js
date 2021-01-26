//Node imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";

//CSS
import "./navBar.css";

function navBar(props) {
    return(
        <Row id="navBar" className="navBar">
            <Col className="colLeft">
                <div className="navBarTag tagExplore" onClick={() => props.history.push('/explore')}>Explore</div>
                <div className="navBarTag tagPlan" onClick={() => props.history.push('/plan')}>Plan</div>
                <div className="navBarTag tagTips" onClick={() => props.history.push('/tips')}>Tips</div>
            </Col>
            <Col xs={6} className="navBarLogo">
                <div className="navBarLogoDiv">Hiking App</div>
            </Col>
            <Col>
                <div className="navBarTag tagHelp">Help</div>
                <Button className="navBarBtn loginBtn" onClick={(e) => props.loginHandleShow()}>Login</Button>
                <Button className="navBarBtn signUpBtn" onClick={(e) => props.accountSignUpShow()}>Sign Up</Button>
            </Col>      
        </Row>
    );
}

export default withRouter(navBar);