const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};

const getUsersResources = (id) => {
  return db.query('SELECT users.*, resources.* FROM users JOIN resources ON users.id = resources.user_id WHERE users.id = $1;', [id])
    .then(data => {
      return data.rows;
    });
};

const getUsersLikedResources = (id) => {
  return db.query(`SELECT resources.* FROM resources JOIN likes ON resources.id = likes.resource_id WHERE likes.user_id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
};

const getUsersResourcesCategories = (id) => {
  return db.query(`SELECT
  users.*,
  resources.*,
  categories.topic AS category_topic
  FROM users
  JOIN resources ON users.id = resources.user_id
  JOIN categories ON resources.category_id = categories.id
  WHERE users.id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
};

const getUsersResourcesAverageRatings = (id) => {
  return db.query(`SELECT
  users.*,
  resources.*,
  FLOOR(AVG(ratings.rating)) as avg_rating
  FROM users
  JOIN resources ON users.id = resources.user_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  WHERE users.id = $1
  GROUP by users.id, resources.id;`, [id])
    .then(data => {
      return data.rows;
    });
};

const editUserProfile = (profileDetails) => {
  const { user_id, email, username, profile_image_url, first_name, last_name, bio } = profileDetails;

  return db.query(`UPDATE users SET email = $1, username = $2, profile_image_url = $3, first_name = $4, last_name = $5, bio = $6 WHERE id = $7;`, [email, username, profile_image_url, first_name, last_name, bio, user_id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUsers, getUserById, getUsersResources, getUsersLikedResources, getUsersResourcesCategories, getUsersResourcesAverageRatings, editUserProfile };
