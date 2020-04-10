import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";

class App extends Component {
    render() {
        return(
            <Router>
                <Home />
            </Router>
        );
    }
}

export default App;