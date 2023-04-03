import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>All posts are here..</h2>
            <dir>
                {
                    posts.map(post => <Post
                        post = {post}
                    ></Post>)
                }
            </dir>
        </div>
    );
};

export default Posts;