//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create typeDefs
const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    blogPosts: [blogPost]
    friends: [User]
}
type blogPost {
    _id: ID
    blogPostText: String
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
    blogPosts(username: String): [blogPost]
    blogPost(_id: ID!): blogPost
}

type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!): Auth
    addBlogPost(blogPostText: String!): blogPost 
    addComment(blogPostId: ID!, commentBody: String!): blogPost
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs;