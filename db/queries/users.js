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
      return data.rows;
    });
};

const getUsersResources = (id) => {
  return db.query('SELECT users.*, resources.* FROM users JOIN resources ON users.id = resources.user_id WHERE users.id = $1;', [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers, getUserById, getUsersResources };
