import React from "react";

function hikes(props) {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.summary}</p>
            <p>Max Height: {props.high}ft</p>
        </div>
    )
}

export default hikes;