# Deployment Guide

## Table of Contents
- [Overview](#overview)
- [Signing Up](#signing-up)
- [Building Your Application for Production](#building-your-application-for-production)
- [App Deployment Guide](#app-deployment-guide)
- [Using Render](#using-render)
- [Errors](#errors)
- [Seed Scripts](#seed-scripts)
- [Secrets](#secrets)
- [Extra Support Videos](#extra-support-videos)

## Overview
To perform software engineering tasks, your machine needs a specific set of tools, technologies, and settings, referred to as your **development environment**. This module will guide you through basic information on setting up your environment for full-stack JavaScript web development.

## Signing Up
To deploy your application, you will use Netlify. To sign up, complete the following steps:

**Note**: If you already have a Netlify account, you can skip to *Building Your Application for Production, Step 3*.

1. Go to Sign up for Netlify.
2. Follow the steps. A homepage displays.

## Building Your Application for Production
3. Examine your `package.json` file to find the build script that builds your application for production.
4. In your terminal, run: 
   ```bash
   npm run build
   ```
5. With Vite, this command builds your application and places it in a `dist` directory in the root of your project. The directory may be grayed out because it’s added to the `.gitignore` file.
6. Locate the `dist` directory on your computer.
7. Return to your Netlify dashboard, and select **new project** > **deploy manually**.
8. Drag your `dist` folder onto the page to deploy your project.

**Note**: Make a note of the URL of your deployed site if you need to submit it later for an assignment.

## App Deployment Guide
To deploy a full-stack app, you need two services:
- A web server
- A database

The web server listens for client requests, responds, and serves files to the frontend application. If the server performs CRUD operations against a database, it needs access to that database via a connection URL.

Continue learning about this process by selecting the Next button in the bottom right, or navigating to one of the following pages:
- Practice: App Deployment Demo
- Create the Database
- Deploy the Web Server

**Alternative Option**: Fly.io App Deployment

A demo application for deploying on Render is provided as a template here: [Demo Application](https://github.com/FullstackAcademy/my_uni_app). The application includes:
- A database
- An Express server
- A static HTML file

To practice deploying this app, create a copy of the repository in your own account and follow the deployment instructions.

## Using Render
To deploy your app:
1. Go to Render and create an account by connecting your GitHub account.
2. Select **New** > **Web Service** from your dashboard.
3. If repositories don’t appear, update your GitHub permissions to allow Render access, or paste the public repo URL.
4. Specify your root folder for the start and build scripts.
5. Ensure that your region matches your database region if hosted on Render.
6. **Build and Start**: Render runs the build and start commands you specify.
   Example build:
   ```bash
   npm i && npm run build
   ```
   Example start:
   ```bash
   node index.js
   ```
7. **Connect your database**: 
   - Add the `DATABASE_URL` as an environment variable in Render.

## Errors
If you encounter an error setting up the database, it often suggests a command to run:
```
fly postgres attach --app my_app_name my_app_name-db
```
Replace `my_app_name` with your actual application name.

## Seed Scripts
If you have seed scripts, add them to the `fly.toml` file:
```toml
[deploy]
  release_command = "npm run seed"
```

## Secrets
Refer to the [Secrets and Fly Apps](https://fly.io/docs/reference/secrets/) documentation to set application secrets.

## Extra Support Videos
Review the videos in [this playlist](https://www.youtube.com/playlist?list=PL... ) for additional web development support.