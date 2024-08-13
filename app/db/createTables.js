const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE types (
id SERIAL PRIMARY KEY,
name varchar(15) NOT NULL,
strong_against INTEGER REFERENCES types (id),
weak_against INTEGER REFERENCES types (id)
);

CREATE TABLE region (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL
);

CREATE TABLE pokemon (
no INTEGER PRIMARY KEY,
image VARCHAR,
name VARCHAR,
type INTEGER REFERENCES types (id),
evolution INTEGER REFERENCES pokemon (no)
);

CREATE TABLE trainers (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
pokemon INTEGER REFERENCES pokemon (no),
specialty_type INTEGER REFERENCES types (id)
);

CREATE TABLE gyms (
id SERIAL PRIMARY KEY,
location VARCHAR NOT NULL,
region INTEGER REFERENCES region (id),
gym_leader INTEGER REFERENCES trainers (id)
);
`;

const main = async() => {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();