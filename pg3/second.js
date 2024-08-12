import React from 'react';
import Post from './first.js';

const Posts = () =>
{
    const BlogPosts = [
        {
            title : "Post 1",
            body : "This is the first post",
            imageUrl : "https://via.placeholder.com/150",
            author : "Author 1"
        },
        {
            title : "Post 2",
            body : "This is the second post",
            imageUrl : "https://via.placeholder.com/150",
            author : "Author 2"
        },
        {
            title : "Post 3",
            body : "This is the third post",
            imageUrl : "https://via.placeholder.com/150",
            author : "Author 3"
        }
    ]


return (
    <div className='posts-container'>
        {BlogPosts.map((post, index) =>
        (
            <Post key={index} index={index} post={post} />
        ))}
    </div>
);

};

export default Posts;