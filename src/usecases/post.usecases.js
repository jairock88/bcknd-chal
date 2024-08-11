const createError = require('http-errors');

const Post = require("../models/post.model");

// Create a new post
async function createPost(data) {
    const post = await Post.create(data);
    return post;
}

// Get all posts
async function getAllPosts() {
    const posts = await Post.find({});
    return posts;
}

// Get post by ID
async function getPostById(id) {
    const post = await Post.findById(id);
    return post;
}

// Update post by ID
async function updatePostById(id, newData) {
    const postFound = await Post.findById(id);

    if (!postFound) {
        throw createError(404, 'Post not found 🫤');
    }

    const updatePost = await Post.findByIdAndUpdate(id, newData, { new: true });
    return updatePost;
}

// Delete post by ID
async function deletePostById(id) {
    const postFound = await Post.findById(id);

    if (!postFound) {
        throw createError(404, 'Post not found 🫤');
    }
}

// Search post by content
async function searchPostByContent(contentSearched) {
    if (!contentSearched) {
        throw createError(400, 'Content to search is required');
    }

    // Regex para hacer una busqueda en los campos `title` y `body`
    const regex = new RegExp(contentSearched, 'i'); // 'i' hace la búsqueda insensible a mayúsculas/minúsculas

    const posts = await Post.find({
        $or: [ // operador de Mongo para hacer una búsqueda OR
            { title: { $regex: regex } },
            { body: { $regex: regex } }
        ]
    });

    return posts;
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
    searchPostByContent
}