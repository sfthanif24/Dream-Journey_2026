import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    const postStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px'
    }
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
               <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;