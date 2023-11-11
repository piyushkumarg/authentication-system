# Authentication System API

This is a basic authentication system API implemented using Node.js, Express, and MongoDB, featuring JWT (JSON Web Token) for user authentication. The system supports two types of users: Admin and Normal User. Admins can register themselves, and Normal Users can only be added by an authenticated Admin.

## Requirements

1. **User Types:**
   - Admin
   - Normal User

2. **Authentication:**
   - Admins can register themselves by providing the following information:
     - Username
     - Email
     - Password
   - Normal Users cannot register directly; they can only be added by an authenticated Admin.
   - JWT is used for authentication and authorization.

3. **Endpoints:**
   - **Admin Registration Endpoint:**
     - **URL:** `/api/admin/register`
     - **Method:** `POST`
     - **Parameters:**
       - Username (String)
       - Email
       - Password (String)
     - **Response:**
       - Success message or appropriate error message

   - **Admin Login Endpoint:**
     - **URL:** `/api/admin/login`
     - **Method:** `POST`
     - **Parameters:**
       - email (String)
       - Password (String)
     - **Response:**
       - JWT Token on successful login.

   - **Normal User Addition Endpoint:**
     - **URL:** `/api/admin/add-user`
     - **Method:** `POST`
     - **Parameters:**
       - Username (String)
       - Email
       - Password (String)
     - **Request Headers:**
       - Authorization: Bearer [Admin JWT Token]
     - **Response:**
       - Success message or appropriate error message.

   - **Get All Users Added by Admin Endpoint:**
     - **URL:** `/api/admin/all-users`
     - **Method:** `GET`
     - **Request Headers:**
       - Authorization: Bearer [Admin JWT Token]
     - **Response:**
       - List of Normal Users added by the Admin.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/piyushkumarg/authentication-system.git
   ```

2. Change into the project directory:

   ```bash
   cd authentication-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   Create a `.env` file in the root of your project and add the following:

   ```env
   DB_URL=your_mongodb_connection_string
   JWT_SECRET_KEY=your_secret_key
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_secret_key` with a secure secret key for JWT.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Use your preferred API testing tool (e.g., Postman) to test the endpoints.


