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

//Component
import ResultsSearch from "./../../components/resultsSearch/resultsSearch";

import "./navBarAlt.css";

function navBarAlt(props) {
    return(
        <Row id="navBar" className="navBar">
            <Col xs log="4">
                <img className="logo" src={loadImages['bearable']} alt="Logo" onClick={() => props.history.push('/')}/>
                <h1 className="navBarTitle" onClick={() => props.history.push('/')}>Bearable</h1>
            </Col>
            <Col>
                <ResultsSearch 
                    onSearch={props.onSearch}
                    onKeyPress={props.onKeyPress}
                    keyPressRoute={props.keyPressRoute}
                    history={props.history}/>
            </Col>
            <Col>
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

export default withRouter(navBarAlt);