import React, { Fragment, useState, useEffect } from "react";
import getProfileData from "../store/actions/getProfileData.js";
import { connect } from "react-redux";
import Panel from "./Panel.js";
import FriendsListContainer from "./FriendsListContainer.js";
import { getProfileState } from "../store/selects.js";
import Header from "./Header.js";
import MainSection from "./MainSection.js";

const LoggedInPage = ({ getProfileData }) => {
  const [profile, setRprofile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProfileData().then(response => {
      typeof response !== "string" ? setRprofile(response) : setError(response);
      setLoading(false);
    });
  }, []);

  const name = `${profile["first_name"]} ${profile["last_name"]}`;

  return (
    <Fragment>
      <Header />
      <MainSection>
        {error ? null : loading ? (
          <Panel>
            <h1 className="panel__title">LOADING</h1>
          </Panel>
        ) : (
          <Panel>
            <img src={profile["photo_50"]} className="ava" alt="" />
            <h1 className="panel__title">Hi {name}, glad to see you</h1>
            <FriendsListContainer />
          </Panel>
        )}
      </MainSection>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: getProfileState(state)
});

const mapDispatchToProps = {
  getProfileData
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInPage);
