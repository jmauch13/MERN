import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_JOBPOST } from '../../utils/mutations';
import { QUERY_JOBPOSTS, QUERY_ME } from '../../utils/queries'; 

const JobForm = () => {
    const [jobText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addJobPost, { error }] = useMutation(ADD_JOBPOST, {
        update(cache, { data: { addBlogPost } }) {
            try {
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, jobPosts: [...me.jobPosts, addJobPost] } },
            });
        } catch (e) {
            console.warn("User's first post");
        }

        const { jobPosts } = cache.readQuery({ query: QUERY_JOBPOSTS } );
        cache.writeQuery({
            query: QUERY_JOBPOSTS,
            data: { jobPosts: [addJobPost, ...jobPosts ] },
        });
    }
    });

    const handleChange = (event) => {
        if (event.target.value.length <= 800) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    }; 

    const formSubmit = async (event) => {
        event.preventDefault();

        try {
            await addJobPost({
                variables: { jobText },
            });

            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`${characterCount === 800 || error ? 'text-error' : ''}`}>
                {characterCount}/800
                {error && <span>Blog failed to Post</span>}
            </p>
            <form onSubmit={formSubmit}>
                <textarea 
                placeholder="Write your post here"
                value={jobText}
                onChange={handleChange}></textarea> 
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}; 

export default JobForm;