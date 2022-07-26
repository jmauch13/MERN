import { gql } from '@apollo/client';

export const QUERY_BLOGPOSTS = gql `
query blogPosts($username: String) {
    blogPosts(username: $username) {
        _id
        blogPostText
        createdAt
        username
        commentCount
        comments {
            _id
            createdAt
            username
            commentBody
        } 
    }
}
`;

export const QUERY_BLOGPOST = gql `
query blogPost($id: ID!) {
    blogPost(_id: $id) {
        _id
        blogPostText
        createdAt
        username
        commentCount
        comments {
            _id
            createdAt
            username
            commentBody
        }
    }
}
`;

export const QUERY_USER = gql `
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        friendCount
        friends {
            _id
            username
        }
        blostPosts {
            _id
            blogPostText
            createdAt
            commentCount
        }
    }
}
`;

export const QUERY_ME = gql `
{
    me {
        _id
        username
        email
        friendcount
        blogPosts {
            _id
            blogPostText
            createdAt
            commentCount
            comments {
                _id
                username
                commentBody
                createdAt
            }
        }
        friends {
            _id 
            username
        }
    }
} 
`;

