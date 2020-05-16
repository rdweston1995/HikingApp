//Node imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

//CSS
import "./search.css";

function search () {
    return (
        <div id="search" className="searchDiv">
            <InputGroup id="hikeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" placeholder="Enter a city, park, or trail" className="hikeSearch"/>
                <InputGroup.Append>
                    <Button id="searchButton" className="searchButton" variant="outline-secondary" >Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default search;