import React from 'react';
import JobForm from '../../components/JobForm'
import JobList from '../../components/JobList';
import CommentForm from '../../components/CommentForm'
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_JOBPOSTS } from '../../utils/queries';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';

export default function JobTalk() {
    const { loading, data } = useQuery(QUERY_JOBPOSTS);
    
    const jobPost = data?.jobPost || []; 

    const loggedIn = Auth.loggedIn();
    
    
    return (
    <body className='blog-pages'>
    <div className='wrapper'>
        <div className='jobs'>
<<<<<<< HEAD
            
=======
            <h1>Job Resources &nbsp;<img src={logo} alt='rocket' width='75' height='75' /></h1>
            {loggedIn && (
                <div className='blog-form'>
                    <JobForm /> 
                </div>
            )}
>>>>>>> 1930798ac33093b58d43e8414dc175f966189def
            <div className={`${loggedIn}`}>
                {loading ? (
                    <div>Fetching Posts</div>
                ) : (
                <JobList    
                jobPosts={jobPost}
                title="Job Resources" 
                />
                )}
            </div>
            <JobForm
            <div>
                {jobPost.commentCount > 0 && (
                    <CommentList comments = {jobPost.comments} />
                )}
                <CommentForm jobPost={jobPost._id} />
            
         </div>
       </div>
    </div>
      
    </body>
    );
}; 
