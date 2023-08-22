/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const resourceQueries = require('../db/queries/resources');

// New Resource Page
router.get('/new', (req, res) => {

  console.log('New Resource to create');
  res.render('resource-new', { userId: req.session.user_id });
});

// Resources Listings Page
router.get('/', (req, res) => {
  resourceQueries.getResources()
    .then(resources => {
      res.render('resources', { resources, userId: req.session.user_id });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Show one specific resource
router.get('/:id', (req, res) => {
  const resourceId = req.params.id;

  // Get Specific Resource
  resourceQueries.getResourceById(resourceId)
    .then(resource => {
    // Gets Comments
    resourceQueries.getResourceComments(resourceId)
      .then(details => {

        // Gets Ratings
        resourceQueries.getResourceRatings(resourceId)
          .then(ratings => {
            res.render('resource-show', { resource, details, resourceId, ratings, userId: req.session.user_id });
          });
      })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
