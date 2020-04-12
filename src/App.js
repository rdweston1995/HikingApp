//npm
import React from 'react';

//CSS
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
