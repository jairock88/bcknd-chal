const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        maxlength: 120,
        minlength: 2
    },
    profilePic: {
        type: 'string',
        default: "https://randomuser.me/api/portraits/lego/6.jpg"
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: 'string',
        required: true,
        minlength: 6
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);