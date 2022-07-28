import React from 'react';
import JobList from '../../components/JobList';
import JobForm from '../../components/JobForm';
import FriendList from '../../components/FriendList';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOSTS, QUERY_ME } from '../../utils/queries';
import '../BlogPages/blog.css';

export default function JobTalk() {
    const { loading, data } = useQuery(QUERY_BLOGPOSTS);
    const { data: userData } = useQuery(QUERY_ME);
    const blogPosts = data?.blogPosts || []; 

    const loggedIn = Auth.loggedIn();
    
    
    return (
        <body className='blog-pages'>
    <div className='wrapper'>
        <div className='jobs'>
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
                blogPosts={blogPosts}
                title="Job Resources" />
                )}
            </div>
            {loggedIn && userData ? (
                <div>
                    <FriendList
                    username={userData.me.username}
                    friendCount={userData.me.friendCount}
                    friends={userData.me.friends} />
                </div>
            ) : null}
       </div>
    </div>
        
        </body>
    );
}; 
