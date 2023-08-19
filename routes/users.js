/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

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
  console.log("Hello from users");
  res.render('users');
});

// Users Show Page
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  userQueries.getUserById(userId)
    .then(user => {
      console.log(user);
      res.render('users-show', { user });
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

  userQueries.getUsersResources(userId)
    .then(resources => {
      userQueries.getUsersLikedResources(userId)
        .then(likedResources => {
          res.render('my-resources', { resources, likedResources });
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

  console.log(`Specific user for specific ${userId}`);
  res.render('users-edit');
});

module.exports = router;
