import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pool } from './db/config';
const {router} = require('./routes')


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', router)

export {app}
