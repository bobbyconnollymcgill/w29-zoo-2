# Zoo Management API

This is a simple Zoo Management API built with Node.js and Express. It provides CRUD operations for animals, habitats, feeding times, and users, as well as the ability to trigger notifications for feeding times. The purpose of this project is to help students understand the structure and workflow of a basic API.

## Overview

The API includes the following resources:

- Animals
- Habitats
- Feeding Times
- Users
- Notifications

The API uses a simple JSON file (`db.json`) as the data store, and includes a set of service modules and route files for handling operations related to each resource.

### Features

- CRUD operations for animals, habitats, feeding times, and users
- Trigger notifications for feeding times
- Basic role-based access control using header-based user authentication

## Things to do next

To further enhance this project, consider the following improvements:

1. **Client-side code**: Develop a simple web application or command line interface (CLI) that interacts with the API. This will allow users to perform CRUD operations on animals, habitats, feeding times, and users, as well as trigger notifications.

2. **Authentication and authorization**: Implement a more sophisticated authentication and authorization system using JSON Web Tokens (JWT) or other methods. This would replace the current simple header-based userId used in the `auth.js` middleware.

3. **API documentation**: Create clear and concise API documentation that outlines the available endpoints, request and response formats, and any required authentication. You can use tools like Swagger, Postman, or even just a markdown file to document your API.

4. **Unit tests**: Write unit tests for your services and routes to ensure that your API works correctly and as expected. This will also help students understand the expected behavior of each component in your project.

5. **Logging and error handling**: Implement proper logging and error handling throughout your application to handle different types of errors and provide helpful information for debugging.

6. **Project structure and organization**: Make sure the project has a clean and organized structure, separating concerns and following best practices. This will help students understand how to organize and scale a real-world application.
