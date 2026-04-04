import React from "react";
import { use } from "react";

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  const userStyle = {
    border: "2px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={userStyle}>
      <h3>Users: {users.length}</h3>
    </div>
  );
};

export default Users;
