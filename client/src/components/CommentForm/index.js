import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ jobPostId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = (event) => {
        if (event.target.value.length <= 500) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const formSubmit = async (event) => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentBody,  jobPostId},
            });

            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`${characterCount === 500 || error ? 'text-error' : ''}`}>
                {characterCount}/500 
                {error && <span>Comment failed to post</span>}
            </p>
            <form onSubmit={formSubmit}>
                <textarea 
                placeholder="Enter your comments here"
                value={commentBody}
                onChange={handleChange}></textarea>

                <button type="submit">Submit</button>
            </form>

            {error && <div>Comment failed to post</div>}
        </div>
    );
};

export default CommentForm;