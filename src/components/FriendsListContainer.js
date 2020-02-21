import React, { Fragment, useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import FriendsList from "./FriendsList.js";
import Alert from "./Alert.js";
import getFriendsList from "../store/actions/getFriendsList.js";

const NoResult = () => <p className="friends__noresultSign">No results</p>;

const FriendsListContainer = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const findHandler = e => setSearchQuery(e.target.value);

  const searchFriends = () => {
    const query = searchQuery.toLowerCase();
    if (query.length) {
      setResults(
        friends.filter(friend => {
          const name = friend["first_name"].toLowerCase();
          return name.includes(query);
        })
      );
    } else {
      setResults([]);
      setSearchQuery("");
    }
  };

  const resultsTpl = useMemo(() => {
    console.log(1)
    return results.length > 0 ? (
      <FriendsList wrapper={<ul className="friends__list" />} friends={results}>
        {friends => {
          return (
            <Fragment>
              <p className="friends__resultsSign">
                You find {friends.length} friends
              </p>
              <ol className="friends__list">
                {friends.map(friend => (
                  <li key={friend.id} className="friends__item">
                    {friend["first_name"]} {friend["last_name"]}
                  </li>
                ))}
              </ol>
            </Fragment>
          );
        }}
      </FriendsList>
    ) : (
      searchQuery.length > 0 && <NoResult />
    );
  }, [results]);

  useEffect(() => {
    dispatch(getFriendsList()).then(response => {
      Array.isArray(response) ? setFriends(response) : setError(response);
      setLoading(false);
    });
  }, []);

  useEffect(searchFriends, [searchQuery]);

  return (
    <Fragment>
      {error ? (
        <Alert type="error">Fetching failed</Alert>
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
            {resultsTpl}
          </div>
        </div>
      ) : (
        <Alert>Oh you are so lonely...</Alert>
      )}
    </Fragment>
  );
};

export default FriendsListContainer;
