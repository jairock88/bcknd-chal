const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
        maxlength: 120,
        minlength: 2
    },
    image: {
        type: 'string',
        default: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg'
    },
    body: {
        type: 'string',
        required: true,
        minlength: 20
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);