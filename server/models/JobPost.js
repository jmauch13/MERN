const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentsSchema = require('./Comments');
const formatDate = require('../utils/formatDate'); 

const jobPostSchema = new Schema(
    {
        jobText: {
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

jobPostSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;