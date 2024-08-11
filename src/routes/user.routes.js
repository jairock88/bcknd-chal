const express = require('express');

const userUseCases = require('../usecases/user.usecases');

const router = express.Router();


// Login example localhost:port/login
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
router.post('/signup', (request, response) => {})

// Get user information for Id
router.get('/:id', async (request, response) => {})