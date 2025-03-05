# Block 34 - Juicebox

# Career Simulation Project

Welcome to the Career Simulation Project! This project focuses on repairing and enhancing an existing backend API using Express.js and PostgreSQL, alongside creating a frontend application.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Problems to Solve](#problems-to-solve)
    - [Problem 1: Repair Database Schema](#problem-1-repair-database-schema)
    - [Problem 2: Create a Middleware Function](#problem-2-create-a-middleware-function)
    - [Problem 3: Repair an API Endpoint](#problem-3-repair-an-api-endpoint)
    - [Problem 4: Create a New API Endpoint](#problem-4-create-a-new-api-endpoint)
4. [Stretch Goal](#stretch-goal)
5. [Tech Professional Journal](#tech-professional-journal)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction
This project is aimed at simulating realistic challenges that backend developers face. You'll be improving an API, focusing on database interactions, middleware, and the overall endpoint integrity.

## Getting Started
To begin working on the project:
1. Clone the GitHub repository.
2. Install the required dependencies:
   ```bash
   npm install
   
## Introduction

In this assessment, you'll be provided with this GitHub repository containing details for a fully operational CRUD API that uses Express.js, PostgreSQL, and other technologies that you've been trained on. 

## Problems to Solve

Begin this Career Simulation by cloning the GitHub repository, installing dependencies, providing environmental variables to connect your database, and running the server. From here, you'll encounter four problems that you'll need to solve. See problems below:

### Problem 1: Repair Database Schema

We'll need to seed our database with some data. The database schema is currently broken, so we'll need to fix it. Go to `db/index.js` and fix the `createUser()` function.

### Problem 2: Create a Middleware Function

The function `requireUser` is missing its code. We need it to check if a user is logged in, and if so, attach the user to the request object. Navigate to `api/utils.js` and write the middleware function.

### Problem 3: Repair an API Endpoint

Your endpoint to create new posts is not able to handle "tags" properly. Navigate to `api/posts.js` and find the POST method using the `postsRouter` controller function. Edit it to handle the many "tags" that may be applied to a post.

### Problem 4: Create a New API Endpoint

The DELETE route for posts is currently "under construction." Navigate to `api/posts.js` and find the DELETE method using the `postsRouter` controller function. Write the code to delete a post.

### STRETCH GOAL: Create a Route to Serve Frontend Web App

All of our work so far has been in the API layer and on the database! We need to create a frontend application using HTML, CSS, and JavaScript or `npx create-react-app` to be served by our API. Navigate to `client/index.html` and create a frontend application that can represent our application.

📓 As you work through this assignment, keep your Tech Professional Journal open and ready to record thoughts or lessons learned. Consider the following topics:

- How you overcame challenges during this Career Simulation
- Industry interests or reflections after working more with back end 
- Contributions you made to the project, and lessons learned from that
- Justifications for making certain decisions about features
- How you planned out the project
- Strengths you leveraged during the project
- Ways to improve a weakness
- Experiences building your confidence

## Requirements

1. A project plan using GitHub Projects
2. Functioning RESTful API that satisfies project requirements, consisting of:
   - A repaired PostgreSQL database schema.
   - A repaired Express.js endpoint.
   - A working JSON Web Token, bcrypt authorization, and authentication middleware.
   - One newly created API endpoint (suggest an endpoint to serve the frontend application).
   - The use of one junction table.
   - PostgreSQL with SQL queried tables, rows, and columns.
   - At least one foreign key constraint.
   - Established RESTful endpoints using Express.js.
   - A GET endpoint to render static HTML or React.js single-page application.

## Juicebox Rubric / Criteria
- **Schemas**: Repair PostgreSQL database schema
- **Endpoints**: Repair Express.js endpoint
- **Middleware**: Repair JSON Web Token, bcrypt authorization, and authentication middleware
- **New Endpoints**: Create at least one original API endpoint (suggest endpoint to serve frontend application)
- **Junction Table**: Use of at least one junction table
- **Foreign Key**: Use of at least one foreign key constraint
- **Project Plan**: Build a project plan using GitHub Projects (with a partner or individually)
- **SQL**: Use of PostgreSQL with SQL queried tables, rows, and columns
- **RESTful Endpoints**: Established RESTful endpoints using Express.js
- **SPA**: A GET endpoint to render static HTML or React.js single-page application