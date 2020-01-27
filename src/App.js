import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <header className = "header" >
                    <img src = { logo } alt = "logo" / >
                </header> 
            </div>
        )
    };
}

export default App;