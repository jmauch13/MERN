const { Schema, model } = require('mongoose');
const commentsSchema = require('./Comments');
const formatDate = require('../utils/formatDate'); 

const EducationPostSchema = new Schema(
    {
        educationText: {
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

EducationPostSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const educationPost = model('educationPost', EducationPostSchema);

module.exports = educationPost;