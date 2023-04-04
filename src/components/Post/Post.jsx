import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const naigate = useNavigate();

    const handelNavigation = () =>{
        naigate(`/post/${id}`)
    }


    const { id, title, body } = post;
    return (
        <div className='post'>
                <h5>{id}</h5>
                <h4>{title}</h4>
                <Link to={`/post/${id}`}><button>Show Details</button></Link>
                <button onClick={handelNavigation}>Details With Navigate</button>               
        </div>
    );
};

export default Post;