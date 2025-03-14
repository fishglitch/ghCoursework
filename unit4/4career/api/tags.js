/*
- defines the routes for handling tag-related API requests in an Express.js application
- interacts w/ db via getAllTags, getPostsByTagName
- retrieves tag data and posts related to specific tags
- bridges gap between the database and the API endpoints
- router modularly designed to handle requests related to tags. 
- Each route defined within provides specific functionalities 
that can be easily integrated into the main API by being mounted within the api/index.js file.
*/
const express = require('express');
const tagsRouter = express.Router();

const { 
  getAllTags,
  getPostsByTagName
} = require('../db');

tagsRouter.get('/', async (req, res, next) => {
  try {
    const tags = await getAllTags();
  
    res.send({
      tags
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
  let { tagName } = req.params;
  
  // decode %23happy to #happy
  tagName = decodeURIComponent(tagName)

  try {
    const allPosts = await getPostsByTagName(tagName);

    const posts = allPosts.filter(post => {
      if (post.active) {
        return true;
      }

      if (req.user && req.user.id === post.author.id) {
        return true;
      }

      return false;
    })

    res.send({ posts });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
