//Node imports
import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
// import {withRouter} from "react-router-dom";

//CSS
import "./resultsSearch.css";

function resultsSearch (props) {
    return(
        <div id="resultsSearch" className="searchResultsDiv">
            <InputGroup id="resultsSearchBar" onKeyPress={(e) => props.onKeyPress(e)}>
                <FormControl id="resultsHikeSearch" type="text" aria-describedby="basic-addon2" placeholder="Enter a city, park, or trail"/>
                <InputGroup.Append>
                    <Button id="resultsSearchButton" className="resultsSearchButton" varian="outline-secondary" onClick={(e) => props.onSearch()}>Explore</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
}

export default resultsSearch;