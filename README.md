# User API

This User API project provides endpoints for user registration, authentication, and user management, leveraging Express.js, Mongoose, and JSON Web Tokens (JWT) for secure access.

## Features

- User Registration
- User Login with JWT Authentication
- Retrieve All Users (Admin Access)
- Retrieve Specific User by ID (Requires Token)

## Prerequisites

- Node.js (v12+ recommended)
- MongoDB (Ensure you have MongoDB installed and running, or use a MongoDB cloud service like MongoDB Atlas)
- Postman.

## Getting Started

- **Step 1:**  Clone the Repository
      - git clone <repository-url>
      - cd <repository-directory>
- **Step 2:**  Install Dependencies
      - npm install
- **Step 3:**  Configure Environment Variables
      - Create a .env file in the root directory with the following variables:

    **PORT=3000**
    **HOSTNAME=localhost**
    **MONGO_URI=your_mongodb_connection_string**
    **JWT_SECRET=your_jwt_secret_key**

- **Step 4:**  Start the Server

    - node index.js
    - API Endpoints

    1. Root Route
        - URL: /
        - Method: GET
    - Description: Returns a welcome message with usage instructions.

    2. Register User
        - URL: /register
        - Method: POST
        - Request Body:

            {
                "userName": "sampleuser",
                "email": "sample@example.com",
                "password": "yourpassword"
            }

        - Response:

            - Success:

            {
                "message": "User registered successfully",
                "success": true,
                "data": { "user details" }
            }

            - Error: Returns an error message if registration fails.

    3. User Login
        - URL: /login
        - Method: POST
        - Request Body:

            {
                "email": "sample@example.com",
                "userName": "sampleuser",
                "password": "yourpassword"
            }
        - Response:

            - Success:
            {
                "token": "jwt_token",
                "message": "User logged in successfully"
            }

            - Error: Returns an error if credentials are invalid.

    4. Get All Users
        - URL: /users/all
        - Method: GET
        - Description: Fetches a list of all users.
        - Response:

            - Success: Returns user data if successful.
            - Error: Returns an error message if retrieval fails.

    5. Get User by ID
        - URL: /users
        - Method: GET
        - Headers: token: jwt_token
        - Description: Fetches details of the authenticated user.
        - Response:

            - Success: Returns user profile if token is valid.
            - Error: Returns error if token is missing, invalid, or expired.
            
## Code Overview

- **index.js:** Main entry point, sets up server and routes.
- **dbconnection.js:** Establishes MongoDB connection.
- **jwt.utils.js:** Manages JWT generation and secret configuration.
- **user.models.js:** Defines user schema and password hashing.
- **auth.middleware.js:** Middleware for validating JWT.
- **user.controller.js:** User-related endpoints.
- **register.controller.js:** User registration endpoint.
- **auth.controller.js:** Login and authentication.

## Testing

- Use Postman or similar tools to test the endpoints. Be sure to include JWT tokens in headers for protected routes.

## License

- This project is open-source under the MIT License.