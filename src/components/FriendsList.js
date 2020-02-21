import React from "react";

const FriendsList = ({ children, friends }) => {
  return children(friends);
};

export default FriendsList;
