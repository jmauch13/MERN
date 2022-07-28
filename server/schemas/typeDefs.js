//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create typeDefs
const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    educationPosts: [EducationPost]
    jobPosts: [JobPost]
    internPosts: [InternPost]
    friends: [User]
}
type educationPost {
    _id: ID
    educationText: String
    createdAt: String
    username: String
    commentCount: String
    comments: [Comments]
}
type jobPost {
    _id: ID
    jobText: String
    createdAt: String
    username: String
    commentCount: String
    comments: [Comments]
}
type internPost {
    _id: ID
    internText: String
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
    educationPosts(username: String): [educationPost]
    educationPost(_id: ID!): educationPost
    jobPosts(username: String): [jobPost]
    jobPost(_id: ID!): jobPost
    internPosts(username: String): [internPost]
    internPost(_id: ID!): internPost
}

type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!): Auth
    addEducationPost(educationtText: String!): educationPost 
    addEducationComment(educationPostId: ID!, commentBody: String!): educationPost
    addJobPost(jobText:String!): jobPost
    addJobComment(jobTextId: ID!, commentBody: String!): jobPost
    addInternPost(internText: String!): InternPost
    addInternComment(internTextId: ID!, commentBody: String!): internPost
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs;