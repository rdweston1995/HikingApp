//NPM imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"

//CSS
import "./advancedSearch.css";

function advancedSearch() {
    return (
        <div>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeDistance"/>
            </InputGroup>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeMaxResults" />
            </InputGroup>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeMinLength" />
            </InputGroup>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeStars" />
            </InputGroup>
        </div>
    )
}

export default advancedSearch;

