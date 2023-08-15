/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// do this instead
router.get('/login/:id', (req, res) => {
  // using encrypted cookies
  // req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

router.get('/', (req, res) => {
  console.log("Hello from users");
  res.render('users');
});

module.exports = router;
