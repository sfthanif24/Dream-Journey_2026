import React from "react";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const App = () => {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick() {
    alert("Button clicked!");
  }

  function handleClick3() {
    alert("Button clicked 3");
  }

  const handleClick5 = (num) => {
    const number = num + 5;
    alert(`The number is ${number}`);
  };
  return (
    <div>
      <Players></Players>
      <Suspense fallback={<p>Posts are coming...</p>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick2() {
          alert("Button clicked 2");
        }}
      >
        Click me 2
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button
        onClick={() => {
          alert("Button clicked 4");
        }}
      >
        Click me 4
      </button>

      <button onClick={() => handleClick5(5)}>Click me 5</button>
    </div>
  );
};

export default App;
