import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'mydatabase',
  port: 5432,
});

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('INSERT INTO users (name, email) VALUES ($1, $2)', [
      'John Doe',
      'johndoe@example.com',
    ]);
    await client.query('INSERT INTO users (name, email) VALUES ($1, $2)', [
      'Jane Doe',
      'janedoe@example.com',
    ]);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

seed().then(() => {
  console.log('Seed successful');
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
