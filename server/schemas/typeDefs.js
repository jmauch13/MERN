//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create typeDefs
const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    jobPosts: [JobPost]
    friends: [User]
}
type JobPost {
    _id: ID
    jobText: String
    createdAt: String
    username: String
    commentCount: String
    comments: [Comments]
}

type Comments {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobPosts(username: String): [JobPost]
    jobPost(_id: ID!): JobPost
}

type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!): Auth
    addJobPost(jobText:String!): JobPost
    addComment(jobTextId: ID!, commentBody: String!): JobPost 
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs;