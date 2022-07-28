import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EDUCATIONPOSTS } from '../../utils/queries';
import EducationList from '../../components/EducationList';
import CommentForm from '../../components/CommentForm';
import Auth from '../../utils/auth';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';

export default function Education() {

    const { loading, data } = useQuery(QUERY_EDUCATIONPOSTS);
    const educationPosts = data?.educationPosts || [];
    console.log(educationPosts);

    const loggedIn = Auth.loggedIn();
    return (
        <body className='blog-pages'>
            <div className='wrapper'>
                <div className='education'>
                <h1>Continue Your Education &nbsp;<img src={logo} alt='rocket' width='75' height='75' /></h1>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-3" >
                    <div className={`${loggedIn}`}>
                    {loading ? (
                        <div>Retrieving Posts...</div>
                    ) : (
                        <EducationList educationPosts={educationPosts} 
                        title="Continue Your Education.." 
                        commentCount={educationPosts.commentCount} />
                    )}
                    </div>
                </div>
            </div>
        </div>
        {Auth.loggedIn() && <CommentForm educationPostId={educationPosts._id} />}
        </div>
        </body>
    );
};