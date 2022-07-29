import React from 'react';
import { Link } from 'react-router-dom';


const EducationList = ({ educationPosts, title }) => {
    if (!educationPosts.length) {
        return <h3>No Posts To Display</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {educationPosts && 
            educationPosts.map(educationPost => (
                <div key={educationPost._id} className="card mb-3">
                    <p className="card-header">
                        <Link
                        to={`/profile/${educationPost.username}`}
                        >
                        {educationPost.username} 
                        </Link>{' '}
                        Created on {educationPost.createdAt}
                    </p>
                    <div className="card-body">
                        <Link to={(`/education/${educationPost._id}`)}>
                        <p>{educationPost.educationText}</p>
                        </Link>
                    </div>
                </div>    
            ))}
        </div>
    );
};

export default EducationList;