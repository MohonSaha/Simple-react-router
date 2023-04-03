import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h2>Details about your post...</h2>
            <h5>{id}</h5>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;