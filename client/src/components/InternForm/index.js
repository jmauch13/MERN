import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_INTERNPOST } from '../../utils/mutations';
import { QUERY_INTERNPOSTS, QUERY_ME } from '../../utils/queries';

const InternForm = () => {
    const [internText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addInternPost, { error }]= useMutation(ADD_INTERNPOST, {
        update(cache, { data: { addInternPost } }) {

            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, internPosts: [...me.internPosts, addInternPost] }},
                });
            } catch (e) {
                console.warn("User's first post")
            } 

            const { internPosts } = cache.readQuery({ query: QUERY_INTERNPOSTS });
            cache.writeQuery({
                query: QUERY_INTERNPOSTS,
                data: { internPosts: [addInternPost, ...internPosts] },
            });
        }
    });

    const handleChange = (event) => {
        if(event.target.value.length <= 800) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    }; 

    const formSubmit = async (event) => {
        event.preventDefault(); 

        try {
            await addInternPost({
                variables: { internText }, 
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
                ${characterCount}/800
                {error && <span>Blog failed to post</span>}
            </p>
            <form onSubmit={formSubmit}>
                <textarea
                placeholder="Write your post here"
                value={internText}
                onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}; 

export default InternForm;