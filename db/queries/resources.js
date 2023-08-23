const db = require('../connection');

const getResources = () => {
  const resources = db.query('SELECT * FROM resources;');
  return resources
    .then(data => {
      return data.rows;
    });
};

const getResourceById = (id) => {
  return db.query('SELECT * FROM resources WHERE id = $1;', [id])
    .then(data => {
      return data.rows;
    });
};

const getResourceCategory = (id) => {
  return db.query('SELECT categories.topic, resources.* FROM categories JOIN resources ON categories.id = resources.category_id WHERE resources.id = $1;', [id])
    .then(data => {
      return data.rows;
    });
};

const getResourceAvgRating = (id) => {
  return db.query('SELECT resources.*, FLOOR(AVG(ratings.rating)) as avg_rating FROM resources JOIN ratings ON resources.id = ratings.resource_id WHERE resources.id = $1 GROUP by resources.id', [id])
    .then(data => {
      return data.rows;
    });
};

const getResourceCategories = () => {
  const resource = db.query(`SELECT categories.topic, resources.* FROM categories JOIN resources ON categories.id = resources.category_id;`);
  return resource
    .then(data => {
      return data.rows;
    });
};

const getResourceAverageRatings = () => {
  const resource = db.query(`SELECT resources.*, FLOOR(AVG(ratings.rating)) as avg_rating FROM resources JOIN ratings ON resources.id = ratings.resource_id GROUP by resources.id;`);
  return resource
    .then(data => {
      return data.rows;
    });
};

const getResourceComments = (resourceId) => {
  const resource = db.query(`SELECT resources.*, comments.*
  FROM resources
  LEFT JOIN comments ON resources.id = comments.resource_id
  WHERE resources.id = $1;`, [resourceId]);
  return resource
    .then(data => {
      return data.rows;
    });
};

const getResourceRatings = (resourceId) => {
  const resource = db.query(`SELECT resources.*, ratings.*
  FROM resources
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  WHERE resources.id = $1;`, [resourceId]);
  return resource
    .then(data => {
      return data.rows;
    });
};

const addResource = (resource) => {
  const { user_id, title, description, category_id, resource_url, thumbnail_url } = resource;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO resources (user_id, title, description, category_id, resource_url, thumbnail_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',
    [user_id, title, description, category_id, resource_url, thumbnail_url])
    .then(data => {
      return data.rows[0];
    });
};

const searchResource = (searchText) => {
  return db.query(`
  SELECT *
  FROM resources
  WHERE title ILIKE $1 OR description ILIKE $1;`, [`%${searchText}%`])
    .then((result) => {
      return result.rows;
    });
};

module.exports = { getResources, getResourceById, getResourceCategory, getResourceAvgRating, getResourceCategories, getResourceAverageRatings, getResourceComments, getResourceRatings, addResource, searchResource };
