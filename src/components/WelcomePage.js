import React, { Fragment } from "react";
import login from "../store/actions/login.js";
import { connect } from "react-redux";
import Panel from "./Panel.js";
import Button from "./Button.js";
import Header from "./Header.js";
import MainSection from "./MainSection.js";

const WelcomePage = ({ login }) => (
  <Fragment>
    <Header />
    <MainSection>
      <Panel>
        <h1 className="panel__title">Hi there, signin to continue</h1>
        <Button onClick={login} sign="Login" />
      </Panel>
    </MainSection>
  </Fragment>
);

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(WelcomePage);
