import { Pool } from 'pg';
import { dotenv } from '../utils/env-activate';

dotenv()

console.log(process.env.DATABASE_USERNAME)

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    ssl: false, // set to true if using SSL
    max: 20, // maximum number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
});

export { pool }