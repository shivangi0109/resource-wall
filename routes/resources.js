/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resources');

// New Resource Page
router.get('/new', (req, res) => {

  console.log('New Resource to create');
  res.render('resource-new');
});

// Resources Listings Page
router.get('/', (req, res) => {
  resourceQueries.getResources()
    .then(resources => {
      res.render('resources', { resources });
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

  resourceQueries.getResourceDetails(resourceId)
  .then(details => {
    console.log("details", details);
    res.render('resource-show', { details, resourceId });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

module.exports = router;
