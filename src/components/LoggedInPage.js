import React, { Fragment, useState, useEffect } from "react";
import getProfileData from "../store/actions/getProfileData.js";
import { useDispatch } from "react-redux";
import Panel from "./Panel.js";
import FriendsListContainer from "./FriendsListContainer.js";
import Header from "./Header.js";
import MainSection from "./MainSection.js";

import Logout from "./Logout.js";

const LoggedInPage = () => {
  const dispatch = useDispatch();

  const [profile, setRprofile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getProfileData()).then(response => {
      typeof response !== "string" ? setRprofile(response) : setError(response);
      setLoading(false);
    });
  }, []);

  const name = `${profile["first_name"]} ${profile["last_name"]}`;

  return (
    <Fragment>
      <Header right={<Logout />} />
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

export default LoggedInPage;
