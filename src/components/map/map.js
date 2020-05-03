//Node imports
import React from "react";
import {GoogleMap, Marker} from "react-google-maps";

function map(props) {
    return (
        <GoogleMap dafaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
            {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/> }
        </GoogleMap>
    );
}

export default map;