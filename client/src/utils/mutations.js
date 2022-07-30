import { gql } from '@apollo/client';

export const USER_LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql` 
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_JOBPOST = gql`
mutation addJobPost($jobText: String!) {
    addJobPost(jobText: $jobText) {
        _id
        username
        jobText
        createdAt
        commentCount
        comments {
            _id
        }
    }
}
`;
export const ADD_COMMENT = gql `
mutation addComment($jobPostId: ID!, $commentBody: String!) {
    addComment(jobPostId: $jobId, commentBody: $commentBody) {
     _id
     commentCount
     comments {
        _id
        commentBody
        createdAt
        username
     }   
    }
}
`;

export const ADD_FRIEND = gql`
mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
        _id
        username
        friendCount
        friends{
            _id
            username
        }
    }
}
`;

export const REMOVE_FRIEND = gql`
mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
        _id
        username
        friends {
            _id
            username
        }
    }
}
`;