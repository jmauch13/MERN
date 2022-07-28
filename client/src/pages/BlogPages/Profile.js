import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import EducationList from '../components/EducationList';

import JobList from '../components/JobList';
import InternList from '../components/InternList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import '../BlogPages/blog.css';

const Profile = (props) => {
    const { username: userParams }= useParams();

    const [addFriend] = useMutation(ADD_FRIEND);
    const { loading, data } = useQuery(userParams ? QUERY_USER : QUERY_ME, {
        variables: { username: userParams },
    });

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParams) {
        return <Navigate to="/profile:username" />;
    }

    if (loading) {
        return <div>Fetching your info</div>;
    }

    if(!user?.username) {
        return (
            <h4>
                Please log in to view your profile
            </h4>
        );
    }

    const clickHandler = async () => {
        try {
            await addFriend({
                variables: { id: user._id },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h2>{userParams ? `${user.username}'s` : 'Your'} profile</h2>

            {userParams && (
                <button onClick={clickHandler}>Add Friend</button>
            )} 
    
        <div>
            <EducationList
                blogPosts={user.blogPosts}
                title={`${user.username}'s posts`} />
           
        </div>
        <div>
            <InternList 
            blogPosts={user.blogPosts}
            title={`${user.username}'s posts`}
            />
        </div>

        <div>
            <JobList
            blogPosts={user.blogPosts}
            title={`${user.username}'s posts`} />
        </div>

            <div>
                <FriendList
                username={user.username}
                friendCount={user.friendCount}
                friends={user.friends} />
            </div>
        </div>
    );
};

export default Profile;