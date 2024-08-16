# Blog RESTful API

This is a RESTful API created to manage users and blog posts. It allows CRUD operations for users and posts, as well as authentication based on JSON Web Tokens (JWT).

## 📙 Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Use](#use)
5. [Endpoints](#endpoints)
6. [Dependencies](#dependencies)
7. [Contribution](#contribution)

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

- **SignUp.** Request method: *POST* - route --> '/users/signup'

    Json Structure:

````json
{
    "name": "Thomas Anderson",
    "email": "thomas.anderson@matrix.com",
    "password": "securepassword123"
}
````

- **Login (get a JWT).** Request method: *POST* - route -->  '/auth/login'

    Json Structure:

````json
{
    "email": "thomas.anderson@matrix.com",
    "password": "securepassword123"
}
````

- **Create post.** Request method: *POST* - route --> '/post'

    Json Structure:

````json
{
  "title": "Follow the White Rabbit",
  "body": "This is the content of my random post."
}
````

- **Get all posts:** *GET* --> '/post'
- **Update post:** *PATCH* --> '/post/:id'
- **Delete post:** *DELETE* --> '/post/:id'

**Be sure to include the JWT token in the Authorization header for protected routes.**

## Endpoints

### Users

- **POST** '/users/signup' Create a new user
- **POST** '/auth/login' Get a JWT token
- **GET** '/users/:id' Gets a user by ID

### Posts

- *POST* --> '/post' Create a new post.
- *GET* --> '/post' Get all posts or filter by content.
- *PATCH* --> /post/:id' Updates one post per ID.
- *DELETE* --> '/post/:id' Delete a post by ID.

## Dependencies

- **bcryptjs: ^2.4.3** - For password hashing.
- **cors: ^2.8.5** - To allow CORS requests.
- **dotenv: ^16.4.5** - To manage environment variables.
- **express: ^4.19.2** - Framework to build the API.
- **helmet: ^7.1.0** - To protect HTTP headers.
- **http-errors: ^2.0.0** - To handle HTTP errors.
- **jsonwebtoken: ^9.0.2** - For JWT generation & verification.
- **mongoose: ^8.5.2** - ODM for MongoDB.

## Contribution

Contributions are welcome! If you wish to contribute, please open an issue or pull request in the repository.
