import React, { Component } from 'react';
import {BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js"
import AuthController from "./components/AuthController.js"
import Logout from "./components/Logout.js"
import logo from "./logo.jpg";
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="header">
                        <div className="container">
                            <div className="header__inner">
                                <img src={logo} alt="" className="header__logo logo" />
                                {this.props.state.auth.login && <Logout />}
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

const mapStateToProps= state => ({
    state
})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(App)