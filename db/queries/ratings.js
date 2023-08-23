const db = require('../connection');

const addRating = (ratingDetails) => {
  const { user_id, resource_id, rating } = ratingDetails;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO ratings (user_id, resource_id, rating) VALUES ($1, $2, $3) RETURNING *;',
    [user_id, resource_id, rating])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { addRating };
