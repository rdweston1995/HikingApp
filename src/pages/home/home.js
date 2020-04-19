//Node imports
import React from "react";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

//Component
import Hike from "../../components/hikeDiv/hikeDiv";
import AdvancedSearch from "../../components/advancedSearch/advancedSearch";
import LoginModal from "../../components/loginModal/loginModal";

//CSS
import "./home.css";

//Api
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class home extends React.Component {
    state = {
        date: new Date(),
        hikes: [],
        redirect: false,
        advancedSearch: false,
        redirectTo: '',
        loginModalShow: false
    }

    onSearch = () => {
        //Defaults
        let lat = "", lng = "", maxDistance = "30", maxResults = "10", minLength = "0", minStars = "0";

        if(this.state.advancedSearch) {
            maxDistance = document.getElementById('hikeDistance').value;
            maxResults = document.getElementById('hikeMaxResults').value;
            minLength = document.getElementById('hikeMinLength').value;
            minStars = document.getElementById('hikeStars').value;    
        }

        new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
            // console.log(data);
            lat = data.geometry.location.lat;
            lng = data.geometry.location.lng;
            // console.log("lat: " + lat + "\t|\tlng: " + lng + "\t|\tmaxDistance: " + maxDistance + "\t|\tmaxResults: " + maxResults + "\t|\tminLength: " + minLength + "\t|\tminStars: " + minStars);
            new Hikes().basicHikingData(lat, lng, maxDistance, maxResults, minLength, minStars).then((returnedHikes) => {
                // console.log(returnedHikes);
                this.setState({ hikes: returnedHikes });
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/test" />
        }
    }

    setRedirect = (selectedHike) => {
        this.setState({
            redirect: true,
            redirectTo: selectedHike
        });
        if (this.state.redirect) {
            console.log(this.state.redirectTo);
            this.renderRedirect();
        }
    }

    hikeOnClick = () => {
        console.log('testRedirect');
        return <Redirect to="/test" />
    }

    advancedOnClick = () => {
        if (document.getElementById('advancedSearch').innerHTML === 'Advanced') {
            document.getElementById('advancedSearch').innerHTML = 'Less';
            this.setState({ advancedSearch: true });
        } else {
            document.getElementById('advancedSearch').innerHTML = 'Advanced';
            this.setState({ advancedSearch: false });
        }
    }

    loginHandleClose = () => {this.setState({loginModalShow: false})}
    loginHandleShow = () => {this.setState({loginModalShow: true});}
    loginOnSubmit = () => {
        console.log(document.getElementById("loginEmail").value);
        console.log(document.getElementById("loginPassword").value);
        this.loginHandleClose();
    }

    render() {
        return (
            <div id="home" className="home">
                <Row id="homeSearchRow" className="homeSearchRow">
                    <h1 id='homeTitle' className="heading">Hiking App</h1>
                    <div id='homeSearch'>
                        <Col id="homeSearchCol" className="homeCol" md={{ span: 6, offset: 3 }}>
                            <InputGroup>
                                <FormControl type="text" aria-describedby="basic-addon2" id="hikeSearch" className="hikeSearch"/>
                                <InputGroup.Append>
                                    <Button id="searchButton" className="searchButton" variant="outline-secondary" onClick={(e) => this.onSearch()}>Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <p id="advancedSearch" className="homeAdvancedSearch" onClick={(e) => this.advancedOnClick()}>Advanced</p>
                            <div>
                                {this.state.advancedSearch
                                    ? <AdvancedSearch />
                                    : <></>
                                }
                            </div>
                        </Col>
                        <Col>
                            <button onClick={(e) => this.loginHandleShow()}>Login</button>
                            <div>
                                {this.state.loginModalShow
                                    ? <LoginModal 
                                        show={this.state.loginModalShow}
                                        onClose={this.loginHandleClose}
                                        onShow={this.loginHandleShow}
                                        onSubmit={this.loginOnSubmit}/>
                                    : <></>}
                            </div>
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