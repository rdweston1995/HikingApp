//Node imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CSS
import './App.css';

//Pages
// import Home from "./pages/home/home";
import Home from "./pages/newHome/newHome";
// import Map from "./pages/map/map";
// import Account from "./pages/account/account";
import Tips from "./pages/tips/tips";
// import Hike from "./pages/hike/hike";
import Results from "./pages/results/results";
import Plan from "./pages/plan/plan";
import Explore from "./pages/explore/explore";

import Weather from "./api/weather";

//Test data
import testJSON from "./testJSON/testJSON"
class App extends React.Component {
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
        this.state = {
            hikes: testJSON,
            displayedHike: testJSON[0],
            displayedHikeBigImg: testJSON[0].imgMedium,
            displayWeather: {}
        }
    }

    testGetWeather = (location, latitude, longitude) => {
        Weather(location, latitude, longitude).then((data) => {
            this.setState({displayWeather: data});
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    onSearch = async () => {
        if(document.getElementById('hikeSearch').value !== ''){
            console.log(document.getElementById("hikeSearch").value);
        } 
    }

    onSearchResults = async () => {
        if(document.getElementById("resultsHikeSearch").value !== '') {
            console.log(document.getElementById("resultsHikeSearch").value);
        }
    }

    onKeyPress = e => {
        if(e.key === 'Enter') {
            this.onSearch();
            // this.state.history.push("/results");
        }
    }

    onKeyPressResults = e => {
        if(e.key === 'Enter') {
            this.onSearchResults();
            // this.state.history.push("/results");
        }
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/home">
                        <Home 
                            history={this.state.history}
                            onSearch={this.onSearch}
                            onKeyPress={this.onKeyPress}/>
                    </Route>
                    {/* <Route exact path="/map" component={Map} /> */}
                    {/* <Route exact path="/account" component={Account} /> */}
                    <Route exact path="/tips">
                        <Tips 
                            onSearch={this.onSearchResults}
                            onKeyPress={this.onKeyPressResults}
                            history={this.state.history}
                            />
                    </Route>
                    {/* <Route exact path="/hike" component={Hike} /> */}
                    <Route exact path="/results">
                        <Results
                            onSearch={this.onSearchResults}
                            onKeyPress={this.onKeyPressResults}
                            history={this.state.history}
                            hikes={this.state.hikes}
                            displayedHike={this.state.displayedHike}
                            displayWeather={this.state.displayWeather}
                        />
                    </Route>
                    <Route exact path="/explore">
                        <Explore
                            onSearch={this.onSearchResults} 
                            onKeyPress={this.onKeyPressResults}
                            history={this.state.history}
                        />
                    </Route>
                    <Route exact path="/plan">
                        <Plan
                            onSearch={this.onSearchResults}
                            onKeyPress={this.onKeyPressResults} 
                            history={this.state.history}
                        />
                    </Route>
                    <Route>
                        <Home
                            onSearch={this.onSearch}
                            onKeyPress={this.onKeyPress}
                            history={this.state.history}
                            testGetWeather={this.testGetWeather}
                        />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
