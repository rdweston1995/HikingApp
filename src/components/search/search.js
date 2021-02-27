//Node imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import {withRouter} from "react-router-dom";

//CSS
import "./search.css";

function Search (props) {
    return (
        <div id="search" className="searchDiv">
            <InputGroup id="hikeSearchBar" onKeyPress={(e) => {props.onKeyPress(e); props.keyPressRoute(e)}}>
                <FormControl id="hikeSearch" type="text" aria-describedby="basic-addon2" placeholder="Enter a city, park, or trail" className="hikeSearch"/>
                <InputGroup.Append>
                    <Button id="searchButton" className="searchButton" variant="outline-secondary" onClick={(e) => {props.onSearch(); props.history.push('/results')}}>Explore</Button>
                    {/* <Button id="searchButton" className="searchButton" variant="outline-secondary">Search</Button> */}
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default withRouter(Search);