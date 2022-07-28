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
type EducationPost {
    _id: ID
    educationText: String
    createdAt: String
    username: String
    commentCount: String
    comments: [Comments]
}
type JobPost {
    _id: ID
    jobText: String
    createdAt: String
    username: String
    commentCount: String
    comments: [Comments]
}
type InternPost {
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
    educationPosts(username: String): [EducationPost]
    educationPost(_id: ID!): EducationPost
    jobPosts(username: String): [JobPost]
    jobPost(_id: ID!): JobPost
    internPosts(username: String): [InternPost]
    internPost(_id: ID!): InternPost
}

type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(username: String!, email: String!, password: String!): Auth
    addEducationPost(educationtText: String!): EducationPost 
    addEducationComment(educationPostId: ID!, commentBody: String!): EducationPost
    addJobPost(jobText:String!): JobPost
    addJobComment(jobTextId: ID!, commentBody: String!): JobPost
    addInternPost(internText: String!): InternPost
    addInternComment(internTextId: ID!, commentBody: String!): InternPost
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs;