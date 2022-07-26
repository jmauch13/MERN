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

export const ADD_BLOGPOST = gql`
mutation addBlogPost($blogPostText: String!) {
    addBlogPost(blogPostText: $blogPostText) {
        _id
        username
        blogPostText
        createdAt
        commentCount
        comments {
            _id
        }
    }
}
`;

export const ADD_COMMENT = gql`
mutation addComment($blogPostId: ID!, $commentBody: String!) {
    addComment(blogPostId: $blogPostId, commentBody: $commentBody) {
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