/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// Resources Listing Page
router.get('/', (req, res) => {
  console.log("Hello from resources");
  res.render('resources');
});

// Create a new Resource
router.get('/new', (req, res) => {

  console.log('New Resource to create');
  res.send('New Resource to create');
});

// Show one specific resource
router.get('/:id', (req, res) => {
  const resourceId = req.params.id;

  console.log(`Specific resource for specific ${resourceId}`);
  res.send(`Specific resource for specific ${resourceId}`);
});

module.exports = router;
