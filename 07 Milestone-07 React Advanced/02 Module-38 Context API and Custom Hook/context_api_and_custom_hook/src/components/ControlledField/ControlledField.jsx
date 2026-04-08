import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    if (password.length < 6) {
      setError("Password must be 6 characters");
    } else {
      setError("");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("secret");
  const [error, setError] = useState("");

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    // if (password.length < 6) {
    //   setError("Password must be 6 characters");
    // }else{
    //     setError("");
    // }
  };
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
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
