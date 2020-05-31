//Node imports
import React from "react";
// import { useHistory } from "react-router-dom";

//Component
import NavBar from "./../../components/navBar/navBar";
import Search from "./../../components/search/search";
import LoginModal from "./../../components/loginModal/loginModal";
import SignUpModal from "./../../components/accountSignUpModal/accountSignUpModal";
import Hike from "./../../components/hikeDiv/hikeDiv";
import ResultsSearch from "./../../components/resultsSearch/resultsSearch";

//CSS
import "./newHome.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hikes: [],
            searched: false
        }
    }
    onSearch = async () => {
        if (document.getElementById('hikeSearch').value !== '') {
            let lat = '', lng = '', maxDistance = '30', maxResults = '10', minLength = '0', minStars = '0';

            new Geocode().getLatLng(document.getElementById('hikeSearch').value).then((data) => {
                console.log(`maxDistance ${maxDistance} | maxResults ${maxResults} | minLength ${minLength} | minStars ${minStars}`);
                lat = data.geometry.location.lat;
                lng = data.geometry.location.lng;
                new Hikes().basicHikingData(lat, lng).then((returnedHikes) => {
                    this.setState({hikes: returnedHikes});
                    this.setState({searched: true});
                    console.log(this.state.hikes);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
    }

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

    render() {
        return (
            <>
                <div>
                    <NavBar 
                        loginHandleShow={this.loginHandleShow}
                        accountSignUpShow={this.accountSignUpShow}/>
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
                        <ResultsSearch onSearch={this.onSearch} />
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
                                key={hike.name} />
                        )}
                    </div>
                     : <Search onSearch={this.onSearch}/>}
                
            </>
        );
    };
}

export default Home;