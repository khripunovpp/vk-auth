import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="header">
                        <img src={ logo } alt="logo" / >
                        <section className="header__user user">
                            <img src='' className="user__ava" alt="" />
                            <span className="user__name"></span>
                        </section>
                    </header> 
                    <main className="main">
                        <Switch>
                            <Route path="/" exact component={WelcomePage}></Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    };
};

export default App;