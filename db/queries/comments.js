const db = require('../connection');

const addComment = (commentDetails) => {
  const { user_id, resource_id, comment } = commentDetails;

  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO comments (user_id, resource_id, comment) VALUES ($1, $2, $3) RETURNING *;',
    [user_id, resource_id, comment])
    .then(data => {
      console.log("Data", data);
      return data.rows[0];
    });
};

module.exports = { addComment };
