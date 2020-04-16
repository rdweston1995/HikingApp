//NPM imports
import React from "react";
import {Redirect} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

//Component
import Hike from "../../components/hikeDiv/hikeDiv";

//CSS
import "./home.css";

//Api
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class home extends React.Component {
    /**
     * Ascent
     * difficulty
     * high
     * length
     * location
     * low
     * name
     * stars
     * summary
     * url
     */
    state = {
        date: new Date(),
        hikes: [],
        redirect: false,
        redirectTo: ''
    }

    onSearch = () => {
        new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
            console.log(data);
            new Hikes().basicHikingData(data.geometry.location.lat, data.geometry.location.lng).then((returnedHikes) => {
                console.log(returnedHikes);
                this.setState({ hikes: returnedHikes });
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to="/test"/>
        }
    }

    setRedirect = (selectedHike) => {
        this.setState({
            redirect: true,
            redirectTo: selectedHike
        });
        if(this.state.redirect){
            console.log(this.state.redirectTo);
            this.renderRedirect();
        }
    }

    hikeOnClick = () => {
        console.log('testRedirect');
        return <Redirect to="/test"/>
    }

    advancedOnClick = () => {
        console.log(document.getElementById('advancedSearch').innerHTML);
        if(document.getElementById('advancedSearch').innerHTML === 'Advanced'){
            document.getElementById('advancedSearch').innerHTML = 'Less';
            console.log("test");
        } else {
            document.getElementById('advancedSearch').innerHTML = 'Advanced';
            console.log("test");
        }
    }

    render() {
        return (
            <div id="home" className="home">
                <Row id="homeSearchRow" className="homeSearchRow">
                    <h1 id='homeTitle' className="heading">Hiking App</h1>
                    <div id='homeSearch'>
                        <Col id="homeSearchCol" className="homeCol" md={{span : 6, offset: 3}}>
                            <InputGroup>
                                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" />
                                <InputGroup.Append>
                                    <Button id="searchButton" className="searchButton" variant="outline-secondary" onClick={(e) => this.onSearch()}>Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <p id="advancedSearch" className="homeAdvancedSearch" onClick={(e) => this.advancedOnClick()}>Advanced</p>
                        </Col>
                    </div>
                </Row>
                <Row className="hikeResults">
                    <Col className="hikeResultsCol">
                        <div id="hikeDiv">
                            {this.state.hikes.map(hike =>
                                <Hike 
                                    className="hikeResultsDiv"
                                    name={hike.name}
                                    summary={hike.summary}
                                    imgSmall={hike.imgSmall}
                                    high={hike.high}
                                    low={hike.low}
                                    ascent={hike.ascent}
                                    location={hike.location}
                                    length={hike.length}
                                    stars={hike.stars}
                                    url={hike.url}
                                    difficulty={hike.difficulty}
                                    onClick={(e) => this.hikeOnClick()}
                                    key={hike.name}
                                    />
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default home;