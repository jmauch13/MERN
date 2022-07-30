import React from 'react';
import JobForm from '../../components/JobForm'
import JobList from '../../components/JobList';
import { useQuery } from '@apollo/client';
import { QUERY_JOBPOSTS } from '../../utils/queries';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';

export default function JobTalk() {
    const { loading, data } = useQuery(QUERY_JOBPOSTS);
    
    const jobPost = data?.jobPost || []; 

   
    
    
    return (
    <body className='blog-pages'>
    <div className='wrapper'>
        <div className='jobs'>
            <JobForm />
            <div>
                {loading ? (
                    <div>Fetching Posts</div>
                ) : (
                <JobList    
                jobPosts={jobPost}
                title="Job Resources" 
                />
                )}
            </div>
       </div>
    </div>
      
    </body>
    );
}; 