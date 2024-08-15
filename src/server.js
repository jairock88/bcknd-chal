const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/post", postRoutes);
app.use("/auth", authRoutes);

app.get("/", (request, response) => {
    response.json({
        success: true,
        message: "API bcknd"
    });
});

module.exports = app;