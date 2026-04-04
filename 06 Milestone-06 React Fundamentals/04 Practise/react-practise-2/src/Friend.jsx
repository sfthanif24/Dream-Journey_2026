import React from 'react';

const Friend = ({friend}) => {
    const {name, email} = friend;
    const friendStyle = {
        border: "1px solid green",
        margin: "5px",
        padding: "5px",
        borderRadius: "5px",
        textAlign: 'center'
    };

    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;