import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOSTS } from '../../utils/queries';
import EducationList from '../../components/EducationList';
import ModalScreen from './ModalScreen';
import '../BlogPages/blog.css';
import logo from '../../assets/images/rocket-launch-icon.jpg';

export default function Education() {

    const { loading, data } = useQuery(QUERY_BLOGPOSTS);
    const blogPosts = data?.blogPosts || [];
    console.log(blogPosts);
    return (
        <body className='blog-pages'>
            <div className='wrapper'>
                <div className='education'>
                <h1>Continue Your Education &nbsp;<img src={logo} alt='rocket' width='75' height='75' /></h1>
                <div className='modal-popup'>
                <ModalScreen />
            </div>
    <div className='wrapper'>
        <div className='education'>
            <h1>Continue Your Education</h1>
            <div className="flex-row justify-space-between">
                <div className="col-12 mb-3">
                    {loading ? (
                        <div>Retrieving Posts...</div>
                    ) : (
                        <EducationList blogPosts={blogPosts} title="Continue Your Education.." />
                    )}
                </div>
            </div>
            <div className='modal-popup'>
            <ModalScreen />
        </div>
        </div>
        </div>
        </div>
        </div>
        </body>

    );
}