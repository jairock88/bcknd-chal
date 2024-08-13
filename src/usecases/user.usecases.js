const createError = require('http-errors');

const encryption = require('../lib/encryption');
const jwt = require('../lib/jwt');

const User = require("../models/user.model");

// Login function for user
async function login(data) {
    const user = await User.findOne( {email: data.email} ).select('+password');

    if (!user) {
        throw createError(401, 'User not found 🫤');
    }

    const isValidPassword = encryption.compare(data.password, user.password);

    if (!isValidPassword) {
        throw createError(401, 'Invalid credentials 🫤');
    }

    const token = jwt.sign( {id: user._id} );

    return token;

}

// Signup function for user

async function signUp(data) {
    const userFound = await User.findOne({ email: data.email });

    if (userFound) {
        throw createError(409, 'Email already registered');
    }

    if (!data.password) {
        throw createError(400, 'Password is required');
    }

    if (data.password.length < 6) {
        throw createError(400, 'Password must be at least 6 characters long');
    }

    const password = encryption.encrypt(data.password) 

    data.password = password;
    
    const newUser = await User.create(data);
    
    return newUser;
}

// Create a new user
async function create(data) {
    const user = await User.create(data);
    return user;
}

// Get all Users
async function getAllUsers() {
    const users = await User.find({});
    return users;
}

// Get User by ID
async function getById(id) {
    const user = await User.findById(id);
    return user;
}

// Update User by ID
async function updateUserById(id, newData) {
    const userFound = await User.findById(id);

    if (!userFound) {
        throw createError(404, 'User not found 🫤');
    }

    const userUpdated = await User.findByIdAndUpdate(id, newData, { new: true });
    return userUpdated;
}

// Delete User by ID
async function deleteUserById(id) {
    const userFound = await User.findById(id);

    if (!userFound) {
        throw createError(404, 'User not found 🫤');
    }
    
}

module.exports = {
    login,
    signUp,
    create,
    getAllUsers,
    getById,
    updateUserById,
    deleteUserById
}