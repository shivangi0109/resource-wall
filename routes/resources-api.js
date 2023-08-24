/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resources');

router.get('/', (req, res) => {
  resourceQueries.getResources()
    .then(resources => {
      res.json({ resources });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// users should be able to create a new resource
router.post("/", (req, res) => {
  const userId = req.session.user_id;

  const newResource = req.body;
  newResource.user_id = userId;
  resourceQueries.addResource(newResource)
    .then((resource) => {
      res.redirect('/resources');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// search for already-saved resources created by any user
router.get('/search', (req, res) => {
  const searchText = req.query.q;
  resourceQueries.searchResource(searchText)
    .then(searchResults => {

      resourceQueries.searchResourceToDisplayCategories(searchText)
        .then(searchResultsCategories => {

          resourceQueries.searchResourceToDisplayAverageRatings(searchText)
            .then(searchResultsAverageRatings => {
            console.log(searchResultsAverageRatings);
            res.render('resources-search', { searchResults, searchResultsCategories, searchResultsAverageRatings, userId: req.session.user_id });
            });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
