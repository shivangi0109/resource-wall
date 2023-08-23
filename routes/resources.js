/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const resourceQueries = require('../db/queries/resources');
const userQueries = require('../db/queries/users');

// New Resource Page
router.get('/new', (req, res) => {
  res.render('resource-new', { userId: req.session.user_id });
});

// Resources Listings Page
router.get('/', (req, res) => {

  // Get Resources
  resourceQueries.getResources()
    .then(resources => {

    // Get Categories
    resourceQueries.getResourceCategories()
      .then(categories => {

        // Get Average Rating
        resourceQueries.getResourceAverageRatings()
          .then(avgRatings => {
          res.render('resources', { resources, categories, avgRatings, userId: req.session.user_id });
        });
      });
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
  const userId = req.session.user_id;

  // Get Specific Resource
  resourceQueries.getResourceById(resourceId)
    .then(resource => {

      // Gets Category
      resourceQueries.getResourceCategory(resourceId)
        .then(category => {

          // Gets Average Rating
          resourceQueries.getResourceAvgRating(resourceId)
            .then(avgRating => {

              // Gets Comments
              resourceQueries.getResourceComments(resourceId)
                .then(details => {

                  // Gets Ratings
                  resourceQueries.getResourceRatings(resourceId)
                    .then(ratings => {

                      // Get User
                      userQueries.getUserById(userId)
                        .then(user => {

                          resourceQueries.checkIfResourceIsLikedByUser(userId, resourceId)
                          .then(likedByCurrentUser => {
                          res.render('resource-show', { resource, category, avgRating, details, resourceId, ratings, user, likedByCurrentUser, userId: req.session.user_id });
                          });
                      });
                  });
              });
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
