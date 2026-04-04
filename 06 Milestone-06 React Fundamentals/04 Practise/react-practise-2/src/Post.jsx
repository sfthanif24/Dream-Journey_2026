import React from 'react';

const Post = ({post}) => {
    const postStyle = {
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
    };

    return (
        <div style={postStyle}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;