/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const likesQueries = require('../db/queries/likes');

// users should be able to like
router.post("/", (req, res) => {
  const userId = req.session.user_id;
  const resourceId = req.query.resourceId;
  const newLike = req.body;

  newLike.user_id = userId;
  newLike.resource_id = resourceId;
  likesQueries.addLike(newLike)
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
