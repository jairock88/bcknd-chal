# API RESTful de Blog

This is a RESTful API created to manage users and blog posts. It allows CRUD operations for users and posts, as well as authentication based on JSON Web Tokens (JWT).

## 📙 Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Use](#use)
5. [Routes](#routes)
6. [Dependencies](#dependencies)
7. [Contribución](#contribución)
8. [Licencia](#licencia)

## Features

- **Users**: Registration, login, obtaining user ID.
- **Publications**: Create, read, update and delete publications.
- **Authentication**: Security through JWT to protect routes.

## Technologies

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JWT**

## Installation

1. Clone the repository:

   ```bash
   git clone <git@github.com:jairock88/bcknd-chal.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd <PROJECT_DIRECTORY>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create an .env file in the root of the project and add the necessary variables (see example.env file):

```
DB_USER=your_username

DB_PASSWORD=your_password

DB_HOST=localhost

DB_NAME=your_database_name

JWT_SECRET=your_jwt_secret
```

5. Starts the server:

```bash
   npm start
```

**Dev Mode:**

```bash
   npm run dev
```

## Use

- **SignUp:** POST '/users/signup'

  #### Json Structure:

````json
{
    "name": "Thomas Anderson",
    "email": "thomas.anderson@matrix.com",
    "password": "securepassword123"
}
````

- **Login:** POST /auth/login


- **Create post:** POST /posts
- **Get all posts:** GET /posts
- **Update post:** PATCH /posts/:id
- **Delete post:** DELETE /posts/:id

Be sure to include the JWT token in the Authorization header for protected routes:

## Routes

### Users

- POST '/users/signup' Crea un nuevo usuario.
- POST '/auth/login' Inicia sesión y obtiene un token JWT.
- GET '/users/:id' Obtiene un usuario por ID.
