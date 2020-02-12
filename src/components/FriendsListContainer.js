import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import FriendsList from "./FriendsList.js";
import Alert from "./Alert.js";
import getFriendsList from "../store/actions/getFriendsList.js";

const NoResult = () => <p className="friends__noresultSign">No results</p>;

const FriendsResults = ({ friends }) => (
  <Fragment>
    <p className="friends__resultsSign">You find {friends.length} friends</p>
    <FriendsList friends={friends} />
  </Fragment>
);

const FriendsListContainer = ({ getFriendsList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const findHandler = e => setSearchQuery(e.target.value);

  const searchFriends = () => {
    const query = searchQuery.toLowerCase();
    if (query.length) {
      const results = friends.filter(friend => {
        const name = friend["first_name"].toLowerCase();
        return name.includes(query);
      });

      setResults(results);
    } else {
      setResults([]);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    getFriendsList().then(response => {
      Array.isArray(response) ? setFriends(response) : setError(response);
      setLoading(false);
    });
  }, []);

  useEffect(searchFriends, [searchQuery]);

  return (
    <Fragment>
      {error ? (
        <Alert type='error'>Fetching failed</Alert>
      ) : loading ? (
        <Alert>Fetching friends...</Alert>
      ) : friends.length > 0 ? (
        <div className="friends">
          <p className="friends__title">
            Friends <strong>{friends.length}</strong>
          </p>
          <div className="friends__inner">
            <p className="friends__subtitle">Try to find somebody of them</p>
            <input
              className="friends__search field"
              id="search"
              type="text"
              value={searchQuery}
              onChange={findHandler}
            />
            {results.length > 0 ? (
              <FriendsResults friends={results} />
            ) : (
              searchQuery.length > 0 && <NoResult />
            )}
          </div>
        </div>
      ) : (
        <Alert>Oh you are so lonely...</Alert>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = {
  getFriendsList
};

export default connect(null, mapDispatchToProps)(FriendsListContainer);
