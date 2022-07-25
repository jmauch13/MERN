const { Schema, model } = require('mongoose');
const commentsSchema = require('./Comments');
const formatDate = require('../utils/formatDate'); 

const blogPostSchema = new Schema(
    {
        blogPostText: {
            type: String,
            required: 'You must include content in your post!',
            minlength: 1,
            maxLength: 800
        },
        createdAt: {
            tytpe: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentsSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

blogPostSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const blogPost = model('blogPost', blogPostSchema);

module.exports = blogPost;