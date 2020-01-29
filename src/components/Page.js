import React from 'react';
import {BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import Header from "./Header.js";

const Page = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <div className="container">
                    <WelcomePage />
                </div>
            </main>
        </div>
    )
};

export default Page;