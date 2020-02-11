import React, { useState, useEffect } from "react";
import getProfileData from "../store/actions/getProfileData.js";
import { connect } from "react-redux";
import Panel from "./Panel.js";
import FriendsListContainer from "./FriendsListContainer.js";
import { getProfileState } from "../store/selects.js";

const LoggedInPage = ({ getProfileData }) => {
  const [profile, setRprofile] = useState({});

  useEffect(() => {
    getProfileData().then(profileData=>setRprofile(profileData));
  }, []);

  const name = `${profile["first_name"]} ${profile["last_name"]}`;

  return (
    <Panel>
      <img src={profile["photo_50"]} className="ava" alt="" />
      <h1 className="panel__title">
        Hi {name}, glad to see
        you
      </h1>
      <FriendsListContainer/>
    </Panel>
  );
};

const mapStateToProps = state => ({
  user: getProfileState(state)
});

const mapDispatchToProps = {
  getProfileData
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInPage);
