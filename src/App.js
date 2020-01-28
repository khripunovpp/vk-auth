import React, { Component } from 'react';
import {BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js"
import AuthController from "./components/AuthController.js"
import logo from "./logo.jpg"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="header">
                        <div className="container">
                            <div className="header__inner">
                                <img src={logo} alt="" className="header__logo logo" />
                                <section className="header__user user">
                                    <img src='' className="user__ava" alt="" />
                                    <span className="user__name"></span>
                                </section>
                            </div>
                        </div>
                    </header> 
                    <main className="main">
                        <div className="container">
                            <Switch>
                                <Route path="/" exact component={WelcomePage}></Route>
                                <Route path="/auth" exact component={AuthController}></Route>
                            </Switch>
                        </div>
                    </main>
                </div>
            </Router>
        )
    };
};

export default App;