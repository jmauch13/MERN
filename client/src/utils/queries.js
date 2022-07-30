import { gql } from '@apollo/client';


export const QUERY_JOBPOSTS = gql `
query jobPosts($username: String) {
    jobPosts(username: $username) {
        _id
        jobText
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

export const QUERY_JOBPOST = gql `
query jobPost($id: ID!) {
    jobPost(_id: $id) {
        _id
       jobText
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
        
        jobPosts {
            _id
            jobPostText
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
        jobPosts {
            _id
            jobText
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
