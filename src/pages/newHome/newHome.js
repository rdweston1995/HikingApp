//Node imports
import React from "react";
import { useHistory } from "react-router-dom";

//Component
import NavBar from "./../../components/navBar/navBar";
import Search from "./../../components/search/search";
import LoginModal from "./../../components/loginModal/loginModal";
import SignUpModal from "./../../components/accountSignUpModal/accountSignUpModal";

//CSS
import "./newHome.css";

//API
import Hikes from "./../../api/hikes";
import Geocode from "./../../api/geocode";
// import loginModal from "../../components/loginModal/loginModal";

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
                lat = data.geometry.location.lat;
                lng = data.geometry.location.lng;
                new Hikes().basicHikingData(lat, lng).then((returnedHikes) => {
                    this.setState({hikes: returnedHikes});
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
                <NavBar 
                    loginHandleShow={this.loginHandleShow}
                    accountSignUpShow={this.accountSignUpShow}
                />
                <div>
                    {this.state.loginModalShow
                        ? <LoginModal
                            show={this.state.loginModalShow}
                            onClose={this.loginHandleClose}
                            onShow={this.loginHandleShow}
                            accountShow={this.accountSignUpShow}
                            onSubmit={this.loginOnSubmit}
                            />
                            : <></>}
                    {this.state.signUpShow ?
                        <SignUpModal
                            show={this.state.signUpShow}
                            onClose={this.accountSignUpClose}
                            onShow={this.accountSignUpShow}
                            onSubmit={this.accountOnSubmit}/>
                        : <></>}
                </div>
                <Search
                    onSearch={this.onSearch}
                />
            </>
        );
    };
}

export default Home;