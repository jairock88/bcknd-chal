const createError = require('http-errors');

const Post = require("../models/post.model");

// Create a new post
function createPost(data) {}

// Get all posts
function getAllPosts() {}

// Get post by ID
function getPostById(id) {}

// Update post by ID
function updatePostById(id, data) {}

// Delete post by ID
function deletePostById(id) {}

// Search post by content
function searchPostByContent(content) {}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
    searchPostByContent
}