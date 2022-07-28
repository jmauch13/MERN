import React from 'react';
import { Link } from 'react-router-dom';

const InternList = ({ internPosts, title }) => {
    if (!internPosts.length) {
        return <h3>No Posts To Display</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {internPosts && 
            internPosts.map(internPost => (
                <div key={internPost._id} className="card mb-3">
                    <p className="card-header">
                        <Link to={`/profile/${internPost.username}`}>
                            {internPost.username}
                        </Link>{' '}
                        Created on {internPost.createdAt}
                    </p>
                    <div className="card-body">
                        <Link to={`/blogPost/${internPost._id}`}>
                            <p>{internPost.internText}</p>
                            <p className="mb-0">
                                Comments: {internPost.commentCount} || Click to {' '}
                                {internPost.commentCount ? 'read' : 'share'} comments!
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}; 

export default InternList;