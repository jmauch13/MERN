import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INTERNPOSTS } from '../../utils/queries';
import InternList from '../../components/InternList';
import InternForm from '../../components/InternForm';
import Auth from '../../utils/auth';

import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';



export default function Blog() {

    const { loading, data } = useQuery(QUERY_INTERNPOSTS);
    const internPosts = data?.internPosts || [];
    console.log(internPosts);

    const loggedIn = Auth.loggedIn(); 
    
    return (
        <body className='blog-pages'>
    <div className='wrapper'>
        <div className='intern'>
        <h1>BEYOND BOOT CAMP BLOG &nbsp;<img src={logo} alt='rocket' width='75' height='75' /></h1>
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
                     />
                )}
            </div> 
        </div>
        </div>
        
        </body>
    );
};