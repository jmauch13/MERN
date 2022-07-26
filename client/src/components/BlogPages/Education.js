import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOSTS } from '../../utils/queries';
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
                <div classname='modal-popup'>
                <ModalScreen />
            </div>
        </div>
        </div>
        </body>

    );
}