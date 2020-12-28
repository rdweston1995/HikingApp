//Node imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

//CSS
import "./resultsSearch.css";

function resultsSearch (props) {
    return(
    <div id="resultsSearch" className="searchResultsDiv">
        <InputGroup id="resultsSearchBar">
            <FormControl id="resultsHikeSearch" type="text" aria-describedby="basic-addon2" placeholder="Search for another hike"/>
            <InputGroup.Append>
                <Button id="resultsSearchButton" className="resultsSearchButton" varian="outline-secondary" onClick={(e) => props.onSearch()}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
    </div>
    );
}

export default resultsSearch;