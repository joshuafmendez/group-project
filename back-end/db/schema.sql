DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

DROP TABLE if EXISTS emotions;

CREATE TABLE emotions (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    description TEXT NOT NULL
);