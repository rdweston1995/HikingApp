//Node imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import DropdownBtn from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import loadImages from "../loadImages/loadImages";
import Hamburger from "../hamburger/hamburger";

//CSS
import "./navBar.css";
//xs={2}
function navBar(props) {
    return(
        <Row id="navBar" className="navBar">
            {/* <Col md={{span: 3}}className="colLeft">
                <div className="navBarTag tagExplore" onClick={() => props.history.push('/explore')}>Explore</div>
                <div className="navBarTag tagPlan" onClick={() => props.history.push('/plan')}>Plan</div>
                <div className="navBarTag tagTips" onClick={() => props.history.push('/tips')}>Tips</div>
            </Col>
            <Col md={{span:3, offset: 1}} className="navBarLogo" onClick={() => props.history.push('/')}>
                <img className="logo" src={loadImages['bearable']} />
                <h1 className="navBarLogoDiv" >Bearable</h1>
            </Col>
            <Col md={{span: 2, offset: 2}}>
                <a className="navBarTag tagHelp" href="https://github.com/rdweston1995/HikingApp" target="_blank" rel="noopener noreferrer">Help</a>
                <Button className="navBarBtn loginBtn" onClick={(e) => props.loginHandleShow()}>Login</Button>
                <Button className="navBarBtn signUpBtn" onClick={(e) => props.accountSignUpShow()}>Sign Up</Button>
            </Col>  */}
            <Col onClick={(e) => props.history.push('/')}>
                <img className="logo" src={loadImages['bearable']} alt="Logo"/>
                <h1 className="navBarTitle">Bearable</h1>
            </Col>
            {/* <Col>   
            <h1 className="navBarTitle">Bearable</h1>     

            </Col> */}
            <Col>
            {/* <Button className="navBarBtn loginBtn" onClick={(e) => props.loginHandleShow()}>Login</Button> */}
            <DropdownBtn id="dropdown-basic-button" className="testBtn" title={<Hamburger/>} styles={{float: 'right'}}>
                <Dropdown.Item className="navBarTag tagExplore" onClick={() => props.history.push('/explore')}>Explore</Dropdown.Item>
                <Dropdown.Item className="navBarTag tagPlan" onClick={() => props.history.push('/plan')}>Plan</Dropdown.Item>
                <Dropdown.Item className="navBarTag tagTips" onClick={() => props.history.push('/tips')}>Tips</Dropdown.Item>
                <Dropdown.Item className="navBarTag tagHelp" href="https://github.com/rdweston1995/HikingApp" target="_blank" rel="noopener noreferrer">Help</Dropdown.Item>
            </DropdownBtn>
            </Col>
        </Row>
    );
}

export default withRouter(navBar);