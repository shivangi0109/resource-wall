DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  resource_url TEXT,
  thumbnail_url TEXT,
  created_on TIMESTAMP NOT NULL DEFAULT NOW()
);

-- CREATE TABLE resources (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
--   title VARCHAR(255) NOT NULL,
--   description TEXT NOT NULL,
--   resource_url TEXT NOT NULL,
--   thumbnail_url TEXT NOT NULL,
--   created_on TIMESTAMP NOT NULL DEFAULT NOW()
-- );
