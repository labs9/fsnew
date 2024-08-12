import React from 'react';
import './first.css';
import Posts from './second';

const Post = ({post : {title, body, imageUrl, author}, index}) =>
{
    return(
        <div className="post-conatiner">
            <h1 className='heading'>{title}</h1>
            <img src={imageUrl} className='image' alt="post" />
            <p>{body}</p>
            <h3>Written By : {author}</h3>
        </div>
    );
};

export default Post;