/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const commentQueries = require('../db/queries/comments');

// users should be able to add a comment
router.post("/", (req, res) => {
  const userId = req.session.user_id;
  const resourceId = req.query.resourceId;

  const newComment = req.body;
  newComment.user_id = userId;
  newComment.resource_id = resourceId;
  commentQueries.addComment(newComment)
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
