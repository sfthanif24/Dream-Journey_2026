import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
