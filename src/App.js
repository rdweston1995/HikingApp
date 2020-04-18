//npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CSS
import './App.css';

//Pages
import Home from "./pages/home/home";
import Map from "./pages/map/map";

class App extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/map" component={Map} />
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
