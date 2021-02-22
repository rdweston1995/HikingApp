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

//Test data
import testJSON from "./testJSON/testJSON"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hikes: testJSON,
            displayedHike: testJSON[0],
            displayedHikeBigImg: testJSON[0].imgMedium,
            displayBigImg: false
        }
    }

    hikeImgClose = () => {this.setState({displayBigImg: false})}
    hikeImgShow = () => {this.setState({displayBigImg: true})}

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/home">
                        <Home 
                            testProp={"test"}/>
                    </Route>
                    {/* <Route exact path="/map" component={Map} /> */}
                    {/* <Route exact path="/account" component={Account} /> */}
                    <Route exact path="/tips">
                        <Tips />
                    </Route>
                    {/* <Route exact path="/hike" component={Hike} /> */}
                    <Route exact path="/results">
                        <Results 
                            hikes={this.state.hikes}
                            displayedHike={this.state.displayedHike}
                            displayedHikeBigImg={this.state.displayedHikeBigImg}
                            displayBigImg={this.state.displayBigImg}
                        />
                    </Route>
                    <Route exact path="/explore">
                        <Explore />
                    </Route>
                    <Route exact path="/plan">
                        <Plan />
                    </Route>
                    <Route><Home/></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
