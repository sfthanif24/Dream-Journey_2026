import React from "react";
import { use } from "react";
import Friend from "./Friend";

const Friends = ({ friendsPromise }) => {
  const friends = use(friendsPromise);

  const friendStyle = {
    border: "2px solid blue",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={friendStyle}>
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
      }
    </div>
  );
};

export default Friends;
