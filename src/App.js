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
// import Results from "./pages/results/results";
import Plan from "./pages/plan/plan";
import Explore from "./pages/explore/explore";


class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    {/* <Route exact path="/map" component={Map} /> */}
                    {/* <Route exact path="/account" component={Account} /> */}
                    <Route exact path="/tips">
                        <Tips />
                    </Route>
                    {/* <Route exact path="/hike" component={Hike} /> */}
                    {/* <Route exact path="/results" component={Results} /> */}
                    <Route exact path="/explore">
                        <Explore />
                    </Route>
                    <Route exact path="/plan">
                        <Plan />
                    </Route>
                    <Route component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default App;
