//Node Imports
import React from "react";

//CSS
import "./hikeResults.css";

function hikeResults(props) {
    return(
        /**
         * Add a search bar at the top of either this div or at the top of the parent div
         * Change the color of the mouseover for each child div
         * Change visual of scroll bar
         * Change font
         * Find a better visual for the right side box-shadow or just make it bigger vertically
         * 
         */
        <div className="hikeResultsNameDiv" onClick={props.onClick}>
            <p className="hikeResultsName">{props.name}</p>
            <p className="hikeResultsLocation">{props.location}</p>
        </div>
    );
}

export default hikeResults;