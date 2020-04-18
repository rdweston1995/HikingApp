import React from "react";
import GoogleMapReact from "google-map-react";

class Map extends React.Component {
    render() {
        return (
            <div style={{height: '100vh', width: '100%'}}>
                {/* <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_GOOGLE_API_KEY}}
                    defaultCenter={{lat: 47.4163, lng: -122.174}}
                    defaultZoom={11}
                    >

                </GoogleMapReact> */}
                <p>Test Map Page</p>
            </div>
        )
    }
}

export default Map;