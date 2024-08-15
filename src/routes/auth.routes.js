const express = require('express');


const userUseCases = require('../usecases/user.usecases');

const router = express.Router();

// Login example localhost:port/login
router.post("/login", async (request, response) => {
    try {
      const data = request.body;
    //   const token = await userUseCases.login(data);

    //   const user = await userUseCases.getById(data.id);
      const { token, user } = await userUseCases.login(data);
  
      response.json({
        success: true,
        message: "User logged in",
        data: { 
            id: user._id,
            name: user.name,
            token },
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