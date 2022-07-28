const { Schema, model } = require('mongoose');
const commentsSchema = require('./Comments');
const formatDate = require('../utils/formatDate'); 

const InternPostSchema = new Schema(
    {
        internText: {
            type: String,
            required: 'You must include content in your post!',
            minlength: 1,
            maxLength: 800
        },
        createdAt: {
            type: Date,
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

InternPostSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const internPost = model('internPost', InternPostSchema);

module.exports = internPost;