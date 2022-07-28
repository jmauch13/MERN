import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { ADD_EDUCATIONPOST } from '../../utils/mutations';
import { QUERY_EDUCATIONPOSTS, QUERY_ME } from '../../utils/queries';

const EducationForm = () => {
    const [educationText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addEducationPost, { error }] = useMutation(ADD_EDUCATIONPOST, {
        update(cache, { data: { addEducationPost } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, educationPosts: [...me.educationPosts, addEducationPost] } },
                });
            } catch (e) {
                console.warn("First post by user")
            }

            const { educationPosts } = cache.readQuery({ query: QUERY_EDUCATIONPOSTS });
            cache.writeQuery({
                query: QUERY_EDUCATIONPOSTS,
                data: { blogPosts: [addEducationPost, ...educationPosts] },
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
            await addEducationPost({
                variables: { educationText },
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
                {error && <span>Blog failed to post</span>}
            </p>
            <form onSubmit={formSubmit}>
                <textarea
                placeholder="Share your thoughts here"
                value={educationText}
                onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EducationForm;