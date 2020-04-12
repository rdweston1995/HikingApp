//NPM imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

//CSS
import "./home.css";

//Api
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class home extends React.Component {
    state = {
        date: new Date(),
        hikes: []
    }

    onSearch = () => {
        new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
            new Hikes().basicHikingData(data.geometry.location.lat, data.geometry.location.lng).then((returnedHikes) => {
                this.setState({ hikes: returnedHikes });
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="home">
                <Row className="homeRow">
                    <h1 id='homeTitle' className="heading">Hiking App</h1>
                    <div id='search'>
                        <Col className="homeCol" md={{span : 6, offset: 3}}>
                            <InputGroup>
                                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={(e) => this.onSearch()}>Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </div>
                </Row>
                <Row className="hikeResults">
                    <Col className="hikeResultsCol">
                        <div id="hikeDiv">
                            {this.state.hikes.map(hike =>
                                <div>
                                    <p>{hike.name}</p>
                                    <img src={hike.imgSmall} alt={hike.name} />
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default home;