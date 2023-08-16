const db = require('../connection');

const getResources = () => {
  const resources = db.query('SELECT * FROM resources;');
  return resources
    .then(data => {
      return data.rows;
    });
};

const addResource = (resource) => {
  const { user_id, title, description, resource_url, thumbnail_url } = resource;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO resources (user_id, title, description, resource_url, thumbnail_url) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    [user_id, title, description, resource_url, thumbnail_url])
    .then(data => {
      console.log("Data", data);
      return data.rows[0];
    });
};

module.exports = { getResources, addResource };
