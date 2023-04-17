import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {ErrorHandler, ErrorLogger, InvalidUrl   } from './middlewares/error-handler';
const {router} = require('./routes')

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', router)

app.get('/api/v1', (req: Request, res: Response) => {
    res.status(200).json({ code: 200, message: 'Welcome to Todo API 😇, Seems I\'m in good health 🔥🔥🔥'})
})

app.use(ErrorHandler)
app.use(ErrorLogger)
app.use(InvalidUrl)

export {app}