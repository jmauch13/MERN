import React, { useState } from 'react';

import { defaultDataIdFromObject, useMutation } from '@apollo/client';
import { ADD_BLOGPOST } from '../../utils/mutations';
import { QUERY_BLOGPOSTS, QUERY_ME } from '../../utils/queries';

const InternForm = () => {
    const [blogPostText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addBlogPost, { error }]= useMutation(ADD_BLOGPOST, {
        update(cache, { data: { addBlogPost } }) {

            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, blogPosts: [...me.blogPosts, addBlogPost] }},
                });
            } catch (e) {
                console.warn("User's first post")
            } 

            const { blogPosts } = cache.readQuery({ query: QUERY_BLOGPOSTS });
            cache.writeQuery({
                query: QUERY_BLOGPOSTS,
                data: { blogPosts: [addBlogPost, ...blogPosts] },
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
            await addBlogPost({
                variables: { blogPostText }, 
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
                value={blogPostText}
                onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}; 

export default InternForm;