import { gql } from '@apollo/client';

export const QUERY_EDUCATIONPOSTS = gql `
query educationPosts($username: String) {
    educationPosts(username: $username) {
        _id
        educationText
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

export const QUERY_EDUCATIONPOST = gql `
query educationPost($id: ID!) {
    educationPost(_id: $id) {
        _id
        educationtText
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

export const QUERY_INTERNPOSTS = gql `
query internPosts($username: String) {
    internPosts(username: $username) {
        _id
        internText
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

export const QUERY_INTERNPOST = gql `
query internPost($id: ID!) {
    internPost(_id: $id) {
        _id
       internText
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
        educationPosts {
            _id
            educationPostText
            createdAt
            commentCount
        }
        jobPosts {
            _id
            jobPostText
            createdAt
            commentCount
        }
        internPosts {
            _id
            internText
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

