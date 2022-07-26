import React from 'react';
import { Link } from 'react-router-dom';

const InternList = ({ blogPosts, title }) => {
    if (!blogPosts.length) {
        return <h3>No Posts To Display</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {blogPosts && 
            blogPosts.map(blogPost => (
                <div key={blogPost._id} className="card mb-3">
                    <p className="card-header">
                        <Link to={`/profile/${blogPost.username}`}>
                            {blogPost.username}
                        </Link>{' '}
                        Created on {blogPost.createdAt}
                    </p>
                    <div className="card-body">
                        <Link to={`/blogPost/${blogPost._id}`}>
                            <p>{blogPost.textContent}</p>
                            <p className="mb-0">
                                Comments: {blogPost.commentCount} || Click to {' '}
                                {blogPost.commentCount ? 'read' : 'share'} comments!
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}; 

export default InternList;