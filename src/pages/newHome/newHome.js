//Node imports
import React from "react";
// import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Component
import NavBar from "./../../components/navBar/navBar";
import Search from "./../../components/search/search";
import LoginModal from "./../../components/loginModal/loginModal";
import SignUpModal from "./../../components/accountSignUpModal/accountSignUpModal";
import Hike from "./../../components/hikeDiv/hikeDiv";
import ResultsSearch from "./../../components/resultsSearch/resultsSearch";
import HikeResults from "./../../components/hikeResults/hikeResults";
import HikeInfo from "./../../components/hikeInfo/hikeInfo";

//CSS
import "./newHome.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

//Test Data
import testJSON from "./../../testJSON/testJSON";

class Home extends React.Component {
    //For testing
    //displayedHike: testJSON[0]
    constructor(props) {
        super(props);
        this.state = {
            hikes: [],
            displayedHike: testJSON[0],
            searched: false,
            tipsDisplay: false,
            history: ''
        }
    }

    //Function to call the Hikes and Geocode API
    onSearch = async () => {
        if (document.getElementById('hikeSearch').value !== '') {
            //For Testing
            this.setState({searched: true});

            //DO NOT DELETE
            // let lat = '', lng = '', maxDistance = '30', maxResults = '10', minLength = '0', minStars = '0';

            // new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
            //     console.log(`maxDistance ${maxDistance} | maxResults ${maxResults} | minLength ${minLength} | minStars ${minStars}`);
            //     lat = data.geometry.location.lat;
            //     lng = data.geometry.location.lng;
            //     new Hikes().basicHikingData(lat, lng).then((returnedHikes) => {
            //         this.setState({hikes: returnedHikes});
            //         this.setState({searched: true});
            //         console.log(this.state.hikes);
            //     }).catch((err) => {
            //         console.log(err);
            //     });
            // }).catch((err) => {
            //     console.log(err);
            // });
            
        }
    }
 
    //State manipulation functions for showing modals
    loginHandleClose = () => {this.setState({loginModalShow: false})}
    loginHandleShow = () => {this.setState({loginModalShow: true})}
    loginOnSubmit = () => {
        console.log(document.getElementById("loginEmail").value);
        console.log(document.getElementById("loginPassword").value);
        this.loginHandleClose();
    }

    accountSignUpClose = () => {this.setState({signUpShow: false})}
    accountSignUpShow = () => {
        this.loginHandleClose();
        this.setState({signUpShow: true});
    }
    accountOnSubmit = () => {this.accountSignUpClose()}

    /** State manipulation to change the displayed hike on results page */
    hikeOnClick = (hike) => {
        this.setState({displayedHike: hike});
        console.log(this.state.displayedHike);
    }

    //Render function
    /**
     * Change routing for results page to acutally not just be the home page
     * Change the css for the seach button
     * Change the background to change according to season or month
     * Go take more pictures for backgrounds
     * Start learning postgreSQL db and find a cloud provider
     * Build user creation and profiles
     * Add options to specify? search
     */
    render() {
        return (
            <div className="newHome">
                <div>
                    <NavBar 
                        loginHandleShow={this.loginHandleShow}
                        accountSignUpShow={this.accountSignUpShow}
                        history={this.state.history}
                        tipsOpen={this.tipsOnClick}/>
                    {this.state.loginModalShow
                        ? <LoginModal
                            show={this.state.loginModalShow}
                            onClose={this.loginHandleClose}
                            onShow={this.loginHandleShow}
                            accountShow={this.accountSignUpShow}
                            onSubmit={this.loginOnSubmit} /> : <></>}
                    {this.state.signUpShow
                        ? <SignUpModal
                            show={this.state.signUpShow}
                            onClose={this.accountSignUpClose}
                            onShow={this.accountSignUpShow}
                            onSubmit={this.accountOnSubmit}/> : <></>}
                </div>
                
                {this.state.searched ?
                    <div id="hikeDiv">
                        <Row className="hikeResultsDiv">
                            <Col xs lg="3" className="hikeNameCol">

                            {testJSON.map(hike => 
                                <HikeResults 
                                    className="hikeNameResults"
                                    name={hike.name}
                                    location={hike.location}
                                    onClick={() => this.hikeOnClick(hike)}
                                    key={hike.id}
                                />    
                            )}
                            </Col>
                            <Col xs lg="9" className="hikeInfoCol">
                                <HikeInfo hike={this.state.displayedHike} />
                            </Col> 
                        </Row>
                    </div>
                     : <Search onSearch={this.onSearch}/>}
            </div>
        );
    };
}

export default Home;