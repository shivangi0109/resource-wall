/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const ratingQueries = require('../db/queries/ratings');

// users should be able to add a rating
router.post("/", (req, res) => {
  const userId = req.session.user_id;
  const resourceId = req.query.resourceId;
  const newRating = req.body;

  newRating.user_id = userId;
  newRating.resource_id = resourceId;

  ratingQueries.addRating(newRating)
    .then(() => {
      res.redirect(`/resources/${resourceId}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
