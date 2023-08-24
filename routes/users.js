/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');
const resourceQueries = require('../db/queries/resources');

// Simulate user login path
router.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  // res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

// Users Listing Page
router.get('/', (req, res) => {
  res.render('users');
});

// Users Show Page
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  userQueries.getUserById(userId)
    .then(user => {
      res.render('users-show', { user, userId: req.session.user_id });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Users Resources Page
router.get('/:id/my-resources', (req, res) => {
  const userId = req.params.id;

  // Get Users Resources
  userQueries.getUsersResources(userId)
    .then(resources => {

      // Get Users Liked Resources
      userQueries.getUsersLikedResources(userId)
        .then(likedResources => {

          // Get Categories
          userQueries.getUsersResourcesCategories(userId)
          .then(categories => {

            // Get Average Rating
            userQueries.getUsersResourcesAverageRatings(userId)
              .then(avgRatings => {

                // Get Liked Resources Categories
                userQueries.getUsersLikedResourcesCategories(userId)
                  .then(likedResourcesCategories => {

                    // Get Liked Resources Average Rating
                  userQueries.getUsersLikedResourcesAverageRatings(userId)
                    .then(LikedResourcesAvgRatings => {

                      console.log("Liked Resourcs Categories ------------------------->", likedResourcesCategories);
                      res.render('my-resources', { resources, likedResources, categories, avgRatings, likedResourcesCategories, LikedResourcesAvgRatings, userId: req.session.user_id });
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

// View Edit page specific user
router.get('/:id/edit', (req, res) => {
  const userId = req.params.id;

  userQueries.getUserById(userId)
    .then(user => {
      console.log(user);
    res.render('users-edit', { user, userId: req.session.user_id });
    })
});

module.exports = router;
