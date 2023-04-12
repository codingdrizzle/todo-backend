import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import winston from 'winston';
import { Pool } from 'pg';

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  winston.info(`Server listening on Port ${PORT}`);
});
