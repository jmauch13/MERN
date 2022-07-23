const { AuthenticationError } = require('apollo-server-express');
const { User, blogPost } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id})
                .select('-__v -password')
                .populate('blogPosts')
                .populate('friends');

                return userData;
            }
            throw new AuthenticationError('Please log in');
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('blogPosts')
            .populate('friends');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('blogPosts')
            .populate('friends');
        },
        blogPosts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return blogPost.find(params).sort({ createdAt: -1});
        },
        blogPosts: async(parent, { _id }) => {
            return blogPost.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email');
            }

            const validPw = await user.isCorrectPassword(password);

            if(!validPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);
            return { token, user };
        },
        addBlogPost: async (parent, args, context) => {
            if (context.user) {
                const post = await blogPost.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { blogPosts: post._id } },
                    { new: true }
                );
                return post;
            }
            throw new AuthenticationError('Please log in to post!');
        },
        addComment: async (parent, { blogPostId, commentBody }, context) => {
            if (context.user) {
                const updatedBlogPost = await blogPost.findOneAndUpdate(
                    { _id: blogPostId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );
                return updatedBlogPost;
            }
            throw new AuthenticationError('Please log in to edit your post!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updateUser;
            }
            throw new AuthenticationError('Please log in to add friends!');        
        }
    }
};

module.exports = resolvers;