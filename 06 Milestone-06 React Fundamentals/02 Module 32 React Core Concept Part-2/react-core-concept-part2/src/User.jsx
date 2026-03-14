import React, { use } from "react";

const User = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  console.log(users);

  return (
    <div className="card">
      <h3>Users: {users.length}</h3>
    </div>
  );
};

export default User;
