import React from 'react';
import JobList from '../../components/JobList';
import JobForm from '../../components/JobForm';


import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_JOBPOSTS } from '../../utils/queries';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';

export default function JobTalk() {
    const { loading, data } = useQuery(QUERY_JOBPOSTS);
    
    const jobPosts = data?.jobPosts || []; 

    const loggedIn = Auth.loggedIn();
    
    
    return (
    <body className='blog-pages'>
    <div className='wrapper'>
        <div className='jobs'>
            <h1>Job Resources &nbsp;<img src={logo} alt='rocket' width='75' height='75' /></h1>
            {loggedIn && (
                <div>
                    <JobForm /> 
                </div>
            )}
            <div className={`${loggedIn}`}>
                {loading ? (
                    <div>Fetching Posts</div>
                ) : (
                <JobList    
                jobPosts={jobPosts}
                title="Job Resources" 
                />
                )}
            </div>
       </div>
    </div>
      
    </body>
    );
}; 
