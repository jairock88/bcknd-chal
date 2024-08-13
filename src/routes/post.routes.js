const express = require('express');

const postUseCases = require('../usecases/post.usecases');
const auth = require('../middlewares/auth');

const router = express.Router();

// Create a new post
router.post('/', auth, async (request, response) => {
    try {
        const data = request.body;
        const userId = request.user._id; // Almacena el ID del usuario en una constante
        data.user = userId; // Asigna la constante a la propiedad user del objeto data
        const newPost = await postUseCases.createPost(data);
        
        response.json({
            success: true,
            message: 'Post created successfully for user ' + userId,
            data: {
                post: newPost
            }
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: error.message
        });
    }
});

// Get all posts
router.get('/', async (request, response) => {
    try {
        let search = request.query.search;

        if (search && typeof search === 'string') {
            search = search.trim(); // Elimina espacios en blanco al inicio y al final

            if (search === '') {
                // Si search es una cadena vacía después de eliminar espacios, devuelve un error
                return response.status(400).json({
                    success: false,
                    message: 'Search query cannot be empty'
                });
            }

            if (search.length > 150) {
                // Limita la longitud del parámetro de búsqueda
                return response.status(400).json({
                    success: false,
                    message: 'Search query too long. Maximum length is 150 characters'
                });
            }
        }

        let posts;

        if (search) {
            posts = await postUseCases.searchPostByContent(search);
        } else {
            posts = await postUseCases.getAllPosts();
        }

        response.json({
            success: true,
            data: { posts: posts }
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            message: error.message
        });
    }
});

// Delete post by ID
router.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id; // id del post
        const userId = request.user._id; // El ID del usuario autenticado

        // Buscar el post por ID
        const post = await postUseCases.getPostById(id);

        if (!post) {
            return response.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        // Verificar si el usuario autenticado es el dueño del post
        if (post.user.toString() !== userId.toString()) {
            return response.status(403).json({
                success: false,
                message: 'You are not authorized to delete this post',
            });
        }

        // Eliminar el post
        const postDeleted = await postUseCases.deletePostById(id);

        response.json({
            success: true,
            message: 'Post deleted successfully',
            data: { post: postDeleted },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            message: error.message,
        });
    }
});

// Update post by ID
router.patch('/:id', async (request, response) => {
    try {
        const id = request.params.id; // ID del post que se va a actualizar
        const userId = request.user._id; // ID del usuario autenticado
        const updateData = request.body; // Datos que se quieren actualizar

        // Buscar el post por ID
        const post = await postUseCases.getPostById(id);

        if (!post) {
            return response.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        // Verificar si el usuario autenticado es el dueño del post
        if (post.user.toString() !== userId.toString()) {
            return response.status(403).json({
                success: false,
                message: 'You are not authorized to update this post',
            });
        }

        // Asegurarse de que el usuario del post no se pueda cambiar
        if (updateData.user && updateData.user.toString() !== userId.toString()) {
            return response.status(400).json({
                success: false,
                message: 'Cannot change the owner of the post',
            });
        }

        // Realizar la actualización del post
        const updatedPost = await postUseCases.updatePostById(id, updateData);

        response.json({
            success: true,
            message: 'Post updated successfully',
            data: { post: updatedPost },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            message: error.message,
        });
    }
});


module.exports = router;