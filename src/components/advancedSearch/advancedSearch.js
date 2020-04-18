//Node imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl"

//CSS
import "./advancedSearch.css";

function advancedSearch() {
    return (
        <div>
            <p className="advancedSearchLabel">Search Radius</p>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeDistance"/>
            </InputGroup>
            <p className="advancedSearchLabel">Total Results</p>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeMaxResults" />
            </InputGroup>
            <p className="advancedSearchLabel">Hike Length</p>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeMinLength" />
            </InputGroup>
            <p className="advancedSearchLabel">Rating</p>
            <InputGroup className="homeSearch">
                <FormControl type="text" aria-describedby="basic-addon2" id="hikeStars" />
            </InputGroup>
        </div>
    )
}

export default advancedSearch;

