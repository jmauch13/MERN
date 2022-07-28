import { gql } from '@apollo/client';

export const USER_LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, passowrd: $password) {
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

export const ADD_JOBCOMMENT = gql`
mutation addJobComment($jobPostId: ID!, $commentBody: String!) {
    addEducationComment(jobPostId: $jobPostId, commentBody: $commentBody) {
        _id
        commentCount
        comments {
            _id
            username
            commentBody
            creatdAt
        }
    }
}
`; 

export const ADD_INTERNPOST = gql`
mutation addInternPost($internText: String!) {
    addInternPost(internText: $internText) {
        _id
        username
       internText
        createdAt
        commentCount
        comments {
            _id
        }
    }
}
`;

export const ADD_INTERNCOMMENT = gql`
mutation addInternComment($internPostId: ID!, $commentBody: String!) {
    addInternComment(internPostId: $internPostId, commentBody: $commentBody) {
        _id
        commentCount
        comments {
            _id
            username
            commentBody
            creatdAt
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