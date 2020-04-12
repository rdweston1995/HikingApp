import React from 'react';
// import logo from './logo.svg';
import './App.css';

//Pages
import Home from "./pages/home/home";

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Home />
            </div>
        )
    }
}

export default App;
