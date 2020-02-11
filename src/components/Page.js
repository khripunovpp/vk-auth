import React, { useEffect } from "react";
import WelcomePage from "./WelcomePage.js";
import Header from "./Header.js";
import MainSection from "./MainSection.js";
import LoggedInPage from "./LoggedInPage.js";
import { connect } from "react-redux";
import { getAuthState } from "../store/selects.js";
import checkSession from "../store/actions/checkSession.js";

const Page = ({ checkSession, isLoggedIn }) => {
  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="App">
      <Header />
      <MainSection>
        {isLoggedIn ? <LoggedInPage /> : <WelcomePage />}
      </MainSection>
    </div>
  );
};

const mapStateToProps = state => {
  const { login } = getAuthState(state);
  return { isLoggedIn: login };
};

const mapDispatchToProps = {
  checkSession
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
