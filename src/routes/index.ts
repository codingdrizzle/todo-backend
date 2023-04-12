import express, { Request, Response } from 'express';

const router = express.Router();

import Authentication from './authentication'

Authentication(router);

module.exports = {router}