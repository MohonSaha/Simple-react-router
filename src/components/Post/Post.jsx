import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h5>{id}</h5>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Details</Link>
            <button>Show Details</button>
        </div>
    );
};

export default Post;