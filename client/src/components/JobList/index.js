import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobPosts, title }) => {
    if (!jobPosts.length) {
        return <h3>No Posts To Display</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {jobPosts && 
            jobPosts.map(jobPost => (
                <div key={jobPost._id} className="card mb-3">
                    <p className="card-header">
                        <Link to={`/profile/${jobPost.username}`} >
                            {jobPost.username}
                        </Link> {' '}
                        Created on {jobPost.createdAt}
                    </p>
                    <div className="card-body">
                        <Link to={`/jobPost/${jobPost._id}`}>
                            <p>{jobPost.jobText}</p>
                            <p className="mb-0">
                                Comments: {jobPost.commentCount} || Click to{' '} 
                                {jobPost.commentCount ? 'read' : 'share'} comments!
                            </p>
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    );
}; 

export default JobList;