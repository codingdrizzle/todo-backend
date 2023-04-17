import express, { Request, Response } from 'express';

const router = express.Router();

//import Authentication from './authentication'
import UserRoutes from './user-routes'

//Authentication(router);
UserRoutes(router);

export {router}