import React from "react";
import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h2>This is the Posts page</h2>
      <p>{posts.length} posts available</p>
      <div>
        {
            posts.map(post => <Post key={post.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default Posts;
