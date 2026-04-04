import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const [password, setPassword] = useState('secret');

  const handlePassword = (e) => {
    console.log(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handlePassword}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
