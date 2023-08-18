const db = require('../connection');

const addLike = (likeDetails) => {
  const { user_id, resource_id } = likeDetails;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO likes (user_id, resource_id) VALUES ($1, $2) RETURNING *;',
    [user_id, resource_id])
    .then(data => {
      console.log("Data", data);
      return data.rows[0];
    });
};

module.exports = { addLike };
