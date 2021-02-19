//Node imports
import React from "react";
// import { useHistory } from "react-router-dom";
import {withRouter} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Component
import NavBar from "./../../components/navBar/navBar";
import Search from "./../../components/search/search";
import LoginModal from "./../../components/loginModal/loginModal";
import SignUpModal from "./../../components/accountSignUpModal/accountSignUpModal";
import ImageModal from "./../../components/imageModal/imageModal";
import Hike from "./../../components/hikeDiv/hikeDiv";
import ResultsSearch from "./../../components/resultsSearch/resultsSearch";
import HikeResults from "./../../components/hikeResults/hikeResults";
import HikeInfo from "./../../components/hikeInfo/hikeInfo";
import ResultsPage from "./../results/results";

//CSS
import "./newHome.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";
import Weather from "./../../api/weather";


//Test Data
import testJSON from "./../../testJSON/testJSON";

class Home extends React.Component {
    //For testing
    //hikes: testJSON
    //displayedHike: testJSON[0]
    //displayedHikeBigImg: testJSON[0].imgMedium
    //Deployment
    //{}
    //{}
    //''
    constructor(props) {
        super(props);
        // this.returnHome = this.returnHome.bind(this);
        this.state = {
            hikes: testJSON,
            displayedHike: testJSON[0],
            displayedHikeBigImg: testJSON[0].imgMedium,
            displayBigImg: false,
            displayWeather: {},
            searched: false,
            tipsDisplay: false

        }
    }

   

    //Function to call the Hikes and Geocode API
    onSearch = async () => {
        if (document.getElementById('hikeSearch').value !== '') {
            //For Testing
            this.setState({searched: true});
            console.log(this.state.hikes);
            // history.push('/results');

            //DO NOT DELETE
            // let lat = '', lng = '', maxDistance = '30', maxResults = '10', minLength = '0', minStars = '0';

            // Geocode(document.getElementById('hikeSearch').value).then((data) => {
            //     console.log(`maxDistance ${maxDistance} | maxResults ${maxResults} | minLength ${minLength} | minStars ${minStars}`);
            //     lat = data.geometry.location.lat;
            //     lng = data.geometry.location.lng;
            //     Hikes(lat, lng).then((returnedHikes) => {
            //         this.setState({hikes: returnedHikes});
            //         this.setState({displayedHike: returnedHikes[0]});
            //         this.setState({displayedHikeBigImg: returnedHikes[0].imgMedium});
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

    handleKeypress = e => {
        if(e.key === 'Enter') {
            // console.log(e);
            this.onSearch();
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
        this.setState({displayedHikeBigImg: hike.imgMedium});
        // this.setState({displayWeather: Weather(this.state.displayedHike)});
        Weather(this.state.displayedHike.location, this.state.displayedHike.latitude, this.state.displayedHike.longitude);
        console.log(this.state.displayedHike);
    }

    hikeImgClose = () => {this.setState({displayBigImg: false})}
    hikeImgShow = () => {this.setState({displayBigImg: true})}

    returnHome = () => {
        console.log("returnHome");
        this.setState({searched: false})}

    //Render function
    /**
     * Change routing for results page to acutally not just be the home page
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
                        returnHome={this.returnHome}
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
                    {this.state.displayBigImg
                        ? <ImageModal
                            show={this.state.displayBigImg}
                            onClose={this.hikeImgClose}
                            onShow={this.hikeImgShow}
                            image={this.state.displayedHikeBigImg} /> : <></>}
                </div>
                
                {this.state.searched ?
                    <div id="hikeDiv">
                        <Row className="hikeResultsDiv">
                            <Col xs lg="3" className="hikeNameCol">
                                {this.state.hikes.map(hike => 
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
                                <HikeInfo hike={this.state.displayedHike} imgClick={this.hikeImgShow} />
                            </Col> 
                        </Row>
                    </div>
                    // <ResultsPage 
                    //     hikes={this.state.hikes}/>
                     : <Search onSearch={this.onSearch} onKeyPress={this.handleKeypress}/>}
                     {/* <Search onSearch={this.onSearch} onKeyPress={this.handleKeypress} history={this.state.history}/> */}
            </div>
        );
    };
}

export default withRouter(Home);