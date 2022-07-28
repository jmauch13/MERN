import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INTERNPOSTS } from '../../utils/queries';
import InternList from '../../components/InternList';
import InternForm from '../../components/InternForm';
import CommentForm from '../../components/CommentForm';
import Auth from '../../utils/auth';

import '../BlogPages/blog.css';


export default function Intern() {

    const { loading, data } = useQuery(QUERY_INTERNPOSTS);
    const internPosts = data?.internPosts || [];
    console.log(internPosts);

    const loggedIn = Auth.loggedIn(); 
    
    return (
        <body className='blog-pages'>
    <div className='wrapper'>
        <div className='intern'>
        <h1>Apprenticeships & Internships</h1>
            {loggedIn && (
                <div>
                    <InternForm />
                </div> 
            )}
            <div className={`${loggedIn}`}>
                {loading ? (
                    <div>Fetching Posts</div>
                ) : (
                    <InternList 
                    internPosts={internPosts}
                    title="Apprenticeships and Internships"
                    commentCount={internPosts.commentCount} />
                )}
            </div> 
        </div>
        </div>
        {Auth.loggedIn() && <CommentForm internId={internPosts._id} />}
        </body>
    );
};