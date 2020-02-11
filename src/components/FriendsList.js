import React from "react";

const FriendsList = ({ friends }) => {
  return (
    <ol className="friends__list">
      {friends.map(friend => (
        <li key={friend.id} className="friends__item">
          {friend["first_name"]} {friend["last_name"]}
        </li>
      ))}
    </ol>
  );
};

export default FriendsList;
