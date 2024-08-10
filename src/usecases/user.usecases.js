const createError = require('http-errors');

const User = require("../models/user.model");

// Create a new user
function create(data) {}

// Get all Users
function getAllUsers() {}

// Get User by ID
function getUserById(id) {}

// Update User by ID
function updateUserById(id, newData) {}

// Delete User by ID
function deleteUserById(id) {}

module.exports = {
    create,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}