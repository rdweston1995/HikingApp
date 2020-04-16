import React from "react";

//CSS
import "./hikeDiv.css";

function hikes(props) {
    return(
        <div className={props.className} onClick={props.onClick}>
            <h2 className="hikeName">{props.name}</h2>
            <h3 className="hikeLocation">{props.location}</h3>
            <img className="hikeImage" src={props.imgSmall} alt={props.name}/>
            <p className="hikeSummary">{props.summary}</p>
            <p className="hikeAlt">Heighest Point: {props.high}ft<br/>Lowest Point: {props.low}ft<br/>Ascent: {props.ascent}ft<br/>Length: {props.length} miles</p>
            <p className="hikeRating">Rating: {props.stars} / 5</p>

        </div>
    )
}

export default hikes;