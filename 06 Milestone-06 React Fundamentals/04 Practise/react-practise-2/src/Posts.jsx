import React from "react";
import { use } from "react";
import Post from "./Post";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  const postsStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={postsStyle}>
      <h2>All Posts are here {posts.length}</h2>
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  );
};

export default Posts;
