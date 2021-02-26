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
        super(...arguments);
        // console.log(this.props.testProp);
        console.log(this.props);
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
            // this.props.testGetWeather(this.state.hikes[0].location, this.state.hikes[0].latitude, this.state.hikes[0].longitude);
            Weather(this.state.hikes[0].location, this.state.hikes[0].latitude, this.state.hikes[0].longitude).then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
            // console.log(props.testProp)
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
            this.props.onSearch();
            this.props.history.push("/results");
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
    // hikeOnClick = async (hike) => {
        
    //     this.setState({displayedHike: hike});
    //     this.setState({displayedHikeBigImg: hike.imgMedium});

        // Weather(this.state.displayedHike.location, this.state.displayedHike.latitude, this.state.displayedHike.longitude).then((data) => {
        //     this.setState({displayWeather: data});
        // }).catch((err) => {
        //     console.log(err);
        // });
    //     console.log(this.state.displayedHike);
    // }

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
                </div>
                <Search onSearch={this.props.onSearch} onKeyPress={this.props.onKeyPress} history={this.state.history}/>
            </div>
        );
    };
}

export default withRouter(Home);