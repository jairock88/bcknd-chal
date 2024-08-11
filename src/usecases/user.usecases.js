const createError = require('http-errors');

const User = require("../models/user.model");

// Create a new user
async function create(data) {
    const user = await User.create(data);
    return user;
}

// Get all Users
async function getAllUsers() {
    const users = await User.find({});
}

// Get User by ID
async function getUserById(id) {
    const user = await User.findById(id);
}

// Update User by ID
async function updateUserById(id, newData) {
    const userFound = await User.findById(id);

    if (!userFound) {
        throw createError(404, 'User not found 🫤');
    }

    const updateUser = await User.findByIdAndUpdate(id, newData, { new: true });
    return updateUser;
}

// Delete User by ID
async function deleteUserById(id) {
    const userFound = await User.findById(id);

    if (!userFound) {
        throw createError(404, 'User not found 🫤');
    }
}

module.exports = {
    create,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}