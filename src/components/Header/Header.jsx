import React from 'react';
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';

const Header = () => {
    return (
        <nav>
            <Activelink to="/">Home</Activelink>
            <Activelink to="/posts">Posts</Activelink>
            <Activelink to="/about">About</Activelink>
            <Activelink to="/contract">Contract</Activelink>
        </nav>
    );
};

export default Header;