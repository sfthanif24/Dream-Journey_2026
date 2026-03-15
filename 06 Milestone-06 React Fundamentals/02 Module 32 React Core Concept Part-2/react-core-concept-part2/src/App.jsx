import React, { Suspense } from "react";
import Counter from "./Counter";
import Batsman from "./Batsman";
import User from "./User";
import "./App.css";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json(),
);

const fetchFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const App = () => {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <div>
      <h3>React Core Concepts</h3>

      <Players></Players>
      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click Me
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert("click 4")}>Click me</button>
      <button onClick={() => handleAdd5(15)}>Clicked Add 5</button>
    </div>
  );
};

export default App;
