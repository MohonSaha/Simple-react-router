import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate()

    const handelGoBack = () =>{
        navigate(-1);
    }




    return (
        <div>
            <h2>Details about your post...</h2>
            <h5>{id}</h5>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;