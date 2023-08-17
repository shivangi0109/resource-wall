/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resources');

// Create a new Resource
router.get('/new', (req, res) => {

  console.log('New Resource to create');
  res.render('resource-new');
});

router.get('/', (req, res) => {
  const searchText = req.query.q;
  console.log("HERE in resources.js", searchText);
  console.log("HERE in resources.js", req.query.q);
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

  console.log(`Specific resource for specific ${resourceId}`);
  res.send(`Specific resource for specific ${resourceId}`);
});

module.exports = router;
