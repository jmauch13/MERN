const { Schema } = require('mongoose');
const formatDate = require('../utils/formatDate');

const commentsSchema = new Schema(
    {
        commentBody: {
            type: String,
            required: true,
            maxLength: 500
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => formatDate(timestamp)
        }
    }, 
    {
        toJSON: {
            getters: true
        }
    }
);


module.exports = commentsSchema;