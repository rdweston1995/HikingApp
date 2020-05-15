//Node imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CSS
import './App.css';

//Pages
// import Home from "./pages/home/home";
import Home from "./pages/newHome/newHome";
import Map from "./pages/map/map";
import Account from "./pages/account/account";
import Tips from "./pages/tips/tips";
import Hike from "./pages/hike/hike";


class App extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/map" component={Map} />
                    <Route exact path="/account" component={Account} />
                    <Route exact path="/tips" component={Tips} />
                    <Route exact path="/hike" component={Hike} />
                    <Route component={Home} />
                </Switch>
            </Router>
            // <div className="App">
                // <Home />
            // </div>
        )
    }
}

export default App;
