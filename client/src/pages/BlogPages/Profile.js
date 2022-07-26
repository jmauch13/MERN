import React from 'react';
import { Navigate, useParams } from 'react-router-dom';


import JobList from '../../components/JobList';
import FriendList from '../../components/FriendList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { ADD_FRIEND } from '../../utils/mutations';
import '../BlogPages/blog.css';

const Profile = (props) => {
    const { username: userParams }= useParams();

    const [addFriend] = useMutation(ADD_FRIEND);
    const { loading, data } = useQuery(userParams ? QUERY_USER : QUERY_ME, {
        variables: { username: userParams },
    });

    const user = data?.me || data?.user || {};

    if (userParams) {
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
            <JobList
            jobPosts={user.jobPosts}
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