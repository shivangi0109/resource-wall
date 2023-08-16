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
  // if (!userId) {
  //   return res.send({ error: "error" });
  // }

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

// router.post('/api/resources', (req, res) => {
//   const { userId, title, description } = req.body;

//   resourceQueries.addResource()
//     .then(resource => {
//       console.log('Resource saved successfully');
//       res.json({ resource });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

module.exports = router;
