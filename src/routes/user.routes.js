const express = require('express');
const createError = require('http-errors'); 

const userUseCases = require('../usecases/user.usecases');

const router = express.Router();


// Login example localhost:port/user/login
router.post("/login", async (request, response) => {
    try {
      const data = request.body;
      const token = await userUseCases.login(data);
  
      response.json({
        success: true,
        message: "User logged in",
        data: { token },
      });
    } catch (error) {
      response.status(error.status || 500);
      response.json({
        success: false,
        message: error.message,
      });
    }
  });
  

// Signup route localhost:port/signup
router.post('/signup', async (request, response) => {
  try {
    const userData = request.body;
    const newUser = await userUseCases.signUp(userData);

    response.json({
      success: true,
      message: 'User created',
      data: { user: newUser },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});

//Get user information for Id
router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const user = await userUseCases.getById(id);

    if (!user) {
      throw createError(404, 'User not found');
    }
    response.json({
      success: true,
      message: 'User found by Id',
      data: { user },
    });

  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;