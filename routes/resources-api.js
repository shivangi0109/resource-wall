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

router.post("/", (req, res) => {
  const userId = req.session.user_id;

  const newResource = req.body;
  newResource.user_id = userId;
  resourceQueries.addResource(newResource)
    .then((resource) => {
      res.redirect('/resources');
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// For search
router.get('/search', (req, res) => {
  const searchText = req.query.q;
  console.log(searchText, "HERE in resources-api");
  resourceQueries.searchResource(searchText)
    .then(searchResults => {
      console.log("Search results in resources-api", searchResults);
      res.json(searchResults);
    });
});

module.exports = router;


// const getUserWithEmail = (email) => {
//   return query(`SELECT * FROM users WHERE email = $1`, [email])
//     .then((result) => {
//       if (!result.rows.length) {
//         return null;
//       }
//       return result.rows[0];
//     });
// };
