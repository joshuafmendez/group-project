DROP TABLE IF EXISTS emotions;

CREATE TABLE emotions (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    image BYTEA,
    description TEXT NOT NULL
);

DROP TABLE if EXISTS users;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_password TEXT NOT NULL
);