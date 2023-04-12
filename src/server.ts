import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pool } from './db/config';
const router = require('./routes')


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello').end()
});

app.use('/api/v1', router)

app.get('/user', async (req: Request, res: Response) => {
    try {
        const result = await prisma.user.findMany()
        res.json(result);
        console.log(result)
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


export {app}
