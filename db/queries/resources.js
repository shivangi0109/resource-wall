const db = require('../connection');

const getResources = () => {
  return db.query('SELECT * FROM resources;')
    .then(data => {
      return data.rows;
    });
};

const addResource = (resource) => {
  const { user_id, resource_url, title, description } = resource;

  return db.query('INSERT INTO resources (user_id, resource_url, title, description) VALUES ($1, $2, $3, $4) RETURNING *;', [user_id, resource_url, title, description]) // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getResources, addResource };
