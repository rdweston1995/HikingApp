//NPM imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class home extends React.Component {
    state = {
        date: new Date(),
        hikes: []
    }

    onSearch = () => {
        // console.log(process.env.REACT_APP_GOOGLE_API_KEY);

        // console.log(document.getElementById('hikeSearch').value);
        new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
            // console.log(data);
            new Hikes().basicHikingData(data.geometry.location.lat, data.geometry.location.lng).then((returnedHikes) => {
                // console.log(returnedHikes);
                this.setState({hikes: returnedHikes});
                // console.log(this.state.hikes);
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <Row className="homeRow">
                <Col>
                    <h1>Hiking App</h1>
                    <div>
                        <InputGroup className="mb-5">
                            <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch"/>
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={(e) => this.onSearch()}>Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Col>
                <Col>
                    <div>
                        {/* <h2>It is {this.state.date.toString()}</h2> */}
                        {this.state.hikes.map(hike => 
                            <div>
                                <p>{hike.name}</p>
                                <img src={hike.imgSmall} alt={hike.name}/>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default home;