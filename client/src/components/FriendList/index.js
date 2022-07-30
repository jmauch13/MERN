import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ friendCount, username, friends }) => {
    if (!friends || !friends.length) {
        return <p>{username}, it is time tomake some connections!</p>;
    }

    return (
        <div>
            <h5>
                {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
            </h5>
            {friends.map(friend => (
                <button key={friend._id}>
                    <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
                </button>
            ))}
        </div>
    );
};

export default FriendList;