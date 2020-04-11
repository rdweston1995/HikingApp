import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from "./pages/home/home";

// function App() {
//   return (
//     <div className="App">
//       {/* <p>Hello World</p> */}
//       <home />
//     </div>
//   );
// }

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
