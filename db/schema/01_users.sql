-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  profile_image_url TEXT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  bio VARCHAR(255)
);