import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;

  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={userStyle}>
      <h2>User Details here</h2>
      <p>Name: {name}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
