import React from "react";

//CSS
import "./hikeDiv.css";

function hikes(props) {
    return(
        <div className={props.className}>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <p>{props.summary}</p>
            <img src={props.imgSmall} alt={props.name}/>
            <p>Heighest Point: {props.high}ft<br/>Lowest Point: {props.low}ft<br/>Ascent: {props.ascent}ft<br/>Length: {props.length} miles</p>
            <p>Rating: {props.stars} / 5</p>

        </div>
    )
}

export default hikes;