//NPM imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"

//CSS
import "./advancedSearch.css";

function advancedSearch() {
    return (
        <div>
            <InputGroup>
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" />
            </InputGroup>
            <InputGroup>
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" />
            </InputGroup>
            <InputGroup>
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" />
            </InputGroup>
            <InputGroup>
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" />
            </InputGroup>
        </div>
    )
}

export default advancedSearch;

