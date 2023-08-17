/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// Simulate user login path
router.get('/login/:id', (req, res) => {
  // using encrypted cookies
  // req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

// Users Listing Page
router.get('/', (req, res) => {
  console.log("Hello from users");
  res.render('users');
});

// View Edit page specific user
router.get('/:id/edit', (req, res) => {
  const userId = req.params.id;

  console.log(`Specific user for specific ${userId}`);
  res.send(`Specific user for specific ${userId}`);
});

module.exports = router;
