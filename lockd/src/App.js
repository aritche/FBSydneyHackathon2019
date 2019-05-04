import React, {Component} from 'react';
import './App.css';
import NavBar from './navigation/NavBar'
import Routes from './Routes';

function App(){
    return (
        <div className="App">
            <div class="main" style={{backgroundColor:'grey'}}>
                <NavBar/>
                <Routes/>
            </div>
        </div>
    );
}

export default App;
